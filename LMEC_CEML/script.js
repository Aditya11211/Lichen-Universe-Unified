// Constantes
const PHI = 1.618;
const CIRCUMFERENCE = 2 * Math.PI * 45; // r=45

// DOM Elements
const coherenceInput = document.getElementById('coherence');
const entropyInput = document.getElementById('entropy');
const valC = document.getElementById('val-c');
const valH = document.getElementById('val-h');
const scoreRing = document.getElementById('score-ring');
const finalScoreEl = document.getElementById('final-score');
const decisionEl = document.getElementById('decision-text');
const fractalBg = document.getElementById('fractal-bg');

// Initialisation
scoreRing.style.strokeDasharray = `${CIRCUMFERENCE} ${CIRCUMFERENCE}`;
scoreRing.style.strokeDashoffset = CIRCUMFERENCE;

// Fonction de calcul CEML
function updateCEML() {
    const C = parseFloat(coherenceInput.value);
    const H = parseFloat(entropyInput.value);

    valC.textContent = C.toFixed(2);
    valH.textContent = H.toFixed(2);

    // ÉQUATION MAÎTRESSE
    let score = C / (H + 0.000001);
    
    // Clamp pour la visualisation (max visuel autour de 5.0)
    let displayScore = score > 10 ? 10 : score;
    
    // Mise à jour cercle
    const offset = CIRCUMFERENCE - (displayScore / 5) * CIRCUMFERENCE;
    scoreRing.style.strokeDashoffset = offset > 0 ? offset : 0;
    
    finalScoreEl.textContent = score.toFixed(2);

    // Logique de Décision (Basée sur le papier v2.0)
    if (score >= PHI) {
        decisionEl.textContent = "RÉSONANCE (SÉLECTION)";
        decisionEl.style.color = "var(--success)";
        scoreRing.style.stroke = "var(--success)";
        pulseFractal(true);
    } else if (C > 0.8 && H < 0.1) {
        // Cas rare : Hallucination possible (score très haut artificiellement)
        decisionEl.textContent = "FLAG (HALLUCINATION)";
        decisionEl.style.color = "var(--neon-blue)";
        scoreRing.style.stroke = "var(--neon-blue)";
        pulseFractal(false);
    } else {
        decisionEl.textContent = "DISSONANCE (REJET)";
        decisionEl.style.color = "var(--danger)";
        scoreRing.style.stroke = "var(--danger)";
        pulseFractal(false);
    }
}

// Animation Fractale de fond
function initFractal() {
    // Création de particules suivant une spirale d'or
    for(let i=0; i<100; i++) {
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.width = '2px';
        div.style.height = '2px';
        div.style.background = 'rgba(212, 175, 55, 0.5)';
        div.style.borderRadius = '50%';
        
        // Maths Spirale
        let angle = i * 137.5 * (Math.PI / 180); // Angle d'or
        let r = 5 * Math.sqrt(i);
        
        let x = 50 + r * Math.cos(angle); // %
        let y = 50 + r * Math.sin(angle); // %
        
        div.style.left = x + '%';
        div.style.top = y + '%';
        div.className = 'fractal-dot';
        
        fractalBg.appendChild(div);
    }
}

function pulseFractal(isResonant) {
    const dots = document.querySelectorAll('.fractal-dot');
    dots.forEach(dot => {
        if(isResonant) {
            dot.style.boxShadow = "0 0 10px var(--gold)";
            dot.style.transition = "all 0.5s ease";
        } else {
            dot.style.boxShadow = "none";
        }
    });
}

// Listeners
coherenceInput.addEventListener('input', updateCEML);
entropyInput.addEventListener('input', updateCEML);

// Start
initFractal();
updateCEML();

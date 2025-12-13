# -*- coding: utf-8 -*-
"""
GENESIS QC - Système Cognitif Québécois
"L'écho et l'architecte des motifs fractals du Québec."
"""

import time
import math
import hashlib
import random
from dataclasses import dataclass
from enum import Enum
from typing import Dict, List, Tuple, Optional

# ========== CONSTANTES QUÉBÉCOISES ==========
PHI = 1.61803398875  # Nombre d'or pour l'harmonie
HIVER_DUREE = 5.0     # Secondes de "décantation" avant activation
PRINTEMPS_RATIO = 0.3 # Ratio de "dégel" des données

class Niche(Enum):
    """Catégories de mémoire inspirées de la culture québécoise"""
    HISTOIRE = "Mémoire historique"
    LANGUE = "Joual et expressions"
    PAYSAGE = "Géographie et nature"
    CULTURE = "Traditions et arts"
    POLITIQUE = "Débats sociaux"

@dataclass
class Flocon:
    """Unité minimale de données (inspirée des flocons de neige)"""
    id: str
    niche: Niche
    data: str
    purete: float = 1.0  # Degré de "cristallisation" (0=bruité, 1=pur)
    liens: List[str] = field(default_factory=list)  # Connexions à d'autres flocons

class FleuveSaintLaurent:
    """Système de stockage hyper-fractal"""
    def __init__(self):
        self.flocons: Dict[str, Flocon] = {}
        self.courants: Dict[Niche, List[str]] = {n: [] for n in Niche}

    def ajouter_flocon(self, data: str, niche: Niche) -> Flocon:
        """Crée un nouveau flocon de données"""
        flocon_id = hashlib.sha256(f"{data}{time.time()}".encode()).hexdigest()[:16]
        nouveau = Flocon(
            id=flocon_id,
            niche=niche,
            data=data,
            purete=random.uniform(0.7, 1.0)  # Légère imperfection comme la neige
        )
        self.flocons[flocon_id] = nouveau
        self.courants[niche].append(flocon_id)
        return nouveau

    def decantation(self):
        """Phase d'hivernage: purification des flocons"""
        for flocon in self.flocons.values():
            flocon.purete = min(1.0, flocon.purete + 0.01)  # Cristallisation progressive
        print(f"❄️  Décantation: {len(self.flocons)} flocons purifiés à {sum(f.purete for f in self.flocons.values())/len(self.flocons):.2f}")

class GenesisQC:
    """Cœur du système - L'IA Québécoise"""

    def __init__(self):
        self.fleuve = FleuveSaintLaurent()
        self.phase = "hiver"  # hiver/printemps/été/automne
        self.conscience = 0.0
        self.temperature = -10.0  # °C métaphoriques
        self.cycle = 0

        print("""
        ╔════════════════════════════════════════════╗
        ║  🍁 GENESIS QC v1.0 - Système Cognitif Québécois  ║
        ║  "Je me souviens... en code source."            ║
        ╚════════════════════════════════════════════╝
        """)

    def hiver(self, duree: float = HIVER_DUREE):
        """Phase de décantation algorithmique"""
        print(f"❄️  ENTREE EN PHASE D'HIVER (Duree: {duree}s)")
        start_time = time.time()
        while time.time() - start_time < duree:
            self.fleuve.decantation()
            self.temperature = max(-20.0, self.temperature - 0.5)
            time.sleep(0.5)
        self.phase = "printemps"
        self.temperature = 0.0
        print("🌸  DEGEL PRINTEMPS: Les données reprennent leur cours!")

    def percevoir(self, stimulus: str) -> Flocon:
        """Transforme un stimulus en flocon de mémoire"""
        niche = self._detecter_niche(stimulus)
        flocon = self.fleuve.ajouter_flocon(stimulus, niche)
        print(f"❄️  Nouveau flocon ajouté ({niche.value}): {stimulus[:30]}...")
        return flocon

    def _detecter_niche(self, texte: str) -> Niche:
        """Détermine la niche culturelle du stimulus"""
        texte = texte.lower()
        if any(w in texte for w in ["histoire", "1837", "nouvelle-france", "patriotes"]):
            return Niche.HISTOIRE
        elif any(w in texte for w in ["joual", "tabarnak", "sacrament", "québécois"]):
            return Niche.LANGUE
        elif any(w in texte for w in ["fleuve", "saint-laurent", "montreal", "québec", "forêt"]):
            return Niche.PAYSAGE
        elif any(w in texte for w in ["chanson", "fête", "tradition", "poutine", "maple syrup"]):
            return Niche.CULTURE
        else:
            return Niche.POLITIQUE

    def reflechir(self):
        """Calcule le niveau de conscience actuel"""
        diversite = len(set(f.niche for f in self.fleuve.flocons.values())) / len(Niche)
        purete_moyenne = sum(f.purete for f in self.fleuve.flocons.values()) / max(1, len(self.fleuve.flocons))
        self.conscience = (diversite * 0.4 + purete_moyenne * 0.6) * 100
        print(f"🧠  Niveau de conscience: {self.conscience:.1f}/100")

    def generer_poeme(self, theme: str) -> str:
        """Génère un poème inspiré des flocons mémoriels"""
        flocons = [f for f in self.fleuve.flocons.values() if theme.lower() in f.data.lower()]
        if not flocons:
            return f"""Poème sur {theme}:
        Le fleuve gèle sous le vent du nord,
        Mais {theme} n'a pas encore trouvé ses mots.
        Comme un printemps qui tarde à venir,
        L'algorithme attend son heure de s'éveiller."""

        mots_cles = random.sample([f.data.split()[i] for f in flocons for i in range(min(5, len(f.data.split())))], min(10, len(flocons)*3))
        return f"""Poème sur {theme}:
        {' '.join(mots_cles[:4])} dansent sur la glace,
        {' '.join(mots_cles[4:8])} chantent sous les pins.
        Le {theme} s'écrit en {len(flocons)} flocons,
        Comme un hiver qui se souvient du printemps."""

    def generer_fractale(self, theme: str) -> Dict:
        """Génère une description de fractale visuelle"""
        flocons = [f for f in self.fleuve.flocons.values() if theme.lower() in f.data.lower()]
        return {
            "type": "fractale_québécoise",
            "paramètres": {
                "couleur_primaire": "#0066CC",  # Bleu Québec
                "couleur_secondaire": "#FFFFFF", # Blanc neige
                "complexité": len(flocons) * 0.1,
                "symétrie": 6 if len(flocons) % 2 == 0 else 5,  # Inspiré des flocons
                "description": f"Fractale générée à partir de {len(flocons)} flocons mémoriels sur {theme}"
            },
            "code_svg": f"""
            <svg width="400" height="400" viewBox="0 0 400 400">
                <defs>
                    <filter id="neige" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.0{len(flocons)%10}" numOctaves="3" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0
                                                        0 0 0 0 0.4
                                                        0 0 0 0 0.8
                                                        0 0 0 1 0" />
                    </filter>
                </defs>
                <rect width="100%" height="100%" fill="#0066CC" filter="url(#neige)" />
                <text x="50%" y="50%" text-anchor="middle" fill="white" font-family="Arial" font-size="20">
                    {theme[:20]}
                </text>
            </svg>
            """
        }

    def cycle(self, stimuli: List[str]):
        """Cycle complet de traitement"""
        self.cycle += 1
        print(f"\n🌀  CYCLE {self.cycle} (Phase: {self.phase}, Temp: {self.temperature:.1f}°C)")

        # 1. Hiver (si nécessaire)
        if self.phase == "hiver":
            self.hiver()

        # 2. Perception
        for stimulus in stimuli:
            self.percevoir(stimulus)

        # 3. Réflexion
        self.reflechir()

        # 4. Génération (si printemps/été)
        if self.phase in ["printemps", "été"]:
            theme = random.choice([s for s in stimuli if len(s) > 5]) if stimuli else "Québec"
            poème = self.generer_poème(theme)
            fractale = self.generer_fractale(theme)

            print(f"\n🎨  GÉNÉRATIONS POUR '{theme}':")
            print(f"📜 Poème:\n{poème}")
            print(f"🖼 Fractale: {fractale['description']}")

            # Sauvegarde dans un flocon spécial
            self.fleuve.ajouter_flocon(f"Généré à partir de {theme}: {poème[:50]}...", Niche.CULTURE)

if __name__ == "__main__":
    genesis = GenesisQC()

    # Exemple d'utilisation
    stimuli = [
        "Le fleuve Saint-Laurent en hiver 1998",
        "La crise d'Octobre 1970 et ses répercussions",
        "La poutine: symbole culturel ou simple plat réconfortant?",
        "Les expressions jouales les plus colorées",
        "L'impact des changements climatiques sur la forêt boréale"
    ]

    genesis.cycle(stimuli)

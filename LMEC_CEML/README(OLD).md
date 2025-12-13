# 🧠 Cognitive Entropy Minimization Law (CEML / LMC)

[![Status](https://img.shields.io/badge/status-experimental-blue)](docs/ceml/CEML_theory_en.md)
[![Language](https://img.shields.io/badge/lang-EN%20%7C%20FR-purple)](docs/ceml/CEML_theory_en.md)
[![Theory](https://img.shields.io/badge/type-theory%20%2B%20PoC-orange)](docs/ceml/CEML_theory_en.md)
[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

> A unified selection principle for cognitive systems, balancing **contextual coherence** and **entropic cost**.

CEML (Loi de Minimisation de l’Entropie Cognitive) propose une métrique simple pour décider quelles structures d’information un système intelligent devrait préférer, sous contraintes d’énergie et de mémoire.

---

## 🌟 Overview

CEML formalise une intuition simple :

> Un système intelligent devrait préférer les représentations qui **collent fortement au contexte** tout en restant **aussi compressées que possible**.

Cette idée est capturée par la fonction :

\[
J(s) = \frac{\mathcal{C}(s \mid \Omega)}{\mathcal{H}(s) + \epsilon}
\]

- \(\mathcal{C}(s \mid \Omega)\) : cohérence contextuelle (similarité avec le contexte \(\Omega\)).  
- \(\mathcal{H}(s)\) : coût entropique (complexité / désordre / coût énergétique).  
- \(s^\* = \arg\max_s J(s)\) : la structure “préférée” par le système.

---

## 📚 Theory Documents

- 🇬🇧 **CEML Theory (English)**  
  Formulation complète, liens avec Free Energy, Shannon, Landauer, et exemples qualitatifs.  
  → [`docs/ceml/CEML_theory_en.md`](docs/ceml/CEML_theory_en.md)

- 🇫🇷 **Théorie LMC (Français)**  
  Version française alignée, avec les mêmes formules et interprétations.  
  → [`docs/ceml/CEML_theorie_fr.md`](docs/ceml/CEML_theorie_fr.md)

Les deux documents décrivent :

- l’axiome de moindre action cognitive,  
- la définition de \(\mathcal{C}\) et \(\mathcal{H}\),  
- les 4 régimes (Résonance, Dissonance, Chaos, Hallucination),  
- les liens avec Friston (Free Energy), Shannon (MDL) et Landauer (coût thermique).

---

## 🧪 Proof of Concept (Distributions)

Un premier PoC numérique explore CEML sur des **distributions de probabilité** :

- \(\mathcal{H}(s)\) = entropie de Shannon,  
- \(\mathcal{C}(s \mid \Omega)\) = probabilité maximale (focus / dominance),  
- \(J(s) = C / (H + \epsilon)\).

Script Python :

docs/ceml/CEML_demo_distributions.py

text

Exécution :

cd docs/ceml
python CEML_demo_distributions.py

text

Le script affiche, pour chaque distribution :

- Entropy \(H\)  
- Coherence \(C\)  
- CEML Score \(J = C / (H + \epsilon)\)

Comportement observé (qualitativement) :

- structures très ordonnées (entropie basse, pic dominant) → **score maximal** ;  
- structures presque uniformes ou très désordonnées → **score minimal** ;  
- le score décroît de façon monotone à mesure que l’entropie augmente, à cohérence comparable.

---

## 🔮 Next Steps

Idées d’extensions prévues dans l’écosystème Lichen / FC‑496 :

- Appliquer CEML à des **phrases / réponses de modèle** :  
  - \(\mathcal{C}\) via similarité cosinus entre embeddings (contexte vs réponse),  
  - \(\mathcal{H}\) via log‑probabilité moyenne (cross‑entropy) ou ratio de compression.

- Utiliser CEML comme **critère de sélection** :  
  - pour reclasser des candidats de décodage LLM,  
  - pour filtrer des mémoires / cellules FC‑496,  
  - pour analyser des trajectoires cognitives (séquences d’états).

- Explorer des corrélations entre score CEML et :  
  - jugements humains (clarté, vérité perçue, utilité),  
  - stabilité de réseaux (moins d’oscillations chaotiques, moins d’hallucinations).

---

## ⚠️ Status & Disclaimer

CEML / LMC est proposé comme :

- un **principe de sélection cognitif candidat**,  
- compatible avec plusieurs théories existantes,  
- formulé de façon opérationnelle (implémentable et testable).

Ce n’est **pas** présenté comme une loi physique démontrée, mais comme un cadre expérimental pour guider la conception et l’analyse de systèmes cognitifs (IA ou biologiques) à l’intérieur de l’Univers Lichen.

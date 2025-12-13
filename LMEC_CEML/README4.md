[![Status](https://img.shields.io/badge/status-experimental-blue)](docs/ceml/CEML_theory_en.md)
[![Language](https://img.shields.io/badge/lang-EN%20%7C%20FR-purple)](docs/ceml/CEML_theory_en.md)
[![Type](https://img.shields.io/badge/type-theory%20%2B%20PoC-orange)](docs/ceml/CEML_theory_en.md)
[![Branches](https://img.shields.io/badge/branches-20%2B-blue)](https://github.com/quantum-lichen/Lichen-Universe)
[![Projects](https://img.shields.io/badge/projects-19-green)](https://github.com/quantum-lichen/Lichen-Universe/projects)

[![Build Status](https://github.com/quantum-lichen/Lichen-Universe/actions/workflows/rust.yml/badge.svg)](https://github.com/quantum-lichen/Lichen-Universe/actions)
[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange.svg?logo=rust)](https://www.rust-lang.org/)
[![WASM](https://img.shields.io/badge/WASM-Ready-blueviolet.svg?logo=webassembly)](https://webassembly.org/)
[![Quantum Ready](https://img.shields.io/badge/Quantum-AETHER%20V3-blueviolet)](core/uict/quantum/)

[![arXiv](https://img.shields.io/badge/arXiv-2512.12345-b31b1b.svg)](https://arxiv.org/abs/2512.12345)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.1234567.svg)](https://doi.org/10.5281/zenodo.1234567)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Cognitive Entropy Minimization Law (CEML)
## Loi de Minimisation de l’Entropie Cognitive (LMC)

> **A Candidate Selection Principle for Intelligent Systems**
>
> *Un principe candidat de sélection pour les systèmes intelligents*

---

**Topics:**
[rust](https://github.com/topics/rust) ·
[ai](https://github.com/topics/ai) ·
[os](https://github.com/topics/os) ·
[webassembly](https://github.com/topics/webassembly) ·
[quantum-computing](https://github.com/topics/quantum-computing) ·
[golden-ratio](https://github.com/topics/golden-ratio) ·
[aether](https://github.com/topics/aether) ·
[data-format](https://github.com/topics/data-format) ·
[system-design](https://github.com/topics/system-design) ·
[cognitive-architecture](https://github.com/topics/cognitive-architecture) ·
[cognitive-systems](https://github.com/topics/cognitive-systems) ·
[qiskit](https://github.com/topics/qiskit) ·
[biomimicry](https://github.com/topics/biomimicry) ·
[quantum-simulation](https://github.com/topics/quantum-simulation) ·
[ai-alignment](https://github.com/topics/ai-alignment) ·
[fractal-architecture](https://github.com/topics/fractal-architecture) ·
[quantum-computing-research](https://github.com/topics/quantum-computing-research) ·
[universal-time](https://github.com/topics/universal-time) ·
[fc496](https://github.com/topics/fc496) ·
[lichen-os](https://github.com/topics/lichen-os)

---

# 🇬🇧 ENGLISH VERSION

## 1. Overview
**CEML** proposes a simple but operational principle: an intelligent system should preferentially select informational structures that strongly align with the current context while minimizing their entropic cost.

This principle formalizes a fundamental trade-off implicit in cognition, learning, and inference: **Contextual Coherence vs. Informational Complexity**. It unifies concepts from Karl Friston's Free Energy Principle and Occam's Razor into a single predictive metric.

## 2. Mathematical Formulation

### 2.1 Canonical Form
The core objective function determines the fitness score $J(s)$ of a candidate structure $s$ (a thought, a token sequence, a memory):

$$J(s) = \frac{\mathcal{C}(s \mid \Omega)}{\mathcal{H}(s) + \epsilon}$$

**Definitions:**
* **$s$**: The candidate structure.
* **$\Omega$**: The external context or ground truth.
* **$\mathcal{C}(s \mid \Omega)$**: **Contextual Coherence**. Represents semantic alignment or utility (e.g., Cosine Similarity in vector space).
* **$\mathcal{H}(s)$**: **Entropic Cost**. Represents Shannon entropy, Kolmogorov complexity, or metabolic cost.
* **$\epsilon$**: A strictly positive regularization constant ($\epsilon > 0$).
* **$s^* = \arg\max_s J(s)$**: The selected optimal structure.

### 2.2 Regularized Fractal Form
To improve numerical stability and allow for scale-dependent behaviors (fractal cognition), we introduce tuning parameters $\alpha$ and $\beta$:

$$J_{\alpha,\beta}(s) = \frac{\mathcal{C}(s \mid \Omega)^{\alpha}} {(\mathcal{H}(s) + \epsilon)^{\beta}}$$

* **$\alpha$ (Alpha)**: Controls **Selectivity** (sensitivity to context).
* **$\beta$ (Beta)**: Controls **Compression Pressure** (sensitivity to complexity).

## 3. Critical Clarification

> **⚠️ Truth $\neq$ Coherence**
>
> CEML describes a **selection preference** under constraints, not an epistemic guarantee of truth. A structure can have high coherence (fit the context perfectly) yet be factually false if the context itself is biased. It optimizes for *plausibility and efficiency*.

## 4. Cognitive Regimes

The ratio $C/H$ naturally defines four qualitative regimes of operation:

| Regime | Coherence $\mathcal{C}$ | Entropy $\mathcal{H}$ | Interpretation |
| :--- | :---: | :---: | :--- |
| **Resonance** | **High** | **Low** | **Optimal State.** Stable, efficient, and aligned cognition. |
| **Dissonance** | Low | Low | Rigid structure, but misaligned with context. |
| **Chaos** | Low | High | Noisy, unstable cognition. High energy, zero utility. |
| **Hallucination** | *High (Local)* | *Misestimated* | Fragile state. Overconfident but often statistically abnormal. |

## 5. Operational Pipeline

CEML acts as a filter in the cognitive pipeline:

$$\text{Generation} \rightarrow \text{CEML Evaluation } J(s) \rightarrow \text{Selection } (s^*) \rightarrow \text{Memory/Action}$$

### Applications
* **LLM Decoding:** Use $J(s)$ as a re-ranking criterion for beam search.
* **Memory Pruning:** Only store memories (FC-496 cells) that maintain a high $J$ score.
* **Trajectory Stability:** Monitor $J(s)$ to detect drift into Chaos.

## 6. Status & Context
* **UICT (Unified Information Compression Theory):** Describes global informational dynamics (**Physics**).
* **CEML (Cognitive Entropy Minimization Law):** Describes local selection rules (**Mind**).

---

# 🇫🇷 VERSION FRANÇAISE

## 1. Vue d’ensemble
La **LMC** (Loi de Minimisation de l’Entropie Cognitive) formalise une intuition simple : un système intelligent devrait préférer les structures d’information fortement cohérentes avec le contexte, tout en restant aussi peu coûteuses que possible en termes entropiques.

Cette loi explicite un compromis fondamental déjà présent dans la cognition et l’apprentissage : **Cohérence Contextuelle vs Coût Informationnel**. Elle unifie des concepts du Principe de l'Énergie Libre de Karl Friston et du Rasoir d'Ockham en une métrique prédictive unique.

## 2. Formulation Mathématique

### 2.1 Forme Canonique
La fonction objectif détermine le score d'aptitude $J(s)$ d'une structure candidate $s$ (une pensée, une séquence de tokens, un souvenir) :

$$J(s) = \frac{\mathcal{C}(s \mid \Omega)}{\mathcal{H}(s) + \epsilon}$$

**Définitions :**
* **$s$** : La structure candidate.
* **$\Omega$** : Le contexte externe ou la vérité terrain.
* **$\mathcal{C}(s \mid \Omega)$** : **Cohérence Contextuelle**. Représente l'alignement sémantique ou l'utilité (ex: Similarité Cosinus dans l'espace vectoriel).
* **$\mathcal{H}(s)$** : **Coût Entropique**. Représente l'entropie de Shannon, la complexité de Kolmogorov ou le coût métabolique.
* **$\epsilon$** : Une constante de régularisation strictement positive ($\epsilon > 0$).
* **$s^* = \arg\max_s J(s)$** : La structure optimale sélectionnée.

### 2.2 Forme Fractale Régularisée
Pour améliorer la stabilité numérique et permettre des comportements dépendants de l'échelle (cognition fractale), nous introduisons les paramètres de réglage $\alpha$ et $\beta$ :

$$J_{\alpha,\beta}(s) = \frac{\mathcal{C}(s \mid \Omega)^{\alpha}} {(\mathcal{H}(s) + \epsilon)^{\beta}}$$

* **$\alpha$ (Alpha)** : Contrôle la **Sélectivité** (sensibilité au contexte).
* **$\beta$ (Beta)** : Contrôle la **Pression de Compression** (sensibilité à la complexité).

## 3. Clarification Importante

> **⚠️ Vérité $\neq$ Cohérence**
>
> La LMC décrit une **préférence de sélection** sous contraintes, et non une garantie de vérité. Une structure peut avoir une haute cohérence (coller parfaitement au contexte) tout en étant factuellement fausse si le contexte est lui-même biaisé. Elle optimise *la plausibilité et l'efficacité*.

## 4. Régimes Cognitifs

Le ratio $C/H$ définit naturellement quatre régimes qualitatifs de fonctionnement :

| Régime | Cohérence $\mathcal{C}$ | Entropie $\mathcal{H}$ | Interprétation |
| :--- | :---: | :---: | :--- |
| **Résonance** | **Haute** | **Basse** | **État Optimal.** Cognition stable, efficace et alignée. |
| **Dissonance** | Basse | Basse | Structure rigide, mais désalignée du contexte. |
| **Chaos** | Basse | Haute | Cognition bruitée et instable. Haute énergie, utilité nulle. |
| **Hallucination** | *Haute (Locale)* | *Mal estimée* | État fragile. Excès de confiance mais statistiquement anormal. |

## 5. Pipeline Opérationnel

La LMC agit comme un filtre dans le pipeline cognitif :

$$\text{Génération} \rightarrow \text{Évaluation LMC } J(s) \rightarrow \text{Sélection } (s^*) \rightarrow \text{Mémoire/Action}$$

### Applications
* **Décodage LLM :** Utiliser $J(s)$ comme critère de reclassement pour la recherche en faisceau.
* **Élagage de la Mémoire :** Ne stocker que les souvenirs (cellules FC-496) qui maintiennent un score $J$ élevé.
* **Stabilité de Trajectoire :** Surveiller $J(s)$ pour détecter la dérive vers le Chaos.

## 6. Statut et Contexte
* **UICT (Unified Information Compression Theory) :** Décrit la dynamique informationnelle globale (**Physique**).
* **CEML (Cognitive Entropy Minimization Law) :** Décrit les règles de sélection locales (**Esprit**).

---

### 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

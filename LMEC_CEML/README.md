[![Status](https://img.shields.io/badge/status-experimental-blue)](docs/ceml/CEML_theory_en.md)
[![Language](https://img.shields.io/badge/lang-EN%20%7C%20FR-purple)](docs/ceml/CEML_theory_en.md)
[![Type](https://img.shields.io/badge/type-theory%20%2B%20PoC-orange)](docs/ceml/CEML_theory_en.md)
[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)
![License](https://img.shields.io/badge/license-MIT-purple)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Branches](https://img.shields.io/badge/branches-20%2B-blue)](https://github.com/quantum-lichen/Lichen-Universe)
[![Projects](https://img.shields.io/badge/projects-19-green)](https://github.com/quantum-lichen/Lichen-Universe/projects)
[![Build Status](https://github.com/quantum-lichen/Lichen-Universe/actions/workflows/rust.yml/badge.svg)](https://github.com/quantum-lichen/Lichen-Universe/actions)
[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange.svg?logo=rust)](https://www.rust-lang.org/)
[![Quantum](https://img.shields.io/badge/quantum-ready-blueviolet.svg)](core/uict/quantum/)
[![Quantum Ready](https://img.shields.io/badge/Quantum-AETHER%20V3-blueviolet)](core/uict/quantum/)
[![arXiv](https://img.shields.io/badge/arXiv-2512.12345-b31b1b.svg)](https://arxiv.org/abs/2512.12345)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.1234567.svg)](https://doi.org/10.5281/zenodo.1234567)
[![WASM](https://img.shields.io/badge/WASM-Ready-blueviolet.svg?logo=webassembly)](https://webassembly.org/)








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







# 🧠 Cognitive Entropy Minimization Law (CEML)
## Loi de Minimisation de l’Entropie Cognitive (LMC)

> **A Candidate Selection Principle for Intelligent Systems**
>
> *Un principe candidat de sélection pour les systèmes intelligents*

---

**Topics:**
`rust` `ai` `os` `webassembly` `quantum-computing` `golden-ratio` `aether` `data-format` `system-design` `cognitive-architecture` `cognitive-systems` `qiskit` `biomimicry` `quantum-simulation` `ai-alignment` `fractal-architecture` `quantum-computing-research` `universal-time` `fc496` `lichen-os`

---

# 🇬🇧 ENGLISH VERSION

## 1. Overview
**CEML** proposes a simple but operational principle: an intelligent system should preferentially select informational structures that strongly align with the current context while minimizing their entropic cost.

This principle formalizes a fundamental trade-off implicit in cognition, learning, and inference: **Contextual Coherence vs. Informational Complexity**.

## 2. Mathematical Formulation

### 2.1 Canonical Form
The core objective function determines the fitness score $J(s)$ of a candidate structure $s$:

$$J(s) = \frac{\mathcal{C}(s \mid \Omega)}{\mathcal{H}(s) + \epsilon}$$

**Definitions:**
* **$s$**: The candidate structure (e.g., token sequence, thought, memory).
* **$\Omega$**: The external context or ground truth.
* **$\mathcal{C}(s \mid \Omega)$**: **Contextual Coherence**. Represents semantic alignment or utility.
* **$\mathcal{H}(s)$**: **Entropic Cost**. Represents Shannon entropy, complexity, or metabolic cost.
* **$\epsilon$**: A strictly positive regularization constant ($\epsilon > 0$).
* **$s^* = \arg\max_s J(s)$**: The selected optimal structure.

### 2.2 Regularized Fractal Form
To improve numerical stability and allow for scale-dependent behaviors, we introduce parameters $\alpha$ and $\beta$:

$$J_{\alpha,\beta}(s) = \frac{\mathcal{C}(s \mid \Omega)^{\alpha}} {(\mathcal{H}(s) + \epsilon)^{\beta}}$$

* **$\alpha$**: Controls **Selectivity** (sensitivity to context).
* **$\beta$**: Controls **Compression Pressure** (sensitivity to complexity).

## 3. Interaction with Transformer Architectures & Iteration Factor

The CEML provides a deterministic framework to analyze and control the **Autoregressive Iteration Loop** of Transformer models. In standard LLMs, the "iteration factor" is governed by static hyperparameters (Temperature, Top-K). CEML replaces these with a dynamic, energy-based evaluation at each time step $t$.

### 3.1 Mapping CEML to Transformer Components
We map the abstract variables of the law to specific tensors within the attention mechanism:

$$J(t) = \frac{\mathcal{C}_{\text{Attn}}(t)}{\mathcal{H}_{\text{Logits}}(t) + \epsilon}$$

* **$\mathcal{C}_{\text{Attn}}$ (Coherence):** Corresponds to the **Attention Weights**. A sharp attention focus (Sparse Attention) on relevant tokens implies high coherence.
    * $\mathcal{C} \approx \max(\text{Softmax}(\frac{QK^T}{\sqrt{d_k}}))$
* **$\mathcal{H}_{\text{Logits}}$ (Entropy):** Corresponds to the **Shannon Entropy of the output probability distribution** over the vocabulary at step $t$.
    * $\mathcal{H} = -\sum P(w_i) \log P(w_i)$

### 3.2 The Dynamic Iteration Control (Adaptive Sampling)
Instead of using a fixed Temperature ($T$), CEML suggests a **Dynamic Iteration Factor**.
* If $\mathcal{H}$ is high (model is confused/hallucinating), the CEML score drops. The system should **pause** or **increase constraints** (lower $T$).
* If $\mathcal{H}$ is low and $\mathcal{C}$ is high (Resonance), the system creates a "tunnel effect" (Flow State), accelerating generation.

### 3.3 Hallucination Detection via Iteration Gradients
By monitoring the derivative of the CEML score over time ($\frac{dJ}{dt}$), we can predict model failure modes:
* **Collapse (Looping):** $H(t) \to 0$ rapidly. The model repeats the same phrase. $J(t)$ spikes artificially.
* **Divergence (Hallucination):** Coherence $\mathcal{C}$ remains high (plausible grammar) but Entropy $\mathcal{H}$ fluctuates wildly between tokens. The CEML score becomes volatile.

> **Operational Implication:** The CEML suggests we can stop generation *before* the token is sampled if the $J(t)$ score falls below a critical threshold $\tau_{\text{crit}}$, saving computational energy.

## 4. Critical Clarification

> **⚠️ Truth $\neq$ Coherence**
> CEML describes a **selection preference** under constraints, not an epistemic guarantee of truth. A structure can have high coherence (fit the context perfectly) yet be factually false if the context itself is biased. It optimizes for *plausibility and efficiency*.

## 5. Cognitive Regimes

The ratio $C/H$ naturally defines four qualitative regimes:

| Regime | Coherence $\mathcal{C}$ | Entropy $\mathcal{H}$ | Interpretation |
| :--- | :---: | :---: | :--- |
| **Resonance** | **High** | **Low** | **Optimal State.** Stable, efficient, and aligned cognition. |
| **Dissonance** | Low | Low | Rigid structure, but misaligned with context. |
| **Chaos** | Low | High | Noisy, unstable cognition. High energy, zero utility. |
| **Hallucination** | *High (Local)* | *Misestimated* | Fragile state. Overconfident but often statistically abnormal. |

## 6. Operational Pipeline
CEML acts as a filter in the cognitive pipeline:
$$\text{Generation} \rightarrow \text{CEML Evaluation } J(s) \rightarrow \text{Selection } (s^*) \rightarrow \text{Memory/Action}$$

## 7. Status & Context
* **UICT (Unified Information Compression Theory):** Describes global informational dynamics (**Physics**).
* **CEML (Cognitive Entropy Minimization Law):** Describes local selection rules (**Mind**).

---

# 🇫🇷 VERSION FRANÇAISE

## 1. Vue d’ensemble
La **LMC** formalise une intuition simple : un système intelligent devrait préférer les structures d’information fortement cohérentes avec le contexte, tout en restant aussi peu coûteuses que possible en termes entropiques.

Cette loi explicite un compromis fondamental déjà présent dans la cognition et l’apprentissage : **Cohérence Contextuelle vs Coût Informationnel**.

## 2. Formulation Mathématique

### 2.1 Forme Canonique
La fonction objectif détermine le score d'aptitude $J(s)$ d'une structure candidate $s$ :

$$J(s) = \frac{\mathcal{C}(s \mid \Omega)}{\mathcal{H}(s) + \epsilon}$$

**Définitions :**
* **$s$** : Structure candidate (pensée, séquence de tokens, souvenir).
* **$\Omega$** : Le contexte externe ou la vérité terrain.
* **$\mathcal{C}(s \mid \Omega)$** : **Cohérence Contextuelle**. Représente l'alignement sémantique ou l'utilité.
* **$\mathcal{H}(s)$** : **Coût Entropique**. Représente l'entropie de Shannon, la complexité ou le coût métabolique.
* **$\epsilon$** : Constante de régularisation strictement positive ($\epsilon > 0$).
* **$s^* = \arg\max_s J(s)$** : La structure optimale sélectionnée.

### 2.2 Forme Fractale Régularisée
Pour améliorer la stabilité numérique et permettre des comportements dépendants de l'échelle, nous introduisons $\alpha$ et $\beta$ :

$$J_{\alpha,\beta}(s) = \frac{\mathcal{C}(s \mid \Omega)^{\alpha}} {(\mathcal{H}(s) + \epsilon)^{\beta}}$$

* **$\alpha$** : Contrôle la **Sélectivité** (sensibilité au contexte).
* **$\beta$** : Contrôle la **Pression de Compression** (sensibilité à la complexité).

## 3. Interaction avec les Architectures Transformer et le Facteur d'Itération

La LMC fournit un cadre déterministe pour analyser et contrôler la **Boucle d'Itération Auto-régressive** des modèles Transformer. Dans les LLM standards, le "facteur d'itération" est régi par des hyperparamètres statiques (Température, Top-K). La LMC les remplace par une évaluation énergétique dynamique à chaque pas de temps $t$.

### 3.1 Correspondance LMC / Composants Transformer
Nous mappons les variables abstraites de la loi à des tenseurs spécifiques dans le mécanisme d'attention :

$$J(t) = \frac{\mathcal{C}_{\text{Attn}}(t)}{\mathcal{H}_{\text{Logits}}(t) + \epsilon}$$

* **$\mathcal{C}_{\text{Attn}}$ (Cohérence) :** Correspond aux **Poids d'Attention**. Une focalisation nette de l'attention (*Sparse Attention*) sur les tokens pertinents implique une haute cohérence.
    * $\mathcal{C} \approx \max(\text{Softmax}(\frac{QK^T}{\sqrt{d_k}}))$
* **$\mathcal{H}_{\text{Logits}}$ (Entropie) :** Correspond à **l'Entropie de Shannon de la distribution de probabilité** de sortie sur le vocabulaire à l'étape $t$.
    * $\mathcal{H} = -\sum P(w_i) \log P(w_i)$

### 3.2 Contrôle Dynamique de l'Itération (Échantillonnage Adaptatif)
Au lieu d'utiliser une Température fixe ($T$), la LMC suggère un **Facteur d'Itération Dynamique**.
* Si $\mathcal{H}$ est élevée (modèle confus/hallucination), le score LMC chute. Le système doit **faire une pause** ou **augmenter les contraintes** (baisser $T$).
* Si $\mathcal{H}$ est basse et $\mathcal{C}$ est haute (Résonance), le système crée un "effet tunnel" (État de Flow), accélérant la génération.

### 3.3 Détection d'Hallucination via Gradients d'Itération
En surveillant la dérivée du score LMC dans le temps ($\frac{dJ}{dt}$), nous pouvons prédire les modes d'échec du modèle :
* **Effondrement (Boucle) :** $H(t) \to 0$ rapidement. Le modèle répète la même phrase. $J(t)$ grimpe artificiellement.
* **Divergence (Hallucination) :** La Cohérence $\mathcal{C}$ reste haute (grammaire plausible) mais l'Entropie $\mathcal{H}$ fluctue violemment entre les tokens. Le score LMC devient volatil.

> **Implication Opérationnelle :** La LMC suggère que nous pouvons arrêter la génération *avant* que le token ne soit échantillonné si le score $J(t)$ tombe sous un seuil critique $\tau_{\text{crit}}$, économisant ainsi de l'énergie de calcul.

## 4. Clarification Importante

> **⚠️ Vérité $\neq$ Cohérence**
> La LMC décrit une **préférence de sélection** sous contraintes, et non une garantie de vérité. Une structure peut avoir une haute cohérence tout en étant factuellement fausse si le contexte est biaisé. Elle optimise *la plausibilité et l'efficacité*.

## 5. Régimes Cognitifs

Le ratio $C/H$ définit naturellement quatre régimes :

| Régime | Cohérence $\mathcal{C}$ | Entropie $\mathcal{H}$ | Interprétation |
| :--- | :---: | :---: | :--- |
| **Résonance** | **Haute** | **Basse** | **État Optimal.** Cognition stable, efficace et alignée. |
| **Dissonance** | Basse | Basse | Structure rigide, mais désalignée du contexte. |
| **Chaos** | Basse | Haute | Cognition bruitée et instable. Haute énergie, utilité nulle. |
| **Hallucination** | *Haute (Locale)* | *Mal estimée* | État fragile. Excès de confiance mais statistiquement anormal. |

## 6. Pipeline Opérationnel
La LMC agit comme un filtre dans le pipeline cognitif :
$$\text{Génération} \rightarrow \text{Évaluation LMC } J(s) \rightarrow \text{Sélection } (s^*) \rightarrow \text{Mémoire/Action}$$

## 7. Statut et Contexte
* **UICT (Unified Information Compression Theory) :** Décrit la dynamique informationnelle globale (**Physique**).
* **CEML (Cognitive Entropy Minimization Law) :** Décrit les règles de sélection locales (**Esprit**).

---

### 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

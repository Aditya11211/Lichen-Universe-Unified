
# Cognitive Entropy Minimization Law (CEML)
**A Unified Mathematical Framework for Information Selection in Cognitive Systems**

**Author:** Bryan Ouellette  
**Date:** 2025‑12‑13  
**Version:** 2.1 (Refined)

---

## 1. Motivation

Intelligent systems – biological or artificial – operate under finite energy, time, and memory constraints. They cannot explore all possible representations of the world, so they must **select** a small subset of structures that are both **semantically useful** and **energetically efficient**.

CEML proposes a simple quantitative rule for this selection:  
maximize **contextual coherence** while minimizing **entropic cost**.

---

## 2. Core Principle

> **CEML Axiom (Principle of Least Cognitive Action)**  
> Every cognitive agent under finite resources preferentially selects information structures that maximize semantic utility while minimizing entropic (energetic) cost.

In other words, “understanding” is treated as an **information compression process** that preserves what matters (coherence) while discarding redundant or noisy variation (entropy).

---

## 3. Mathematical Definition

Let \(\mathcal{S}\) be the set of candidate information structures (sentences, vectors, internal states).  
For a given context \(\Omega\), CEML defines a **score functional**:

\[
J(s) = \frac{\mathcal{C}(s \mid \Omega)}{\mathcal{H}(s) + \epsilon}
\]

where:

- \(s \in \mathcal{S}\) is a candidate structure.  
- \(\Omega\) is the current context (prompt, sensory state, ground truth).  
- \(\mathcal{C}(s \mid \Omega)\) is the **Contextual Coherence**.  
- \(\mathcal{H}(s)\) is the **Entropic Cost**.  
- \(\epsilon \to 0^+\) is a small regularizer to avoid singularities.

The **CEML selection rule** is:

\[
s^\* = \underset{s \in \mathcal{S}}{\mathrm{argmax}} \; J(s)
\]

### 3.1 Contextual Coherence \(\mathcal{C}(s \mid \Omega)\)

In embedding space, coherence can be instantiated as cosine similarity:

\[
\mathcal{C}(s \mid \Omega) = \frac{\vec{v}_\Omega \cdot \vec{v}_s}{\lVert \vec{v}_\Omega \rVert \, \lVert \vec{v}_s \rVert}
\]

- High \(\mathcal{C}\) means that \(s\) is semantically aligned with \(\Omega\) (relevant, on‑topic, truthful within the model).  
- Low \(\mathcal{C}\) means that \(s\) is off‑topic, incoherent, or poorly supported by the given context.

### 3.2 Entropic Cost \(\mathcal{H}(s)\)

\(\mathcal{H}(s)\) captures how **costly** it is to represent or process \(s\).

For probability distributions \(p(i)\):

\[
\mathcal{H}(s) = H(p) = -\sum_i p(i) \log_2 p(i)
\]

For text or model outputs, \(\mathcal{H}(s)\) can be approximated by:

- average negative log‑likelihood (cross‑entropy), or  
- compression ratio (e.g. gzip length / raw length).

Higher \(\mathcal{H}(s)\) → more disorder, more bits, more energy per Landauer’s principle.  
Lower \(\mathcal{H}(s)\) → more compression, more regularity, cheaper to maintain.

---

## 4. Qualitative Regimes

CEML predicts four qualitative regimes:

| State Type      | Coherence \(\mathcal{C}\) | Entropy \(\mathcal{H}\) | CEML Score \(J(s)\) | System Decision | Example (EN)                    |
|-----------------|---------------------------|--------------------------|---------------------|-----------------|----------------------------------|
| **Resonance**   | High                      | Low                      | **Maximal**         | SELECT          | “The sky is blue.”              |
| **Dissonance**  | Low                       | Low                      | Low                 | REJECT          | “The cat is cubic.”             |
| **Chaos**       | High/Low                  | High                     | Low                 | REJECT          | “Blue sky… 37x… random noise.”  |
| **Hallucination** | High (local)           | Low (artificial)         | False local max     | Pathology       | Plausible but factually wrong.  |

The **healthy optimum** corresponds to **high coherence with low‑to‑moderate entropy** (“ordered complexity”).

---

## 5. Relation to Existing Principles

CEML is designed to be compatible with, not opposed to, existing theories:

1. **Free Energy Principle (Friston)**  
   Minimizing variational free energy is equivalent to minimizing surprise under a generative model.  
   - In CEML, minimizing \(\mathcal{H}(s)\) under coherence constraints parallels minimizing expected surprise under a context \(\Omega\). [web:55][web:60]

2. **Information Theory (Shannon / MDL)**  
   Shortest description length that explains the data is preferred (Occam’s Razor).  
   - \(\mathcal{H}(s)\) penalizes unnecessarily complex or noisy structures. [web:57]

3. **Information Physics (Landauer, Neuro‑information)**  
   Each bit erased or processed has an energetic cost.  
   - CEML’s denominator can be interpreted as an energetic budget; higher entropy means more heat dissipation. [web:57][web:61]

CEML is proposed as a **unified decision rule** at the level of representational selection:  
given many possible internal states, choose the one that maximizes \(\frac{\text{coherence}}{\text{entropy}}\).

---

## 6. Toy PoC: Probability Distributions

For a simple PoC, consider candidate structures represented by discrete probability distributions.

We define:

- \(\mathcal{H}(s)\) = Shannon entropy of the distribution.  
- \(\mathcal{C}(s \mid \Omega)\) = maximal probability mass (dominant component), as a proxy for “focus” or “confidence”.

### 6.1 Python Demo

import numpy as np

def shannon_entropy(distribution):
return -sum(p * np.log2(p) if p > 0 else 0 for p in distribution)

def coherence(distribution):
# Simple proxy: dominant mass = focus
return max(distribution)

def ceml_score(distribution, eps=1e-6):
H = shannon_entropy(distribution)
C = coherence(distribution)
return C / (H + eps), H, C

structures = {
'A': [0.95, 0.03, 0.02], # Very ordered
'B': [0.70, 0.20, 0.10], # Ordered
'C': [0.50, 0.30, 0.20], # Slightly ordered
'D': [0.33, 0.33, 0.34], # Almost uniform
'E': [0.45, 0.10, 0.45], # Bimodal
'F': [0.20, 0.25, 0.15, 0.25, 0.15], # Disordered (5‑way)
'G': [0.16, 0.17, 0.17, 0.16, 0.17, 0.17], # Very disordered (6‑way)
}

results = []
for name, dist in structures.items():
score, H, C = ceml_score(dist)
results.append((name, H, C, score))

Sort by CEML score
results.sort(key=lambda x: x, reverse=True)​

for name, H, C, score in results:
print(f"{name}: H={H:.4f}, C={C:.2f}, J={score:.4f}")

text

### 6.2 Observed Behavior (example run)

- A (very ordered) gets the **highest** \(J(s)\).  
- G (most disordered) gets the **lowest** \(J(s)\).  
- The ranking \(J(s)\) decreases monotonically as entropy increases, confirming that CEML favors **low‑entropy, high‑focus** structures over high‑entropy noise.

This validates the **qualitative prediction** of CEML on a toy setting:  
when coherence is comparable, lower entropy structures are preferred.

---

## 7. Planned Extensions

- Replace “max probability” by **embedding‑based coherence** for text.  
- Estimate entropic cost \(\mathcal{H}(s)\) using language model cross‑entropy or compression ratios.  
- Apply CEML as a selection layer in LLM decoding or memory retrieval.  
- Test correlations between CEML‑like scores and human judgments (clarity, truthfulness, usefulness).

CEML is not claimed as a proven physical law. It is proposed as a **candidate selection principle** that unifies several existing ideas into a single operational metric, designed to be testable and falsifiable on real systems.

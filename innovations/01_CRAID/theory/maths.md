# Fondements Mathématiques de CRAID

## 1. Erasure Coding (Reed-Solomon)
CRAID utilise une variante simplifiée de **Reed-Solomon** pour :
- Découper les données en `k` fragments
- Générer `p` fragments de parité
- Permettre la reconstruction avec **n'importe quel sous-ensemble de `k` fragments**

**Formule de base** :
\[
m(x) = d(x) \cdot x^p + r(x)
\]
où :
- \(d(x)\) = polynôme des données (degré \(k-1\))
- \(r(x)\) = polynôme de parité (degré \(p\))

## 2. Distribution des Shards
Les fragments sont distribués selon une **topologie circulaire** :
\[
\text{shard}_i \rightarrow \text{Node}_{i \mod N}
\]
où \(N\) = nombre total de nœuds.

## 3. Reconstruction
La reconstruction utilise la **propriété d'interpolation polynomiale** :
- Avec \(k\) points (fragments), on peut **reconstruire exactement** le polynôme original \(d(x)\).
- En pratique, nous utilisons une **approche XOR simplifiée** pour la démo, mais une implémentation complète utiliserait :
  \[
  d(x) = \sum_{i=1}^k y_i \prod_{j\neq i} \frac{x - x_j}{x_i - x_j}
  \]
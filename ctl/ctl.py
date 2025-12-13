"""
ctl.py
Cognitive Thermodynamics Loop (CTL) core utilities
Implements: multi-level entropy H, momentum, temperature-based sampling,
regime detection, CTL-5 coupling, predictive control objective J.

Note: This is a practical prototype. Replace placeholder detectors
(semantic/syntax/pragmatic) by real NLP modules (embeddings, parsers).
"""

import math
import random
import numpy as np

EPS = 1e-9

# -------------------------
# Helpers: entropy + normalization
# -------------------------
def shannon_entropy_from_distribution(dist):
    """Shannon entropy given a probability distribution (list or np.array)."""
    p = np.array(dist, dtype=float)
    p = p[p > 0]
    return -np.sum(p * np.log2(p + EPS))

def normalize_weights(w):
    a = np.array(w, dtype=float)
    s = a.sum()
    if s == 0:
        return np.ones_like(a) / len(a)
    return a / s

# -------------------------
# Level scorers (placeholders)
# Replace these with real functions for production
# - semantic_score: similarity to goal (0..1)
# - syntax_noise: syntax-level ambiguity (0..1)
# - pragmatic_noise: intent ambiguity (0..1)
# -------------------------
def semantic_score_placeholder(user_text, context_embedding=None, candidate_embedding=None):
    """
    Placeholder: returns a float 0..1 estimating semantic clarity.
    Replace with cosine similarity between embeddings (context vs message).
    """
    # naive pseudo-random deterministic hash-ish to simulate variability
    return (abs(hash(user_text)) % 100) / 100.0

def syntax_noise_placeholder(user_text):
    """Estimate syntax-level noise; 0=clean, 1=messy. Replace with parser heuristics."""
    # short texts -> lower syntax noise
    length = max(1, len(user_text.split()))
    return min(1.0, 1.0 - math.exp(-length/6))

def pragmatic_noise_placeholder(user_text, explicit_goal=None):
    """Estimate pragmatic ambiguity: 0=clear goal, 1=unclear."""
    if explicit_goal:
        return 0.05
    # heuristic: questions with many vague tokens increase noise
    vague_tokens = ["truc", "genre", "tu vois", "choses", "quoi"]
    s = user_text.lower()
    score = sum(1 for t in vague_tokens if t in s) / max(1, len(vague_tokens))
    return min(1.0, score + 0.05)

# -------------------------
# Multi-level entropy H computation
# -------------------------
def compute_H_user(user_text,
                   weights=None,
                   context_embedding=None,
                   candidate_embedding=None,
                   explicit_goal=None):
    """
    Compute H_user using weighted subcomponents.
    weights: dict of w_semantic, w_syntax, w_pragmatic, w_conceptual, w_structure
    Returns H_user in [0..inf) where higher = more entropic.
    """
    # defaults
    if weights is None:
        weights = {
            'w_semantic': 1.0,
            'w_syntax': 0.7,
            'w_pragmatic': 0.9,
            'w_conceptual': 1.0,
            'w_structure': 0.8
        }

    # scores: lower is better for F (flou/noise), higher better for C (clarity)
    sem = semantic_score_placeholder(user_text, context_embedding, candidate_embedding)  # 0..1 clarity proxy
    syntax_noise = syntax_noise_placeholder(user_text)  # 0..1 noise
    pragmatic_noise = pragmatic_noise_placeholder(user_text, explicit_goal)  # 0..1 noise

    # Conceptual & structural clarity proxies (simple heuristics; replace with real models)
    conceptual_clarity = 0.8 * sem + 0.2 * (1 - pragmatic_noise)
    structural_clarity = 0.7 * (1 - syntax_noise) + 0.3 * (len(user_text.split()) < 30)

    # F (Flou) combine noise terms
    F_semantic = 1.0 - sem  # 0 = perfect semantic clarity
    F_syntax = syntax_noise
    F_pragmatic = pragmatic_noise

    # Numerator: weighted flou
    num = (weights['w_semantic'] * F_semantic +
           weights['w_syntax'] * F_syntax +
           weights['w_pragmatic'] * F_pragmatic)

    # Denominator: weighted clarity components (C)
    denom = (weights['w_conceptual'] * conceptual_clarity +
             weights['w_structure'] * structural_clarity + EPS)

    H_user = num / denom
    return float(H_user), {
        'sem': sem,
        'F_semantic': F_semantic,
        'F_syntax': F_syntax,
        'F_pragmatic': F_pragmatic,
        'conceptual_clarity': conceptual_clarity,
        'structural_clarity': structural_clarity
    }

# -------------------------
# Momentum update
# -------------------------
def momentum_update(H_prev, H_measured, alpha=0.75):
    """H_{t+1} = alpha * H_prev + (1-alpha) * H_measured"""
    return alpha * H_prev + (1.0 - alpha) * H_measured

# -------------------------
# Temperature cognitive sampling (Gibbs-like)
# -------------------------
def cognitive_probability(energies, T_cognitive=1.0, k=1.0):
    """
    Given array of energy-like scores E_i (lower = preferred),
    return softmax-like probabilities with temperature T_cognitive.
    """
    arr = np.array(energies, dtype=float)
    # convert energies to negative utility
    exps = np.exp(-arr / (k * max(T_cognitive, EPS)))
    probs = exps / (np.sum(exps) + EPS)
    return probs

# -------------------------
# Regime detection
# -------------------------
def detect_regime(H_u, H_i, delta_threshold=0.2, sync_tol=0.05):
    delta = H_i - H_u
    if H_i < H_u - delta_threshold:
        return "IA_DOMINANT"
    elif H_u < H_i - delta_threshold:
        return "USER_DOMINANT"
    elif abs(delta) < sync_tol:
        return "SYNCHRONIZED"
    else:
        return "UNSTABLE"

# -------------------------
# CTL-5: coupling matrix utilities
# -------------------------
def build_coupling_matrix(levels=4, base=0.1):
    """
    Create a simple coupling matrix for levels:
    levels order: lexical, syntax, semantic, pragmatic (or similar)
    """
    M = np.full((levels, levels), base, dtype=float)
    np.fill_diagonal(M, 1.0)  # self-influence strong
    # decay off-diagonals
    for i in range(levels):
        for j in range(levels):
            if i != j:
                M[i, j] = base / (1 + abs(i - j))
    return M

def apply_coupling(H_levels, coupling_matrix):
    """
    H_levels: vector of per-level entropies [H_lex, H_syn, H_sem, H_prag]
    returns coupled vector new_H = coupling_matrix @ H_levels (normalized)
    """
    v = np.array(H_levels, dtype=float)
    new_v = coupling_matrix.dot(v)
    return new_v

# -------------------------
# Predictive model (very simple linear predictor + optimizer for J)
# -------------------------
def predict_H_sequence(H_current, interventions, coupling_matrix, steps=5):
    """
    Simulate future H under fixed interventions.
    interventions: list or vector to be added each step (len = number of levels)
    Returns list of predicted H_total (scalar) over steps.
    """
    H_vec = np.array(H_current, dtype=float)
    preds = []
    for t in range(steps):
        # coupling effect
        H_vec = apply_coupling(H_vec, coupling_matrix)
        # apply intervention (reducing H at targeted levels)
        H_vec = np.maximum(0.0, H_vec - np.array(interventions))
        preds.append(H_vec.sum())
    return preds

def optimize_intervention(H_current, coupling_matrix, H_target=0.2, steps=5, lam=0.01):
    """
    Brute-force-ish optimizer: try simple reductions per level to minimize J:
    J = sum (H_predicted - H_target)^2 + lam * intervention_cost
    intervention is vector a >= 0 representing H reduction per level.
    """
    levels = len(H_current)
    best = None
    # search on coarse grid per-level (0..0.5)
    grid = [0.0, 0.05, 0.1, 0.2, 0.4]
    for combo in np.array(np.meshgrid(*([grid]*levels))).T.reshape(-1, levels):
        preds = predict_H_sequence(H_current, combo, coupling_matrix, steps=steps)
        loss_pred = sum((p - H_target)**2 for p in preds)
        cost = lam * np.sum(combo**2)
        J = loss_pred + cost
        if best is None or J < best[0]:
            best = (J, combo, preds)
    return {
        'J': best[0],
        'intervention': best[1],
        'preds': best[2]
    }

# -------------------------
# Convenience simulation: run a CTL turn
# -------------------------
def run_ctl_turn(user_text, H_i, H_prev_user=0.5, alpha=0.75, weights=None, coupling=None):
    H_measured, details = compute_H_user(user_text, weights=weights)
    H_user = momentum_update(H_prev_user, H_measured, alpha=alpha)
    regime = detect_regime(H_user, H_i)
    if coupling is None:
        coupling = build_coupling_matrix()
    # per-level vector example (lex, syn, sem, prag) use placeholders from details
    H_levels = np.array([
        1 - details.get('structural_clarity', 0.5),  # lex ~ structural inverse
        details.get('F_syntax', 0.5),
        details.get('F_semantic', 0.5),
        details.get('F_pragmatic', 0.5)
    ])
    coupled = apply_coupling(H_levels, coupling)
    H_total = float(coupled.sum())
    return {
        'H_measured': H_measured,
        'H_user': H_user,
        'regime': regime,
        'H_levels': H_levels.tolist(),
        'H_total': H_total,
        'details': details
    }

# End of ctl.py

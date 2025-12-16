"""
Module pour les équations du Low-Entropy Spiral (LES)
Basé sur les travaux de Bryan Ouellet
"""

import numpy as np

def calculer_entropie_les(texte, memoire=None):
    """
    Calcule l'entropie effective d'une séquence textuelle selon la théorie LES.
    H_eff = -Σ p(s_i) log(p(s_i))
    """
    # 1. Définition des motifs clés (à adapter selon tes données)
    motifs = ["qubit", "spin", "kuramoto", "fc-496", "craid", "genesis", "les", "ceml"]

    # 2. Calcul des probabilités (fréquence normalisée)
    total_mots = len(texte.split())
    p = []
    for motif in motifs:
        occurrences = texte.lower().count(motif)
        p_i = occurrences / total_mots if total_mots > 0 else 0
        p.append(p_i + 1e-10)  # Évite log(0)

    # 3. Normalisation
    p = [x / sum(p) for x in p]

    # 4. Calcul de l'entropie effective
    entropie = -sum([x * np.log2(x) for x in p if x > 0])

    # Normalisation entre 0 et 1 (0 = faible entropie, 1 = forte entropie)
    return min(entropie, 1.0)

def compresser_requete_les(texte, entropie):
    """
    Compresse une requête textuelle en fonction de son niveau d'entropie
    """
    if entropie > 0.7:  # Forte entropie = peu de motifs
        return f"COMP_{texte[:5]}"
    else:  # Faible entropie = motifs clés détectés
        mots_cles = []
        for motif in ["qubit", "spin", "kuramoto", "fc-496", "craid"]:
            if motif in texte.lower():
                mots_cles.append(motif)
        if mots_cles:
            return "_".join(mots_cles)[:20]  # Limite la taille
        else:
            return f"UNK_{texte[:5]}"

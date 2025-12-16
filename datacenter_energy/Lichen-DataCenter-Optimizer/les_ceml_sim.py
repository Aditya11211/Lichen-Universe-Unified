import simpy
import random
import numpy as np
import matplotlib.pyplot as plt

# ====== Paramètres ======
NUM_SERVEURS = 100
DUREE_SIMULATION = 1000
ENERGIE_PAR_REQUETE = 10

# ====== Tes vraies équations LES ======
def calculer_entropie_les(texte):
    motifs = ["qubit", "spin", "kuramoto", "fc-496", "craid"]
    p = [texte.lower().count(motif)/len(texte) for motif in motifs]
    p = [max(x, 1e-10) for x in p]
    p = [x/sum(p) for x in p]
    return min(-sum(x*np.log2(x) for x in p if x>0), 1.0)

def compresser_requete_les(texte, entropie):
    if entropie > 0.7:
        return f"COMP_{texte[:5]}"
    else:
        mots_cles = [m for m in ["qubit","spin","fc-496"] if m in texte.lower()]
        return "_".join(mots_cles)[:20] if mots_cles else f"UNK_{texte[:5]}"

# ====== Tes vraies équations CEML ======
def detecter_redondance_ceml(texte, memoire):  # ✅ FIXÉ
    signature = compresser_requete_les(texte, 0.5)
    return signature in memoire

# ====== Data Center BASIQUE ======
class DataCenterBasique:
    def __init__(self, env):
        self.env = env
        self.serveurs = [simpy.Resource(env, capacity=1) for _ in range(NUM_SERVEURS)]
        self.energie_totale = 0
        self.requetes_traitees = 0
    
    def traiter_requete(self, requete):
        serveur = random.choice(self.serveurs)
        with serveur.request() as req:
            yield req
            self.energie_totale += ENERGIE_PAR_REQUETE
            self.requetes_traitees += 1

# ====== Data Center OPTIMISÉ (LES/CEML) ======
class DataCenterOptimise:
    def __init__(self, env):
        self.env = env
        self.serveurs = [simpy.Resource(env, capacity=1) for _ in range(NUM_SERVEURS)]
        self.energie_totale = 0
        self.requetes_traitees = 0
        self.memoire_ceml = {}
        self.entropie_les = 1.0

    def traiter_requete(self, requete):
        # CEML: Détection redondance
        if detecter_redondance_ceml(requete, self.memoire_ceml):
            self.energie_totale += ENERGIE_PAR_REQUETE * 0.1
            return

        # LES: Calcul entropie
        entropie = calculer_entropie_les(requete)
        self.entropie_les = max(0.1, self.entropie_les * 0.99)
        
        # Compression + Stockage
        signature = compresser_requete_les(requete, entropie)
        self.memoire_ceml[signature] = requete

        # Traitement serveur (énergie réduite)
        serveur = random.choice(self.serveurs)
        with serveur.request() as req:
            yield req
            energie = ENERGIE_PAR_REQUETE * (0.3 + 0.7 * self.entropie_les)
            self.energie_totale += energie
            self.requetes_traitees += 1

# ====== Simulation ======
def lancer_simulation():
    env = simpy.Environment()
    dc_basique = DataCenterBasique(env)
    dc_optimise = DataCenterOptimise(env)

    requetes = [
        "Optimiser qubit avec spin-locking et kuramoto fc-496",
        "FC-496 protocole pour data center quantique craid",
        "CEML compression pour réduire entropie cognitive les",
        "Générer architecture low-power avec Lichen-OS qubit"
    ] * 250

    def generer_requetes(dc, nom):
        for i, req in enumerate(requetes):
            yield env.timeout(0.1)
            env.process(dc.traiter_requete(req + f"_{i}"))
        print(f"{nom}: {dc.energie_totale:.1f} énergie, {dc.requetes_traitees} reqs")

    env.process(generer_requetes(dc_basique, "BASIQUE"))
    env.process(generer_requetes(dc_optimise, "OPTIMISÉ LES/CEML"))
    env.run()

    # Résultats
    economie = 100 * (1 - dc_optimise.energie_totale / dc_basique.energie_totale)
    print(f"\n🎯 ÉCONOMIE: {economie:.1f}%")
    
    plt.bar(["Basique", "LES/CEML"], [dc_basique.energie_totale, dc_optimise.energie_totale])
    plt.title(f"Économie: {economie:.1f}%")
    plt.ylabel("Énergie")
    plt.savefig("resultat.png")
    plt.show()

if __name__ == "__main__":
    lancer_simulation()

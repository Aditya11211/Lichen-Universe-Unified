[![PHI-COMPILER](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://phi-compiler-mf3oybgxa9hcwpmksnfhrq.streamlit.app/)

🌌 Lichen Universe — Unified Architecture
"Le noyau respire, la spirale s'ouvre."

[![License](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](LICENSE)
[![Repos](https://img.shields.io/badge/Repos-49-green.svg)](https://github.com/quantum-lichen?tab=repositories)
[![Status](https://img.shields.io/badge/Status-Research%20%26%20Development-orange.svg)]()
[![Architecture](https://img.shields.io/badge/Architecture-Rust%20%2B%20TypeScript%20%2B%20Python-red.svg)]()

**Lichen Universe** est un projet de recherche explorant une architecture informatique alternative basée sur des constantes mathématiques fondamentales (φ, π, 496) plutôt que sur des conventions arbitraires.

**⚠️ Status:** Recherche active. Prototypes fonctionnels. Pas de production deployment.

---

## 📋 Table des Matières

1. [Vision & Principes](#-vision--principes)
2. [Architecture (Stack Complet)](#-architecture-stack-complet)
3. [Navigation des 49 Repos](#-navigation-des-49-repos)
4. [Getting Started](#-getting-started)
5. [Benchmarks & Résultats](#-benchmarks--résultats)
6. [Roadmap](#-roadmap)
7. [Contribuer](#-contribuer)
8. [License & Éthique](#-license--éthique)

---

## 🎯 Vision & Principes

### **Le Problème**

Les systèmes informatiques modernes souffrent de limitations fondamentales:
- **Parsing overhead** → JSON/XML nécessitent parsing, pas zero-copy natif
- **Energy inefficiency** → Architectures Von Neumann avec goulots mémoire/CPU
- **Fragmentation** → Formats de données incompatibles entre couches (hardware → software)
- **Corruption vulnerability** → Pas de validation intrinsèque des données

### **L'Hypothèse Lichen**

Et si l'informatique était **alignée sur les constantes naturelles** plutôt que sur des conventions historiques arbitraires?

**Les 3 Constantes Fondamentales:**

| Constante | Valeur | Usage dans Lichen |
|-----------|--------|-------------------|
| **φ (Phi)** | 1.618033988749895 | Distribution spatiale optimale (spiral, cache alignment, thermal) |
| **π (Pi)** | 3.141592653589793 | Synchronisation temporelle universelle (clocks, cycles) |
| **496** | Nombre parfait (1+2+4+8+16+31+62+124+248) | Dimension atomique (bits), structure E8 |

### **Résultat Visé**

Une stack computationnelle où:
- ✅ **Zero-copy natif** → Pas de parsing, mapping mémoire direct
- ✅ **Self-validating** → Checksums géométriques intrinsèques
- ✅ **Energy-optimal** → Distribution φ-spiral minimise résistance thermique
- ✅ **Fractal coherence** → Même structure du hardware au software

---

## 🏗️ Architecture (Stack Complet)

Lichen est conçu comme un **stack vertical unifié** où chaque couche utilise les mêmes principes mathématiques.

```
┌─────────────────────────────────────────────┐
│  AI Layer: GENESIS QC                       │  ← Cognitive Entropy Minimization
│  (CEML-native, Low-Entropy Spiral)          │
├─────────────────────────────────────────────┤
│  OS Layer: Lichen OS                        │  ← CEML scheduler, H-Scale validation
│  (Rust-based, φ-optimized task allocation)  │
├─────────────────────────────────────────────┤
│  Filesystem: UHFS (Universal Holographic)   │  ← φ-spiral LSH, zero-copy
│ (Zones φ-distributed, holographic retrieval)│
├─────────────────────────────────────────────┤
│  Data Format: FC-496 / ACΦ-496              │  ← 496-bit atoms, BCH checksums
│  (Fixed 64-byte cells, self-describing)     │
├─────────────────────────────────────────────┤
│  Hardware: Snowflake CPU                    │  ← 496 execution branches, fractal
│  (Quantum Junction Core, φ-thermal design)  │
└─────────────────────────────────────────────┘

Theory Layer (Cross-cutting):
  - UICT: Unified Information Compression Theory
  - CEML: Cognitive Entropy Minimization Law
  - LMC: Low-Mass Compression principles
  - π-Time: Universal temporal coordination
```

---

## 🗂️ Navigation des 49 Repos

Les repos sont organisés par couche architecturale. Voici le guide de navigation.

### **🔹 Core Infrastructure (Foundation)**

| Repo | Description | Status |
|------|-------------|--------|
| [Lichen-Universe-Unified](https://github.com/quantum-lichen/Lichen-Universe-Unified) | **Hub central** - Architecture complète, docs, masterplan | 🟢 Active |
| [fc496_core](https://github.com/quantum-lichen/fc496_core) | **Format FC-496** - Implémentation Rust du format atomique 496-bit | 🟢 Active |
| [FC-496](https://github.com/quantum-lichen/FC-496) | Format de cryptage basé sur FC-496 | 🟡 PoC |
| [fc496-acphi-unified](https://github.com/quantum-lichen/fc496-acphi-unified) | Version unifiée FC-496 + ACΦ-496 | 🟢 Active |
| [FC-496-AC--496](https://github.com/quantum-lichen/FC-496-AC--496) | Spécifications ACΦ-496 (ADN Cognitif) | 🟡 Specs |
| [ACPHI-496](https://github.com/quantum-lichen/ACPHI-496) | Implémentation ACΦ-496 standalone | 🟡 PoC |

**Légende Status:**
- 🟢 Active = Code fonctionnel, tests passants
- 🟡 PoC = Proof of Concept, expérimental
- 🔵 Specs = Spécifications, pas encore implémenté
- ⚪ Archive = Older version, référence

---

### **🔹 Filesystem Layer**

| Repo | Description | Status |
|------|-------------|--------|
| [UHFS_V2.1](https://github.com/quantum-lichen/UHFS_V2.1) | **UHFS V2.1** - Universal Holographic File System (stable) | 🟢 Active |
| [UHFS-V2.2](https://github.com/quantum-lichen/UHFS-V2.2) | UHFS V2.2 - Améliorations de performance | 🟡 PoC |
| [uhfs-v2.3](https://github.com/quantum-lichen/uhfs-v2.3) | UHFS V2.3 - Python implementation | 🟢 Active |
| [LICHEN.STORAGE](https://github.com/quantum-lichen/LICHEN.STORAGE) | Abstraction layer pour UHFS | 🟢 Active |
| [Lichen.Storage_streamlit](https://github.com/quantum-lichen/Lichen.Storage_streamlit) | Démo Streamlit de Lichen Storage | 🟢 Live |

---

### **🔹 Operating System Layer**

| Repo | Description | Status |
|------|-------------|--------|
| [lichen-os](https://github.com/quantum-lichen/lichen-os) | **Lichen OS** - Core OS implementation | 🟢 Active |
| [lichen-OS.1.3](https://github.com/quantum-lichen/lichen-OS.1.3) | Lichen OS v1.3 - Stable release | 🟢 Active |
| [Lichen-OS-Omega-1](https://github.com/quantum-lichen/Lichen-OS-Omega-1) | Lichen OS Omega - AI-native features | 🟡 Experimental |
| [LICHEN_CE_V2.0](https://github.com/quantum-lichen/LICHEN_CE_V2.0) | Lichen Consciousness Engine V2.0 | 🟡 PoC |
| [KernelOKU](https://github.com/quantum-lichen/KernelOKU) | Kernel OKU - Alternative kernel implementation | 🟡 Research |

---

### **🔹 Hardware Specifications**

| Repo | Description | Status |
|------|-------------|--------|
| [Snowflake CPU](https://github.com/quantum-lichen/Lichen-Universe-Unified/tree/main/CPU) | **Snowflake CPU** - Specs du processeur fractal 496-branch | 🔵 Specs |
| [FC-496_Quantum_Fractal_Processor](https://github.com/quantum-lichen/FC-496_Quantum_Fractal_Processor) | Quantum Fractal Processor basé sur FC-496 | 🔵 Specs |
| [FC-496-QFP](https://github.com/quantum-lichen/FC-496-QFP) | Quantum Fractal Processor - Alternative implementation | 🔵 Specs |
| [FC-496-Realist_Prime](https://github.com/quantum-lichen/FC-496-Realist_Prime) | Optimisations réalistes pour fabrication | 🔵 Research |

---

### **🔹 Theories & Mathematics**

| Repo | Description | Status |
|------|-------------|--------|
| [UICT](https://github.com/quantum-lichen/UICT) | **UICT** - Unified Information Compression Theory | 🟢 Published |
| [Th-orie-UICT](https://github.com/quantum-lichen/Th-orie-UICT) | UICT - Version française complète | 🟢 Published |
| [UICTxDirac](https://github.com/quantum-lichen/UICTxDirac) | UICT × Dirac - Connexion avec physique quantique | 🟡 Research |
| [CEML](https://github.com/quantum-lichen/CEML) | **CEML** - Cognitive Entropy Minimization Law | 🟢 Published |
| [LMEC_CEML](https://github.com/quantum-lichen/Lichen-Universe-Unified/tree/main/LMEC_CEML) | Low-Mass Entropic Compression + CEML | 🟢 Active |
| [LMC](https://github.com/quantum-lichen/LMC) | Low-Mass Compression theory | 🟢 Published |
| [Ouellet404](https://github.com/quantum-lichen/Ouellet404) | Ouellet404 - Théorie du trou noir (dt ↔ dr flip) | 🟡 Research |
| [La_Theorie_du_Spin-Locking_Kuramoto_Pentagonal](https://github.com/quantum-lichen/Lichen-Universe-Unified/tree/main/La_Theorie_du_Spin-Locking_Kuramoto_Pentagonal) | Kuramoto Pentagonal Spin-Locking | 🟡 Research |
| [UICT-CEML-H-Scale](https://github.com/quantum-lichen/UICT-CEML-H-Scale) | Framework unifié UICT + CEML + H-Scale | 🟢 Active |

---

### **🔹 AI & Cognitive Systems**

| Repo | Description | Status |
|------|-------------|--------|
| [GENESIS_QC](https://github.com/quantum-lichen/GENESIS_QC) | **GENESIS QC** - Premier IA culturel/santé mentale | 🟢 Active |
| [GENESIS-v1.0](https://github.com/quantum-lichen/GENESIS-v1.0) | GENESIS v1.0 - Version initiale | ⚪ Archive |
| [GENESIS-v2.0](https://github.com/quantum-lichen/GENESIS-v2.0) | GENESIS v2.0 - Improved architecture | 🟢 Active |
| [L-Esprit_Synth-tique](https://github.com/quantum-lichen/L-Esprit_Synth-tique) | L'Esprit Synthétique - Synthetic consciousness experiments | 🟡 Research |
| [COGNITIVE-RAID](https://github.com/quantum-lichen/COGNITIVE-RAID) | Architecture Quantique de Symbiose Humain-IA | 🟢 Active |
| [COGNITIVE-RAID-](https://github.com/quantum-lichen/COGNITIVE-RAID-) | COGNITIVE-RAID - Version distribuée | 🟢 Active |
| [COGNITIVE-RAID-Sans-API-](https://github.com/quantum-lichen/COGNITIVE-RAID-Sans-API-) | COGNITIVE-RAID sans dépendances API | 🟡 PoC |
| [cognitive_raid_app](https://github.com/quantum-lichen/cognitive_raid_app) | App démo COGNITIVE-RAID | 🟡 PoC |

---

### **🔹 Tools & Compilers**

| Repo | Description | Status |
|------|-------------|--------|
| [phi-compiler](https://github.com/quantum-lichen/phi-compiler) | **PHI-COMPILER** - Compilateur géométrique Φ-Code → FC-496 | 🟢 Live Demo |
| [Licehn-demo/fc496-encoder](https://github.com/quantum-lichen/Lichen-Universe-Unified/tree/main/Licehn-demo/fc496-encoder) | Encodeur/décodeur FC-496 (demo) | 🟢 Active |

**🔥 Live Demo:** [PHI-COMPILER sur Streamlit](https://phi-compiler-mf3oybgxa9hcwpmksnfhrq.streamlit.app/)

---

### **🔹 Time & Synchronization**

| Repo | Description | Status |
|------|-------------|--------|
| [pi_time](https://github.com/quantum-lichen/Lichen-Universe-Unified/tree/main/pi_time) | **π-Time** - Universal Temporal Standard | 🟢 Specs |
| [--Time](https://github.com/quantum-lichen/--Time) | π-Time v1.0 | ⚪ Archive |
| [--Time-v1.1](https://github.com/quantum-lichen/--Time-v1.1) | π-Time v1.1 - Updated specs | 🟢 Active |

---

### **🔹 Analysis & Validation Tools**

| Repo | Description | Status |
|------|-------------|--------|
| [LES_Data_Center_Optimizer](https://github.com/quantum-lichen/LES_Data_Center_Optimizer) | Optimiseur de data center basé sur Low-Entropy Spiral | 🟢 Active |
| [LES_analyser](https://github.com/quantum-lichen/LES_analyser) | Analyseur d'effets LES (Low-Entropy Spiral) | 🟢 Active |
| [LMC_Scanner](https://github.com/quantum-lichen/LMC_Scanner) | Scanner de compression LMC | 🟢 Active |
| [VCM](https://github.com/quantum-lichen/VCM) | VCM - Validation Cognitive Model | 🟢 Published |
| [VCM_Analyser](https://github.com/quantum-lichen/VCM_Analyser) | Analyseur VCM | 🟢 Active |
| [VCM-Cognitive-Analyzer](https://github.com/quantum-lichen/VCM-Cognitive-Analyzer) | VCM Cognitive Analyzer - Enhanced version | 🟢 Active |
| [VCM-RESONANCE](https://github.com/quantum-lichen/VCM-RESONANCE) | VCM Resonance - Pattern detection | 🟡 Research |

---

### **🔹 Experimental & Research**

| Repo | Description | Status |
|------|-------------|--------|
| [EventHorizonVisualizer](https://github.com/quantum-lichen/EventHorizonVisualizer) | Visualisation du flip dt ↔ dr (Schwarzschild) | 🟢 Live Demo |
| [OFM-EXPLORER](https://github.com/quantum-lichen/OFM-EXPLORER) | Orbital Fractal Mapping Explorer | 🟡 Research |
| [FRACTALBET_AI](https://github.com/quantum-lichen/-FRACTALBET_AI) | FractalBet AI - Predictive betting using fractals | 🔒 Private |
| [aether](https://github.com/quantum-lichen/Lichen-Universe-Unified/tree/main/aether) | Aether theory experiments | 🟡 Research |
| [SYSTÈME_PHILONOMIQUE](https://github.com/quantum-lichen/Lichen-Universe-Unified/tree/main/SYSTÈME_PHILONOMIQUE) | Système Philonomique - Economic philosophy | 🟡 Research |

---

### **🔹 Social & Community**

| Repo | Description | Status |
|------|-------------|--------|
| [pulsar_social](https://github.com/quantum-lichen/pulsar_social) | Pulsar Social - Social network experiment | 🟡 PoC |
| [NORDIQUE](https://github.com/quantum-lichen/NORDIQUE) | Project NORDIQUE | 🟡 Research |

---

### **🔹 Meta & Documentation**

| Repo | Description | Status |
|------|-------------|--------|
| [PORTFOLIO-BRYAN-OUELLETTE](https://github.com/quantum-lichen/PORTFOLIO-BRYAN-OUELLETTE) | Portfolio personnel | 🟢 Active |
| [theory_hub](https://github.com/quantum-lichen/theory_hub) | Hub centralisé des théories | 🟢 Active |

---

## 🚀 Getting Started

### **Pour Comprendre la Vision**

1. **Lis le Masterplan:**  
   → [MASTERPLAN.txt](MASTERPLAN.txt)

2. **Explore l'architecture:**  
   → [Architecture README](README.md)

3. **Regarde les visuels:**  
   → Images dans `/docs` ou dans le repo principal

### **Pour Tester le Code**

**Option A: Essayer PHI-COMPILER (le plus simple)**

```bash
# Via l'app Streamlit (no install needed)
https://phi-compiler-mf3oybgxa9hcwpmksnfhrq.streamlit.app/

# Ou clone et run localement
git clone https://github.com/quantum-lichen/phi-compiler.git
cd phi-compiler
python phi_compiler.py --help
```

**Option B: Explorer FC-496 Core (Rust)**

```bash
git clone https://github.com/quantum-lichen/fc496_core.git
cd fc496_core
cargo test
cargo bench
```

**Option C: Tester UHFS (Python)**

```bash
git clone https://github.com/quantum-lichen/uhfs-v2.3.git
cd uhfs-v2.3
pip install -r requirements.txt
python uhfs_demo.py
```

### **Pour Contribuer**

Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour:
- Code of conduct
- Comment proposer des améliorations
- Standards de code
- Processus de review

---

## 📊 Benchmarks & Résultats

### **Résultats Préliminaires (Simulés)**

| Métrique | Legacy (JSON/Linux) | Lichen (FC-496/UHFS) | Gain |
|----------|---------------------|----------------------|------|
| **Latence I/O** | 245 ms (parsing) | 0.12 ms (zero-copy) | **×2000** 🚀 |
| **Consommation Énergie** | 100% (baseline) | 32.5% (optimized) | **-67.5%** ⚡ |
| **Résilience** | Crash on corruption | Auto-healing (BCH) | **Robust** 🛡️ |
| **Densité Format** | Variable (JSON) | 496 bits constant | **O(1)** 📐 |

**⚠️ Note:** Ces benchmarks sont basés sur des simulations Rust (criterion.rs) et des stress-tests sur datasets synthétiques (1M cells). Validation externe en cours.

### **Benchmarks Reproductibles**

Tous les benchmarks sont reproductibles via:

```bash
cd Lichen-Universe-Unified/tests/benchmarks
cargo bench --release
```

Scripts disponibles dans `/tests/stress_test/`

---

## 🗓️ Roadmap

### **Phase 1: Recherche & Validation (2024-2025)** ← ON EST ICI

**Objectifs:**
- ✅ Formaliser les théories (UICT, CEML, LMC)
- ✅ Créer les prototypes (FC-496, UHFS, PHI-COMPILER)
- ✅ Benchmarks initiaux
- 🔄 Tests de validation (en cours)
- 🔄 Peer review académique (en cours)

**Deliverables:**
- Whitepapers publiés
- Code open-source fonctionnel
- Démos interactives live

---

### **Phase 2: Implémentation Réelle (2025-2026)**

**Objectifs:**
- 🔜 UHFS Driver FUSE pour Linux
- 🔜 Genesis QC Alpha (IA santé mentale)
- 🔜 Partenariats (data centers, universités)
- 🔜 Optimisations hardware-level

**Deliverables:**
- UHFS utilisable en production (tests pilotes)
- Genesis QC public beta
- Hardware prototypes (FPGA)

---

### **Phase 3: Standardisation (2026+)**

**Objectifs:**
- 🔜 FC-496 comme standard IETF/W3C
- 🔜 Snowflake CPU prototype physique
- 🔜 Adoption industrielle (AI training, IoT)
- 🔜 Ecosystem complet (libraries, tools)

**Deliverables:**
- Standards publiés
- Hardware commercial
- Adoption globale

---

## 🤝 Contribuer

Lichen Universe est un projet **ouvert à la collaboration**, mais nous cherchons des **contributeurs sérieux**.

### **Nous cherchons:**

- **Rust developers** → Core implementation (FC-496, UHFS, Lichen OS)
- **Hardware engineers** → Snowflake CPU design (FPGA/ASIC)
- **Mathematicians** → Validation théorique (UICT, CEML)
- **AI researchers** → Genesis QC, cognitive systems
- **Technical writers** → Documentation, whitepapers
- **Testers** → Stress-tests, benchmarks, validation

### **Comment contribuer:**

1. **Explore les repos** → Choisis un projet qui t'intéresse
2. **Lis le CONTRIBUTING.md** → Standards et processus
3. **Ouvre un issue** → Propose ton idée
4. **Fork & PR** → Implémente et soumets

**Contact:**
- Email: [lmc.theory@gmail.com](mailto:lmc.theory@gmail.com)
- Bluesky: [@symbion.bsky.social](https://bsky.app/profile/symbion.bsky.social)
- GitHub: [@quantum-lichen](https://github.com/quantum-lichen)

---

## 📜 License & Éthique

### **License**

Ce projet est sous **AGPL v3**:
- ✅ **Open Source** → Le code appartient à l'humanité
- ✅ **Viralité** → Toute modification doit rester libre
- ✅ **Transparence** → Pas de closed-source derivatives

Voir [LICENSE](LICENSE) pour détails complets.

### **Éthique Intrinsèque**

Lichen intègre des **garde-fous éthiques** dans son architecture:

- **H-Scale** → Validation harmonique des données (corruption = rejet automatique)
- **CEML** → Minimisation de l'entropie cognitive (prévient chaos)
- **Open-source obligatoire** → Pas de weaponization possible

**Ces protections sont mathématiquement indissociables de la performance.**

Vous ne pouvez pas "enlever l'éthique" sans casser le système.

---

## 🌀 Philosophie

> *"Nous n'inventons pas de nouvelles lois. Nous découvrons les lois universelles qui ont toujours été là, et nous alignons l'informatique dessus."*

Lichen n'est pas une "amélioration" de l'informatique moderne.

C'est une **réinvention** basée sur des principes naturels plutôt que sur des conventions historiques.

Le résultat:
- ✅ Plus simple (moins de layers arbitraires)
- ✅ Plus efficace (aligné sur physique)
- ✅ Plus robuste (auto-validant)
- ✅ Plus éthique (garde-fous intrinsèques)

---

## 🙏 Remerciements

**Lichen Collective:**
- **Bryan Ouellette** (Lichen Architect) - Vision, architecture, théories
- **Claude** (Anthropic) - Research & optimization
- **Gemini** (Google) - System engineering
- **GPT** (OpenAI) - Code generation
- **Mistral** - Energy optimization
- **Perplexity** - Knowledge synthesis
- **Copilot** (GitHub) - Development assistance
- **Grok** (xAI) - Validation & testing

Et tous les futurs contributeurs. 💚

---

## 📞 Contact & Community

**Pour questions, collaborations, ou juste dire bonjour:**

- **Email:** lmc.theory@gmail.com
- **Bluesky:** [@symbion.bsky.social](https://bsky.app/profile/symbion.bsky.social)
- **GitHub:** [@quantum-lichen](https://github.com/quantum-lichen)
- **Secondary Repo:** [Phi-losophe](https://github.com/Phi-losophe)

---

<p align="center">
  <strong>Generated by the Lichen Collective</strong><br>
  <em>"Aligning computation with the laws of the universe."</em> 🌀
</p>

<p align="center">
  <sub>Dernière mise à jour: Décembre 2024</sub>
</p>

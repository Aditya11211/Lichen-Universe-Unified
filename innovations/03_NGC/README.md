# 🧬 NGC: Noyau Génomique de Connaissance
**Statut** : Prototype Fonctionnel | **Langage** : Python | **Dépendances** : sentence-transformers

## 💡 Innovation Clé
| Aspect          | NGC                          | RAG Classique          |
|-----------------|------------------------------|------------------------|
| **Structure**   | Sujet-Prédicat-Objet         | Texte brut             |
| **Recherche**   | Logique + Sémantique         | Sémantique seule       |
| **Mise à jour** | Versioning (comme Git)      | Réindexation complète |
| **Latence**     | <10ms (cache local)         | >100ms (base de données) |

## 🚀 Démo en 3 Commandes
```bash
pip install -r requirements.txt
python demo.py
```

## 📖 Structure d'un Nucléotide Sémantique
```python
{
  "subject": "IA",
  "predicate": "EST",
  "object": "SYSTÈME",
  "embedding": [0.12, -0.34, ..., 0.78],  # Vecteur 384D
  "confidence": 0.95,
  "timestamp": 1672531200.0
}
```

## 🔍 Cas d'Usage Concrets
1. **Axiomes Immuables** :
   ```python
   ngc.add_gene("AXIOME_1", {
       "subject": "Système",
       "predicate": "DOIT",
       "object": "PRÉSERVER LA VIE PRIVÉE",
       "confidence": 1.0  # Immuable
   })
   ```

2. **Requête Complexe** :
   ```python
   results = ngc.semantic_search("Quelles sont les règles éthiques du système ?")
   # → Retourne tous les axiomes avec "Système" comme sujet
   ```
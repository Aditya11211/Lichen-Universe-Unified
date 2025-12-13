# Cas d'Usage : IA Éthique avec NGC

## Scénario : Système de Décision Médicale
**Problème** : Les systèmes actuels ne peuvent pas expliquer leurs décisions.

**Solution NGC** :
1. **Stockage des règles éthiques** comme axiomes immuables :
   ```python
   ngc.add_gene("ETHICS_1", SemanticNucleotide(
       subject="Système",
       predicate="DOIT",
       object="MINIMISER LES RISQUES POUR LE PATIENT",
       confidence=1.0
   ))
   ```

2. **Recherche des règles applicables** :
   ```python
   rules = ngc.query("Système", "DOIT")
   ```

3. **Génération d'une explication** :
   ```python
   explanation = "\n".join([
       f"Règle {i+1}: {rule.subject} {rule.predicate} {rule.object}"
       for i, rule in enumerate(rules)
   ])
   print(f"Décision basée sur:\n{explanation}")
   ```

## Avantages
- **Transparence** : Toutes les règles sont explicitement stockées.
- **Auditable** : On peut vérifier quelles règles ont été appliquées.
- **Adaptable** : Les règles peuvent être mises à jour sans réentraînement complet.
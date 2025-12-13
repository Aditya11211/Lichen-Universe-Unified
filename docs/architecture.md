# Architecture technique — FC-496 / HSE (spec rapide)

1) Vue d'ensemble
- FC-496 : unité atomique (496 bits)
- HSE : moteur d'indexation et de requête spatio-temporelle (FGPI -> content)

2) FGPI Key
- FGPI = (geo_path:16b, pi_index:32b, schema_id:24b) -> clé d'index principal

3) Geo fractal (résumé)
- Projection icosaèdre -> subdivisions -> geo_path 16 bits
- geo_seed 64 bits = SHA256(lat,lon,geo_path)[:8]

4) Pi-index
- Fonction timestamp_to_pi(ts) -> pi_index 32 bits
- Approche: normalisation timestamp -> index de digits pi

5) Résonance / StrandGraph
- signature = SHA256(seedA || seedB)
- échantillonnage bits positions Fibonacci -> seuil -> edge

6) ECC & CRAID
- Prototype: partitions 248/124/124 parity
- Prod: BCH(31,16) + Reed-Solomon

7) API minimale
- encode_json_to_fc496(obj) -> fc496_hex
- decode_fc496(hex) -> {header, payload}
- hse.add_cell(hex)
- hse.query(lat, lon, pi_min, pi_max) -> list cells

Diagramme (conceptuel)
- FC-496 cells -> HSE registry -> StrandGraph relations -> IA consumers

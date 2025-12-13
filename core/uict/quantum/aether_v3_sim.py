# 🔬 AETHER V3 : Simulation de Résilience Quantique Topologique
# Auteur : Bryan Ouellette

import numpy as np
from qiskit import QuantumCircuit, transpile
from qiskit_aer import AerSimulator
from qiskit_aer.noise import NoiseModel, thermal_relaxation_error, depolarizing_error
from qiskit.quantum_info import state_fidelity, Statevector
from scipy.stats import ttest_ind
import json

# --- CONSTANTES ---
PHI = (1 + np.sqrt(5)) / 2
GOLDEN_ANGLE = 2 * np.pi * (1 - 1/PHI)
STANDARD_ANGLES = {'Standard π/2': np.pi/2, 'Aether Φ': GOLDEN_ANGLE}
NOISE_CONFIG = {'T1': 50e-6, 'T2': 70e-6, 'gate_time': 0.1e-6, 'depol': 0.001}

def create_noise_model():
    nm = NoiseModel()
    error_therm = thermal_relaxation_error(NOISE_CONFIG['T1'], NOISE_CONFIG['T2'], NOISE_CONFIG['gate_time'])
    error_depol = depolarizing_error(NOISE_CONFIG['depol'], 1)
    nm.add_all_qubit_quantum_error(error_therm.compose(error_depol), ['rz', 'u3'])
    return nm

def create_circuit(angle, layers):
    qc = QuantumCircuit(1)
    qc.h(0)
    for _ in range(layers):
        qc.rz(angle, 0)
        qc.barrier()
    qc.save_density_matrix()
    return qc

def run_simulation(max_layers=50, trials=20):
    backend = AerSimulator(noise_model=create_noise_model())
    results = {name: {'fidelity': []} for name in STANDARD_ANGLES.keys()}
    
    print(f"🚀 Simulation AETHER V3 [Layers: {max_layers}]...")
    
    for name, angle in STANDARD_ANGLES.items():
        ideal = Statevector.from_instruction(create_circuit(angle, max_layers))
        for _ in range(trials):
            qc = create_circuit(angle, max_layers)
            job = backend.run(transpile(qc, backend), shots=1)
            noisy = job.result().data()['density_matrix']
            results[name]['fidelity'].append(state_fidelity(ideal, noisy))
            
    return results

if __name__ == "__main__":
    data = run_simulation()
    phi_res = data['Aether Φ']['fidelity']
    std_res = data['Standard π/2']['fidelity']
    t_stat, p_val = ttest_ind(phi_res, std_res)
    
    print(f"\n📊 Moyenne Fidélité Φ   : {np.mean(phi_res):.4f}")
    print(f"📊 Moyenne Fidélité π/2 : {np.mean(std_res):.4f}")
    
    if np.mean(phi_res) > np.mean(std_res):
        print("\n✅ SUCCÈS : L'Architecture Aether est plus résiliente.")
        
    with open('aether_results.json', 'w') as f:
        json.dump(data, f, indent=2)

# ctl_demo.py
from ctl import run_ctl_turn, optimize_intervention, build_coupling_matrix, compute_H_user

def demo():
    H_i = 0.12  # IA entropic baseline (example)
    H_prev = 0.45

    user_msgs = [
        "Explain EPR paradox in math terms, with Bell inequality derivation.",
        "Hey can you tell me about quantum things, you know the weird stuff?",
        "Give a short formal proof of Bell inequality violation with entangled spin-1/2 pair."
    ]

    coupling = build_coupling_matrix()

    for msg in user_msgs:
        out = run_ctl_turn(msg, H_i, H_prev_user=H_prev, alpha=0.75, coupling=coupling)
        print("MSG:", msg)
        print("Measured H:", round(out['H_measured'], 3), "User H:", round(out['H_user'], 3), "Regime:", out['regime'])
        print("Per-level H:", out['H_levels'])
        H_prev = out['H_user']
        print("---")

    # try an optimization to reduce coupling effects
    H_current_levels = [0.3, 0.25, 0.4, 0.2]
    res = optimize_intervention(H_current_levels, coupling, H_target=0.2, steps=5, lam=0.02)
    print("Optimal intervention:", res['intervention'], "J:", res['J'])
    print("Predicted H totals:", res['preds'])

if __name__ == "__main__":
    demo()

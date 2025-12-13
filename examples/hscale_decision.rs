use hscale::evaluate;

fn main() {
    let action_a = [0.82, 0.75, 0.70, 0.68]; // coherence, efficiency, resonance, durability
    let action_b = [0.65, 0.90, 0.40, 0.55];

    let score_a = evaluate(action_a);
    let score_b = evaluate(action_b);

    if score_a > score_b {
        println!("Action A preferred based on harmonic evaluation.");
    } else {
        println!("Action B preferred based on harmonic evaluation.");
    }
}

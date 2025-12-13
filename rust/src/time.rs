//! Pi-index temporal prototype

use std::f64::consts::PI;

/// Convertit un timestamp float -> pi_index (u32) en prototype.
/// Ici on simule une fonction déterministe pour la démo.
pub fn timestamp_to_pi(timestamp: f64) -> u32 {
    // Prototype simple: mix timestamp fractal with PI digits
    let normalized = (timestamp.abs() as u64) % 1_000_000_000;
    // Take a slice of digits of PI (string) - simplified
    let pi_digits = "14159265358979323846264338327950288419716939937510";
    let start = (normalized % (pi_digits.len() as u64 - 8)) as usize;
    let slice = &pi_digits[start..start+8];
    slice.parse::<u32>().unwrap_or(0)
}

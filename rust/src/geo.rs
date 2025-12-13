//! Géométrie fractale (prototype)
//! Fournit geo_fractal_path et compute_geo_seed

use sha2::{Sha256, Digest};

pub fn geo_fractal_path(lat: f64, lon: f64) -> u16 {
    // Prototype simple : hash -> 16 bits
    let s = format!("{:.6}:{:.6}", lat, lon);
    let mut hasher = Sha256::new();
    hasher.update(s.as_bytes());
    let h = hasher.finalize();
    let v = ((h[0] as u16) << 8) | (h[1] as u16);
    v
}

pub fn compute_geo_seed(lat: f64, lon: f64) -> u64 {
    let s = format!("{:.8}:{:.8}", lat, lon);
    let mut hasher = Sha256::new();
    hasher.update(s.as_bytes());
    let h = hasher.finalize();
    u64::from_be_bytes([h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]])
}

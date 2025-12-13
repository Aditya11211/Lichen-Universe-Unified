//! fc496_core - prototype minimal
//!
//! Fournit des squelettes pour : build_header, build_payload, verify (ECC placeholder)

pub mod ecc;
pub mod geo;
pub mod time;
pub mod utils;

pub const FC496_BITS: usize = 496;
pub const HEADER_BITS: usize = 190;
pub const PAYLOAD_BITS: usize = 306;

/// Structure de cellule (header + payload)
#[derive(Debug, Clone)]
pub struct FC496Cell {
    pub header: Vec<u8>,  // 190 bits -> stocké en bytes (padding)
    pub payload: Vec<u8>, // 306 bits -> stocké en bytes (padding)
}

impl FC496Cell {
    pub fn new(data: &[u8], lat: f64, lon: f64, timestamp: f64) -> Self {
        let header = build_header(lat, lon, timestamp);
        let payload = build_payload(data);
        FC496Cell { header, payload }
    }

    /// Vérification basique (symmetry + ecc placeholder)
    pub fn verify(&self) -> Result<(), String> {
        if !check_496_symmetry(&self.header, &self.payload) {
            return Err("496 symmetry check failed".to_string());
        }
        if !ecc::verify_placeholder(&self.header, &self.payload) {
            return Err("ECC verification failed".to_string());
        }
        Ok(())
    }
}

fn build_header(lat: f64, lon: f64, timestamp: f64) -> Vec<u8> {
    // Skeleton: build a header with placeholders
    let mut header = vec![0u8; (HEADER_BITS + 7) / 8];
    // TODO: pack magic/version/pi_index/geo_path/geo_seed/schema_id/ecc_meta
    header[0] = 0xFC;
    header[1] = 0x49;
    header
}

fn build_payload(data: &[u8]) -> Vec<u8> {
    let mut payload = vec![0u8; (PAYLOAD_BITS + 7) / 8];
    // TODO: compute content_id, type_idx, fill data (truncate/pad to 258 bits)
    // for now copy up to payload.len()
    let to_copy = std::cmp::min(payload.len(), data.len());
    payload[..to_copy].copy_from_slice(&data[..to_copy]);
    payload
}

fn check_496_symmetry(_h: &[u8], _p: &[u8]) -> bool {
    // Simple placeholder: check sizes
    (_h.len() * 8 + _p.len() * 8) == FC496_BITS
}

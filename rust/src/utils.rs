//! Utils: content_id compute etc.

use sha2::{Sha256, Digest};

pub fn compute_content_id(data: &[u8]) -> u32 {
    let mut hasher = Sha256::new();
    hasher.update(data);
    let h = hasher.finalize();
    let b = [h[0], h[1], h[2], h[3]];
    u32::from_be_bytes(b)
}

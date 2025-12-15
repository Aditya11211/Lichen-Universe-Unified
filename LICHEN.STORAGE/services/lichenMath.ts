import { LichenNode, PHI, GOLDEN_ANGLE } from '../types';

/**
 * Generates node coordinates based on Fibonacci Spiral (Phyllotaxis).
 * This ensures mathematically optimal distribution for signal reconstruction.
 */
export const generateLichenCluster = (n: number, centerX: number, centerY: number, scale: number): LichenNode[] => {
  const nodes: LichenNode[] = [];
  
  for (let i = 0; i < n; i++) {
    // Phyllotaxis formula: r = c * sqrt(n), theta = n * 137.508
    const r = scale * Math.sqrt(i + 1);
    const theta = i * GOLDEN_ANGLE * (Math.PI / 180);
    
    const x = centerX + r * Math.cos(theta);
    const y = centerY + r * Math.sin(theta);

    nodes.push({
      id: i,
      x,
      y,
      angle: theta,
      distance: r,
      status: 'active',
      dataFragment: `0x${Math.floor(Math.random() * 496).toString(16).padStart(3, '0')}`,
      health: 100
    });
  }
  return nodes;
};

/**
 * Simulates the CRAID-496 reconstruction logic.
 * In a real impl, this would use Galois Fields modulo 496.
 */
export const calculateIntegrity = (nodes: LichenNode[]): number => {
  const total = nodes.length;
  const active = nodes.filter(n => n.status === 'active' || n.status === 'recovering').length;
  const entangled = nodes.filter(n => n.status === 'quantum-entangled').length;
  
  // Lichen resilience formula: If active >= N/Phi, integrity is 100%.
  // Even with 60% loss, quantum entanglement maintains holography.
  const effectiveCount = active + (entangled * PHI); 
  const threshold = Math.ceil(total / PHI); // K value
  
  if (effectiveCount >= threshold - 1) return 100;
  
  // Linear degradation if below catastrophic threshold
  return Math.max(0, Math.floor((effectiveCount / total) * 100));
};

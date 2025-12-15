export type NodeStatus = 'active' | 'dead' | 'recovering' | 'quantum-entangled';

export interface LichenNode {
  id: number;
  x: number;
  y: number;
  angle: number; // In radians
  distance: number;
  status: NodeStatus;
  dataFragment: string | null;
  health: number; // 0-100
}

export interface ClusterStats {
  integrity: number;
  overhead: number;
  parityRatio: number; // Based on Phi
  readSpeed: number; // MB/s
}

export const PHI = 1.618033988749895;
export const MAGIC_496 = 496;
export const GOLDEN_ANGLE = 137.508; // Degrees

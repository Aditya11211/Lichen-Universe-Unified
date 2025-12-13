import { SHA256 } from 'crypto-js';
import { COSTS, H_THRESHOLD, INV_PHI, DIVERSITY_THRESHOLD } from '../constants';
import { Nucleotide, Block, ShieldShard, ProcessStage } from '../types';

// Utility to simulate SHA256 (using a library or simple mock if lib not avail, but we'll assume crypto-js is usable or use a simple hash function)
// Since we can't easily npm install in this prompt format, I will use a simple hash function implementation for demonstration or rely on a helper.
// For this environment, let's implement a simple string hash to avoid external dependencies issues if they aren't pre-installed, 
// though the prompt allows popular libraries. I'll assume standard string manipulation for simplicity and stability.

const simpleHash = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16).padStart(8, '0') + Math.abs(hash * 2).toString(16).padStart(8, '0');
};

export class GenesisEngine {
    
    public generateHash(prev: string, data: string): string {
        return simpleHash(`${prev}${data}`);
    }

    public calculateHScore(): number {
        const coherence = 0.5 + (Math.random() * 0.5); // 0.5 to 1.0
        return (coherence * 0.5) + (0.3 * INV_PHI) + 0.2;
    }

    public computeDiversity(memory: Nucleotide[]): number {
        if (memory.length === 0) return 1.0;
        
        const counts: Record<string, number> = {};
        memory.forEach(n => {
            counts[n.niche] = (counts[n.niche] || 0) + 1;
        });

        let entropy = 0.0;
        const total = memory.length;
        
        Object.values(counts).forEach(count => {
            const p = count / total;
            entropy -= p * Math.log2(p);
        });

        return entropy;
    }

    public createShards(nucleotide: Nucleotide): ShieldShard[] {
        const shards: ShieldShard[] = [];
        const data = `${nucleotide.id}|${nucleotide.axiom_compressed}`;
        // Simulation of erasure coding
        for (let i = 0; i < 6; i++) {
            shards.push({
                id: `${nucleotide.id}_${i}`,
                hash: simpleHash(`${data}_${i}`),
                node: i
            });
        }
        return shards;
    }

    public determineNiche(): 'LOGOS' | 'PATHOS' | 'ETHOS' {
        const niches = ['LOGOS', 'PATHOS', 'ETHOS'] as const;
        return niches[Math.floor(Math.random() * niches.length)];
    }
}

export const engine = new GenesisEngine();
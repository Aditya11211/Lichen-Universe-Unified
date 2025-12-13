import React, { useMemo } from 'react';

// Generates a recursive hexagonal pattern
// (cx, cy): center, r: radius, depth: recursion level
const generateHexFractal = (cx: number, cy: number, r: number, depth: number): string[] => {
    if (depth === 0) return [];
    
    const points = [];
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        points.push({
            x: cx + r * Math.cos(angle),
            y: cy + r * Math.sin(angle)
        });
    }
    
    // SVG Path for the current hexagon
    const path = `M ${points[0].x} ${points[0].y} ` + points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ') + ' Z';
    
    const paths = [path];
    
    // Recursive step: Create smaller hexagons at the vertices
    // 2.2 is the scaling factor that creates a nice spacing (Golden Ratio-ish feel)
    if (depth > 1) {
        const nextR = r / 2.2; 
        for (let i = 0; i < 6; i++) {
             paths.push(...generateHexFractal(points[i].x, points[i].y, nextR, depth - 1));
        }
    }
    
    return paths;
};

export const FractalBackground: React.FC = () => {
    // Memoize the geometry calculation to prevent recalculation on every render
    const paths = useMemo(() => generateHexFractal(500, 500, 250, 4), []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
             {/* Layer 1: Fractal Noise (Nebula Texture) */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-soft-light">
                 <svg width="100%" height="100%">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                 </svg>
            </div>

            {/* Layer 2: Primary Geometric Fractal (Violet) - Slow Spin */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmax] h-[120vmax] opacity-[0.08] animate-[spin_120s_linear_infinite]">
                <svg viewBox="0 0 1000 1000" className="w-full h-full stroke-violet-500 fill-none" strokeWidth="0.5">
                    {paths.map((d, i) => <path key={`p1-${i}`} d={d} />)}
                </svg>
             </div>
             
             {/* Layer 3: Secondary Counter-Rotating Fractal (Slate) - Reverse Spin */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmax] h-[100vmax] opacity-[0.06] animate-[spin_180s_linear_infinite_reverse]">
                <svg viewBox="0 0 1000 1000" className="w-full h-full stroke-slate-300 fill-none" strokeWidth="0.5">
                     {paths.map((d, i) => <path key={`p2-${i}`} d={d} />)}
                </svg>
             </div>

             {/* Radial Vignette to focus center */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]"></div>
        </div>
    );
};
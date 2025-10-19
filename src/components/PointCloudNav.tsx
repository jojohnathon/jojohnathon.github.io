'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Html, OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';
import { useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PointCloudNav() {
    const [isDragging, setIsDragging] = useState(false);

    return (
        <Canvas 
            frameloop='demand'
            camera={{ position: [0, 0, 6]}}
            className='h-[480px] w-full'
            dpr={[1, 2]}
        >
            <ambientLight intensity={0.5} />
            <FloatingPoints isDragging={isDragging} />
            <OrbitControls
                enablePan={false}
                onStart={() => setIsDragging(true)}
                onEnd={() => setIsDragging(false)}
            />
        </Canvas>
    );
}

function FloatingPoints({ isDragging }: { isDragging: boolean }) {
    const router = useRouter();
    const cloud = useRef<any>(null);

    const positions = useMemo(() => {
        const a = new Float32Array(200 * 3);
        for (let i = 0; i < 200; i++) {
            const v = new Vector3()
            .setFromSphericalCoords(
                3.5 + Math.random() * 0.9,
                Math.random() * Math.PI,
                Math.random() * Math.PI * 2,
            );
            a.set([v.x,v.y,v.z], i * 3);
        }
        return a;
    }, []);

    const nodes: { pos: [number, number, number]; label: string; href: string }[] = [
        { pos: [0, 0, 3], label: 'Projects', href: '/projects' },
        { pos: [-2.2, 0.6, -1.2], label: 'Resume', href: '/resume' },
        { pos: [2.2, 1.6, -1.8], label: 'Blog', href: '/blog' },
        { pos: [0, -2.8, 0], label: 'Contact', href: '/contact' },
    ];

    useFrame((s) => {
        if (!isDragging && cloud.current) {
            cloud.current.rotation.y += 0.0015;
            cloud.current.rotation.x += 0.0008;
            s.invalidate();
        }
    });

    return (
        <>
            <Points ref={cloud} positions={positions}>
                <PointMaterial size={0.05} color='#8ab4f8' transparent/>
            </Points>

            {nodes.map(({ pos, label, href }) => (
                <Sphere
                    key={href}
                    args={[0.16, 16, 16]}
                    position={pos}
                    onClick={() => router.push(href)}
                    onPointerOver={(e) => e.object.scale.set(1.5, 1.5, 1.5)}
                    onPointerOut={(e) => e.object.scale.set(1,1,1)}
                >
                    <meshStandardMaterial color='#ffffff' emissive='#4f46e5'/>
                    <Html position={[0, 0, 0.25]} center className="text-xs font-semibold">
                        {label}
                    </Html>
                </Sphere>
            ))}
        </>
    )
}
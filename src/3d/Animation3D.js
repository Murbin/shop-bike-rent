import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import randomWord from 'random-words';

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 2,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => {
    e.stopPropagation();
    setHovered(true);
  };
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => (document.body.style.cursor = 'auto');
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? '#fa2720' : 'white'),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    console.log('randomWord()', randomWord());
    const temp = [];
    const mywords = [
      'bianchi',
      'orbea',
      'mtb',
      'frime',
      'road',
      'best',
      'chisel',
      'turbo',
      'weel',
      'montain',
      'proper',
      'turbo levo',
      's-works',
      'epic evo',
      'oxigen',
      'electric',
      'ancient',
      'normal',
      'kona',
      'cruiser',
      'omafiet',
      'proper',
      'bianchi',
      'orbea',
      'mtb',
      'frime',
      'road',
      'best',
      'chisel',
      'turbo',
      'weel',
      'montain',
      'proper',
      'turbo levo',
      's-works',
      'epic evo',
      'oxigen',
      'electric',
      'ancient',
      'normal',
      'kona',
      'cruiser',
      'omafiet',
      'proper'
    ];

    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++) {
        let num = Math.floor(Math.random() * 40);
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          mywords[num]
        ]);
      }
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function Animation3D() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h1 style={{ color: 'black' }}>Bicycles Brands </h1>
      <Canvas
        style={{ height: '600px' }}
        dpr={[1, 2]}
        //42 10 0
        camera={{ position: [42, 0, 0], fov: 60 }}
      >
        <fog attach="fog" args={['#202025', 40, 100]} />
        <Cloud count={8} radius={20} />
        <TrackballControls />
      </Canvas>
    </div>
  );
}

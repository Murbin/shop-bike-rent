import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import { mywords } from '../../utils/helper';
import { TextAnimation, Container3D } from '../../assets/styles';

const Word = ({ children, ...props }) => {
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
    // e.stopPropagation();
    setHovered(true);
  };
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.getElementById('word').style.cursor = 'pointer';
    return () => (document.getElementById('word').style.cursor = 'pointer');
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
};

const Cloud = ({ count = 4, radius = 20 }) => {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
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
};

const Animation3D = () => {
  return (
    <Container3D id={'word'}>
      <TextAnimation>Bicycles Brands </TextAnimation>
      <Canvas
        style={{ height: '80vh' }}
        dpr={[1, 2]}
        camera={{ position: [0, 46, 46], fov: 40 }}
      >
        <fog attach="fog" args={['#202025', 40, 100]} />
        <Cloud count={8} radius={20} />
        <TrackballControls domElement={document.getElementById('word')} />
      </Canvas>
    </Container3D>
  );
};

export default Animation3D;

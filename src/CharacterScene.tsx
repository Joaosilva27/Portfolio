import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import * as THREE from "three";

interface CharacterSceneProps {
  modelPath: string;
  showMenu: boolean;
}

const Model: React.FC<{ modelPath: string; showMenu: boolean }> = ({
  modelPath,
}) => {
  const { scene, animations } = useGLTF(modelPath);
  const mixer = useRef<AnimationMixer | null>(null);
  const [scale, setScale] = useState([1, 1, 1]);

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => mixer.current?.clipAction(clip).play());
    }

    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxSize = Math.max(size.x, size.y, size.z);

    let scaleFactor = 2 / maxSize;

    if (modelPath === "/models/capybara.glb") {
      scaleFactor = 0.2;
    }

    if (modelPath === "/models/maxwell.glb") {
      scaleFactor = 2;
    }

    if (modelPath === "/models/oia_cat.glb") {
      scaleFactor = 2.3;
    }

    if (modelPath === "/models/banana.glb") {
      scaleFactor = 160;
    }

    setScale([scaleFactor, scaleFactor, scaleFactor]);

    return () => {
      if (mixer.current) mixer.current.stopAllAction();
    };
  }, [animations, scene, modelPath]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = false;
      child.receiveShadow = false;
    }
  });

  scene.rotation.y = Math.PI / 3;
  scene.rotation.x = 6;
  scene.rotation.z = 6.5;

  return <primitive object={scene} scale={scale} />;
};

const CharacterScene: React.FC<CharacterSceneProps> = ({
  modelPath,
  showMenu,
}) => {
  const isCapybara = modelPath === "/models/capybara.glb";

  return (
    <Canvas
      camera={{
        position: isCapybara ? [0, 5, 15] : [0, 5, 10],
        fov: isCapybara ? 25 : 20,
      }}
      gl={{
        antialias: true,
      }}
    >
      <ambientLight intensity={0.8} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={10}
      />
      <directionalLight position={[5, 5, 5]} intensity={10} />
      <Model modelPath={modelPath} showMenu={showMenu} />
      <OrbitControls
        enableDamping
        dampingFactor={0.25}
        rotateSpeed={0.7}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default CharacterScene;

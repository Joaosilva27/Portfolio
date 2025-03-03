import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";

interface CharacterSceneProps {
  modelPath: string;
}

const Model: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const { scene, animations } = useGLTF(modelPath); // Load the GLTF model and animations
  const mixer = useRef<AnimationMixer | null>(null);

  // Initialize the animation mixer once the model and animations are loaded
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => mixer.current?.clipAction(clip).play());
    }

    return () => {
      if (mixer.current) mixer.current.stopAllAction(); // Clean up the mixer on unmount
    };
  }, [animations, scene]);

  // Update the animation mixer every frame
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta); // Update the animation
  });

  return <primitive object={scene} />;
};

const CharacterScene: React.FC<CharacterSceneProps> = ({ modelPath }) => {
  return (
    <Canvas
      camera={{
        position: [3, 3, 3], // Position the camera to zoom in on the model
        fov: 50, // Adjust field of view for proper scaling
      }}
      gl={{
        antialias: true, // Enable antialiasing for better quality
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} /> {/* General ambient light */}
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />{" "}
      {/* Spot light for directional lighting */}
      {/* 3D Model */}
      <Model modelPath={modelPath} />
      {/* Orbit Controls to rotate and zoom */}
      <OrbitControls />
    </Canvas>
  );
};

export default CharacterScene;

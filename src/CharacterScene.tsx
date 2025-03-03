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
        position: [0, 10, 3], // Adjust camera position as needed
        fov: 8, // Lower the FOV for zooming in on the model
      }}
      gl={{
        antialias: true, // Enable antialiasing for better quality
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={1} /> {/* Increase ambient light intensity */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />{" "}
      {/* Add a stronger spot light */}
      <directionalLight position={[0, 10, 0]} intensity={0.5} />{" "}
      {/* Optional: Add a directional light */}
      {/* 3D Model */}
      <Model modelPath={modelPath} />
      {/* Orbit Controls for rotating and zooming */}
      <OrbitControls />
    </Canvas>
  );
};

export default CharacterScene;

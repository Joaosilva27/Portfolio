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
  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta); // Update the animation
  });

  // Remove shadows from the model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = false;
      child.receiveShadow = false;
    }
  });

  // Apply a rotation to ensure the face is visible (rotate 180 degrees on Y-axis)
  scene.rotation.y = Math.PI / 1.9; // 180 degrees in radians (you can adjust this value for fine-tuning)
  scene.rotation.x = 6;
  scene.rotation.z = 6;

  return <primitive object={scene} />;
};

const CharacterScene: React.FC<CharacterSceneProps> = ({ modelPath }) => {
  return (
    <Canvas
      camera={{
        position: [3, 10, 5], // Adjust camera position as needed
        fov: 7, // Adjust FOV to zoom in/out
      }}
      gl={{
        antialias: true, // Enable antialiasing for better quality
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.8} /> {/* Increased ambient light intensity */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={10} // Increased intensity for the spot light
      />
      <directionalLight
        position={[5, 5, 5]}
        intensity={30} // Adjust intensity to match the scene
      />
      {/* 3D Model */}
      <Model modelPath={modelPath} />
      {/* Orbit Controls for rotating and zooming */}
      <OrbitControls
        enableDamping
        dampingFactor={0.25}
        rotateSpeed={0.7}
        maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
      />
    </Canvas>
  );
};

export default CharacterScene;

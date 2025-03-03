import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import * as THREE from "three"; // Import the necessary classes from three.js

interface CharacterSceneProps {
  modelPath: string;
}

const Model: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const { scene, animations } = useGLTF(modelPath); // Load the GLTF model and animations
  const mixer = useRef<AnimationMixer | null>(null);
  const [scale, setScale] = useState([1, 1, 1]); // Default scale

  // Initialize the animation mixer once the model and animations are loaded
  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => mixer.current?.clipAction(clip).play());
    }

    // Calculate the bounding box and adjust the scale based on the size of the model
    const box = new THREE.Box3().setFromObject(scene); // Get the bounding box of the model
    const size = new THREE.Vector3();
    box.getSize(size); // Get the size of the bounding box
    const maxSize = Math.max(size.x, size.y, size.z); // Get the largest dimension

    const scaleFactor = 2 / maxSize; // Scale factor to make sure the largest dimension is 2 units
    setScale([scaleFactor, scaleFactor, scaleFactor]); // Set the scale state

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

  return <primitive object={scene} scale={scale} />;
};

const CharacterScene: React.FC<CharacterSceneProps> = ({ modelPath }) => {
  return (
    <Canvas
      camera={{
        position: [0, 5, 10], // Adjust the camera position further away for a better view
        fov: 50, // Adjust the FOV to zoom in and fit the model properly
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

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import * as THREE from "three"; // Import the necessary classes from three.js

interface CharacterSceneProps {
  modelPath: string;
  showMenu: boolean; // Prop to indicate if the menu is shown
}

const Model: React.FC<{ modelPath: string; showMenu: boolean }> = ({
  modelPath,
}) => {
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

    // Adjust the scale based on the model size
    let scaleFactor = 2 / maxSize; // Scale factor to fit within a unit size (scale down for large models)

    if (modelPath === "/models/capybara.glb") {
      // For the capybara, you might want to scale it differently since it's bigger
      scaleFactor = 0.2; // This is a fixed scale factor, you can adjust this value based on your need
    }

    if (modelPath === "/models/maxwell.glb") {
      scaleFactor = 2; // This is a fixed scale factor, you can adjust this value based on your need
    }

    if (modelPath === "/models/oia_cat.glb") {
      scaleFactor = 2.3; // This is a fixed scale factor, you can adjust this value based on your need
    }

    if (modelPath === "/models/banana.glb") {
      scaleFactor = 160; // This is a fixed scale factor, you can adjust this value based on your need
    }

    // Set the scale dynamically for the selected model
    setScale([scaleFactor, scaleFactor, scaleFactor]);

    return () => {
      if (mixer.current) mixer.current.stopAllAction(); // Clean up the mixer on unmount
    };
  }, [animations, scene, modelPath]); // Re-run the effect when the model changes

  // Update the animation mixer every frame
  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta); // Update the animation
  });

  // Remove shadows from the model
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Check if the child is an instance of THREE.Mesh
      child.castShadow = false;
      child.receiveShadow = false;
    }
  });

  // Apply a rotation to ensure the face is visible (rotate 180 degrees on Y-axis)
  scene.rotation.y = Math.PI / 3; // 180 degrees in radians (you can adjust this value for fine-tuning)
  scene.rotation.x = 6;
  scene.rotation.z = 6.5;

  // Apply the dynamically calculated scale to the model
  return <primitive object={scene} scale={scale} />;
};

const CharacterScene: React.FC<CharacterSceneProps> = ({
  modelPath,
  showMenu,
}) => {
  const isCapybara = modelPath === "/models/capybara.glb"; // Check if the selected model is the capybara

  return (
    <Canvas
      camera={{
        position: isCapybara ? [0, 5, 15] : [0, 5, 10], // For capybara, zoom out more
        fov: isCapybara ? 25 : 20, // For capybara, use a wider field of view
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
        intensity={10} // Adjust intensity to match the scene
      />
      {/* 3D Model */}
      <Model modelPath={modelPath} showMenu={showMenu} />
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

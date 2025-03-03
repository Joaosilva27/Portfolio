import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// TypeScript interface to type-check the model path prop
interface CharacterSceneProps {
  modelPath: string;
}

const Model: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath); // Load the GLTF model

  return (
    <>
      <primitive object={scene} /> {/* Render the 3D model */}
    </>
  );
};

const CharacterScene: React.FC<CharacterSceneProps> = ({ modelPath }) => {
  return (
    <Canvas>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

      {/* 3D Model */}
      <Model modelPath={modelPath} />

      {/* Orbit Controls to rotate and zoom */}
      <OrbitControls />
    </Canvas>
  );
};

export default CharacterScene;

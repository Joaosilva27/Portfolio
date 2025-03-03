import { useState } from "react";
import "./App.css";
import CharacterScene from "./CharacterScene"; // Import the CharacterScene component

function App() {
  const modelPath = "/models/maxwell.glb"; // silly loaf dancing cat model (default model)
  const bananaCat = "/models/banana.glb";
  const oiaCat = "/models/oia_cat.glb";
  const [currentModel, setCurrentModel] = useState(modelPath);
  const [petName, setPetName] = useState("Pudding");

  return (
    <div className="flex flex-col lg:w-5/6 m-5 lg:m-0 lg:mt-4 ">
      <nav className="w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center ">
          João Silva: Bringing Ideas to Life Through Frontend Development.
        </h1>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a className="mr-2">Projects</a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-silva-8992b4221/"
            target="_blank"
            className="mr-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Joaosilva27"
            target="_blank"
            className="mr-2"
          >
            Github
          </a>
          <a href="mailto:joaosilva7875@gmail.com" target="_blank">
            Contact
          </a>
        </div>
      </nav>

      {/* 3D model section */}
      <div className="canvas-container flex flex-col items-center justify-center w-full max-w-full">
        {/* Set size for the 3D Canvas */}
        <CharacterScene modelPath={modelPath} />
        <span className="mb-6 text-white text-xl font-bold">{petName}</span>
      </div>
      {/* Attribution Span */}
      <div className="mt-4 text-sm text-center">
        <span>
          Models by{" "}
          <a
            href="https://sketchfab.com/Zhuier" // Replace with the actual URL of the model creator's page
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Zhuier
          </a>
          . Licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/" // Replace with the actual URL of the model's license
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            CC BY 4.0
          </a>
          .
        </span>
      </div>
    </div>
  );
}

export default App;

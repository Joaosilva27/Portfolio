import "./App.css";
import CharacterScene from "./CharacterScene"; // Import the CharacterScene component

function App() {
  // Path to your 3D model (GLB or GLTF format)
  const modelPath = "/models/maxwell.glb"; // Correct path for models inside the public folder

  return (
    <div className="flex flex-col lg:w-5/6 m-5 lg:m-0 lg:mt-4 ">
      <nav className="w-full">
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
      <div className="canvas-container flex items-center w-full max-w-full">
        {/* Set size for the 3D Canvas */}
        <CharacterScene modelPath={modelPath} />
      </div>
    </div>
  );
}

export default App;

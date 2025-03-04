import { useState, useEffect } from "react";
import "./App.css";
import CharacterScene from "./CharacterScene"; // Import the CharacterScene component
import defaultCatPicture from "./images/default.png";
import bananaCatPicture from "./images/banana.png";
import oiaCatPicture from "./images/oia.png";
import capybaraPicture from "./images/capy.png";

function App() {
  const modelPath = "/models/maxwell.glb"; // silly loaf dancing cat model (default model)
  const capybara = "/models/capybara.glb";
  const oiaCat = "/models/oia_cat.glb";
  const bananaCat = "/models/banana.glb";
  const [currentModel, setCurrentModel] = useState(modelPath);
  const [petName, setPetName] = useState("Pudding");
  const [showMenu, setShowMenu] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Change the model when a pet is selected
  const handlePetSelection = (model: string, name: string) => {
    setCurrentModel(model);
    setPetName(name);
  };

  // Effect to change the background color of the body when the menu is toggled
  useEffect(() => {
    if (showMenu) {
      document.documentElement.style.backgroundColor = "green"; // Set green background when menu is shown
    } else {
      document.documentElement.style.backgroundColor = "white"; // Reset background when menu is hidden
    }
  }, [showMenu]); // Runs whenever showMenu state changes

  return (
    <div className="flex flex-col lg:w-5/6 m-5 lg:m-0 lg:mt-4 transition-colors duration-300">
      {/* Show the "X" button if menu is visible */}
      {showMenu && (
        <div className="absolute top-0 right-4 z-10 mt-4">
          <span className="text-2xl text-white" onClick={toggleMenu}>
            x
          </span>
        </div>
      )}

      {/* Conditional rendering of nav based on showMenu */}
      {!showMenu && (
        <nav className="w-full flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center">
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
      )}

      {/* 3D model section */}
      <div
        className={`canvas-container ${
          !showMenu && "border-2 border-solid border-gray-300"
        } relative flex flex-col items-center justify-center w-full max-w-full flex-shrink-0`}
      >
        {/* Set size for the 3D Canvas */}
        <CharacterScene modelPath={currentModel} showMenu={showMenu} />
        {/* Show buttons to select pets if the menu is visible */}
        {showMenu && (
          <div className="grid grid-cols-2 gap-4">
            <button
              className="p-4 w-25 h-25 lg:w-30 lg:h-30 flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              onClick={() => handlePetSelection(modelPath, "Maxwell")}
            >
              <img
                src={defaultCatPicture}
                alt="Maxwell"
                className="w-25 h-25 lg:w-30 lg:h-30 object-scale-down mb-2"
              />
            </button>
            <button
              className="p-4 w-25 h-25 lg:w-30 lg:h-30 flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              onClick={() => handlePetSelection(capybara, "Capy")}
            >
              <img
                src={capybaraPicture}
                alt="Capybara"
                className="w-25 h-25 lg:w-30 lg:h-30 object-scale-down mb-2"
              />
            </button>
            <button
              className="p-4 w-25 h-25 lg:w-30 lg:h-30 flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              onClick={() => handlePetSelection(oiaCat, "Oiiiaooiiiao")}
            >
              <img
                src={oiaCatPicture}
                alt="Oia Cat"
                className="w-35 h-20 lg:w-40 lg:h-25 object-scale-down mb-2"
              />
            </button>
            <button
              className="p-4 w-25 h-25 lg:w-30 lg:h-30 flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              onClick={() => handlePetSelection(bananaCat, "Banana Cat")}
            >
              <img
                src={bananaCatPicture}
                alt="Banana Cat"
                className="w-15 h-15 lg:w-20 lg:h-20 object-scale-down mb-2"
              />
            </button>
          </div>
        )}

        {!showMenu && (
          <div className="flex">
            <span className="mb-6 text-white text-xl font-bold">{petName}</span>
            <button
              className="absolute right-0 mr-2 bg-white"
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
        )}
      </div>

      {/* Conditional rendering of Attribution */}
      {!showMenu && (
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
      )}
    </div>
  );
}

export default App;

import GithubIcon from "./images/github.png";
import GroceryListImage from "./images/groceryList.png";
import PokemonTcgImage from "./images/pokemonTCG.png";
import SmartbarImage from "./images/smartbar.png";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center pt-8 md:pt-10 min-h-screen px-4">
      <div className="flex items-center mb-6 md:mb-8">
        <span className="font-bold text-base md:text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          View all my projects:
        </span>
        <a
          href="https://github.com/Joaosilva27?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GithubIcon}
            className="h-5 w-5 ml-2 animate-bounce"
            alt="Github"
          />
        </a>
      </div>

      <div className="text-center flex flex-col md:flex-row items-center gap-6 mb-12 md:mb-14">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r text-green-400 bg-clip-text">
            Online Grocery List
          </h3>
          <p className="text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3">
            A real-time online collaborative grocery list application.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Create, share, and manage shopping lists with your household,
            partner or friends.
          </p>
        </div>
        <img
          src={GroceryListImage}
          className="mt-4 md:mt-0 w-full max-w-[280px] md:max-w-xs mx-auto"
          alt="Grocery List"
        />
      </div>

      <div className="text-center flex flex-col md:flex-row items-center gap-6 mb-20 mt-25">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r  from-blue-300 to-blue-200 bg-clip-text text-transparent">
            Pokémon TCG Tracker
          </h3>
          <p className="text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3">
            Comprehensive trading card collection manager.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Track your Pokémon card collection and explore every set ever
            released since 1996.
          </p>
        </div>
        <img
          src={PokemonTcgImage}
          className="mt-4 md:mt-0 w-full max-w-[280px] md:max-w-xs mx-auto"
          alt="Pokémon TCG"
        />
      </div>

      <div className="text-center flex flex-col md:flex-row items-center gap-6 mb-8 mt-14">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Smartbar
          </h3>
          <p className="text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3">
            Professional TV calibration guide with a built-in chat.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Comprehensive calibration workflows, technical reference guides, and
            real-time chat for professional calibrators.
          </p>
        </div>
        <img
          src={SmartbarImage}
          className=" w-140  mx-auto h-fit"
          alt="Pokémon TCG"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;

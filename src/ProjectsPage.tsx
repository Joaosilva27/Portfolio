import GithubIcon from "./images/github.png";
import GroceryListImage from "./images/groceryList.png";
import PokemonTcgImage from "./images/pokemonTCG.png";
import SmartbarImage from "./images/smartbar.png";
import TobimasuImage from "./images/tobimasu.png";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center pt-8 md:pt-10 min-h-screen px-4">
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
          <a
            href="https://github.com/Joaosilva27/Grocery-List2.0"
            target="_blank"
          >
            <span className="text-xs text-green-400 font-semibold mt-3">
              Read more about it{" "}
              <span className="text-gray-500 ml-1 mr-1">/</span>{" "}
              <a href="https://grocery-list20.vercel.app/">
                <span className="font-semibold">Visit</span>
              </a>
            </span>
          </a>
        </div>
        <img
          src={GroceryListImage}
          className="mt-4 md:mt-0 w-full max-w-[280px] md:max-w-xs mx-auto"
          alt="Grocery List"
        />
      </div>

      <div className="text-center flex flex-col md:flex-row items-center gap-6 mb-30 mt-25">
        <div className="flex flex-col justify-center md:order-2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent">
            Pokémon TCG Tracker
          </h3>
          <p className="text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3">
            Comprehensive trading card collection manager.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Track your Pokémon card collection and explore every set ever
            released since 1996.
          </p>
          <a href="https://github.com/Joaosilva27/pokemontcg" target="_blank">
            <span className="text-xs text-blue-300 font-semibold mt-3">
              Read more about it{" "}
              <span className="text-gray-500 ml-1 mr-1">/</span>{" "}
              <a href="https://pokemontcg-theta.vercel.app/">
                <span className="font-semibold">Visit</span>
              </a>
            </span>
          </a>
        </div>
        <img
          src={PokemonTcgImage}
          className="mt-4 md:mt-0 w-full max-w-[280px] md:max-w-xs mx-auto md:order-1"
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
          <a href="https://github.com/Joaosilva27/idlsmartbar" target="_blank">
            <span className="text-xs text-blue-600 font-semibold mt-3">
              Read more about it{" "}
              <span className="text-gray-500 ml-1 mr-1">/</span>{" "}
              <a href="https://idlsmartbar.nl/">
                <span className="font-semibold">Visit</span>
              </a>
            </span>
          </a>
        </div>
        <img
          src={SmartbarImage}
          className="w-140 mx-auto h-fit"
          alt="Smartbar Interface"
        />
      </div>

      <div className="text-center flex flex-col md:flex-row items-center gap-6 mb-8 mt-40">
        <img
          src={TobimasuImage}
          className="order-2 md:order-1 w-140 mx-auto h-fit md:mt-0"
          alt="Tobimasu Music"
        />
        <div className="flex flex-col justify-center order-1 md:order-2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-transparent">
            Tobimasu Music
          </h3>
          <p className="text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3">
            Music discovery platform with millions of tracks and albums.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Search and organize music collections, track favorite albums, and
            explore detailed information.
          </p>
          <a
            href="https://github.com/Joaosilva27/Tobimasu-Music?tab=readme-ov-file"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-xs text-green-800 font-semibold mt-3">
              Read more about it
            </span>
          </a>
        </div>
      </div>
      <div className="flex items-center mt-15 md:mt-18 mb-8">
        <a
          className="flex"
          href="https://github.com/Joaosilva27?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-bold text-base md:text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            View all my projects:
          </span>
          <img
            src={GithubIcon}
            className="h-5 w-5 md:h-7 md:w-7 ml-2 animate-bounce"
            alt="Github"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;

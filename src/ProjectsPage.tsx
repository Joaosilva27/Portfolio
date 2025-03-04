import GithubIcon from "./images/github.png";
import GroceryListImage from "./images/groceryList.png";
import PokemonTcgImage from "./images/pokemonTCG.png";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center pt-10 bg-gradient-to-r  min-h-screen">
      <div className="flex items-center mb-6">
        <span className="font-bold text-lg bg-gradient-to-r  bg-clip-text ">
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

      <div className="text-center flex flex-wrap mb-14">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold lg:text-4xl bg-gradient-to-r text-purple-400 bg-clip-text ">
            Online Grocery List
          </h3>
          <p className="text-lg text-gray-600 font-semibold mt-2 lg:text-lg">
            A real-time online collaborative grocery list application.
          </p>
          <p className="text-sm text-gray-500 font-semibold">
            Create, share, and manage shopping lists with your household,
            partner or friends.
          </p>
        </div>
        <img
          src={GroceryListImage}
          className="mt-4 max-w-xs mx-auto"
          alt="Grocery List"
        />
      </div>

      <div className="text-center flex flex-wrap mb-8">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold lg:text-4xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Pokémon TCG Tracker
          </h3>
          <p className="text-lg text-gray-600 font-semibold mt-2 lg:text-lg">
            A real-time online collaborative grocery list application.
          </p>
          <p className="text-sm text-gray-500 font-semibold">
            Create, share, and manage shopping lists with your household,
            partner or friends.
          </p>
        </div>
        <img
          src={PokemonTcgImage}
          className="mt-4 max-w-xs mx-auto"
          alt="Pokémon TCG"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;

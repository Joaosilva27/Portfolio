import GithubIcon from "./images/github.png";
import GroceryListImage from "./images/groceryList.png";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col text-gray-400 items-center pt-10 bg-gradient-to-r h-dvh from-blue-50 via-purple-50 to-pink-50">
      <div className="flex items-center mb-6">
        <span className="font-bold text-lg ">View all my projects:</span>
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
      <div className="text-center flex flex-wrap mb-8">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold lg:text-4xl">
            Online Grocery List
          </h3>
          <p className="text-sm text-gray-700 font-semibold mt-2 lg:text-lg">
            A real-time online collaborative grocery list application.
          </p>
          <p className="text-sm text-gray-700 font-semibold">
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
    </div>
  );
};

export default ProjectsPage;

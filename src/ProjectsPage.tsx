import GithubIcon from "./images/github.png";
import GroceryListImage from "./images/groceryList.png";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div className="flex justify-center items-center">
        <span className="font-semibold">View all my projects here:</span>
        <a
          href="https://github.com/Joaosilva27?tab=repositories"
          target="_blank"
        >
          <img
            src={GithubIcon}
            className="h-4 w-4 object-contain ml-1.5 animate-bounce"
          />
        </a>
      </div>
      <div className="flex flex-col items-center text-center mt-10 pl-2 pr-2">
        <h3 className="text-2xl font-bold mb-1">Online Grocery List</h3>
        <span>
          A real-time online collaborative grocery list application. Create,
          share, and manage shopping lists with your household, partner or
          friends.
        </span>
        <img
          src={GroceryListImage}
          className="object-contain h-100 w-80 mt-6"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;

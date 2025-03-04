import GithubIcon from "./images/githubIcon(1).png";

const ProjectsPage = () => {
  return (
    <div>
      <div className="flex">
        <span>You can view all my projects here:</span>
        <img src={GithubIcon} className="h-5 w-5 object-contain" />
      </div>
      <div className="flex flex-col">
        <span>Online Grocery List</span>
      </div>
    </div>
  );
};

export default ProjectsPage;

import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center lg:w-5/6 m-5 lg:m-0 lg:mt-4 ">
      <nav>
        <h1 className="text-2xl font-bold">
          João Silva: Bringing Ideas to Life Through Frontend Development.
        </h1>
        <div className="appearance-none mt-4">
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
    </div>
  );
}

export default App;

import { Link } from "react-router";

export default function Header() {
  return (
    <nav className='w-full flex flex-col items-center mt-2'>
      <h1 className='text-2xl font-bold text-center'>João Silva: Bringing Ideas to Life Through Frontend Development.</h1>
      <div className='mt-4 flex flex-wrap justify-center gap-4'>
        <Link to='/projects'>
          <span className='mr-2'>Projects</span>
        </Link>
        <a href='https://www.linkedin.com/in/jo%C3%A3o-silva-8992b4221/' target='_blank' className='mr-2'>
          LinkedIn
        </a>
        <a href='https://github.com/Joaosilva27' target='_blank' className='mr-2'>
          Github
        </a>
        <a href='mailto:joaosilva7875@gmail.com' target='_blank'>
          Contact
        </a>
      </div>
    </nav>
  );
}

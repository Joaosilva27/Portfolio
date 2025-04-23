import { Link } from "react-router";

export default function Header() {
  return (
    <nav className='w-full flex flex-col items-center py-6 px-4'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3'>
        João Silva
      </h1>
      <p className='text-base md:text-lg text-gray-600 font-semibold mb-6 text-center'>Bringing Ideas to Life Through Frontend Development</p>

      <div className='flex flex-wrap justify-center gap-5'>
        <a
          href='https://www.linkedin.com/in/jo%C3%A3o-silva-8992b4221/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm md:text-base font-semibold hover:text-blue-500 transition-colors duration-200'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/Joaosilva27'
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm md:text-base font-semibold hover:text-blue-500 transition-colors duration-200'
        >
          Github
        </a>
        <a href='mailto:joaosilva7875@gmail.com' className='text-sm md:text-base font-semibold hover:text-blue-500 transition-colors duration-200'>
          Contact
        </a>
      </div>
    </nav>
  );
}

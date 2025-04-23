import { useEffect, useRef } from "react";
import GithubIcon from "./images/github.png";
import GroceryListVideo from "./video/GroceryList.mp4";
import PokemonTcgVideo from "./video/PokemonTCG.mp4";
import SmartbarVideo from "./video/Smartbar.mp4";
import TobimasuVideo from "./video/Tobimasu.mp4";
import AmazonVideo from "./video/Amazon.mp4";
import QuillNotVideo from "./video/QuillNot.mp4";
import SkinMatchVideo from "./video/SkinMatch.mp4";
import BuzzTriviaVideo from "./video/BuzzTrivia.mp4";

// Custom hook for lazy loading videos with optional freeze after 3 seconds
const useLazyVideo = (shouldFreeze: boolean = true) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const hasPlayedRef = useRef<boolean>(false);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();

            if (shouldFreeze) {
              timerRef.current = setTimeout(() => {
                if (videoRef.current) {
                  videoRef.current.pause();
                  hasPlayedRef.current = true;
                }
              }, 3000);
            }
          }
        } else {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }

          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [shouldFreeze]);

  return videoRef;
};

interface LazyVideoProps {
  src: string;
  className?: string;
  shouldFreeze?: boolean;
  loop?: boolean;
}

// Reusable video component with lazy loading and optional 3-second play
const LazyVideo: React.FC<LazyVideoProps> = ({ src, className, shouldFreeze = true, loop = false }) => {
  const videoRef = useLazyVideo(shouldFreeze);

  return (
    <video ref={videoRef} className={className} muted playsInline loop={loop} preload='metadata' style={{ borderRadius: "10px" }}>
      <source src={src} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};

const ProjectsPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center pt-8 md:pt-10 min-h-screen px-4'>
      {/* Online grocery app */}
      <div className='text-center flex flex-col md:flex-row items-center gap-6 mb-12 md:mb-14'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r text-green-400 bg-clip-text'>Online Grocery List with AI</h3>
          <p className='text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3 w-fit'>
            A real-time online collaborative grocery list application.
          </p>
          <p className='text-sm text-gray-500 mt-2'>
            Create, share, and manage shopping lists with your household, partner or friends. <br></br> Featuring AI-powered recipe suggestions based
            on your list.
          </p>
          <a href='https://github.com/Joaosilva27/Grocery-List2.0' target='_blank' rel='noopener noreferrer'>
            <span className='text-xs text-green-400 font-semibold mt-3'>
              Read more about it <span className='text-gray-500 ml-1 mr-1'>/</span>{" "}
              <a href='https://grocery-list20.vercel.app/' rel='noopener noreferrer'>
                <span className='font-semibold'>Visit</span>
              </a>
            </span>
          </a>
        </div>
        <LazyVideo src={GroceryListVideo} className='max-w-100' />
      </div>

      {/* Pokemon TCG */}
      <div className='text-center flex flex-col md:flex-row items-center gap-6 mb-30 mt-25'>
        <div className='flex flex-col justify-center md:order-2'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent'>
            Pokémon TCG Tracker
          </h3>
          <p className='text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3'>Comprehensive trading card collection manager.</p>
          <p className='text-sm text-gray-500 mt-2'>Track your Pokémon card collection and explore every set ever released since 1996.</p>
          <a href='https://github.com/Joaosilva27/pokemontcg' target='_blank' rel='noopener noreferrer'>
            <span className='text-xs text-blue-300 font-semibold mt-3'>
              Read more about it <span className='text-gray-500 ml-1 mr-1'>/</span>{" "}
              <a href='https://pokemontcg-theta.vercel.app/' rel='noopener noreferrer'>
                <span className='font-semibold'>Visit</span>
              </a>
            </span>
          </a>
        </div>
        <LazyVideo src={PokemonTcgVideo} className='max-w-100' />
      </div>

      {/* Amazon clone */}
      <div className='text-center flex flex-col md:flex-row items-center gap-6 mb-40'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#cbddc6] to-[#a8c0a0] bg-clip-text text-transparent'>
            Modern Amazon
          </h3>
          <p className='text-base md:text-lg text-[#6b7d76] font-semibold mt-2 md:mt-3'>A modern redesign of the Amazon e-commerce platform.</p>
          <p className='text-sm text-[#4d5c55] mt-2'>
            Browse through hundreds of items, add them to your cart,<br></br> and proceed to a seamless checkout experience with a modernized design.
          </p>
          <a href='https://github.com/Joaosilva27/Amazon' target='_blank' rel='noopener noreferrer'>
            <span className='text-xs text-[#a8c0a0] font-semibold mt-3'>
              Read more about it <span className='text-[#6b7d76] ml-1 mr-1'>/</span>{" "}
              <a href='https://amazon-psi-flame.vercel.app/' target='_blank' rel='noopener noreferrer'>
                <span className='font-semibold text-[#a8c0a0]'>Visit</span>
              </a>
            </span>
          </a>
        </div>
        <LazyVideo src={AmazonVideo} className='max-w-100' shouldFreeze={false} loop={true} />
      </div>

      {/* Smartbar */}
      <div className='text-center flex flex-col md:flex-row items-center gap-6 mb-8 mt-14'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>
            Smartbar
          </h3>
          <p className='text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3'>Professional TV calibration guide with a built-in chat.</p>
          <p className='text-sm text-gray-500 mt-2'>
            Comprehensive calibration workflows, technical reference guides, and real-time chat for professional calibrators.
          </p>
          <a href='https://github.com/Joaosilva27/idlsmartbar' target='_blank' rel='noopener noreferrer'>
            <span className='text-xs text-blue-600 font-semibold mt-3'>
              Read more about it <span className='text-gray-500 ml-1 mr-1'>/</span>{" "}
              <a href='https://juanchat-v1.web.app/' rel='noopener noreferrer'>
                <span className='font-semibold'>Visit</span>
              </a>
            </span>
          </a>
        </div>
        <LazyVideo src={SmartbarVideo} className='lg:max-w-150' />
      </div>

      {/* Tobimasu */}
      <div className='text-center flex flex-col md:flex-row items-center gap-6 mb-8 mt-40'>
        <LazyVideo src={TobimasuVideo} className='lg:max-w-150 order-2 md:order-1' />
        <div className='flex flex-col justify-center order-1 md:order-2'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-transparent'>
            Tobimasu Music
          </h3>
          <p className='text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3'>
            Music discovery platform with millions of tracks and albums.
          </p>
          <p className='text-sm text-gray-500 mt-2'>
            Search and organize music collections, track favorite albums, and explore detailed information.
          </p>
          <a href='https://github.com/Joaosilva27/Tobimasu-Music?tab=readme-ov-file' target='_blank' rel='noopener noreferrer'>
            <span className='text-xs text-green-800 font-semibold mt-3'>Read more about it</span>
          </a>
        </div>
      </div>

      {/* Quillnot */}
      <div className='text-center flex flex-col md:flex-row items-center gap-6 mb-8 mt-40'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent'>
            QuillNot Paraphraser
          </h3>
          <p className='text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3'>
            AI-powered paraphrasing tool for rewriting and refining text with ease.
          </p>
          <p className='text-sm text-gray-500 mt-2'>
            A paraphrasing tool that rewords text content with accuracy. Choose from multiple styles or create your own custom style to match any
            writing need.
          </p>
          <a href='https://github.com/Joaosilva27/QuillNot_Paraphraser' target='_blank' rel='noopener noreferrer'>
            <span className='text-xs text-green-600 font-semibold mt-3'>
              Read more about it <span className='text-gray-500 ml-1 mr-1'>/</span>{" "}
              <a href='https://quillnot.site' rel='noopener noreferrer'>
                <span className='font-semibold'>Visit</span>
              </a>
            </span>
          </a>
        </div>
        <LazyVideo src={QuillNotVideo} className='lg:max-w-150' />
      </div>

      {/* Skin-Match */}
      <div className='text-center flex flex-col md:flex-row items-center gap-6 mb-8 mt-40'>
        <LazyVideo src={SkinMatchVideo} className='lg:max-w-150 order-2 md:order-1' />
        <div className='flex flex-col justify-center order-1 md:order-2'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-200 to-pink-400 bg-clip-text text-transparent'>
            Skin-Match
          </h3>
          <p className='text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3'>
            An AI-powered tool that helps you find the perfect makeup products.
          </p>
          <p className='text-sm text-gray-500 mt-2'>
            Take a selfie, and Skin-Match will analyze your skin tone and features, recommending the best makeup products tailored to your appearance.
          </p>
          <a href='https://github.com/Joaosilva27/skin-tone-match-ai' target='_blank' rel='noopener noreferrer'>
            <span className='text-xs text-pink-300 font-semibold mt-3'>
              Read more about it <span className='text-gray-500 ml-1 mr-1'>/</span>{" "}
              <a href='https://skin-tone-match-ai.vercel.app/' rel='noopener noreferrer'>
                <span className='font-semibold'>Visit</span>
              </a>
            </span>
          </a>
        </div>
      </div>

      {/* Buzz! Trivia Game */}
      <div className='text-center flex flex-col md:flex-row items-center gap-6 mb-8 mt-40'>
        <div className='flex flex-col justify-center'>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text text-transparent'>
            Buzz! Trivia Game
          </h3>
          <p className='text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3'>
            An interactive trivia game powered by AI-generated questions.
          </p>
          <p className='text-sm text-gray-500 mt-2'>
            Choose from curated categories or create custom trivia topics tailored to your interests and knowledge areas, inspired by the classic
            PlayStation Buzz! game series.
          </p>
          <a href='https://github.com/Joaosilva27/trivia-game-buzz' target='_blank' rel='noopener noreferrer'>
            <span className='text-xs text-violet-400 font-semibold mt-3'>
              Read more about it <span className='text-gray-500 ml-1 mr-1'>/</span>{" "}
              <a href='https://trivia-game-buzz.vercel.app/' rel='noopener noreferrer'>
                <span className='font-semibold'>Visit</span>
              </a>
            </span>
          </a>
        </div>
        <LazyVideo src={BuzzTriviaVideo} className='lg:max-w-150' />
      </div>

      <div className='flex items-center mt-15 md:mt-18 mb-8'>
        <a className='flex' href='https://github.com/Joaosilva27' target='_blank' rel='noopener noreferrer'>
          <span className='font-bold text-base md:text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
            View all my projects:
          </span>
          <img src={GithubIcon} className='h-5 w-5 md:h-7 md:w-7 ml-2 animate-bounce' alt='Github' />
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;

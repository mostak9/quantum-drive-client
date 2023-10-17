import { Link } from "react-router-dom";
import {FcAbout} from 'react-icons/fc';
import {BiPhone} from 'react-icons/bi';
import Slider from "../Slider/Slider";

const Banner = () => {
  return (
    <div>
      <section className="dark:bg-gray-800  dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold sm:text-6xl">
              <span className="dark:text-sky-600">Rev Up </span>for New
              Adventures!
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Embark on thrilling journeys with our top-notch automobiles,
              designed for
              <br className="hidden md:inline lg:hidden" />
              performance and unforgettable experiences on the open road.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link className="px-8 py-3 text-lg font-semibold rounded dark:bg-sky-600 dark:text-gray-900 flex items-center gap-2">
                <BiPhone className="text-xl"/> Contact
              </Link>
              <Link className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 flex items-center gap-2">
                <FcAbout className="text-xl"/> About us
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
           <Slider/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

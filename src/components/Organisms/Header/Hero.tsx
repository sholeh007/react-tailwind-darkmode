/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef<any>(null);
  const typed = useRef<any>(null);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Design", "Author"],
      typeSpeed: 75,
      backSpeed: 75,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div>
      <div className="absolute bottom-0 right-0 lg:left-0">
        <img
          className="h-[40vh] lg:h-[85vh] mx-auto object-cover"
          src="/img/man.png"
          alt="hero"
        />
      </div>
      {/* circle */}
      <div className="hidden lg:block absolute -bottom-1/4 mx-auto left-0 right-0 rounded-full z-[-10] w-[44rem] h-[44rem] bg-indigo-600"></div>
      {/* text animate */}
      <div className="absolute left-5 text-2xl top-1/3 sm:text-4xl md:text-6xl md:left-16 lg:text-7xl">
        <span className="text-gray-700 dark:text-gray-100 font-light uppercase">
          Frelance
        </span>
        <br />
        <span className="text-red-500 font-bold" ref={el}></span>
      </div>
      {/* Text */}
      <div className="hidden lg:flex lg:flex-col absolute h-fit w-1/3 p-8 rounded-md shadow-md bg-white dark:bg-slate-900 top-0 bottom-0 right-10 m-auto space-y-3">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-gray-100">
          hi, I{"'"}m John
        </h1>
        <p className="text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit sequi
          cupiditate voluptatibus magni ea, hic repudiandae veniam? Dignissimos
          nostrum, doloribus facere soluta tempore suscipit.
        </p>
        <a
          className="inline-block bg-indigo-600 text-slate-100 w-fit py-3 px-6 text-center text-lg rounded-md font-bold hover:bg-indigo-700 hover:text-slate-200"
          href="#contact"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}

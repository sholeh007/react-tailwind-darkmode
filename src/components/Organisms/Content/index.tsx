import { Fragment } from "react";
import { dataSkill, dataService, dataWorks } from "../../../util/data";
import FormControl from "../../Atoms/FormControl";
import Input from "../../Atoms/Input";
import TextArea from "../../Atoms/TextArea";
import Wrap from "../../Molecules/Wrap";

export default function Content() {
  const skils = dataSkill();
  const services = dataService();
  const works = dataWorks();

  return (
    <>
      {/* About Me */}
      <div className="dark:bg-slate-800">
        <section
          id="about"
          className="py-32 container mx-auto md:py-44 grid grid-cols-1 md:grid-cols-2"
        >
          <div className="relative mt-14 md:mt-0 flex flex-col items-center">
            <img
              className="absolute -z-10 w-3/4 top-0"
              src="/img/dots.png"
              alt="dot"
            />
            <div>
              <img
                className="rounded-full w-[60vw] md:w-[30vw] shadow-lg"
                src="/img/portrait.png"
                alt="profile"
              />
            </div>
          </div>
          <div className="px-6 order-first md:order-last flex flex-col md:items-start items-center justify-center space-y-3">
            <h1 className="text-xl text-red-500 uppercase font-bold">
              about me
            </h1>
            <h1 className="text-2xl text-gray-800 dark:text-slate-200 md:text-3xl italic font-semibold">
              Better Design
            </h1>
            <h1 className="text-2xl text-gray-800 dark:text-slate-200 md:text-3xl italic font-semibold">
              Better Experience
            </h1>
            <p className="font-light text-sm md:text-base text-gray-700 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              neque atque itaque eveniet praesentium quasi!
            </p>
            {skils?.map((skil, i) => (
              <Fragment key={i}>
                <h2 className="text-base md:text-lg text-gray-500 dark:text-slate-200">
                  {skil.title}
                </h2>
                <div className="h-2 w-full bg-slate-200 rounded-lg">
                  <div
                    className={`bg-indigo-600 h-2 w-${skil.range} rounded-lg`}
                  ></div>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
      </div>

      {/* Service */}
      <Wrap
        id="service"
        title="Service"
        subTitle="What do I offer?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem alias
            hic laborum molestias non aliquid debitis architecto eum recusandae
            dicta."
      >
        {services?.map((service, i) => (
          <Fragment key={i}>
            <div className="bg-white dark:bg-slate-900 space-y-3 p-4 shadow-md rounded-md lg:hover:scale-110 transition ease-in-out duration-300">
              <img className="w-14" src={`/img/${service.img}`} alt="icon" />
              <h1 className="font-bold text-gray-500 dark:text-slate-100">
                {service.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-light">
                {service.content}
              </p>
              <a
                className="text-blue-500 font-semibold text-sm"
                href={service.link}
              >
                Read More...
              </a>
            </div>
          </Fragment>
        ))}
      </Wrap>

      {/* Works */}
      <Wrap
        id="work"
        title="Portfolio"
        subTitle="Works & Projects"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis neque animi sunt placeat quam mollitia ea velit repellat tenetur eligendi."
      >
        {works?.map((work, i) => (
          <Fragment key={i}>
            <div className="bg-white space-y-3 shadow-md rounded-md lg:hover:scale-110 transition ease-in-out duration-300">
              <img className="w-full" src={`/img/${work.img}`} alt="icon" />
            </div>
          </Fragment>
        ))}
      </Wrap>

      {/* Contact Form */}
      <Wrap
        id="contact"
        title="Contact"
        subTitle="Have Question?"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, magni."
        isForm={true}
      >
        <form className="p-8 space-y-6 flex flex-col items-center">
          <FormControl>
            <Input type="text" placeholder="Name..." />
          </FormControl>
          <FormControl>
            <Input type="email" placeholder="Email..." />
          </FormControl>
          <FormControl>
            <TextArea placeholder="Message..." />
          </FormControl>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-slate-100 hover:text-slate-200 py-3 px-8 rounded-md">
            Submit
          </button>
        </form>
      </Wrap>
    </>
  );
}

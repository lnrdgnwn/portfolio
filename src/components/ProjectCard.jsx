import { LuArrowUpRight } from "react-icons/lu";

const ProjectCard = ({ image = "", title, year, link }) => {
  return (
    <div className="relative overflow-hidden group sm:w-96 sm:h-96 w-72 h-72">
      <div>
        <img
          src={`/images/${image}.png`}
          alt=""
          className="sm:w-96 sm:h-96 w-72 h-72 group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover"
        />
      </div>
      <div className="p-5 group-hover:bg-[#000000c0] absolute top-0 left-0 w-full h-full flex flex-col justify-end transition-transform transform translate-y-full group-hover:translate-y-0 duration-1000">
        <span className="text-4xl text-white font-montserrat">{year}</span>
        <h1 className="text-6xl font-semibold text-white font-montserrat">
          {title}
        </h1>
      </div>
      {/* "Visit" link */}
      <a
        href={link}
        className="absolute bg-primary-400 top-0 w-20 h-20 flex justify-center items-center right-0 text-black text-lg transition-transform transform translate-x-full group-hover:translate-x-0 duration-500"
      >
        <LuArrowUpRight className=" text-6xl transition-transform duration-75 group-hover:-rotate-[-45deg] " />
      </a>
    </div>
  );
};
export default ProjectCard;

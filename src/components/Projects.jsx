import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="bg-dark pb-40" id="project">
      <div className="bg-primary-400 lg:mx-16 mx-5 pb-20 pt-10 sm:rounded-b-[100px] rounded-b-[50px] px-10">
        <h1 className="lg:text-8xl sm:text-5xl text-3xl font-bold  text-center">
          MY PROJECTS
        </h1>
      </div>
      <div className="lg:mx-16 mx-5 mt-5 flex flex-wrap justify-center gap-5">
        <ProjectCard
          image="projek-1"
          year="2024"
          title="CINEMATIX"
          link="https://github.com/lnrdgnwn/cinematix"
        />
        <ProjectCard
          image="projek-2"
          year="2024"
          title="Note-it"
          link="https://github.com/lnrdgnwn/note-it/"
        />
        <ProjectCard
          image="projek-3"
          year="2023"
          title="Avana Hotel"
          link="https://github.com/lnrdgnwn/reactjs-avana-hotel"
        />
      </div>
    </section>
  );
};
export default Projects;

const About = () => {
  return (
    <section className="bg-dark py-20" id="about">
      <div className="md:flex items-center justify-between lg:mx-16 mx-5 lg:gap-20 gap-8">
        <div className="bg-darkgrey p-5">
          <img src="/images/myPhoto.jpg" alt="profile" className="w-[600px]" />
          <h2 className="font-semibold text-5xl mt-2 text-left text-white">
            Leonardo Gunawan
          </h2>
        </div>
        <div className="w-full lg:w-2/3 text-xl lg:text-3xl text-white sm:mt-0 mt-5">
          I am a<span className="text-primary-300"> Frontend Developer </span>
          with approximately 1 year of experience in programming. My expertise
          includes HTML, CSS, JavaScript, PHP, and frameworks like React.js. I
          have a strong passion for working in the tech industry.
        </div>
      </div>
    </section>
  );
};
export default About;

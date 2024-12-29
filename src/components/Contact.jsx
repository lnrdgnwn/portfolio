import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-primary-100">
      <div className="container mx-auto flex flex-col md:flex-row gap-16 items-center justify-center text-center lg:text-left">
        {/* Image Section */}
        <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
          <img
            src="images/contact.jpg"
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text and Form Section */}
        <div className="lg:w-2/3 w-full flex flex-col items-center lg:items-start">
          <h2 className="text-4xl font-semibold text-dark mb-4 font-montserrat">
            Let's Get to Know Each Other
          </h2>
          <p className="text-lg text-dark mb-8 font-montserrat">
            I'm always open to new opportunities and collaborations. Let’s talk
            about how we can work together!
          </p>

          <form
            action="https://mail.google.com/mail/?view=cm&fs=1&to=leonardogunawan15@gmail.com"
            method="post"
            encType="text/plain"
            className="w-full max-w"
          >
            <button
              type="submit"
              className="w-full py-4 text-2xl text-white font-montserrat bg-dark rounded-lg hover:bg-primary-600 transition duration-300"
            >
              Contact Me!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

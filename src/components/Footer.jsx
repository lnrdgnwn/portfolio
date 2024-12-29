import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-400 h-96 flex justify-center">
      <div className="bg-dark sm:rounded-t-[100px] rounded-t-[80px] flex flex-col items-center justify-center w-full py-10 px-5">
        <h1 className="text-white sm:text-5xl text-2xl font-semibold md:mb-10 mb-5 text-center font-montserrat">
          Thankyou For Coming!
        </h1>
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-white font-montserrat">You can find me on</h4>
          <div className="flex items-center sm:gap-11 gap-8 text-white sm:text-5xl text-4xl">
            <a href="https://www.instagram.com/lnrdgnwn/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/leonardo-gunawan-b10497288/">
              <FaLinkedin />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=leonardogunawan15@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://github.com/lnrdgnwn">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

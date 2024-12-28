const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-11 sm:px-16 px-5 bg-primary-400">
      <span className="text-base sm:text-[24px] font-bold">LEONARDO</span>
      <div className="flex items-center md:gap-24 gap-4">
        <a href="#about" className="sm:text-[24px] text-base">
          About
        </a>
        <a href="#project" className="sm:text-[24px] text-base">
          Project
        </a>
        <a href="#contact" className="sm:text-[24px] text-base">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import ProgesLogoImg from "../images/progesLogo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-cyan-500 font-mono font-bold  text-[35px] flex items-center cursor-pointer"
            >
               <img
              src={ProgesLogoImg}
              alt="Agency Illustration"
              className="w-10 h-auto bg-white max-w-lg mx-auto rounded-lg shadow-lg"
            />
             PROGES
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="home" smooth={true} duration={500} className="text-gray-600 hover:text-sky-300 cursor-pointer">Home</Link>
            <Link to="about" smooth={true} duration={500} className="text-gray-600 hover:text-sky-300 cursor-pointer">About us</Link>
            <Link to="services" smooth={true} duration={500} className="text-gray-600 hover:text-sky-300 cursor-pointer">Services</Link>
            <Link to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-sky-300 cursor-pointer">Contact us</Link>
            <Link to="testimonials" smooth={true} duration={500} className="text-gray-600 hover:text-sky-300 cursor-pointer">Testimonials</Link>
            {/* <button className="bg-indigo-500 hover:bg-sky-500/75 text-white px-6 py-2 rounded-full  transition-colors">
              Sign Up
            </button>*/}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="home" smooth={true} duration={500} className="block px-3 py-2 text-gray-600 hover:text-sky-300 cursor-pointer" onClick={closeMenu}>Home</Link>
              <Link to="about" smooth={true} duration={500} className="block px-3 py-2 text-gray-600 hover:text-sky-300 cursor-pointer" onClick={closeMenu}>About us</Link>
              <Link to="services" smooth={true} duration={500} className="block px-3 py-2 text-gray-600 hover:text-sky-300 cursor-pointer" onClick={closeMenu}>Services</Link>
              <Link to="contact" smooth={true} duration={500} className="block px-3 py-2 text-gray-600 hover:text-sky-300 cursor-pointer" onClick={closeMenu}>Contact us</Link>
              <Link to="testimonials" smooth={true} duration={500} className="block px-3 py-2 text-gray-600 hover:text-sky-300 cursor-pointer" onClick={closeMenu}>Testimonials</Link>
             {/* <button className="w-full text-center bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
                Sign Up
              </button>*/} 
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import { use, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profileData } from "../data/profileData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    setAnimate(true)
    const t = setTimeout(() => setAnimate(false), 300 );
    return () => clearTimeout(t);
  }, [location.pathname]);


  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

    const navClass = ({ isActive }) =>
    isActive 
       ? "text-white bg-orange-400 font-semibold p-2 rounded-lg" 
       : "text-gray-700 p-2 hover:text-orange-500 hover:bg-orange-50 hover:rounded-lg hover:scale-105";
       
    const mobileNav = ({ isActive }) =>
    isActive 
       ? "text-white bg-orange-400 font-semibold py-3 px-5 " 
       : "text-gray-700 py-3 px-4 hover:text-orange-500 hover:bg-orange-50 "; 

  return (
    <header className={`font-helvetica bg-white fixed top-0 left-0 w-full z-50 h-auto shadow drop-shadow-md mx-auto
      transform transition-all duration-500 ease-out
      ${animate ? "translate-y-5 opacity-100" : "-translate-y-0 opacity-100"} `}
    >
      <div
        ref={menuRef}
        className=" max-w-7xl w-full mx-auto
        flex items-center justify-between   
         px-4 sm:px-6 lg:px-8
         py-2 sm:py-3 lg:py-4">

        <Link to="/" className="p-1 hover:text-orange-500 text-xl sm:text-2xl lg:text-3xl font-semibold">
          {profileData.name}
        </Link>


        <nav className="hidden md:flex gap-6">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/project" className={navClass}>Projects</NavLink>
          <NavLink to="/experience" className={navClass}>Experience</NavLink>
          <NavLink to="/certificate" className={navClass}>Certificate</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </nav>

        <button
         onClick={toggleMenu}
         aria-label="Toggle menu"
         className={`md:hidden w-10 h-10 rounded-lg focus:outline-none
         flex flex-col items-center justify-center gap-1.5
         transition-colors duration-200
         ${isMenuOpen ? "bg-orange-50" : "hover:bg-orange-50"} `}
         >

          <span
            className={`w-6 h-[3px] bg-black transition-all duration-300 rounded-sm
              ${isMenuOpen ? "rotate-45 translate-y-2.5 bg-orange-500 rounded-sm" : "bg-black"} `} />

          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 rounded-sm
              ${isMenuOpen ? "opacity-0 scale-x-0" : ""} `} />

          <span
            className={`w-6 h-[3px] bg-black transition-all duration-300 rounded-sm
              ${isMenuOpen ? "-rotate-45 -translate-y-2.5  bg-orange-500 rounded-sm" : "bg-black"} `} />
        </button>
      </div>

      <div data-testid="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}
        `} >
          <div className="max-w-7xl mx-auto">
        <nav className="flex flex-col">
           {[
             { to: "/", label: "Home" },
             { to: "/about", label: "About" },
             { to: "/project", label: "Projects" },
             { to: "/experience", label: "Experience" },
             { to: "/certificate", label: "Certificate" },
             { to: "/contact", label: "Contact" },
           ].map((item, index) => (
         <NavLink
          key={item.to}
           to={item.to}
           onClick={() => setIsMenuOpen(false)}
           className={({ isActive }) =>
         ` ${mobileNav({ isActive })}
         transform transition-all duration-500 ease-in-out
         ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-300 opacity-0"}`
        }
        style={{ transitionDelay: `${index * 100}ms` }}>
        {item.label}
       </NavLink>
       ))}
       </nav>
       </div>
      </div>
    </header>
  );
}

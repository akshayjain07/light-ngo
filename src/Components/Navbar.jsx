// Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20`}
      style={{ backgroundColor: scrolled ? '#343A40' : 'transparent' }}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            LIGHT RAIPUR &nbsp;
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-5 lg:gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500 text-[18px] font-medium cursor-pointer pt-1`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
          
          <li key="donate">
            <button
              className={`${
                active === "donate" ? "bg-yellow-600 text-white" : "bg-yellow-400 text-black"
              } hover:bg-yellow-500 font-medium text-[18px] cursor-pointer py-1 px-4 rounded-lg`}
              onClick={() => setActive("donate")}
            >
              <Link to="/donate" className="block w-full h-full">Donate</Link>
            </button>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
              <li key="donate">
                <button
                  className={`${
                    active === "donate" ? "bg-yellow-600 text-white" : "bg-yellow-400 text-black"
                  } hover:bg-yellow-500 font-medium text-[18px] cursor-pointer py-1 px-4 rounded-lg`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("donate");
                  }}
                >
                  <Link to="/donate" className="block w-full h-full">Donate</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

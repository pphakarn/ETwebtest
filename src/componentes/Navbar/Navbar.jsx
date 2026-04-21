import React, { useState, useEffect } from "react";
import { NavbarMenu } from "../../mockData/data";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    // ถ้ามี scrollTo
    if (item.scrollTo) {
      navigate(item.path);

      setTimeout(() => {
        const section = document.getElementById(item.scrollTo);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 200);

      return;
    }

    // ถ้าเป็นลิงก์ธรรมดา
    if (item.link) {
      navigate(item.link);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-[#193F7D]/30 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-4">
            <img src="picture/PIM1.png" className="w-10 md:w-12" alt="PIM Logo" />
            <img src="picture/ETLOGO.png" className="w-32 md:w-40" alt="DIT Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block ml-auto">
            <ul className="flex items-center gap-6 text-white">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item)}
                    className="inline-block py-1 px-3 hover:text-blue-400 font-semibold transition"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Button */}
          <div className="flex items-center gap-4 text-white">


            <button
              className="lg:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes /> : <MdMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} onMenuClick={handleMenuClick} />
    </>
  );
};

export default Navbar;

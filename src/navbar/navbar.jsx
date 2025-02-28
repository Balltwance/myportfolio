import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = `#${section.getAttribute("id")}`;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <ul className="menu">
        <li>
          <a href="#Home" className={active === "#Home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#Education"
            className={active === "#Education" ? "active" : ""}
          >
            Education
          </a>
        </li>
        <li>
          <a href="#Skill" className={active === "#Skill" ? "active" : ""}>
            Skill
          </a>
        </li>
        <li>
          <a href="#Project" className={active === "#Project" ? "active" : ""}>
            Project
          </a>
        </li>
        <li>
          <a
            href="#Contract"
            className={active === "#Contract" ? "active" : ""}
          >
            Contract
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

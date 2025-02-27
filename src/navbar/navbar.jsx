import React , { useState, useEffect }from 'react';
import './navbar.css';


const Navbar = () => {
    const [active, setActive] = useState("");
    useEffect(() => {
      const handleHashChange = () => {
        setActive(window.location.hash);
      };
  
      window.addEventListener("hashchange", handleHashChange);
      handleHashChange(); // เรียกครั้งแรกเพื่อกำหนดค่าเริ่มต้น
  
      return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);
  
    return (
      <header>
      <ul className="menu">
        <li><a href="#Home" className={active === "#Home" ? "active" : ""}>Home</a></li>
        <li><a href="#Education" className={active === "#Education" ? "active" : ""}>Education</a></li>
        <li><a href="#Skill" className={active === "#Skill" ? "active" : ""}>Skill</a></li>
        <li><a href="#Contact" className={active === "#Contact" ? "active" : ""}>Contact</a></li>
      </ul>
    </header>
    );
};

export default Navbar;
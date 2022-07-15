import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobaleContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobaleContext();
  const displaySebmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
  const center = (tempBtn.left + tempBtn.right)/ 2;
  const bottom = tempBtn.bottom -3
    openSubmenu(page,{center,bottom});
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySebmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySebmenu}>
              developer
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySebmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;

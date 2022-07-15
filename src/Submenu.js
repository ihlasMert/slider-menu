import React, { useState, useRef, useEffect } from "react";
import { useGlobaleContext } from "./context";
const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobaleContext();
const container = useRef(null)
  useEffect(() => {
    const submenu = container.current
    const {center, bottom} = location;
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location]);

  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`} ref={container}>
      submenu
    </aside>
  );
};

export default Submenu;

import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
const [location, setLocation] =useState({})
  const openSidebar = () => {
    setIsSideBarOpen(true); 
  };
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates)
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSidebar,
        openSubmenu,
        closeSubmenu,
        closeSidebar,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobaleContext =()=>{
    return useContext(AppContext)
}

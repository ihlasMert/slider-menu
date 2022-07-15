import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

  const openSidebar = () => {
    setIsSideBarOpen(true);
  };
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };

  const openSubmenu = () => {
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobaleContext =()=>{
    return useContext(AppContext)
}

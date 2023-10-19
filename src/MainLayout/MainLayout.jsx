import { createContext, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

import { Outlet } from "react-router-dom";

export const ThemeContext = createContext(null);

const MainLayout = () => {
  const [isDark, setDark] = useState(false);
  const themeInfo = {isDark, setDark};
  return (
    <ThemeContext.Provider value={themeInfo}>
      <div data-theme={isDark ? "night" : "light"} className="font-poppins">
      <div className="max-w-screen-xl mx-auto">
        <Navbar  />
        <Outlet/>
      </div>
    </div>
    </ThemeContext.Provider>
    
  );
};

export default MainLayout;

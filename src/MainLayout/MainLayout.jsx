import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";

const MainLayout = () => {
  const [isDark, setDark] = useState(false);
  return (
    <div data-theme={isDark ? "night" : "light"} className="font-poppins">
      <div className="max-w-screen-xl mx-auto">
        <Navbar theme={[isDark, setDark]} />
        <Home/>
      </div>
    </div>
  );
};

export default MainLayout;

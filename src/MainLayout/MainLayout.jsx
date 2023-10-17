import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  const [isDark, setDark] = useState(false);
  return (
    <div data-theme={isDark ? "night" : "light"}>
      <div className="max-w-screen-xl mx-auto">
        <Navbar theme={[isDark, setDark]} />
        <h2 className="text-3xl font-poppins font-bold">This is main layout</h2>
      </div>
    </div>
  );
};

export default MainLayout;

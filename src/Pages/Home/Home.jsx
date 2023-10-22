import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";

import Mission from "../../Components/Mission/Mission";
import Questions from "../../Components/Questions/Questions";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Brands />
      <ChooseUs />
      <div className="lg:flex items-start gap-9 mt-8">
        <Mission />
        <Questions />
      </div>
    </div>
  );
};

export default Home;

import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import Footer from "../../Components/Footer/Footer";
import PropTypes from "prop-types";
import Mission from "../../Components/Mission/Mission";
import Questions from "../../Components/Questions/Questions";

const Home = ({ theme }) => {
  return (
    <div className="">
      <Banner />
      <Brands />
      <ChooseUs />
      <div className="lg:flex items-start gap-9 mt-8">
        <Mission />
        <Questions />
      </div>
      <Footer theme={theme} />
    </div>
  );
};
Home.propTypes = {
  theme: PropTypes.array.isRequired,
};

export default Home;

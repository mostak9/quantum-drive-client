import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import Footer from "../../Components/Footer/Footer";
import PropTypes from "prop-types";

const Home = ({theme}) => {
    return (
        <div className="">
            <Banner/>
            <Brands/>
            <ChooseUs/>
            <Footer theme={theme}/>
        </div>
    );
};
Home.propTypes = {
    theme: PropTypes.array.isRequired,
  };

export default Home;
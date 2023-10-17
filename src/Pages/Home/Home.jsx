import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Footer from "../../Components/Footer/Footer";
import PropTypes from "prop-types";

const Home = ({theme}) => {
    return (
        <div className="">
            <Banner/>
            <Brands/>
            <Footer theme={theme}/>
        </div>
    );
};
Home.propTypes = {
    theme: PropTypes.array.isRequired,
  };

export default Home;
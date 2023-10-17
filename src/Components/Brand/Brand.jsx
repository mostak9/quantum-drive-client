import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  return (
    <Link>
      <div className="card card-sm shadow-lg glass transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500">
        <figure className="">
          <img src={brand.img} alt="car!" className="w-full h-40" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand.brand_name}</h2>
        </div>
      </div>
    </Link>
  );
};

Brand.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default Brand;

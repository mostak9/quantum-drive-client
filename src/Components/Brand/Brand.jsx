import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  return (
    <Link>
      {/* <div className="relative card  shadow-lg px-0 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500">
        <figure className="">
          <img src={brand.img} alt="car!" className="w-full rounded-lg h-40" />
        </figure>
        <div className="card-body h-11">
          <h2 className="card-title">{brand.brand_name}</h2>
        </div>
        <div className="absolute backdrop-brightness-75 bg-gray-700 w-full py-5 px-7 bottom-0 text-xl font-bold text-white rounded-b-lg">
        {brand.brand_name}
        </div>
      </div> */}
      <div
  className="block max-w-[18rem] rounded-lg bg-gray-700">
  <div className="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      className="rounded-t-lg h-20 w-full"
      src={brand.img}
      alt="" />
  </div>
  <div className="p-6">
    <h1 className="text-white font-bold">{brand.brand_name}</h1>
  </div>
</div>
    </Link>
  );
};

Brand.propTypes = {
  brand: PropTypes.object.isRequired,
};

export default Brand;

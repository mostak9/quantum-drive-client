import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const { name, image, price, rating, brand, type, details, _id } = cart;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            className="w-full h-44"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="mt-1 text-sm ">
                <div className="grid grid-cols-2 gap-4">
                    <p><span className="font-bold">Brand:</span> {brand}</p>
                    <p><span className="font-bold">Type:</span> {type}</p>
                    <p className="flex gap-1 items-center"><span className="font-bold ">Price:</span> <BsCurrencyDollar/>{price}</p>
                    <p><span className="font-bold">Rating:</span> {rating}</p>
                </div>
                <div className="flex justify-between items-center">
                    
                </div>
                
            </div>
          <div className="card-actions ">
            <button className="btn btn-error w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
};

export default Cart;

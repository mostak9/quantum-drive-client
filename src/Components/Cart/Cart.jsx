import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";

import swal from "sweetalert";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Cart = ({ cart, setCarts, carts }) => {
  const { name, image, price, rating, brand, type, details, _id } = cart;
  console.log(setCarts, carts);
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              swal("Success!", "Product deleted form cart", "success");
              const remaining = carts.filter((cart) => cart._id !== _id);
              setCarts(remaining);
            }
          });
      } else {
        swal("Delete cancelled!");
      }
    });
  };
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="w-full h-44" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="mt-1 text-sm ">
            <div className="grid grid-cols-2 gap-4">
              <p>
                <span className="font-bold">Brand:</span> {brand}
              </p>
              <p>
                <span className="font-bold">Type:</span> {type}
              </p>
              <p className="flex gap-1 items-center">
                <span className="font-bold ">Price:</span> <BsCurrencyDollar />
                {price}
              </p>
              <p className="flex">
                <span className="font-bold">Rating:</span> <Rating style={{maxWidth: 100}} value={rating} readOnly />
              </p>
            </div>
            <div className="flex justify-between items-center"></div>
          </div>
          <div className="card-actions ">
            <button onClick={handleDelete} className="btn btn-error w-full">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  setCarts: PropTypes.func.isRequired,
  carts: PropTypes.array.isRequired,
};

export default Cart;

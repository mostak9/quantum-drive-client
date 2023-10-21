import PropTypes from "prop-types";

const BrandProduct = ({ product }) => {
  const { name, image, price, rating, brand, type, details } = product;
  return (
    <div>
      <div className=" border rounded-xl shadow-sm sm:flex dark:shadow-slate-700/[.7] space-y-6">
        <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
          <img
            className="w-full h-full absolute top-0 left-0 object-cover"
            src={image}
            alt="Image Description"
          />
        </div>
        <div className="flex flex-wrap">
          <div className="p-4 flex flex-col h-full sm:p-7">
            <h3 className="text-lg font-bold">
              {name}
            </h3>
            
            <p className="mt-1 text-xs">
              {details.length > 50 ? details.slice(0, 50) : details}....
            </p>
            <div className="mt-1 text-sm ">
                <div className="flex justify-between items-center">
                    <p><span className="font-bold">Brand:</span> {brand}</p>
                    <p><span className="font-bold">Type:</span> {type}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p><span className="font-bold">Price:</span> {price}</p>
                    <p><span className="font-bold">Rating:</span> {rating}</p>
                </div>
                
            </div>
            <div className="mt-7 sm:mt-auto">
              <div className="flex flex-col items-center gap-4 mt-5">
                <button className="btn bg-sky-600 w-full">Details</button>
                <button className="btn btn-outline border-sky-600 text-sky-600 w-full">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default BrandProduct;

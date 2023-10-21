import { useLoaderData, useParams } from "react-router-dom";
import AdvertismentSlider from "../../Components/AdvertismentSlider/AdvertismentSlider";
import BrandProduct from "../../Components/BrandProduct/BrandProduct";

const BrandProducts = () => {
  const products = useLoaderData();
  const params = useParams();
  console.log(products);
  console.log(params.id);
  return (
    <div>
      <AdvertismentSlider />
      <div>
        {/* title */}
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold">Our <span className="text-sky-600">{params.id}</span> collections</h1>
        <hr className="border-2 border-sky-600 max-w-[120px] my-4 mx-auto rounded-md" />
        <p className="max-w-2xl mx-auto mt-5  text-gray-400">
          We have trusted dealer of {params.id}
        </p>
      </div>
      {/* products */}
      {
        products.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 pb-6 mt-10 px-5 lg:px-0">
        {
            products.map(product => <BrandProduct key={product.id} product={product} />)
        }
      </div> : 
      <div className="text-center pb-6 mt-10">
        <h1 className="text-4xl font bold">This collection is over. We will add soon this product</h1>
      </div>
      }
      </div>
    </div>
  );
};

export default BrandProducts;

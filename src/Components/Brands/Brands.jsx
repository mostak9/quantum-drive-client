import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold">We Provides</h1>
        <p className="max-w-2xl mx-auto mt-5  text-gray-400">
          Empowering Your Journey: Elevating the Automotive Experience with
          Unmatched Quality, Innovation.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            brands.map(brand => <Brand key={brand.id} brand={brand} />)
        }
      </div>
    </div>
  );
};

export default Brands;

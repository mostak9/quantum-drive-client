import { useLoaderData } from "react-router-dom";
import AdvertismentSlider from "../../Components/AdvertismentSlider/AdvertismentSlider";

const BrandProducts = () => {
    const products = useLoaderData;
    console.log(products);
    return (
        <div>
            <AdvertismentSlider/>
        </div>
    );
};

export default BrandProducts;
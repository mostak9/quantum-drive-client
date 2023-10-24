import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { A11y, Navigation, Pagination } from "swiper/modules";
import SwiperNav from "../SwiperNav/SwiperNav";
// import '../Brand/Brand.css';

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="text-center mt-16" data-aos="fade-left">
        <h1 className="text-3xl font-bold">We Provides</h1>
        <hr className="border-2 border-sky-600 max-w-[120px] my-4 mx-auto rounded-md" />
        <p className="max-w-2xl mx-auto mt-5  text-gray-400">
          Empowering Your Journey: Elevating the Automotive Experience with
          Unmatched Quality, Innovation.
        </p>
      </div>
  
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-0 md:hidden">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand} />
        ))}
      </div>
      <div className="hidden md:block mt-8 max-w-4xl overflow-hidden mx-auto">
      <Swiper
      height={600}
        slidesPerView={3}
        spaceBetween={30}
        // navigation = {true}

        autoplay={{
          delay: 3000
        }}
        // loop = {true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, A11y]}
        className="mySwiper"
      >
        <div className="my-4">
          <SwiperNav/>
        </div>
        {brands.map((brand) => (
          <SwiperSlide className="h-full" key={brand.id}>
            <Brand brand={brand} />
          </SwiperSlide>
        ))}
        
      </Swiper>
      
      </div>
    </div>
  );
};

export default Brands;

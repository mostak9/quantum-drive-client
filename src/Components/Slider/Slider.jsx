
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css/bundle";
import { useEffect, useState } from "react";

const Slider = () => {
    const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);
  return (
    <div className="">
           <Swiper
        //    width={500}
        //    height={500}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
        autoplay = {{
            delay: 3000,
        }
        }
        effect={'fade'}
        loop ={true}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="h-64 md:h-[400px] w-[300px] md:w-[500px]"
      >
        {
            banners.map(banner => <SwiperSlide  className="bg-center bg-cover" style={{backgroundImage: `url('${banner.car_img}')`}} key={banner.id}></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import slider1 from '../../assets/slider_1.jpg'
import slider2 from '../../assets/slider-2.jpg';
import slider3 from '../../assets/slider-3.jpg';


const AdvertismentSlider = () => {
  return (
    <div>
      <Swiper
        height={600}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 1500,
        }}
        loop = {true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="h-full">
            <div>
                <div style={{backgroundImage: `url(${slider1})`}} className="bg-cover bg-center min-h-[70vh] text-white text-center">
                    <div className="bg-black/60 w-full h-[70vh] flex items-center justify-center flex-col">
                    <h1 className="text-5xl font-bold">New Arrivals</h1>
                    <p className="max-w-lg mx-auto mt-5">Explore Our Newest Additions! Discover the latest arrivals in our showroom, featuring cutting-edge technology and top-notch performance.</p>
                    <button className="btn bg-sky-600 border-0 mt-5">Explore New Arrivals</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
            <div>
                <div style={{backgroundImage: `url(${slider2})`}} className="bg-cover bg-center min-h-[70vh] text-white text-center">
                    <div className="bg-black/60 w-full h-[70vh] flex items-center justify-center flex-col">
                    <h1 className="text-5xl font-bold">Limited-Time Offers</h1>
                    <p className="max-w-lg mx-auto mt-5">Limited-Time Offers Await You! Don't miss out on our exclusive deals. Get behind the wheel of your dream car today!</p>
                    <button className="btn bg-sky-600 border-0 mt-5">View Offers</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
            <div>
                <div style={{backgroundImage: `url(${slider3})`}} className="bg-cover bg-center min-h-[70vh] text-white text-center">
                    <div className="bg-black/60 w-full h-[70vh] flex items-center justify-center flex-col">
                    <h1 className="text-5xl font-bold">Service and Maintenance Packages</h1>
                    <p className="max-w-lg mx-auto mt-5">Service Excellence Guaranteed! Explore our range of service and maintenance packages to keep your vehicle in top condition.</p>
                    <button className="btn bg-sky-600 border-0 mt-5">Schedule Service.</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdvertismentSlider;

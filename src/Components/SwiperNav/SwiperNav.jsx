import { useSwiper } from "swiper/react";
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';

const SwiperNav = () => {
  const nav = useSwiper();
  return (
    <div className="flex items-center gap-3">
      <button onClick={() => nav.slidePrev()} className="btn - btn-circle">
        <BsArrowLeft className="text-xl"/>
      </button>
      <button onClick={() => nav.slideNext()} className="btn  btn-circle">
        <BsArrowRight className="text-xl font-bold"/>
      </button>
    </div>
  );
};

export default SwiperNav;

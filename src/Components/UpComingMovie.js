// function UpComingMovie() {
//     return (
//         <div>

//         </div>
//     )
// }

// export default UpComingMovie

import image1 from "../tempimage/Image1.jpg";
import image2 from "../tempimage/Image2.jpg";
import image3 from "../tempimage/Image3.jpg";

// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow"; // Import the effect styles
import "swiper/css/pagination";

export default function UpComingMovie() {
  const swiperRef = useRef(null);
  return (
    <div>UpComingMovie</div>

    // <div>
    //   {/* Custom Buttons placed anywhere */}
    //   <button onClick={() => swiperRef.current.slidePrev()}>Go Back</button>
    //   <button onClick={() => swiperRef.current.slideNext()}>Go Next</button>

    //   <Swiper
    //     loop={true}
    //     onSwiper={(swiper) => {
    //       swiperRef.current = swiper;
    //     }}
    //   >
    //     <SwiperSlide>Slide 1</SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>
    //   </Swiper>
    // </div>
  );
}
// <Swiper
//   effect={"coverflow"}
//   grabCursor={true}
//   centeredSlides={true}
//   slidesPerView={"auto"}
//   coverflowEffect={{
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   }}
//   pagination={true}
//   modules={[EffectCoverflow, Pagination]}
//   className="mySwiper"
// >
//   <SwiperSlide>
//     <img src={image1} alt="" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src={image2} alt="" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src={image3} alt="" />
//   </SwiperSlide>
// </Swiper>

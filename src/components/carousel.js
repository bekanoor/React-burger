import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/src/public/img/slider1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/public/img/slider2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/public/img/slider3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/public/img/slider4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/public/img/slider5.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

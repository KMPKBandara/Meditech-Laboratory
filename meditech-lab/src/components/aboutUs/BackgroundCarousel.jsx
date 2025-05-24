'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const backgroundPhotos = [
  "/images/aboutus-backgroud-1.jpg",
  "/images/aboutus-backgroud-2.jpg",
  "/images/aboutus-backgroud-3.jpg",
];

const BackgroundCarousel = () => (
  <Swiper
    modules={[Autoplay, EffectFade]}
    autoplay={{ delay: 3000 }}
    loop
    effect="fade"
    className="w-full h-[400px] mb-10"
  >
    {backgroundPhotos.map((photo, index) => (
      <SwiperSlide key={index}>
        <img src={photo} alt={`Background ${index + 1}`} className="w-full h-[400px] object-cover" />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default BackgroundCarousel;

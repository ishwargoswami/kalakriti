import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image:
      "https://abirpothi.com/wp-content/uploads/2024/05/Courtesy-Craftam.jpg",
    title: "Traditional Handicrafts",
    description: "Discover the beauty of Indian artistry",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/collection-hand-woven-textiles-from-tribe_1064589-10478.jpg",
    title: "Handwoven Textiles",
    description: "Each thread tells a story",
  },
  {
    image:
      "https://twpottery.ca/wp-content/uploads/2024/03/Website-Banner-Bud-Vase-1.jpeg",
    title: "Pottery Collection",
    description: "Crafted with love and tradition",
  },
];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="h-[80vh] w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
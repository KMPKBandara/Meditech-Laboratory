import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const directors = [
  { name: "Dr. Nimal Perera", role: "Managing Director", image: "/images/director1.jpg" },
  { name: "Dr. Kumari Silva", role: "Operations Director", image: "/images/director2.jpg" },
  { name: "Mr. Saman Weerasinghe", role: "Finance Director", image: "/images/director3.jpg" },
];

const DirectorCarousel = () => (
  <>
    <h3 className="text-3xl font-semibold text-blue-800 mb-6">Director Board</h3>
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      pagination={{ clickable: true }}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="mb-16"
    >
      {directors.map((d, i) => (
        <SwiperSlide key={i}>
          <div className="bg-blue-50 p-6 rounded-2xl shadow-lg mx-4 hover:shadow-xl transition">
            <img src={d.image} alt={d.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h4 className="text-xl font-semibold text-blue-700 mb-1">{d.name}</h4>
            <p className="text-gray-600">{d.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);

export default DirectorCarousel;

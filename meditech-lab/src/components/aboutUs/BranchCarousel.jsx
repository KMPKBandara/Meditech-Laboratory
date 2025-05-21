import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const branches = [
  { location: "Balangoda", description: "...", image: "/images/balangoda.jpg" },
  { location: "Rathnapura", description: "...", image: "/images/rathnapura.jpg" },
  { location: "Welimada", description: "...", image: "/images/welimada.jpg" },
  { location: "Kalawana", description: "...", image: "/images/kalawana.jpg" },
];

const BranchCarousel = () => (
  <>
    <h3 className="text-3xl font-semibold text-blue-800 mb-6">Our Branches</h3>
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-10"
    >
      {branches.map((b, i) => (
        <SwiperSlide key={i}>
          <div className="bg-blue-50 rounded-2xl shadow-lg p-6 mx-2 hover:shadow-xl transition">
            <img src={b.image} alt={b.location} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h4 className="text-xl font-semibold text-blue-700 mb-2">{b.location}</h4>
            <p className="text-gray-600 text-sm">{b.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);

export default BranchCarousel;

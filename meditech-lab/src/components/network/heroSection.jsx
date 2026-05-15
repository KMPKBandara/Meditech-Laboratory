import Image from "next/image";
import { MapPin, Building2 } from "lucide-react";
import BalangodaImg from "../../../src/assets/images/branch/Balangoda_Branch.jpg";


const HeroSection = () => (
  <div className="text-center mt-16 mb-16 shadow-lg rounded-[20px] py-32 px-6 bg-cover bg-center bg-no-repeat relative overflow-hidden">
    <Image
      src={BalangodaImg}
      alt="Branch Background"
      fill
      priority
      className="object-cover opacity-45"
    />

    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-white/20 rounded-[20px]"></div>

    <div className="relative z-10">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg mb-6">
        <Building2 className="w-6 h-6 text-blue-600" />
        <span className="text-blue-800 font-semibold">
          Trusted Healthcare Network
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Laboratory Network
      </h1>

      <p className="text-xl text-black mb-8 max-w-4xl mx-auto leading-relaxed">
        MediTech Laboratory operates a comprehensive network of branches and
        collection centers across Sri Lanka, delivering world-class diagnostic
        services with cutting-edge technology and compassionate care.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-6">
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
          <MapPin className="w-5 h-5 text-blue-500" />
          <span className="text-blue-700 font-medium">
            4 Branches • 40+ Centers
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
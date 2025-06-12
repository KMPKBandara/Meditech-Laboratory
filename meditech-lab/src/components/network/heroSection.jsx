import { MapPin, Building2,  Star } from "lucide-react";
const HeroSection = () => (

  <div className="text-center mb-16 bg-white/80 shadow-lg rounded-[20px]">
    <div className="inline-flex items-center gap-3 bg-white/80 px-6 py-3 rounded-full shadow-lg mb-6">
      <Building2 className="w-6 h-6 text-blue-600" />
      <span className="text-blue-800 font-semibold">Trusted Healthcare Network</span>
    </div>
    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
      Our Laboratory Network
    </h1>
    <p className="text-xl text-black-700 mb-8 max-w-4xl mx-auto leading-relaxed">
      MediTech Laboratory operates a comprehensive network of branches and collection
      centers across Sri Lanka, delivering world-class diagnostic services with 
      cutting-edge technology and compassionate care.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
        <MapPin className="w-5 h-5 text-blue-500" />
        <span className="text-blue-700 font-medium">4 Branches • 44 Centers</span>
      </div>
    </div>
  </div>
);


export default HeroSection;
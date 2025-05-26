"use client"

import React, { useState } from "react";
import { MapPin, Phone, Mail, Building2, Navigation, Clock, Star, ChevronRight } from "lucide-react";
import BackgroundElements from "@/components/network/background";

// Data
const branches = [
  {
    name: "Balangoda (Main Branch)",
    address: "No. 123 Main Street, Balangoda, Sri Lanka",
    phone: "+94 45 222 3344",
    email: "balangoda@meditech.lk",
    specialties: ["Blood Tests", "X-Ray", "ECG", "Ultrasound"],
    rating: 4.8,
    hours: "24/7",
    collectionCenters: [
      {
        name: "Imbulpe Collection Center",
        address: "No. 10, Imbulpe Road, Balangoda",
      },
      {
        name: "Pambahinna Collection Center",
        address: "No. 22, Pambahinna Junction, Balangoda",
      },
    ],
    detailedCenters: [
      {
        id: 1,
        address: "No. 123 Main Street, Balangoda, Sri Lanka",
        phone: "+94 45 222 3344",
        email: "balangoda@meditech.lk",
      },
      {
        id: 2,
        address: "No. 456 Lake Road, Balangoda, Sri Lanka",
        phone: "+94 45 222 5566",
        email: "center2@meditech.lk",
      },
      {
        id: 3,
        address: "No. 789 Hill Avenue, Balangoda, Sri Lanka",
        phone: "+94 45 222 7788",
        email: "center3@meditech.lk",
      },
    ],
    mapQuery: "No.%20123%20Main%20Street,%20Balangoda,%20Sri%20Lanka+(Meditech%20Laboratory%20Balangoda)",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    name: "Rathnapura Branch",
    address: "No. 456 Gem Street, Rathnapura, Sri Lanka",
    phone: "+94 45 223 4455",
    email: "rathnapura@meditech.lk",
    specialties: ["CT Scan", "MRI", "Blood Tests", "Pathology"],
    rating: 4.7,
    hours: "6 AM - 10 PM",
    collectionCenters: [
      {
        name: "Kuruwita Collection Center",
        address: "No. 5, Main Road, Kuruwita",
      },
      {
        name: "Eheliyagoda Collection Center",
        address: "No. 8, Temple Road, Eheliyagoda",
      },
    ],
    detailedCenters: [
      {
        id: 1,
        address: "No. 234 Main Street, Rathnapura, Sri Lanka",
        phone: "+94 45 333 4455",
        email: "rathnapura@meditech.lk",
      },
      {
        id: 2,
        address: "No. 567 Gem Road, Rathnapura, Sri Lanka",
        phone: "+94 45 333 6677",
        email: "center2@meditech.lk",
      },
      {
        id: 3,
        address: "No. 890 Sabaragamuwa Avenue, Rathnapura, Sri Lanka",
        phone: "+94 45 333 8899",
        email: "center3@meditech.lk",
      },
    ],
    mapQuery: "No.%20234%20Main%20Street,%20Rathnapura,%20Sri%20Lanka+(Meditech%20Laboratory%20Rathnapura)",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-sky-100",
  },
  {
    name: "Welimada Branch",
    address: "No. 789 Hill Street, Welimada, Sri Lanka",
    phone: "+94 52 224 5566",
    email: "welimada@meditech.lk",
    specialties: ["Cardiology", "Neurology", "Blood Tests", "Imaging"],
    rating: 4.6,
    hours: "7 AM - 9 PM",
    collectionCenters: [
      {
        name: "Uva-Paranagama Collection Center",
        address: "No. 3, Station Road, Uva-Paranagama",
      },
      {
        name: "Hali-Ela Collection Center",
        address: "No. 6, Market Road, Hali-Ela",
      },
    ],
    detailedCenters: [
      {
        id: 1,
        address: "No. 789 Hill Street, Welimada, Sri Lanka",
        phone: "+94 52 444 5566",
        email: "welimada@meditech.lk",
      },
      {
        id: 2,
        address: "No. 101 Tea Estate Road, Welimada, Sri Lanka",
        phone: "+94 52 444 7788",
        email: "center2@meditech.lk",
      },
      {
        id: 3,
        address: "No. 203 Mountain View, Welimada, Sri Lanka",
        phone: "+94 52 444 9900",
        email: "center3@meditech.lk",
      },
    ],
    mapQuery: "No.%20789%20Hill%20Street,%20Welimada,%20Sri%20Lanka+(Meditech%20Laboratory%20Welimada)",
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-gradient-to-br from-blue-100 to-indigo-100",
  },
  {
    name: "Kalawana Branch",
    address: "No. 321 River Road, Kalawana, Sri Lanka",
    phone: "+94 45 225 6677",
    email: "kalawana@meditech.lk",
    specialties: ["General Testing", "Vaccination", "Health Checkups"],
    rating: 4.5,
    hours: "8 AM - 8 PM",
    collectionCenters: [
      {
        name: "Nivitigala Collection Center",
        address: "No. 7, School Lane, Nivitigala",
      },
      {
        name: "Ayagama Collection Center",
        address: "No. 9, Bazaar Street, Ayagama",
      },
    ],
    detailedCenters: [
      {
        id: 1,
        address: "No. 321 River Road, Kalawana, Sri Lanka",
        phone: "+94 45 555 6677",
        email: "kalawana@meditech.lk",
      },
      {
        id: 2,
        address: "No. 432 Forest Avenue, Kalawana, Sri Lanka",
        phone: "+94 45 555 8899",
        email: "center2@meditech.lk",
      },
      {
        id: 3,
        address: "No. 543 Valley Road, Kalawana, Sri Lanka",
        phone: "+94 45 555 1122",
        email: "center3@meditech.lk",
      },
    ],
    mapQuery: "No.%20321%20River%20Road,%20Kalawana,%20Sri%20Lanka+(Meditech%20Laboratory%20Kalawana)",
    color: "from-blue-300 to-blue-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-150",
  },
];

<BackgroundElements/>


// Hero Section Component
const HeroSection = () => (
  <div className="text-center mb-16 bg-blue-50">
    <div className="inline-flex items-center gap-3 bg-blue-100/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
      <Building2 className="w-6 h-6 text-blue-600" />
      <span className="text-blue-800 font-semibold">Trusted Healthcare Network</span>
    </div>
    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
      Our Laboratory Network
    </h1>
    <p className="text-xl text-blue-700 mb-8 max-w-4xl mx-auto leading-relaxed">
      MediTech Laboratory operates a comprehensive network of branches and collection
      centers across Sri Lanka, delivering world-class diagnostic services with 
      cutting-edge technology and compassionate care.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
        <Star className="w-5 h-5 text-yellow-500 fill-current" />
        <span className="text-blue-700 font-medium">4.7+ Average Rating</span>
      </div>
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
        <MapPin className="w-5 h-5 text-blue-500" />
        <span className="text-blue-700 font-medium">4 Branches • 12 Centers</span>
      </div>
    </div>
  </div>
);

// Collection Center Component
const CollectionCenter = ({ center, branch }) => (
  <div className="flex items-start gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${branch.color} mt-2 flex-shrink-0`}></div>
    <div>
      <p className="font-medium text-blue-800 text-sm">{center.name}</p>
      <p className="text-blue-600 text-xs">{center.address}</p>
    </div>
  </div>
);

// Branch Card Component
const BranchCard = ({ branch, index, onOpenPopup, hoveredCard, onHover, onHoverEnd }) => (
  <div 
    className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${branch.bgColor} border border-white/50`}
    onMouseEnter={() => onHover(index)}
    onMouseLeave={onHoverEnd}
  >
    {/* Gradient Overlay */}
    <div className={`absolute inset-0 bg-gradient-to-br ${branch.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
    
    <div className="relative p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <button 
            onClick={() => onOpenPopup(branch)}
            className="block text-left group/button"
          >
            <h2 className={`text-2xl font-bold bg-gradient-to-r ${branch.color} bg-clip-text text-transparent mb-2 group-hover/button:scale-105 transition-transform duration-300`}>
              {branch.name}
            </h2>
          </button>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(branch.rating) ? 'text-yellow-400 fill-current' : 'text-blue-300'}`} />
              ))}
            </div>
            <span className="text-sm text-blue-600 font-medium">{branch.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
          <Clock className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">{branch.hours}</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-blue-800">{branch.address}</p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <p className="text-blue-800">{branch.phone}</p>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <p className="text-blue-800">{branch.email}</p>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-blue-800 mb-3 uppercase tracking-wider">
          Specialties
        </h3>
        <div className="flex flex-wrap gap-2">
          {branch.specialties.map((specialty, idx) => (
            <span key={idx} className={`px-3 py-1 bg-gradient-to-r ${branch.color} text-white text-xs font-medium rounded-full shadow-sm`}>
              {specialty}
            </span>
          ))}
        </div>
      </div>
      
      {/* Collection Centers */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-blue-800 mb-3 uppercase tracking-wider">
          Collection Centers
        </h3>
        <div className="space-y-2">
          {branch.collectionCenters.map((center, idx) => (
            <CollectionCenter key={idx} center={center} branch={branch} />
          ))}
        </div>
      </div>
      
      {/* Action Button */}
      <button 
        onClick={() => onOpenPopup(branch)}
        className={`w-full bg-gradient-to-r ${branch.color} text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
      >
        <Navigation className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
        View Details & Map
        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  </div>
);

// Main Map Section Component
const MainMapSection = () => (
  <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-5 border border-white/50">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
        Find us on the map
      </h2>
      <p className="text-lg text-blue-800 max-w-1xl mx-auto">
        Our flagship laboratory in Balangoda serves as the heart of our network. 
        Explore individual branches for specific locations and services.
      </p>
    </div>
    <div className="flex justify-center">
      <div className="rounded-xl overflow-hidden shadow-5xl ring-1 ring-black/5" style={{ width: '100%', maxWidth: '500px', height: '400px' }}>
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?width=800&height=450&hl=en&q=Meditech%20Laboratory%20Balangoda&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Meditech Laboratory Map"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
);

// Modal Header Component
const ModalHeader = ({ branch, onClose }) => (
  <div className={`sticky top-0 bg-gradient-to-r ${branch.color} text-white px-8 py-6 flex justify-between items-center rounded-t-3xl`}>
    <div>
      <h2 className="text-3xl font-bold">
        {branch.name.replace(' (Main Branch)', '')} Branch
      </h2>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.floor(branch.rating) ? 'text-yellow-300 fill-current' : 'text-white/50'}`} />
          ))}
          <span className="ml-2 text-white/90">{branch.rating}</span>
        </div>
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{branch.hours}</span>
        </div>
      </div>
    </div>
    <button
      onClick={onClose}
      className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

// Specialties Banner Component
const SpecialtiesBanner = ({ branch }) => (
  <div className="mb-10">
    <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 text-center px-4">Our Specialties</h3>
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8">
      {branch.specialties.map((specialty, idx) => (
        <span 
          key={idx} 
          className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r ${branch.color} text-white text-xs sm:text-sm md:text-base font-semibold rounded-full shadow-lg transition-transform hover:scale-105 duration-200`}
        >
          {specialty}
        </span>
      ))}
    </div>
  </div>
);

// Detailed Center Component
const DetailedCenter = ({ center, branch }) => (
  <div className={`${branch.bgColor} p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300`}>
    <div className="flex items-start gap-4">
      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${branch.color} text-white flex items-center justify-center font-bold flex-shrink-0`}>
        {center.id < 10 ? `0${center.id}` : center.id}
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
          <p className="text-blue-800 font-medium">{center.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <p className="text-blue-800">{center.phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <p className="text-blue-800">{center.email}</p>
        </div>
      </div>
    </div>
  </div>
);

// Map and Centers Grid Component
const MapAndCentersGrid = ({ branch }) => (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-10">
    {/* Google Map */}
    <div className="order-2 xl:order-1">
      <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-blue-600" />
        Branch Location
      </h3>
      <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
        <iframe
          width="100%"
          height="450"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          src={`https://maps.google.com/maps?width=100%&height=450&hl=en&q=${branch.mapQuery}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
        ></iframe>
      </div>
    </div>

    {/* Collection Centers */}
    <div className="order-1 xl:order-2">
      <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
        <Building2 className="w-6 h-6 text-blue-600" />
        Collection Centers
      </h3>
      <div className="space-y-4">
        {branch.detailedCenters.map((center) => (
          <DetailedCenter key={center.id} center={center} branch={branch} />
        ))}
      </div>
    </div>
  </div>
);

// Contact Section Component
const ContactSection = ({ branch }) => (
  <div className={`${branch.bgColor} rounded-2xl p-8 text-center border border-white/50`}>
    <h3 className="text-2xl font-bold text-blue-800 mb-4">Need Assistance?</h3>
    <p className="text-lg text-blue-800 max-w-2xl mx-auto mb-6">
      Our dedicated team in {branch.name.replace(' (Main Branch)', '').replace(' Branch', '')} 
      is ready to assist you with appointments, test results, and any questions about our services.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href={`tel:${branch.phone}`} className={`inline-flex items-center gap-2 bg-gradient-to-r ${branch.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}>
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a href={`mailto:${branch.email}`} className="inline-flex items-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
        <Mail className="w-5 h-5" />
        Send Email
      </a>
    </div>
  </div>
);

// Branch Modal Component
const BranchModal = ({ selectedBranch, onClose }) => {
  if (!selectedBranch) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
        <ModalHeader branch={selectedBranch} onClose={onClose} />
        <div className="p-8">
          <div className="text-center mb-10">
            <p className="text-xl text-blue-800 max-w-3xl mx-auto leading-relaxed">
              Welcome to our {selectedBranch.name.replace(' (Main Branch)', '')} branch. 
              We are committed to delivering exceptional diagnostic services with 
              state-of-the-art equipment and experienced medical professionals.
            </p>
          </div>
          <SpecialtiesBanner branch={selectedBranch} />
          <MapAndCentersGrid branch={selectedBranch} />
          <ContactSection branch={selectedBranch} />
        </div>
      </div>
    </div>
  );
};

// Main Component
const LaboratoryNetwork = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const openBranchPopup = (branch) => {
    setSelectedBranch(branch);
  };

  const closeBranchPopup = () => {
    setSelectedBranch(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100">
      <BackgroundElements />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
        
        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {branches.map((branch, index) => (
            <BranchCard 
              key={index}
              branch={branch}
              index={index}
              onOpenPopup={openBranchPopup}
              hoveredCard={hoveredCard}
              onHover={setHoveredCard}
              onHoverEnd={() => setHoveredCard(null)}
            />
          ))}
        </div>

        <MainMapSection />
      </div>

      <BranchModal 
        selectedBranch={selectedBranch} 
        onClose={closeBranchPopup} 
      />
    </div>
  );
};

export default LaboratoryNetwork;
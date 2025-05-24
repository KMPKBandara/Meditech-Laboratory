"use client"

import React, { useState } from "react";
import { MapPin, Phone, Mail, Building2, Navigation, Clock, Star, ChevronRight } from "lucide-react";

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
    color: "from-blue-600 to-purple-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
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
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
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
    color: "from-orange-600 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
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
    color: "from-violet-600 to-pink-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-pink-50",
  },
];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <Building2 className="w-6 h-6 text-blue-600" />
            <span className="text-blue-800 font-semibold">Trusted Healthcare Network</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-purple-700 to-teal-700 bg-clip-text text-transparent mb-6 leading-tight">
            Our Laboratory Network
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            MediTech Laboratory operates a comprehensive network of branches and collection
            centers across Sri Lanka, delivering world-class diagnostic services with 
            cutting-edge technology and compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-gray-700 font-medium">4.7+ Average Rating</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 font-medium">4 Branches • 12 Centers</span>
            </div>
          </div>
        </div>
        
        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {branches.map((branch, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${branch.bgColor} border border-white/50`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${branch.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <button 
                      onClick={() => openBranchPopup(branch)}
                      className="block text-left group/button"
                    >
                      <h2 className={`text-2xl font-bold bg-gradient-to-r ${branch.color} bg-clip-text text-transparent mb-2 group-hover/button:scale-105 transition-transform duration-300`}>
                        {branch.name}
                      </h2>
                    </button>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(branch.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{branch.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">{branch.hours}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-700">{branch.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <p className="text-gray-700">{branch.email}</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">
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
                  <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">
                    Collection Centers
                  </h3>
                  <div className="space-y-2">
                    {branch.collectionCenters.map((center, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${branch.color} mt-2 flex-shrink-0`}></div>
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{center.name}</p>
                          <p className="text-gray-600 text-xs">{center.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Button */}
                <button 
                  onClick={() => openBranchPopup(branch)}
                  className={`w-full bg-gradient-to-r ${branch.color} text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                >
                  <Navigation className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  View Details & Map
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Main Map Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-700 bg-clip-text text-transparent mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our flagship laboratory in Balangoda serves as the heart of our network. 
              Explore individual branches for specific locations and services.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <iframe
                width="800"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?width=800&height=450&hl=en&q=Meditech%20Laboratory%20Balangoda&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                title="Meditech Laboratory Map"
                className="w-full max-w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Branch Modal */}
      {selectedBranch && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
            {/* Modal Header */}
            <div className={`sticky top-0 bg-gradient-to-r ${selectedBranch.color} text-white px-8 py-6 flex justify-between items-center rounded-t-3xl`}>
              <div>
                <h2 className="text-3xl font-bold">
                  {selectedBranch.name.replace(' (Main Branch)', '')} Branch
                </h2>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(selectedBranch.rating) ? 'text-yellow-300 fill-current' : 'text-white/50'}`} />
                    ))}
                    <span className="ml-2 text-white/90">{selectedBranch.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{selectedBranch.hours}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeBranchPopup}
                className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="text-center mb-10">
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Welcome to our {selectedBranch.name.replace(' (Main Branch)', '')} branch. 
                  We are committed to delivering exceptional diagnostic services with 
                  state-of-the-art equipment and experienced medical professionals.
                </p>
              </div>

              {/* Specialties Banner */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Specialties</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {selectedBranch.specialties.map((specialty, idx) => (
                    <span key={idx} className={`px-6 py-3 bg-gradient-to-r ${selectedBranch.color} text-white font-semibold rounded-full shadow-lg`}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map & Centers Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-10">
                {/* Google Map */}
                <div className="order-2 xl:order-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-red-500" />
                    Branch Location
                  </h3>
                  <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                    <iframe
                      width="100%"
                      height="450"
                      loading="lazy"
                      style={{ border: 0 }}
                      allowFullScreen
                      src={`https://maps.google.com/maps?width=100%&height=450&hl=en&q=${selectedBranch.mapQuery}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                    ></iframe>
                  </div>
                </div>

                {/* Collection Centers */}
                <div className="order-1 xl:order-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    Collection Centers
                  </h3>
                  <div className="space-y-4">
                    {selectedBranch.detailedCenters.map((center) => (
                      <div key={center.id} className={`${selectedBranch.bgColor} p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${selectedBranch.color} text-white flex items-center justify-center font-bold flex-shrink-0`}>
                            {center.id < 10 ? `0${center.id}` : center.id}
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                              <p className="text-gray-800 font-medium">{center.address}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <p className="text-gray-700">{center.phone}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              <p className="text-gray-700">{center.email}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className={`${selectedBranch.bgColor} rounded-2xl p-8 text-center border border-white/50`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Assistance?</h3>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                  Our dedicated team in {selectedBranch.name.replace(' (Main Branch)', '').replace(' Branch', '')} 
                  is ready to assist you with appointments, test results, and any questions about our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={`tel:${selectedBranch.phone}`} className={`inline-flex items-center gap-2 bg-gradient-to-r ${selectedBranch.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a href={`mailto:${selectedBranch.email}`} className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaboratoryNetwork;
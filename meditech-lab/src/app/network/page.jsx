"use client"

import React, { useState } from "react";
import BackgroundElements from "@/components/network/background";
import HeroSection from "@/components/network/heroSection"
import CollectionCenter from "@/components/network/collectionCenter";
import BranchCard from "@/components/network/branchCard";
import MainMapSection from "@/components/network/mainMap";
import ModalHeader from "@/components/network/modalHeader";
import SpecialtiesBanner from "@/components/network/specialtiesBanner";
import DetailedCenter from "@/components/network/detailedCenter";
import MapAndCentersGrid from "@/components/network/mapAndCentersGrid";
import ContactSection from "@/components/network/contactSection";
import BranchModal from "@/components/network/branchModal";


// Data
const branches = [
  {
    name: "Balangoda Main Branch",
    address: "No. 123 Main Street, Balangoda, Sri Lanka",
    phone: "+94 45 222 3344",
    email: "balangoda@meditech.lk",
    specialties: ["Blood Tests", "X-Ray", "ECG", "Ultrasound"],
    rating: 4.8,
    hours: "24/7",
    collectionCenters: [],
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
    name: "Rathnapura Main Branch",
    address: "No 344,Hospital Junction,Colombo Road,Rathnapura.",
    phone: "045 222 6446  / 071 155 6446",
    email: "meditechrathnapura@gmail.com",
    specialties: ["CT Scan", "MRI", "Blood Tests", "Pathology"],
    rating: 4.7,
    hours: "7 AM - 7 PM  (poyaday Closed)",
    collectionCenters: [],
    detailedCenters: [
      {
        
        id:1,
        name: "Gorakaela Collection Center",
        address: "Gorakaela Junction,Dodampe.",
        phone: "071 551 5681",
        hours: "7 AM - 11 AM",
      
      },
      {
        id:2,
        name: "Watapotha Collection Center",
        address: "Watapotha Junction,Watapotha,Nivitigala.",
        phone: "071 235 2689 / 076 215 4526",
        hours: "7.45 AM - 5 PM",
      },
      {
        id:3,
        name: "Malwala Collection Center",
        address: "Medical Center,Badu waththa,Malwala,Rathnapura.",
        phone: " 076 662 8850 / 071 396 0362",
        hours: "7 AM - 10 AM (Poya day Closed)",
      },
      {
        id:4,
        name: "Sri palabaddala Collection Center",
        address: "In front of sri palabaddala PMCU, sri palabaddala,Rathnapura.",
        phone: " 076 674 5969",
        hours: "7 AM - 10 AM (Sunday & poya day closed.)",
      },
      {
        id:5,
        name: "Erathna Collection Center",
        address: "Gangabada,Erathna,Kuruwita,(Infront of New post office)",
        phone: "074 289 2481 / 070 169 9989",
        hours: "6.30 AM - 11 AM (Poya day Closed)",
      },
      {
        id:6,
        name: "Gilimale -Thannahena Collection Center",
        address: "Medical Center Thannahena,Gilimale,Rathnapura.",
        phone: "077 245 5566 / 071 807 8081",
        hours: "6.45 AM - 12 Noon (Poya day Closed)",
      },
       {
        id:7,
        name: "Gilimale Collection Center",
        address: " In front of Gilimale Hospital,Gilimale,Rathnapura.",
        phone: " 077 820 8324",
        hours: "6.45 AM - 4 PM (Poya day Closed)",
      },
      {
        id:8,
        name: "Welimaluwa Collection Center",
        address: "Medical center Welimaluwa,Rathnapura.",
        phone: "071 904 5733 / 071 895 6786",
        hours: "7 AM - 10 AM (Poya day Closed)",
      },
       {
        id:9,
        name: "Baanagoda Collection Center",
        address: "Medical center Near the Sub post office,Baanagoda, lellopitiya, Rathnapura ",
        phone: "071 902 0685 / 071 929 7319",
        hours: "7 AM - 10 AM (Sunday and poya day closed.)",
      },
      {
        id:10,
        name: "Paradise Collection Center",
        address: "In front of Vijaya kumarathunga Vidyalaya, paradise, kuruwita.",
        phone: "076 749 1545 / 076 797 4696",
        hours: "7 AM - 10 AM (poya day closed.)",
      },
       {
        id:11,
        name: "Hidellana Collection Center",
        address: "Near the weragoda temple, Medical center, Weragoda,Hidellana, Rathnapura.",
        phone: "077 788 9942 / 077 883 3725",
        hours: "7 AM - 10 AM (poya day closed.)",
      },
      {
        id:12,
        name: "Rathnapura Town Collection Center",
        address: "Medical center, Near the prasanna gems,Rathnapura.",
        phone: "071 155 6446",
        hours: "7 AM - 10 AM (poya day closed.)",
      },
      {
        id:13,
        name: "Ganegama Collection Center",
        address: "Ganegama Junction, Ganegama, pelmadulla.",
        phone: "077 177 5132 / 071 174 1770",
        hours: "7 AM - 10 AM (poya day closed.)",
      },
      {
        id:14,
        name: "Sannasgama Collection Center",
        address: "Medex Pharmacy & Medicare Medical Center,Sannasgama,pelmadulla.",
        phone: "070 202 9177 / 071 174 1770",
        hours: "7 AM - 4 PM",
      },
      {
        id:15,
        name: "Yakdehiwaththa Collection Center",
        address: "Medical center, Medical center, yakdehiwaththa, Nivitigala.",
        phone: "071 323 6301 / 077 883 3725",
        hours: "7 AM - 10 AM (Poya day closed)",
      },
      {
        id:16,
        name: "Nivitigala Collection Center",
        address: "Jayaruwan Medical Center,In front of BOC bank, Nivitigala.",
        phone: "074 348 2651",
        hours: "7 AM - 5 PM (Poya day closed)",
      },
    ],
    mapQuery: "No.%20234%20Main%20Street,%20Rathnapura,%20Sri%20Lanka+(Meditech%20Laboratory%20Rathnapura)",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-sky-100",
  },
  {
    name: "Welimada Main Branch",
    address: "No. 789 Hill Street, Welimada, Sri Lanka",
    phone: "+94 52 224 5566",
    email: "welimada@meditech.lk",
    specialties: ["Cardiology", "Neurology", "Blood Tests", "Imaging"],
    rating: 4.6,
    hours: "7 AM - 9 PM",
    collectionCenters: [],
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
    name: "Kalawana Main Branch",
    address: "HOSPITAL ROAD, KALAWANA",
    phone: ["0452255370","0717647460"],
    email: "kalawanalab@gmail.com",
    specialties: ["General Testing", "Vaccination", "Health Checkups"],
    rating: 4.5,
    hours: "6 AM - 7 PM",
    collectionCenters: [],
    detailedCenters: [
      {
        id:1,
        name: "Weddagala Collection Center",
        address: "kudawa Road, Weddagala",
        phone: "+94 71 212 6728",
        email:"Weddagalameditech@gmail.com",
        hours: "7 AM - 12 noon",
      },
      {
        id:2,
        name: "Delwala Collection Center",
        address: "Infront Of PMCU, Delwala",
        phone: "+94 70 140 8712",
        email:"Meditechdelwala@gmail.com",
        hours: "7 AM - 4 PM",
      },
      {
         id:3,
        name: "Karavita Collection Center",
        address: "Near to Primary School, Karavita Jnction",
        phone: "+94 76 736 8078",
        email:"Meditechkaravita@gmail.com",
        hours: "7 AM - 12 noon",
      },
      {
         id:4,
         name: "Pothupitiya Collection Center",
        address: "Kalawana road, Pothupitiya",
        phone: "+94 45 313 0233",
        email:"Meditechpothupitiya@gmail.com",
        hours: "7 AM - 6 PM",
      },
      {
        id:5,
        name: "Rabuka Collection Center",
        address: "Rabuka Junction, Pothupitiya",
        phone: "+94 71 460 4029",
        email: "Meditechrabuka@gmail.com",
        hours: "7 AM - 6 PM"
      },
    ],
    mapQuery: "No.%20321%20River%20Road,%20Kalawana,%20Sri%20Lanka+(Meditech%20Laboratory%20Kalawana)",
    color: "from-blue-300 to-blue-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-150",
  },
];
      <div className="bg-white">
      <BackgroundElements/>,
      <HeroSection/>,
      <CollectionCenter/>,
      <BranchCard/>,
      <MainMapSection/>,
      <ModalHeader/>,
      <SpecialtiesBanner/>,
      <DetailedCenter/>,
      <MapAndCentersGrid/>,
      <ContactSection/>,
      <BranchModal/>

      </div>

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
    <div className="min-h-screen bg-white from-blue-50 via-blue-100 to-indigo-100">
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
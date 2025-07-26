"use client";

import React, { useState } from "react";
import BackgroundElements from "@/components/network/background";
import HeroSection from "@/components/network/heroSection";
import CollectionCenter from "@/components/network/collectionCenter";
import BranchCard from "@/components/network/branchCard";
import MainMapSection from "@/components/network/mainMap";
import ModalHeader from "@/components/network/modalHeader";
import SpecialtiesBanner from "@/components/network/specialtiesBanner";
import DetailedCenter from "@/components/network/detailedCenter";
import MapAndCentersGrid from "@/components/network/mapAndCentersGrid";
import ContactSection from "@/components/network/contactSection";
import BranchModal from "@/components/network/branchModal";
import branches from "@/assets/data/collectionCenters";

<div className="bg-white">
  <BackgroundElements />,
  <HeroSection />,
  <CollectionCenter />,
  <BranchCard />,
  <MainMapSection />,
  <ModalHeader />,
  <SpecialtiesBanner />,
  <DetailedCenter />,
  <MapAndCentersGrid />,
  <ContactSection />,
  <BranchModal />
</div>;

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
    <div className="min-h-screen bg-white from-white-50 via-white-100 to-indigo-100">
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

      <BranchModal selectedBranch={selectedBranch} onClose={closeBranchPopup} />
    </div>
  );
};

export default LaboratoryNetwork;

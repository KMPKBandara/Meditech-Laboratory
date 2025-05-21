'use client';
import React from "react";
import BackgroundCarousel from "@/components/AboutUs/BackgroundCarousel";
import AboutSection from "@/components/AboutUs/AboutSection";
import MissionVision from "@/components/AboutUs/MissionVision";
import DirectorCarousel from "@/components/AboutUs/DirectorCarousel";
import BranchCarousel from "@/components/AboutUs/BranchCarousel";
import SocialMedia from "@/components/AboutUs/SocialMedia";

const AboutUs = () => {
  return (
    <div className="bg-white text-center">
      <BackgroundCarousel />
      <AboutSection />
      <MissionVision />
      <DirectorCarousel />
      <BranchCarousel />
      <SocialMedia />
    </div>
  );
};

export default AboutUs;

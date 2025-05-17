// app/page.jsx
import React from "react";
import ChooseUs from "@/components/home/ChooseUs";
import Services from "@/components/home/Services";
import LabNetwork from "@/components/home/LabNetwork";
import Facilities from "@/components/home/Facilities";
import Feedback from "@/components/home/Feedback";
import Top from "@/components/home/Top";
import ChatWidget from "@/components/chatbot/ChatWidget";

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Top Banner with Social Media */}
      <Top />
      {/* Why Choose Us */}
      <ChooseUs />
      {/* Services Section */}
      <Services />
      {/* Network Overview */}
      <LabNetwork />
      {/* Facilities Section */}
      <Facilities />
      {/* Feedback Section */}
      <Feedback />
      {/* Fixed ChatBot box bottom right */}
      <ChatWidget />
    </div>
  );
};

export default HomePage;

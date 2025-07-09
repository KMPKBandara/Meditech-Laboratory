import ModalHeader from "@/components/network/modalHeader";
import SpecialtiesBanner from "@/components/network/specialtiesBanner";
import MapAndCentersGrid from "@/components/network/mapAndCentersGrid";
import ContactSection from "@/components/network/contactSection";

const BranchModal = ({ selectedBranch, onClose }) => {
  if (!selectedBranch) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl w-full max-w-[95%] sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl h-full sm:max-h-[95vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Modal Header */}
        <ModalHeader branch={selectedBranch} onClose={onClose} />

        {/* Modal Content */}
        <div className="p-3 sm:p-6 lg:p-8">
          
          {/* Intro Text */}
          <div className="text-center mb-4 sm:mb-8 lg:mb-10 px-2">
            <p className="text-sm sm:text-lg lg:text-xl text-blue-800 max-w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
              Welcome to our <span className="font-semibold">{selectedBranch.name.replace(' (Main Branch)', '')}</span>. 
              We are committed to delivering exceptional diagnostic services with 
              state-of-the-art equipment and experienced medical professionals.
            </p>
          </div>

          {/* Specialties */}
          <SpecialtiesBanner branch={selectedBranch} />

          {/* Map and Collection Centers */}
          <MapAndCentersGrid branch={selectedBranch} />

          {/* Contact Info */}
          <ContactSection branch={selectedBranch} />
        </div>
      </div>
    </div>
  );
};

export default BranchModal;

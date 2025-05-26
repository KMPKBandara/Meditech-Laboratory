import ModalHeader from "@/components/network/modalHeader";
import SpecialtiesBanner from "@/components/network/specialtiesBanner";
import MapAndCentersGrid from "@/components/network/mapAndCentersGrid";
import ContactSection from "@/components/network/contactSection";

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


export default BranchModal;
import { MapPin, Building2 } from "lucide-react";
import DetailedCenter from "@/components/network/detailedCenter";

const branches = [
  { name: "Balangoda Main Branch", mapQuery: "Balangoda Main Branch" },
  { name: "Rathnapura Main Branch", mapQuery: "Rathnapura Main Branch" },
  { name: "Welimada Main Branch", mapQuery: "Welimada Main Branch" },
  { name: "Kalawana Main Branch", mapQuery: "Kalawana Main Branch" },
];

const MapAndCentersGrid = ({ branch }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
    
    {/* Google Map */}
    <div className="order-2 lg:order-1">
      <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-blue-800 mb-2 sm:mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
        <span>Branch Location</span>
      </h3>

      <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-md sm:shadow-xl ring-1 ring-black/5">
        <iframe src="https://www.google.com/maps/d/embed?mid=1YRgxF3JvD31eqIxghrhDQFybpNkA27k&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
      </div>
    </div>

    {/* Collection Centers */}
    <div className="order-1 lg:order-2">
      <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-blue-800 mb-2 sm:mb-4 flex items-center gap-2">
        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
        <span>Collection Centers</span>
      </h3>

      <div className="space-y-3 sm:space-y-4 max-h-[400px] sm:max-h-[500px] lg:max-h-[450px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
        {branch.detailedCenters.map((center) => (
          <DetailedCenter key={center.id} center={center} branch={branch} />
        ))}
      </div>
    </div>
  </div>
);

export default MapAndCentersGrid;

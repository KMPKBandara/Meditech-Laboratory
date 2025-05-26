import { MapPin, Phone, Mail, Building2, Navigation, Clock, Star, ChevronRight } from "lucide-react";
import DetailedCenter from "@/components/network/detailedCenter";

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

export default MapAndCentersGrid;
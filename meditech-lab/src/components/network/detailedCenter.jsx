import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";

const DetailedCenter = ({ center, branch }) => (
  <div className={`${branch.bgColor} p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300`}>
    <div className="flex items-start gap-4">
      <div className={`w-10 h-10 rounded-full bg-blue-700 ${branch.color} text-white flex items-center justify-center font-bold flex-shrink-0`}>
        {center.id < 10 ? `0${center.id}` : center.id}
      </div>
      
      <div className="flex-1 space-y-2">
         <div className="flex items-start gap-2">
          <Building2 className="w-4 h-4 text-black-800 mt-1 flex-shrink-0" />
          <p className="text-black-800 font-medium">{center.name}</p>
        </div>

        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-black-800 mt-1 flex-shrink-0" />
          <p className="text-black-800 font-medium">{center.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-black-800 flex-shrink-0" />
          <p className="text-black-800">{center.phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-black-800 flex-shrink-0" />
          <p className="text-black-800">{center.email}</p>
        </div>
         <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-black-800 flex-shrink-0" />
          <p className="text-black-800">{center.hours}</p>
        </div>
      </div>
    </div>
  </div>
);
export default DetailedCenter;

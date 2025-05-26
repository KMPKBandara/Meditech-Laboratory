import { MapPin, Phone, Mail, Building2, Clock,  } from "lucide-react";

const DetailedCenter = ({ center, branch }) => (
  <div className={`${branch.bgColor} p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300`}>
    <div className="flex items-start gap-4">
      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${branch.color} text-white flex items-center justify-center font-bold flex-shrink-0`}>
        {center.id < 10 ? `0${center.id}` : center.id}
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-start gap-2">
          <Building2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
          <p className="text-blue-800 font-medium">{center.name}</p>
        </div>
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
          <p className="text-blue-800 font-medium">{center.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <p className="text-blue-800">{center.phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <p className="text-blue-800">{center.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <span className="text-blue-800">{center.hours}</span>
        </div>
      </div>
    </div>
  </div>
);

export default DetailedCenter;
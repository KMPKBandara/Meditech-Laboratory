import { MapPin, Phone, Mail, Navigation, Clock, Star, ChevronRight } from "lucide-react";
import CollectionCenter from "@/components/network/collectionCenter";


const BranchCard = ({ branch, index, onOpenPopup, onHover, onHoverEnd }) => (
 

  <div>
  <div 
    className={`group relative overflow-hidden bg-blue-200/40 backdrop-blur-sm shadow-xl rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${branch.Color} border border-white/50`}
    onMouseEnter={() => onHover(index)}
    onMouseLeave={onHoverEnd}
  >
    {/* Gradient Overlay */}
    <div className={`absolute inset-0 bg-blue-200  ${branch.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
    
    <div className="relative p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
           <button 
            onClick={() => onOpenPopup(branch)}
            className="block text-left group/button"
          >
            {/* Branch name text uses same color as background */}
            <h2 className={`text-2xl font-bold text-blue-600 ${branch.color} mb-2 group-hover/button:scale-105 transition-transform duration-300`}>
              {branch.name}
            </h2>
          </button>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(branch.rating) ? 'text-yellow-400 fill-current' : 'text-blue-300'}`} />
              ))}
            </div>
            <span className="text-sm text-blue-600 font-medium">{branch.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
          <Clock className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">{branch.hours}</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-blue-800">{branch.address}</p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <p className="text-blue-800">{branch.phone}</p>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <p className="text-blue-800">{branch.email}</p>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-blue-800 mb-3 uppercase tracking-wider">
          Specialties
        </h3>
        <div className="flex flex-wrap gap-2">
          {branch.specialties.map((specialty, idx) => (
            <span key={idx} className={`px-3 py-1 bg-gradient-to-r ${branch.color} text-white text-xs font-medium rounded-full shadow-sm`}>
              {specialty}
            </span>
          ))}
        </div>
      </div>
      
      {/* Collection Centers */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-blue-800 mb-3 uppercase tracking-wider">
          Collection Centers
        </h3>
        <div className="space-y-2">
          {branch.collectionCenters.map((center, idx) => (
            <CollectionCenter key={idx} center={center} branch={branch} />
          ))}
        </div>
      </div>
      
      {/* Action Button */}
      <button 
        onClick={() => onOpenPopup(branch)}
        className={`w-full bg-gradient-to-r ${branch.color} text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
      >
        <Navigation className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
        View Details 
        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  </div>

  </div>
  
);

export default BranchCard;


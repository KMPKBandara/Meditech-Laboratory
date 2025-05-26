import { Clock, Star} from "lucide-react";


const ModalHeader = ({ branch, onClose }) => (
  <div className={`sticky top-0 bg-gradient-to-r ${branch.bgcolor} bg-blue-800 px-8 py-6 flex justify-between items-center rounded-t-3xl`}>
    <div>
      <h2 className="text-3xl font-bold text-white ">
        {branch.name.replace(' (Main Branch)')}
      </h2>
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.floor(branch.rating) ? 'text-yellow-300 fill-current' : 'text-white/50'}`} />
          ))}
          <span className="ml-2 text-white/90">{branch.rating}</span>
        </div>
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{branch.hours}</span>
        </div>
      </div>
    </div>
    <button
      onClick={onClose}
      className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

export default ModalHeader;

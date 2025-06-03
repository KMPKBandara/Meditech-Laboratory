import { Clock} from "lucide-react";

const ModalHeader = ({ branch, onClose }) => (
  <div className={`sticky top-0 bg-gradient-to-r ${branch.bgcolor} bg-blue-800 px-3 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-start sm:items-center rounded-t-2xl sm:rounded-t-3xl`}>
    <div className="flex-1 min-w-0 pr-3">
      <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white truncate">
        {branch.name.replace(' (Main Branch)', '')}
      </h2>
      <div className="flex items-center gap-2 sm:gap-4 mt-1 sm:mt-2">
        <div className="flex items-center gap-1 sm:gap-2 bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-white truncate">{branch.hours}</span>
        </div>
      </div>
    </div>
    <button
      onClick={onClose}
      className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1.5 sm:p-2 transition-all duration-200 flex-shrink-0 ml-2"
      aria-label="Close modal"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

export default ModalHeader;
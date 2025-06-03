const SpecialtiesBanner = ({ branch }) => (
  <div className="mb-6 sm:mb-8 lg:mb-10">
    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 mb-3 sm:mb-4 lg:mb-6 text-center px-2">
      Our Specialties
    </h3>
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-4 lg:px-6">
      {branch.specialties.map((specialty, idx) => (
        <span 
          key={idx} 
          className={`px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 bg-blue-700 ${branch.color} text-white text-xs sm:text-sm lg:text-base font-semibold rounded-full shadow-lg transition-all hover:scale-105 duration-200 whitespace-nowrap`}
        >
          {specialty}
        </span>
      ))}
    </div>
  </div>
);

export default SpecialtiesBanner;
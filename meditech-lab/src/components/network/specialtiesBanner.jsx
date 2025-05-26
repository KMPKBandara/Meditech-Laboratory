

const SpecialtiesBanner = ({ branch }) => (
  <div className="mb-10">
    <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 text-center px-4">Our Specialties</h3>
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8">
      {branch.specialties.map((specialty, idx) => (
        <span 
          key={idx} 
          className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-blue-700 ${branch.color} text-white text-xs sm:text-sm md:text-base font-semibold rounded-full shadow-lg transition-transform hover:scale-105 duration-200`}
        >
          {specialty}
        </span>
      ))}
    </div>
  </div>
);

export default SpecialtiesBanner;
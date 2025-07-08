import Link from "next/link";

const ContactSection = ({ branch }) => (
  <div className={`${branch.bgColor} rounded-lg sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center border border-white/50`}>
    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-3 sm:mb-4 lg:mb-6">
      Need Assistance?
    </h3>
    <p className="text-sm sm:text-base lg:text-lg text-blue-800 max-w-[90%] sm:max-w-lg lg:max-w-2xl mx-auto px-1 sm:px-2 leading-relaxed mb-4 sm:mb-6">
      Our dedicated team in {branch.name.replace(' (Main Branch)', '').replace(' Branch', '')} 
      is ready to assist you with appointments, test results, and any questions about our services.
    </p>

    <div className="flex justify-center">
      <Link href="/contact">
        <button className="w-full xs:w-auto inline-flex items-center justify-center bg-blue-800 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:bg-blue-900 transition-all duration-300 text-sm sm:text-base">
          Contact Us
        </button>
      </Link>
    </div>
  </div>
);

export default ContactSection;

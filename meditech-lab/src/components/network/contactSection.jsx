import {Phone, Mail } from "lucide-react";

const ContactSection = ({ branch }) => (
  <div className={`${branch.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center border border-white/50`}>
    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-3 sm:mb-4 lg:mb-6">
      Need Assistance?
    </h3>
    <p className="text-sm sm:text-base lg:text-lg text-blue-800 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto mb-4 sm:mb-6 px-2 leading-relaxed">
      Our dedicated team in {branch.name.replace(' (Main Branch)', '').replace(' Branch', '')} 
      is ready to assist you with appointments, test results, and any questions about our services.
    </p>
    <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
      <a 
        href={`tel:${branch.phone}`} 
        className={`w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-blue-800 ${branch.color} text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base min-w-[140px]`}
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        Call Now
      </a>
      <a 
        href={`mailto:${branch.email}`} 
        className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 text-sm sm:text-base min-w-[140px]"
      >
        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
        Send Email
      </a>
    </div>
  </div>
);

export default ContactSection;
import { MapPin, Phone, Mail, Navigation, Clock, Star, ChevronRight } from "lucide-react";

const ContactSection = ({ branch }) => (
  <div className={`${branch.bgColor} rounded-2xl p-8 text-center border border-white/50`}>
    <h3 className="text-2xl font-bold text-blue-800 mb-4">Need Assistance?</h3>
    <p className="text-lg text-blue-800 max-w-2xl mx-auto mb-6">
      Our dedicated team in {branch.name.replace(' (Main Branch)', '').replace(' Branch', '')} 
      is ready to assist you with appointments, test results, and any questions about our services.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href={`tel:${branch.phone}`} className={`inline-flex items-center gap-2 bg-blue-800 ${branch.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}>
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a href={`mailto:${branch.email}`} className="inline-flex items-center gap-2 bg-white text-blue-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
        <Mail className="w-5 h-5" />
        Send Email
      </a>
    </div>
  </div>
);

export default ContactSection;
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <section className="bg-blue-50 py-12">
    <h3 className="text-2xl font-semibold text-blue-800 mb-6">Follow Us</h3>
    <div className="flex justify-center space-x-8">
      <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF size={28} /></a>
      <a href="#" className="text-sky-400 hover:text-sky-600"><FaTwitter size={28} /></a>
      <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={28} /></a>
      <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedinIn size={28} /></a>
    </div>
  </section>
);

export default SocialMedia;

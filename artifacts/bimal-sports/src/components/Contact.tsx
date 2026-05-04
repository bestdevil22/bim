import { motion } from "framer-motion";
import { CONTENT } from "../content";
import { Phone, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-red-600 uppercase mb-3">Visit Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Get in Touch</h3>
            <p className="text-gray-600 text-lg">
              Have a question about a product? Looking for bulk orders? We're here to help.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h4>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-5">
                  <h5 className="text-lg font-bold text-gray-900 mb-1">Call Us</h5>
                  <p className="text-gray-600 mb-3">For immediate assistance</p>
                  <a 
                    href={`tel:${CONTENT.contact.phone}`} 
                    className="inline-block text-xl font-bold text-red-600 hover:text-red-700 transition-colors"
                  >
                    {CONTENT.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                </div>
                <div className="ml-5">
                  <h5 className="text-lg font-bold text-gray-900 mb-1">WhatsApp</h5>
                  <p className="text-gray-600 mb-3">Send us a message anytime</p>
                  <a 
                    href={CONTENT.contact.whatsappUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
                  >
                    <span>Message Us</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-5">
                  <h5 className="text-lg font-bold text-gray-900 mb-1">Store Location</h5>
                  <p className="text-gray-600 leading-relaxed">
                    {CONTENT.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-sm h-[500px] border border-gray-100 relative group"
          >
            <iframe 
              src={CONTENT.contact.mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              title="Bimal Sports Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { CONTENT } from "../content";
import { MessageSquare } from "lucide-react";

export function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-red-600 uppercase mb-3">Our Collection</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Premium Sports Gear</h3>
            <p className="text-gray-600 text-lg">
              We stock high-quality equipment across all major sports. Visit our store or contact us for availability and pricing.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT.categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.025, boxShadow: "0 20px 50px -10px rgba(0,0,0,0.14)" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300, damping: 24 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
              data-testid={`card-category-${category.id}`}
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h4>
                <ul className="space-y-3 mb-8">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 mr-3 shrink-0" />
                      <div>
                        <span className="text-gray-700 font-medium">{item}</span>
                        <div className="text-sm text-gray-500 mt-0.5">Contact for Price</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`${CONTENT.contact.whatsappUrl}?text=Hi Bimal Sports, I want to inquire about ${category.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-600 font-semibold hover:text-red-700 transition-colors group/link"
                >
                  <span>Inquire Now</span>
                  <MessageSquare className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

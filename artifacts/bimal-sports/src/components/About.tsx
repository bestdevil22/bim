import { motion } from "framer-motion";
import { CONTENT } from "../content";
import { ShieldCheck, Target, Award } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
      title: "Trusted Local Shop",
      description: "Serving the Rewari community with dedication and genuine products."
    },
    {
      icon: <Target className="w-6 h-6 text-red-600" />,
      title: "Premium Quality",
      description: "We only stock equipment that meets our high standards for durability and performance."
    },
    {
      icon: <Award className="w-6 h-6 text-red-600" />,
      title: "Expert Advice",
      description: "Our knowledgeable staff helps you find exactly the right gear for your sport."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-red-600 uppercase mb-3">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{CONTENT.about.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {CONTENT.about.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=2953&auto=format&fit=crop" 
                alt="Inside a sports shop" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-white/95 backdrop-blur px-6 py-4 rounded-xl border-l-4 border-red-600">
                  <p className="text-gray-900 font-bold text-lg">Your Game. Our Gear.</p>
                  <p className="text-gray-600 text-sm">Winning starts here.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-gray-100 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

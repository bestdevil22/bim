import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { CONTENT } from "../content";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-red-600 uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            What Our Customers Say
          </h3>
          <p className="text-gray-500 text-lg">
            Trusted by athletes, coaches, and fitness enthusiasts across Rewari.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CONTENT.reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px -8px rgba(0,0,0,0.12)" }}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm flex flex-col gap-5 cursor-default"
              data-testid={`card-review-${review.id}`}
            >
              <div className="flex items-start justify-between">
                <StarRating count={review.rating} />
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <span className="text-red-600 font-bold text-xs">
                    {review.name.charAt(0)}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-[15px] leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                {review.role && (
                  <p className="text-gray-400 text-xs mt-0.5">{review.role}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={CONTENT.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200"
            data-testid="link-google-reviews"
          >
            <span>View More on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

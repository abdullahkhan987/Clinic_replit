import { motion } from "framer-motion";
import { fadeInVariants, staggerContainer } from "@/lib/animations";

const Gallery = () => {
  const galleryItems = [
    {
      src: "/images/treatment-room.jpg",
      alt: "Modern treatment room",
      title: "Treatment Room"
    },
    {
      src: "/images/reception-area.jpg",
      alt: "Clinic waiting area",
      title: "Reception Area"
    },
    {
      src: "/images/equipment.jpg",
      alt: "Advanced equipment",
      title: "Advanced Equipment"
    },
    {
      src: "/images/consultation.jpg",
      alt: "Skincare consultation",
      title: "Consultation"
    },
    {
      src: "/images/relaxation-area.jpg",
      alt: "Relaxing spa environment",
      title: "Relaxation Area"
    },
    {
      src: "/images/products.jpg",
      alt: "Premium skincare products",
      title: "Premium Products"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 mb-8">
            <span className="text-primary font-semibold text-sm">✨ Our Gallery</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 gradient-text" data-testid="gallery-title">
            Gallery
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto" data-testid="gallery-subtitle">
            See our beautiful facilities and amazing treatment results
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              variants={fadeInVariants}
              data-testid={`gallery-item-${index}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110 rounded-3xl border border-white/20 relative z-10"
                  data-testid={`gallery-image-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-bold text-xl mb-2" data-testid={`gallery-title-${index}`}>
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-sm opacity-90">View Details</span>
                    </div>
                  </div>
                </div>
                {/* Modern decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

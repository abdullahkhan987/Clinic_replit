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
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text" data-testid="gallery-title">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="gallery-subtitle">
            See our beautiful facilities and amazing treatment results
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
              variants={fadeInVariants}
              data-testid={`gallery-item-${index}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                data-testid={`gallery-image-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold" data-testid={`gallery-title-${index}`}>
                    {item.title}
                  </h3>
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

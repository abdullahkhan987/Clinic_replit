import { motion } from "framer-motion";

const Gallery = () => {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1551009175-8b69da93d5f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Comfortable treatment room",
      title: "Treatment Room"
    },
    {
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Welcoming reception area",
      title: "Reception Area"
    },
    {
      src: "https://images.unsplash.com/photo-1579684385127-6ab180507748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Advanced skincare equipment",
      title: "Advanced Equipment"
    },
    {
      src: "https://images.unsplash.com/photo-1580281657527-319a45413e36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Personalized consultation session",
      title: "Consultation"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900" data-testid="gallery-title">
            Our Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600" data-testid="gallery-subtitle">
            A glimpse into our state-of-the-art facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`gallery-item-${index}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                data-testid={`gallery-image-${index}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold" data-testid={`gallery-title-${index}`}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Award, X } from "lucide-react";

const certificates = [
  { name: "Full Stack Web Development Using MERN Stack", platform: "NIELIT Lucknow", issuer: "Ministry of Electronics and Information Technology", image: "./../../public/cert1.png", color: "from-blue-500/20 to-cyan-500/20" },
  { name: "React Complete Guide", platform: "Udemy", issuer: "Academind", image: "/certificates/react.jpg", color: "from-cyan-500/20 to-blue-500/20" },
  { name: "JavaScript Algorithms", platform: "freeCodeCamp", issuer: "freeCodeCamp", image: "/certificates/js.jpg", color: "from-yellow-500/20 to-orange-500/20" },
  { name: "Node.js Developer", platform: "Udemy", issuer: "Andrew Mead", image: "/certificates/node.jpg", color: "from-green-500/20 to-emerald-500/20" },
  { name: "MongoDB Developer", platform: "MongoDB University", issuer: "MongoDB Inc.", image: "/certificates/mongo.jpg", color: "from-emerald-500/20 to-teal-500/20" },
  
];

export default function CertificatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [activeCertificate, setActiveCertificate] = useState(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);

      setCurrentIndex(0); // 🔥 important reset
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ✅ FIXED maxIndex
  const maxIndex = Math.max(
    0,
    Math.ceil(certificates.length / itemsPerView) - 1
  );

  const next = () => setCurrentIndex((p) => Math.min(p + 1, maxIndex));
  const prev = () => setCurrentIndex((p) => Math.max(p - 1, 0));

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Continuous learning through certified courses
          </p>
        </motion.div>

        {/* WRAPPER */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center z-[30]">
          {/* LEFT BTN */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-2 sm:left-[-20px] top-1/2 -translate-y-1/2
            w-11 h-11 rounded-full bg-black/20 backdrop-blur-md border border-white/10
            flex items-center justify-center z-[50] disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* CAROUSEL */}
          {/* <div className="overflow-hidden w-full"> */}
          <div className="overflow-x-hidden overflow-y-visible w-full py-4">
            <motion.div
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}   // ✅ FIX
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
              className="flex relative z-[10]"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="glass-card-hover p-6 h-full rounded-xl group">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color}
                      flex items-center justify-center mb-4 text-3xl`}
                    >
                      🏆
                    </div>

                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold group-hover:text-primary">
                        {cert.name}
                      </h3>
                      <Award className="w-5 h-5 text-primary" />
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {cert.platform}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      Issued by {cert.issuer}
                    </p>

                    <button
                      onClick={() => setActiveCertificate(cert)}
                      className="mt-4 text-primary text-sm flex items-center gap-1 hover:opacity-80"
                    >
                      View Certificate <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT BTN */}
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute right-2 sm:right-[-20px] top-1/2 -translate-y-1/2
            w-11 h-11 rounded-full bg-black/20 backdrop-blur-md border border-white/10
            flex items-center justify-center z-[50] disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === i ? "w-6 bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeCertificate && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999] p-4">
          <button
            onClick={() => setActiveCertificate(null)}
            className="absolute top-6 right-6 bg-black/40 text-white p-2 rounded-full z-[1000]"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="bg-white rounded-xl overflow-hidden max-w-3xl shadow-xl">
            {/* w-full */}
            <img
              src={activeCertificate.image}
              alt={activeCertificate.name}
              className="w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

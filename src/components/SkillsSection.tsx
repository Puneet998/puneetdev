
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "C++", percent: 50, img: "../../cpp.png" },
  { name: "C", percent: 50, img: "../../c.jpg" },
  { name: "Java", percent: 30, img: "../../java.png" },
  { name: "Python", percent: 70, img: "../../python.png" },
  { name: "HTML", percent: 80, img: "../../html.png" },
  { name: "CSS", percent: 60, img: "../../css.png" },
  { name: "Bootstrap", percent: 50, img: "../../bootstrap.png" },
  { name: "Tailwind", percent: 30, img: "../../tailwind.png" },
  { name: "React", percent: 40, img: "../../react.jpg" },
  { name: "Express", percent: 60, img: "../../express.png" },
  { name: "Node.js", percent: 50, img: "../../node.png" },
  { name: "JavaScript", percent: 60, img: "../../javascript.png" },
  { name: "GitHub", percent: 50, img: "../../github.png" },
  { name: "VS Code", percent: 80, img: "../../vscode.png" },
  { name: "Render", percent: 60, img: "../../render.png" },
  { name: "TypeScript", percent: 30, img: "../../typescript.png" },
  { name: "REST API", percent: 90, img: "../../rest.png" },
  { name: "Next.js", percent: 80, img: "../../nextjs-icon.webp" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative bg-black overflow-hidden">
      {/* soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.05] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Tools & technologies I work with
          </p>
        </motion.div>

        {/* Center aligned grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => {
            const r = 18;
            const c = 2 * Math.PI * r;
            const offset = c - (skill.percent / 100) * c;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{
                  scale: 1.08,
                  y: -6,
                  boxShadow: "0 0 35px rgba(0,255,255,0.45)",
                }}
                className="
                  w-[115px] h-[150px]
                  bg-neutral-900/80
                  backdrop-blur
                  rounded-xl
                  border-2 border-primary/50
                  shadow-[0_0_18px_rgba(0,255,255,0.18)]
                  transition-all duration-300
                  flex flex-col items-center justify-center
                "
              >
                {/* floating icon */}
                <motion.img
                  src={skill.img}
                  alt={skill.name}
                  className="w-9 h-9 mb-2"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                <p className="text-xs font-semibold text-primary/80 mb-2">
                  {skill.name}
                </p>

                {/* progress */}
                <div className="relative w-10 h-10">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="20"
                      cy="20"
                      r={r}
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      r={r}
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={c}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="text-primary transition-all duration-700"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-primary/90">
                    {skill.percent}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

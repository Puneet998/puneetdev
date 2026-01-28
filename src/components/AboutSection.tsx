import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Rocket, Code, Users } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, text: 'B.Tech Computer Science' },
  { icon: Rocket, text: 'Internship Ready' },
  { icon: Code, text: 'MERN Stack Developer' },
  { icon: Users, text: 'Team Collaborator' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60" />
              
              {/* Main Image Container */}
              <div className="relative glass-card p-3 rounded-3xl overflow-hidden">
                {/* <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl font-bold gradient-text">PP</div>
                </div> */}
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      <img
                       //src="/your-image.jpg"   // 👈 yahan apni image ka link daal dena
                       src="./../../puneetInfo.jpeg"
                       alt="Puneet Prajapati"
                       className="w-full h-full object-cover rounded-2xl"
                       />
                      </div>


                
                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 glass-card px-4 py-2 rounded-xl animate-float">
                  <span className="text-primary font-semibold text-sm">Developer</span>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Passionate about building{' '}
              <span className="gradient-text">impactful solutions</span>
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm Puneet Prajapati, a dedicated B.Tech Computer Science student with a deep 
              passion for web development and emerging technologies. My journey in tech started 
              with curiosity and has evolved into a commitment to creating meaningful digital experiences.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Currently focused on mastering the MERN stack while exploring AI and machine learning. 
              I believe in learning by building, which is why I dedicate time to personal projects 
              that solve real-world problems.
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

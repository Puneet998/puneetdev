import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    // <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
    <section
  id="home"
  className="min-h-screen relative flex items-center justify-center overflow-hidden pt-24 md:pt-32"
>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow top-1/2 left-1/4 -translate-y-1/2 opacity-50" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium ">Available for Internships & Jobs</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text glow-text">Puneet Prajapati</span>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-10"
          >
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'MERN & Next Js Developer',
                  'AI Enthusiast',
                  'Web Designer',
                  'Making AI Agents',
                  'AI Automations',
                  'Continuous Learner'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                wrapperClassName: 'text-primary font-semibold',
                cursorClassName: 'text-primary'
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A passionate B.Tech Computer Science student crafting modern web experiences 
            with the MERN stack. Turning ideas into elegant, functional applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >


            <a
           href="#projects"
           className="relative overflow-hidden group px-6 py-3 rounded-xl bg-primary text-background font-medium flex items-center gap-2 transition-colors"
         >
           {/* Background hover animation (white enters left→right) */}
           <span className="absolute inset-0 bg-background translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
         
           {/* Content layer */}
           <span className="relative z-10 flex items-center gap-2">
             <span className="group-hover:text-primary transition-colors duration-300">
               View Projects
             </span>
             <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
           </span>
         </a>


            <a
              // href="./../../public/puneetResume.pdf"
              target="_blank"
              href="https://drive.google.com/file/d/1uS300ayOypNCYqbnc71e--Z12DbD2_qV/view?usp=drive_link"

              download="Puneet_resume.pdf"
              className="relative overflow-hidden group px-6 py-3 rounded-xl border border-primary text-primary font-medium flex items-center gap-2 transition-colors"
              >
            {/* Hover Background animation */}
            <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          
            {/* Content (icon + text) */}
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="group-hover:text-background transition-colors duration-300">
                Download Resume
              </span>
            </span>
          </a>

          </motion.div>

          {/* Glass Card Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 glass-card p-6 md:p-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-muted-foreground">B.Tech CSE Student</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">MERN Stack</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-muted-foreground">Building Projects</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

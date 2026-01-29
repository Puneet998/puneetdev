// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { ExternalLink, Github, Folder } from 'lucide-react';

// const projects = [
//   {
//     title: 'Wanderlust E-Commerce',
//     description: 'Full-stack e-commerce platform for travel gear with user authentication, product management, and secure payment integration.',
//     tech: ['EJS', 'Node.js', 'MongoDB', 'Express'],
//     liveUrl: 'https://wanderlust-2zwy.onrender.com/listings',
//     githubUrl: 'https://github.com/Puneet998/Wanderlust',
//   },
//   {
//     title: 'Task Management App',
//     description: 'Collaborative task manager with real-time updates, drag-and-drop functionality, and team workspace features.',
//     tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
//     liveUrl: '#',
//     githubUrl: 'https://github.com/Puneet998/task-manager',
//   },
//   {
//     title: 'Weather Dashboard',
//     description: 'Interactive weather application with location-based forecasts, beautiful visualizations, and 7-day predictions.',
//     tech: ['React', 'OpenWeather API', 'Material-UI'],
//     liveUrl: '#',
//     githubUrl: 'https://github.com/Puneet998/weather-web-app',
//   },
//   {
//     title: 'Portfolio Generator',
//     description: 'A tool that helps developers create stunning portfolios with customizable themes and easy deployment options.',
//     tech: ['React', 'Node.js', 'Tailwind CSS', 'GitHub API'],
//     liveUrl: '#',
//     githubUrl: '#',
//   },
//   {
//     title: 'Blog Platform',
//     description: 'Modern blogging platform with markdown support, SEO optimization, and social sharing capabilities.',
//     tech: ['Next.js', 'MongoDB', 'MDX', 'Vercel'],
//     liveUrl: '#',
//     githubUrl: '#',
//   },
//   {
//     title: 'Chat Application',
//     description: 'Real-time messaging app with private rooms, file sharing, and emoji reactions. Fully responsive design.',
//     tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
//     liveUrl: '#',
//     githubUrl: '#',
//   },
// ];

// const ProjectsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="projects" className="py-24 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="section-title">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="section-subtitle">
//             A selection of projects that showcase my skills and passion for development
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="glass-card-hover group p-6 flex flex-col h-full"
//             >
//               {/* Header */}
//               <div className="flex items-start justify-between mb-4">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                   <Folder className="w-6 h-6 text-primary" />
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <a 
//                     href={project.githubUrl}
//                     className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Github className="w-4 h-4" />
//                   </a>
//                   <a 
//                     href={project.liveUrl}
//                     className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>

//               {/* Content */}
//               <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
//                 {project.title}
//               </h3>
//               <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mt-auto">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View More Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="mt-12 text-center"
//         >
//           <a
//             href="https://github.com/Puneet998"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-outline inline-flex items-center gap-2"
//           >
//             <Github className="w-4 h-4" />
//             View More on GitHub
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;



import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Wanderlust E-Commerce',
    description:
      'Full-stack e-commerce platform for travel gear with user authentication, product management, and secure payment integration.',
    tech: ['EJS', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://wanderlust-2zwy.onrender.com/listings',
    githubUrl: 'https://github.com/Puneet998/Wanderlust',
    image: '../../image_wanderlust.png',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task manager with real-time updates, drag-and-drop functionality, and team workspace features.',
    tech: ['Next.js', 'JavaScript', 'Tailwind CSS', 'MongoDB'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Puneet998/task-manager',
    image: '../../image_tm.png',

  },
  {
    title: 'Weather Dashboard',
    description:
      'Interactive weather application with location-based forecasts, beautiful visualizations, and 7-day predictions.',
    tech: ['React', 'OpenWeather API', 'Material-UI'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Puneet998/weather-web-app',
    image: '../../image_wheater.png',
  },
  {
    title: 'Video confrencing application',
    description:
      'A tool that helps developers create stunning portfolios with customizable themes and easy deployment options.',
    tech: ['React', 'Node.js', 'Socket.io', 'WebRTC','Express js','MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    image: '../../image_video.png',
  },
  
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover group p-6 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-6 h-6 text-primary" />
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Puneet998"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

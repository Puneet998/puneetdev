// import { useState, useEffect } from 'react';
// import { Menu, X, Code2 } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const navLinks = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Certificates', href: '#certificates' },
//   { name: 'Contact', href: '#contact' },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <a href="#home" className="flex items-center gap-2 group">
//             <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//               <Code2 className="w-5 h-5 text-primary" />
//             </div>
//             <span className="font-bold text-xl">
//               <span className="text-primary">Puneet</span>
//               <span className="text-foreground">.dev</span>
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a key={link.name} href={link.href} className="nav-link text-sm font-medium">
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
//           >
//             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden overflow-hidden"
//             >
//               <div className="py-4 flex flex-col gap-2">
//                 {navLinks.map((link, index) => (
//                   <motion.a
//                     key={link.name}
//                     href={link.href}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     onClick={() => setIsOpen(false)}
//                     className="px-4 py-3 rounded-xl hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
//                   >
//                     {link.name}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import { useState, useEffect } from "react";
// import { Menu, X, Code2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Certificates", href: "#certificates" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const scrollHandler = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", scrollHandler);
//     return () => window.removeEventListener("scroll", scrollHandler);
//   }, []);

//   return (
//     <>
//       {/* TOP NAVBAR */}
//       <motion.nav
//         initial={{ y: -80 }}
//         animate={{ y: 0 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-background/70 backdrop-blur-lg border-b border-white/10"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <a href="#home" className="flex items-center gap-2">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center"
//               >
//                 <Code2 className="w-5 h-5 text-primary" />
//               </motion.div>
//               <span className="font-bold text-xl">
//                 <span className="text-primary">Puneet</span>
//                 <span className="text-foreground">.dev</span>
//               </span>
//             </a>

//             {/* Desktop Links */}
//             <div className="hidden lg:flex gap-10 items-center">
//               {navLinks.map((l) => (
//                 <motion.a
//                   whileHover={{ scale: 1.1 }}
//                   key={l.name}
//                   href={l.href}
//                   className="text-sm font-medium hover:text-primary transition-colors"
//                 >
//                   {l.name}
//                 </motion.a>
//               ))}
//             </div>

//             {/* Mobile Button */}
//             <button
//               onClick={() => setOpen(true)}
//               className="lg:hidden bg-muted/40 border border-muted/60 rounded-xl w-11 h-11 flex items-center justify-center hover:bg-muted transition"
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* SIDE MENU DRAWER */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Overlay (background blur) */}
//             <motion.div
//               onClick={() => setOpen(false)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//             />

//             {/* Sidebar */}
//             <motion.aside
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               className="fixed top-0 left-0 h-full w-72 bg-background/90 border-r border-white/10 backdrop-blur-xl shadow-2xl z-50 flex flex-col"
//             >
//               {/* Sidebar Header */}
//               <div className="flex justify-between items-center p-6 border-b border-white/10">
//                 <div className="flex items-center gap-2">
//                   <Code2 className="w-5 h-5 text-primary" />
//                   <span className="font-bold text-lg">Menu</span>
//                 </div>
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="w-10 h-10 rounded-lg bg-muted/40 border border-muted/60 flex items-center justify-center hover:bg-muted"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>

//               {/* Sidebar Links */}
//               <div className="flex flex-col gap-1 p-4">
//                 {navLinks.map((l, i) => (
//                   <motion.a
//                     key={l.name}
//                     href={l.href}
//                     onClick={() => setOpen(false)}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.07 }}
//                     className="px-4 py-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors font-medium"
//                   >
//                     {l.name}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      {/* TOP NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center"
              >
                <Code2 className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="font-bold text-xl">
                <span className="text-primary">Puneet</span>
                <span className="text-foreground">.dev</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex gap-10 items-center">
              {navLinks.map((l) => (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  key={l.name}
                  href={l.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {l.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Button – hidden when sidebar is open */}
            {!open && (
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden bg-muted/40 border border-muted/60 rounded-xl w-11 h-11 flex items-center justify-center hover:bg-muted transition"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* SIDE MENU DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay Background for blur + close click */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 left-0 h-full w-72 bg-background/90 border-r border-white/10 backdrop-blur-xl shadow-2xl z-50 flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center"
              >
                <Code2 className="w-5 h-5 text-primary" />
              </motion.div>
                  <span className="font-bold text-xl">
                  <span className="text-primary">Puneet</span>
                  <span className="text-foreground">.dev</span>
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-lg bg-muted/40 border border-muted/60 flex items-center justify-center hover:bg-muted"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.name}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="px-4 py-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    {l.name}
                  </motion.a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

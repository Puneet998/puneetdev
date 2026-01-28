import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Puneet Prajapati | Full Stack Developer Portfolio</title>
        <meta name="description" content="Puneet Prajapati - B.Tech Computer Science student & Full Stack Developer specializing in MERN stack. View my projects, skills, and get in touch for internship opportunities." />
        <meta name="keywords" content="Puneet Prajapati, Full Stack Developer, MERN Stack, React Developer, Node.js, Portfolio, Web Developer, Fresher Developer" />
        <meta property="og:title" content="Puneet Prajapati | Full Stack Developer Portfolio" />
        <meta property="og:description" content="B.Tech CSE student passionate about building modern web applications with React, Node.js, and MongoDB." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        {/* <link rel="canonical" href="https://puneet.dev" /> */}
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
        <ChatBot />
      </main>
    </>
  );
};

export default Index;

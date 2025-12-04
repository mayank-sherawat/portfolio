"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code, 
  Database, 
  Cpu, 
  Layers, 
  ExternalLink, 
  Terminal, 
  User, 
  Briefcase, 
  Award,
  ChevronDown,
  ShieldCheck,
  Activity,
  MapPin,
  Clock,
  Wifi
} from 'lucide-react';

// --- TYPES ---
interface Profile {
  name: string;
  role: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  bio: string;
}

interface SkillCategory {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  details: string[];
}

interface Project {
  title: string;
  tech: string;
  period: string;
  desc: string;
  points: string[];
}

interface EducationItem {
  school: string;
  degree: string;
  score: string;
  year: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
}

// --- DATA FROM RESUME ---
const PROFILE: Profile = {
  name: "Mayank Sherawat",
  role: "Computer Science Engineer | Full Stack Developer",
  contact: {
    phone: "+91 7027004234",
    email: "mayanksherawat21@gmail.com",
    linkedin: "linkedin.com/in/mayank-sherawat",
    github: "github.com/mayank-sherawat"
  },
  bio: "Results-driven Computer Science Engineer with hands-on experience in full-stack development using React.js, Node.js, and MongoDB. Skilled in building scalable, real-world applications with a strong focus on clean code, problem-solving, and collaboration."
};

const SKILLS: SkillCategory[] = [
  { category: "Programming Languages", items: ["JavaScript", "TypeScript", "C", "SQL"], icon: <Terminal size={20} /> },
  { category: "Technologies", items: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Node.js", "Express.js", "Next.js"], icon: <Code size={20} /> },
  { category: "Databases", items: ["MySQL", "MongoDB", "AWS S3"], icon: <Database size={20} /> },
  { category: "Tools", items: ["GitHub", "VS Code", "MongoDB Compass", "Postman"], icon: <Cpu size={20} /> },
  { category: "Soft Skills", items: ["Analytical Thinking", "Collaboration", "Adaptability", "Time Management", "Communication"], icon: <User size={20} /> }
];

const EXPERIENCE: Job[] = [
  {
    company: "Escorts Kubota Ltd",
    role: "Full Stack Developer Intern",
    period: "Aug 2025 – Present",
    location: "Faridabad, India",
    details: [
      "Developing an Employee Timeline Management System using Next.js, Node.js, Express, TypeScript, and Tailwind CSS.",
      "Designing and integrating RESTful APIs to improve system scalability and user experience.",
      "Contributing to an AI-driven Autonomous Tractor project via data labeling and timeline preparation for ML models."
    ]
  }
];

const PROJECTS: Project[] = [
  {
    title: "Social House – Photo Sharing Platform",
    tech: "Next.js, React, TypeScript, Prisma, PostgreSQL, NextAuth, AWS S3, Tailwind CSS",
    period: "Dec 2024 – Jan 2025",
    desc: "A full-stack social media application where users can sign up, upload photos, manage their profile, browse a global feed, and view profiles of other users. Features secure authentication and cloud-based image storage.",
    points: [
      "Built a secure login & signup system using NextAuth Credentials with JWT-based session handling and encrypted password storage.",
      "Integrated AWS S3 for image uploads, implementing unique file naming, optimized upload flow, and public file delivery.",
      "Designed Profile, Feed, and Search tabs with smooth navigation and responsive UI using Tailwind CSS.",
      "Implemented dynamic user profiles, showing profile pictures, bio, and user-specific photo galleries.",
      "Developed a structured backend using Prisma ORM with strong relational mapping between Users and Photos for fast retrieval.",
      "Added real-time UI updates after photo uploads and profile picture changes using client-side state syncing."
    ]
  },
  {
    title: "Task Manager",
    tech: "React.js, Tailwind CSS",
    period: "March 2025 – July 2025",
    desc: "Interactive task management system enabling managers to assign and track employee tasks efficiently.",
    points: [
      "Enhanced frontend performance using React Hooks.",
      "Designed fully responsive interface ensuring seamless usability."
    ]
  },
  {
    title: "DriveVault Cloud Storage",
    tech: "Node.js, Express, MongoDB, EJS, Supabase",
    period: "Aug 2025 – Sep 2025",
    desc: "Full-stack cloud storage app with JWT authentication and Supabase integration.",
    points: [
      "Improved backend efficiency with optimized MongoDB queries.",
      "Reduced bugs by 60% through enhanced error handling and automated restarts."
    ]
  }
];

const EDUCATION: EducationItem[] = [
  {
    school: "Chitkara University, Punjab",
    degree: "B.E. Computer Science",
    score: "8.76 CGPA",
    year: "2021-2025"
  },
  {
    school: "Korea University, South Korea",
    degree: "Exchange Semester",
    score: "Grade A",
    year: "2022"
  }
];

const CERTIFICATIONS: CertificationItem[] = [
  { name: "Developing Front-End Apps with React", issuer: "IBM" },
  { name: "Getting Started with Git and GitHub", issuer: "IBM" },
  { name: "Agile Project Management", issuer: "Google" },
  { name: "Python for Data Science, AI Development", issuer: "IBM" },
  { name: "Software Engineering Specialization", issuer: "HKUST" }
];

// --- COMPONENTS ---

// 1. Futuristic Background Canvas
const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles: Particle[] = [];
    const particleCount = 70;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(6, 182, 212, 0.5)'; // Cyan
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950" />;
};

// 2. Scroll Progress Bar
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-linear-to-r from-cyan-500 via-purple-500 to-cyan-500 z-60 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ width: `${scrollProgress}%` }} />
  );
};

// 3. Custom Cursor
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      // Add slight delay for trail in a real app, or just sync for performance
      setTimeout(() => {
        if(trail) trail.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }, 50);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-100 -translate-x-1/2 -translate-y-1/2 mix-blend-screen hidden md:block" />
      <div ref={trailRef} className="fixed top-0 left-0 w-8 h-8 border border-cyan-500/50 rounded-full pointer-events-none z-99 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden md:block" />
    </>
  );
};

// 4. Glitch Text Effect Component
interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-400 opacity-0 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all duration-100 ease-in-out select-none" aria-hidden="true">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-purple-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-0.5 transition-all duration-100 ease-in-out select-none" aria-hidden="true">{text}</span>
    </div>
  );
};

// 5. Typewriter Effect
const Typewriter = ({ text, speed = 50, className = "" }: { text: string; speed?: number; className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className={`${className}`}>
      {displayedText}
      <span className="animate-pulse text-cyan-400 font-bold ml-1">_</span>
    </span>
  );
};

// 6. 3D Tilt Card Component
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    const rotateX = y * -10; 
    const rotateY = x * 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transform, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

// 7. Project Card Component
const ProjectCard = ({ project, className = "" }: { project: Project; className?: string }) => (
  <TiltCard className={className}>
    <div className="group relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-cyan-500/40 transition-all duration-500 h-full">
      <div className="h-1 w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
          <ExternalLink size={20} className="text-slate-500 group-hover:text-white transition-colors cursor-pointer" />
        </div>
        
        <p className="text-slate-400 mb-6 min-h-12">{project.desc}</p>
        
        <div className="space-y-3 mb-6">
          {project.points.map((pt, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-purple-500 mt-1">➜</span>
              {pt}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
          {project.tech.split(',').map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-900/50 rounded">
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  </TiltCard>
);

// 8. Scroll Reveal Animation Component
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// 9. Section Title
interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon, title }) => (
  <ScrollReveal>
    <div className="flex items-center gap-3 mb-10 group cursor-default">
      <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
        {icon}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-slate-100 tracking-tighter">
        <span className="text-cyan-400">&lt;</span>
        {title}
        <span className="text-cyan-400">/&gt;</span>
      </h2>
      <div className="h-px grow bg-linear-to-r from-cyan-500/50 to-transparent ml-6" />
    </div>
  </ScrollReveal>
);

// 10. Navigation
const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold font-mono tracking-widest text-cyan-400 cursor-pointer hover:text-white transition-colors">
          MS.DEV
        </div>
        <div className="hidden md:flex gap-8">
          {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm font-medium text-slate-400 hover:text-cyan-400 uppercase tracking-widest transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 cursor-none">
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <NavBar />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-sm font-mono tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            SYSTEM ONLINE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
            <GlitchText text={PROFILE.name.toUpperCase()} />
          </h1>
          <div className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed h-8">
            <Typewriter text={PROFILE.role} speed={40} />
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <a href={`https://${PROFILE.contact.github}`} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group animate-float cursor-none">
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href={`https://${PROFILE.contact.linkedin}`} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group animate-float cursor-none" style={{ animationDelay: '0.2s' }}>
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href={`mailto:${PROFILE.contact.email}`} className="p-3 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group animate-float cursor-none" style={{ animationDelay: '0.4s' }}>
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown size={30} className="text-cyan-400" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon={<User size={28} />} title="About Me" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 rounded-lg bg-slate-900 border border-slate-800">
                <p className="text-lg leading-relaxed text-slate-300">
                  {PROFILE.bio}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Adaptability", "Collaboration", "Analytical Thinking"].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-mono rounded bg-slate-800 text-cyan-400 border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            {/* Education Quick View */}
            <div className="space-y-6">
               <ScrollReveal delay={200}>
                 <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                   <Award className="text-purple-400" /> Education
                 </h3>
               </ScrollReveal>
               {EDUCATION.map((edu, index) => (
                 <ScrollReveal key={index} delay={index * 200 + 300}>
                   <div className="p-4 border-l-2 border-slate-700 hover:border-cyan-400 bg-slate-900/30 hover:bg-slate-900/60 transition-colors">
                     <h4 className="text-white font-medium">{edu.school}</h4>
                     <p className="text-sm text-cyan-400">{edu.degree}</p>
                     <div className="flex justify-between mt-2 text-xs text-slate-500 font-mono">
                       <span>{edu.year}</span>
                       <span>{edu.score}</span>
                     </div>
                   </div>
                 </ScrollReveal>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle icon={<Layers size={28} />} title="Technical Arsenal" />
          <div className="flex flex-wrap justify-center gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]">
                <TiltCard className="h-full">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 group h-full">
                    <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">{skillGroup.category}</h3>
                    <ul className="space-y-2">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={<Briefcase size={28} />} title="Work Log" />
          <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
            {EXPERIENCE.map((job, idx) => (
              <ScrollReveal key={idx} delay={idx * 200}>
                <div className="relative pl-8 md:pl-12">
                  <span className="absolute top-0 left-[-6.5px] w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-900 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                  <div className="relative p-6 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{job.company}</h3>
                      <span className="text-xs font-mono text-cyan-400 py-1 px-2 bg-cyan-950/30 rounded border border-cyan-900">{job.period}</span>
                    </div>
                    <h4 className="text-purple-400 font-medium mb-4">{job.role}</h4>
                    <ul className="space-y-2 mb-4">
                      {job.details.map((point, i) => (
                        <li key={i} className="text-sm text-slate-400 leading-relaxed flex gap-2">
                          <span className="text-cyan-500 mt-1">▹</span> {point}
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      {job.location}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={<Code size={28} />} title="Deployments" />
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Main Feature Project - Left Column */}
            <ScrollReveal delay={0} className="h-full">
               <ProjectCard project={PROJECTS[0]} className="h-full" />
            </ScrollReveal>

            {/* Stacked Projects - Right Column */}
            <div className="flex flex-col gap-8">
              {PROJECTS.slice(1).map((project, idx) => (
                <ScrollReveal key={idx} delay={(idx + 1) * 200}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={<ShieldCheck size={28} />} title="Clearances" />
          <div className="grid md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="relative group p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-all hover:bg-slate-800/80 cursor-none">
                  <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-1 bg-linear-to-r from-transparent to-cyan-500"></div>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">{cert.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-slate-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    {cert.issuer}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 relative">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-4 rounded-full bg-cyan-500/10 mb-6 animate-pulse">
            <Mail size={40} className="text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Initialize Communication</h2>
          <p className="text-slate-400 text-lg mb-10">
            Currently available for freelance projects and full-time opportunities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto mb-12">
            <a href={`mailto:${PROFILE.contact.email}`} className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 group cursor-none">
              <Mail className="text-purple-500 group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm font-mono text-slate-300">{PROFILE.contact.email}</span>
            </a>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 group cursor-none">
              <Phone className="text-purple-500 group-hover:text-cyan-400 transition-colors" />
              <span className="text-sm font-mono text-slate-300">{PROFILE.contact.phone}</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-600 text-sm font-mono border-t border-slate-900 bg-black">
        <p>© {new Date().getFullYear()} MAYANK_SHERAWAT. SYSTEM_V.1.0</p>
      </footer>

      {/* GLOBAL STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
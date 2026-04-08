/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, Sparkles, Code2, Zap, Brain, Terminal, 
  Globe, Copy, Check, Cpu, ChevronLeft, ChevronRight,
  ExternalLink, Github, Play, Twitter, Linkedin, Instagram,
  Mail, ArrowUp
} from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "NeuroSync AI",
    category: "Agentic Platform",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Python", "OpenAI"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 2,
    title: "Quantum Dashboard",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "D3.js", "Tailwind"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    title: "Void Commerce",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800",
    tech: ["TypeScript", "Stripe", "Node.js"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    title: "Aura Social",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Firebase", "Motion"],
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const heroVideoUrl = "https://storage.googleapis.com/ai-sandbox-videofx/video/774a9040-7985-4069-8c06-9a465a95a4ff?GoogleAccessId=labs-ai-sandbox-videoserver-prod@system.gserviceaccount.com&Expires=1775648916&Signature=H1qhhF953cz3TtEuZwdyJHED7ofr3o2%2FXwL2IKmTW02cKlWbIH4K5UK4j%2BXRBUW95EJM4tjKqfHJdUa53rYapW2sNYskxjW3lwPdA84SGIsUR0TxmpRGtZpj9BvfkuJVeUxytC1S%2FEsUrgH7vY%2F%2Fvgs64AbGIaEOu93gXAPK%2BkxQ1IuJ9v2Jwxl%2BdPE2CjoOwHOwbY5utGjxkCVm2rn5XLvzOvfCvk3VFdDU0fJr3PMaYgzP50Wv4K46mf7JkYp7l%2BwfeoQAFZGV7yfrePRNJg6%2F1z3ayqCru%2FRM2%2FJnows9%2FCDICOlaT7tS%2BwZokv2WMa%2FCF8ZIp4tNcEnJtFsBsw%3D%3D";
  const projectVideoUrl = "https://storage.googleapis.com/ai-sandbox-videofx/video/8cea56d6-8324-4a25-9688-60cec3128331?GoogleAccessId=labs-ai-sandbox-videoserver-prod@system.gserviceaccount.com&Expires=1775652369&Signature=BDRuSUO0QTTpsfuuENWaxFle1NPMYPvRig8TQDXyi4Re%2BqSq4AzgHpNXiiQEyOCmQZY4AQD546Lm%2F4V1smBMF8o4xhX3AyVXxj8LVgNVHes0q2jr5mUr280%2BmzT%2BsR5y7noJzbvuepWufaTpaBJawOE%2BW0o0QCxSZN3kEORxY333LNKh4mIm%2FtchaNYYK5OhxU2iqaqVXj7vjoZUIVFJXARN1qiAZUlPqM6j6gfx%2B4jTj7JBIwrjlvojCKNPr%2BzoRlGqBnELd2CTWLyrZv8SildgSlDSbfndLmxZD6sHxKksgp2CZyO1Y2zbxD5Qifyjo0gFzsfO58c4115akKcY9w%3D%3D";

  const copyEmail = () => {
    navigator.clipboard.writeText("muhammadsaadkhalid82@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-purple/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 backdrop-blur-sm bg-black/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          
          <span className="font-display font-bold text-xl tracking-tight">Saad Khalid</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60"
        >
          <a href="#work" className="hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-brand-purple hover:text-white transition-all active:scale-95"
        >
          Hire Me
        </motion.a>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Video - Limited to Hero */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110 opacity-40 grayscale"
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.85] tracking-tighter mb-8 text-balance"
          >
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">cool things</span> with code.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/50 max-w-lg mb-10 leading-relaxed font-light"
          >
            I turn bold ideas into fast, intuitive web experiences built with clean architecture and zero unnecessary complexity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#work"
              className="group px-8 py-4 bg-white text-black rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-purple hover:text-white transition-all active:scale-95"
            >
              See My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
            >
              Say Hello
            </a>
          </motion.div>
        </div>
      </header>

      {/* Bento Grid Section (About) */}
      <section id="about" className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden rounded-[48px] my-12">
        {/* Background Video - Now in About Section */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-110 opacity-35 grayscale"
          >
            <source src={projectVideoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>
        
        {/* Subtle Grid Background for this section */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          
          {/* Card 1: Large Image Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" 
              alt="Agentic AI Robot"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight text-white drop-shadow-lg">
                I prioritize client collaboration, fostering open communication
              </h3>
            </div>
          </motion.div>

          {/* Card 2: Timezone Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-2 md:row-span-1 bg-[#050505] rounded-3xl p-8 border border-white/5 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-display font-bold mb-2">I'm very flexible with time zone communications</h3>
            </div>
            <div className="absolute -bottom-12 -right-12 opacity-20 group-hover:opacity-40 transition-opacity">
              <Globe className="w-48 h-48 text-brand-purple" />
            </div>
          </motion.div>

          {/* Card 3: Tech Stack Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-2 md:row-span-1 bg-[#050505] rounded-3xl p-8 border border-white/5 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">I constantly try to improve</p>
              <h3 className="text-3xl font-display font-bold">My tech stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Python", "Agentic AI", "React", "Tailwind"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white/60">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Passion Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-1 md:row-span-1 bg-[#050505] rounded-3xl p-8 border border-white/5 flex flex-col justify-between"
          >
            <div className="w-10 h-10 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-brand-purple" />
            </div>
            <h3 className="text-lg font-display font-bold leading-snug">Tech enthusiast with a passion for development.</h3>
          </motion.div>

          {/* Card 5: Contact Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-brand-purple to-brand-pink rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4"
          >
            <h3 className="text-xl font-display font-bold">Do you want to start a project together?</h3>
            <button 
              onClick={copyEmail}
              className="flex items-center gap-2 px-4 py-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-xl text-xs font-bold transition-all active:scale-95"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Email Copied!" : "Copy my email address"}
            </button>
          </motion.div>

          {/* Card 6: Currently Building Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-2 md:row-span-1 bg-[#050505] rounded-3xl p-8 border border-white/5 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">The Inside Scoop</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold">Currently building a Full Stack Agentic AI Application</h3>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Brain className="w-32 h-32" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-brand-purple text-xs font-bold">
              <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse" />
              In Progress
            </div>
          </motion.div>

        </div>
      </section>

      {/* Projects Carousel Section */}
      <section id="work" className="relative z-10 py-24 overflow-hidden">
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full mb-12 flex items-end justify-between">
          <div>
            <p className="text-brand-purple text-xs font-bold uppercase tracking-[0.3em] mb-4">Selected Works</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Crafted with precision</h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-12 no-scrollbar snap-x snap-mandatory"
        >
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[400px] snap-center"
            >
              {/* Card Design inspired by screenshot */}
              <div className="bg-[#0A0A0A] rounded-[32px] p-4 border border-white/5 group hover:border-brand-purple/30 transition-all duration-500">
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="px-2 pb-2">
                  <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-brand-purple transition-colors">{project.title}</h3>
                  <div className="flex gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] text-white/40 font-medium">{t}</span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-white/30">
                      <Zap className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">High Performance</span>
                    </div>
                    <div className="flex gap-3">
                      <Github className="w-4 h-4 text-white/40 hover:text-white cursor-pointer transition-colors" />
                      <ExternalLink className="w-4 h-4 text-white/40 hover:text-white cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-12 text-balance leading-[0.9]"
            >
              Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">legendary</span> together.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <a 
                href="mailto:muhammadsaadkhalid82@gmail.com"
                className="group px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-brand-purple hover:text-white transition-all active:scale-95 shadow-2xl shadow-white/5"
              >
                Start a Project
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-4">
                {[
                  
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Github, href: "#", label: "GitHub" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-brand-purple/50 transition-all"
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white/70" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                
                <span className="font-display font-bold text-2xl tracking-tight">Saad Khalid</span>
              </div>
              <p className="text-white/40 max-w-sm leading-relaxed mb-8">
                Building digital experiences that matter. Focused on high-performance applications and human-centered design.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white/30">Navigation</h4>
              <ul className="space-y-4 text-sm font-medium text-white/50">
                <li><a href="#" className="hover:text-brand-purple transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-brand-purple transition-colors">About</a></li>
                <li><a href="#work" className="hover:text-brand-purple transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white/30">Socials</h4>
              <ul className="space-y-4 text-sm font-medium text-white/50">
                
                <li><a href="#" className="hover:text-brand-purple transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-brand-purple transition-colors">GitHub</a></li>
                
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
            <p className="text-white/20 text-xs font-medium uppercase tracking-[0.2em]">
              © 2026 Saad Khalid • All rights reserved
            </p>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              Back to Top
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-purple transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </footer>

      {/* Decorative Background Elements */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink/5 blur-[120px] rounded-full -ml-64 -mb-64 pointer-events-none" />
    </div>
  );
}

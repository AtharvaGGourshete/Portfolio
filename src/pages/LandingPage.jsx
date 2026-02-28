import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  GithubIcon,
  InstagramIcon,
  Layout,
  Linkedin,
  LinkedinIcon,
  Mail,
  MessageSquare,
  Send,
  Terminal,
  TwitchIcon,
  Twitter,
  User,
} from "lucide-react";

const certifications = [
  {
    title: "Full Stack Web Developer",
    issuer: "Udemy",
    year: "2024",
    description:
      "Demonstrated expertise in designing and deploying full stack websites",
    image: "/fullstack.jpg",
  },
  {
    title: "Programming and Data Science",
    issuer: "IIT Madras",
    year: "2025",
    description:
      "Foundation level certificate for Programming and Data Science from Indian Institute of Technology Madras.",
    image: "/foundation.png",
  },
];

const projects = [
  {
    id: 1,
    title: "Rydo - AI Car Marketplace",
    description:
      "An AI-powered car marketplace with a smart admin dashboard, analytics, and seamless test drive bookings.",
    image: "/rydo.png",
    link: "https://rydo-sooty.vercel.app/",
    github: "https://github.com/AtharvaGGourshete/ai-based-car-finder",
  },
  // {
  //   id: 2,
  //   title: "Chainsaw - AI Driven Supply Chain Optimization",
  //   description: "",
  //   image: "/supply-chain.png",
  //   link: "https://github.com/AtharvaGGourshete/supply-chain-optimization",
  // },
];

const LandingPage = () => {
  const [category, setCategory] = useState("fullstack");
  const form = useRef();

  const handleToast = () => {
    toast("You are now connected with Atharva Gourshete.");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID,
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => console.log("FAILED...", error.text),
      );
  };

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  // Small animated floating background shapes
  const FloatingVector = ({ top, left, delay, size, opacity }) => (
    <motion.div
      className="absolute rounded-full bg-gradient-to-tr from-violet-600/40 to-purple-500/20 blur-2xl"
      style={{ top, left, width: size, height: size, opacity }}
      animate={{ y: [0, 20, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-[#0D0D0D] text-white px-6 md:px-32 flex items-center relative overflow-hidden"
      >
        {/* Background Decorative Element */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full" />

        <div className="grid md:grid-cols-2 w-full items-center z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              It's me <br />
              <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                Atharva Ganesh Gourshete
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Someone who loves to{" "}
              <span className="text-white font-medium italic">
                sneak out answers
              </span>{" "}
              for how things work out behind the scenes.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-block"
            ></motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              {/* The Green Glow Behind Image */}
              <div className="absolute -inset-1 bg-emerald-500/20 rounded-[2rem] blur-xl group-hover:bg-emerald-500/40 transition duration-500"></div>

              <div className="relative border-2 border-emerald-500/30 rounded-[2rem] overflow-hidden bg-[#1A1A1A]">
                <img
                  src="pfp.png"
                  alt="Atharva"
                  className="h-80 w-80 md:h-[450px] md:w-[450px]"
                />
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-emerald-500" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-emerald-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[#0A0A0A] text-gray-200 py-24 px-6 md:px-16 border-t border-emerald-900/20 relative overflow-hidden"
      >
        {/* Subtle Background Text */}
        <div className="absolute -bottom-10 -right-10 text-[12rem] font-bold text-emerald-500/5 select-none pointer-events-none">
          ABOUT
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          {/* Left Column: Heading & Socials */}
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Wanna know more{" "}
              <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)] block">
                about me?
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-emerald-500 font-mono text-sm tracking-widest uppercase">
                Follow for more
              </p>
              <div className="flex gap-5">
                {[
                  {
                    Icon: GithubIcon,
                    href: "https://github.com/AtharvaGGourshete",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/atharva-gourshete-b2a66927b/",
                  },
                  { Icon: Twitter, href: "https://x.com/Atharvag_17" },
                  {
                    Icon: InstagramIcon,
                    href: "https://www.instagram.com/atharva_gourshete/",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-emerald-900/30 bg-emerald-500/5 hover:bg-emerald-500 hover:text-black transition-all duration-300"
                  >
                    <social.Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio "Terminal" Card */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-emerald-500/20 bg-[#111] p-1 shadow-2xl"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-emerald-900/20">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                <span className="ml-2 text-xs font-mono text-gray-500">
                  bio.js
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-6 text-lg leading-relaxed text-gray-400">
                <p>
                  Hey there, you read my name up there. I’ve spent the last
                  <span className="text-white"> 2 years </span> messing around
                  with tech exploring stuff, breaking things, and finally
                  figuring out how they actually work.
                </p>

                <p>
                  Currently, I’m running a{" "}
                  <span className="text-emerald-400 font-mono italic">
                    "dual-boot" life
                  </span>
                  : grinding for a B.E. in Computer Engineering at APSIT while
                  pulling data insights at IIT Madras.
                </p>

                <p>
                  I’m the guy who can’t just use an app, I have to peek under
                  the hood to see what makes the engine purr. If it involves
                  building
                  <span className="text-white font-medium">
                    {" "}
                    sleek interfaces{" "}
                  </span>{" "}
                  or
                  <span className="text-white font-medium">
                    {" "}
                    dissecting complex data
                  </span>
                  , I’m probably already caffeinated and working on it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="bg-[#0A0A0A] text-gray-300 py-28 px-6 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Technical <span className="text-emerald-400">Expertise</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl text-sm">
              Technologies and tools I use to build scalable full-stack systems,
              automate workflows, and work with data-driven applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Frontend */}
            <div className="bg-[#14161C] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition">
              <h3 className="text-lg font-semibold text-white mb-4">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-[#14161C] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition">
              <h3 className="text-lg font-semibold text-white mb-4">
                Backend & APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express",
                  "REST APIs",
                  "Supabase",
                  "Prisma",
                  "PostgreSQL",
                  "Flask",
                  "SQLite",
                  "Authentication",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-[#14161C] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition">
              <h3 className="text-lg font-semibold text-white mb-4">
                DevOps & Deployment
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "Vercel",
                  "CI/CD Basics",
                  "Docker (Learning)",
                  "Linux Basics",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data */}
            <div className="bg-[#14161C] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition">
              <h3 className="text-lg font-semibold text-white mb-4">
                Data & Analytics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "Scikit-learn",
                  "Data Cleaning",
                  "Basic ML Models",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Concepts */}
            <div className="bg-[#14161C] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition">
              <h3 className="text-lg font-semibold text-white mb-4">
                Core CS Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures",
                  "Algorithms",
                  "OOP",
                  "DBMS",
                  "Operating Systems",
                  "Computer Networks",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-[#0F1115] text-gray-300 py-28 px-6 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                <span className="text-emerald-400">Projects</span>
              </h2>
              <p className="text-gray-500 mt-3 max-w-md text-sm">
                A collection of full-stack and frontend applications built with
                a focus on performance, scalability, and clean architecture.
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              className="grid lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="group bg-[#14161C] border border-white/5 hover:border-white/10 transition-all duration-300 rounded-2xl overflow-hidden">
                    {/* Image */}
                    <div className="relative w-full md:w-96 shrink-0 md:mx-24 overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow p-6">
                      <CardHeader className="p-0 mb-3">
                        <CardTitle className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="p-0 flex-grow">
                        <CardDescription className="text-gray-400 text-sm leading-relaxed mb-4">
                          {project.description}
                        </CardDescription>

                        <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="p-0 flex gap-4 pt-6 mt-6 border-t border-white/5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-gray-400 hover:text-white transition flex items-center gap-2"
                        >
                          <Github size={16} /> Repository
                        </a>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition flex items-center gap-2"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      </CardFooter>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section
        id="certifications"
        className="bg-[#0D0D0D] text-gray-200 py-24 px-6 relative overflow-hidden"
      >
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Proof of <span className="text-emerald-400">Concept</span>
            </h2>
            <div className="h-1 w-20 bg-emerald-500 rounded-full" />
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
              Milestones & Certifications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Card className="group bg-[#151515] border-gray-800 hover:border-emerald-500/50 h-full flex justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0" />
                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <Award className="text-emerald-500" size={24} />
                      <span className="text-xs text-emerald-500/60 bg-emerald-500/10 px-2 py-1 rounded">
                        {cert.year}
                      </span>
                    </div>
                    <CardTitle className="text-white text-xl group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-gray-500 font-medium">
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10 flex flex-col flex-grow">
                    <div className="relative mb-6 overflow-hidden rounded-lg border border-gray-800">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- CONTACT -------------------- */}
      <section
        id="contact"
        className="bg-[#0D0D0D] text-gray-100 py-24 px-6 border-t border-emerald-900/10 relative overflow-hidden"
      >
        {/* Background Subtle Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header - Scaled Up */}
          <div className="text-left mb-20 space-y-4">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              LET'S{" "}
              <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                CONNECT.
              </span>
            </h2>
          </div>

          <motion.div
            className="bg-[#111] border-2 border-emerald-900/20 rounded-3xl p-10 md:p-16 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Name Input - Bold Labels & Large Text */}
                <div className="relative space-y-4">
                  <label className="text-sm text-emerald-500 uppercase tracking-widest font-black flex items-center gap-3">
                    <User size={18} strokeWidth={3} /> NAME
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-emerald-500 transition-colors focus:outline-none text-2xl font-bold text-white placeholder:text-gray-800"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative space-y-4">
                  <label className="text-sm text-emerald-500 uppercase tracking-widest font-black flex items-center gap-3">
                    <Mail size={18} strokeWidth={3} /> EMAIL
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-emerald-500 transition-colors focus:outline-none text-2xl font-bold text-white placeholder:text-gray-800"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative space-y-4">
                <label className="text-sm text-emerald-500 uppercase tracking-widest font-black flex items-center gap-3">
                  <MessageSquare size={18} strokeWidth={3} /> MESSAGE
                </label>
                <textarea
                  name="message"
                  placeholder="What are we building?"
                  rows="3"
                  className="w-full bg-transparent border-b-2 border-white/10 pb-4 focus:border-emerald-500 transition-colors focus:outline-none text-2xl font-bold text-white placeholder:text-gray-800 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button - Large & Heavy */}
              <div className="pt-8 flex justify-center">
                <Button
                  type="submit"
                  className="w-full md:w-auto px-12 py-8 bg-emerald-700 hover:bg-emerald-500 text-white font-bold text-xl transition-all duration-300 rounded-2xl flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-[1.02] cursor-pointer"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Full Stack Web Developer",
    issuer: "Udemy",
    year: "2025",
    description:
      "Demonstrated expertise in designing and deploying full stack websites",
  },
];

const LandingPage = () => {
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
        import.meta.env.VITE_USER_ID
      )
      .then(
        () => console.log("SUCCESS!"),
        e.target.reset(),
        (error) => console.log("FAILED...", error.text)
      );
  };

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const inputHover = {
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div
        id="home"
        className="min-h-screen font-[Poppins] bg-blue-950 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwIDEyLjE1Ni0yMS4zNTIgMTcuODU0LTM2IDM2QzE0LjY0OCAxOS4xNDYgMzYgMTMuNDQ4IDM2IDE4bTI0IDBjMCAxMi4xNTYtMjEuMzUyIDE3Ljg1NC0zNiAzNiAxNC42NDgtMTguODU0IDM2LTEzLjQ0OCAzNi0xOHoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L2c+PC9zdmc+')] opacity-10 pointer-events-none"></div>
        <motion.div
          className="text-center pt-20 md:pt-52 space-y-6 items-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold text-white items-center mt-16"
            variants={fadeInUp}
          >
            Welcome to my Portfolio
          </motion.h1>
          <motion.h1
            className="text-3xl font-bold text-white"
            variants={fadeInUp}
          >
            Atharva Ganesh Gourshete
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200"
            variants={fadeInUp}
          >
            Full Stack Web Developer
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              onClick={() => handleScroll("projects")}
              className="w-32 mt-4 bg-gray-900 hover:bg-gray-700 text-white hover:text-gray-200 font-semibold cursor-pointer"
              variant="secondary"
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div
        id="about"
        className="bg-white text-black font-[Poppins] py-10 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwIDEyLjE1Ni0yMS4zNTIgMTcuODU0LTM2IDM2QzE0LjY0OCAxOS4xNDYgMzYgMTMuNDQ4IDM2IDE4bTI0IDBjMCAxMi4xNTYtMjEuMzUyIDE3Ljg1NC0zNiAzNiAxNC42NDgtMTguODU0IDM2LTEzLjQ0OCAzNi0xOHoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L2c+PC9zdmc+')] opacity-10 pointer-events-none"></div>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 relative z-10 text-blue-950"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold">
              Full Stack Web Developer
            </h3>
            <div className="text-base md:text-lg space-y-2">
              <p>
                Full Stack Developer studying at A.P. Shah Institute of
                Technology
              </p>
              <p>Experienced in building modern React full stack Web Apps</p>
              <p>Using latest technologies available in the market</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <Button
                onClick={() => handleScroll("projects")}
                className="w-32 mt-4 bg-gray-900 hover:bg-gray-700 text-white hover:text-gray-200 font-semibold cursor-pointer"
              >
                View Projects
              </Button>
              <Button
                onClick={() => handleScroll("contact")}
                className="w-32 mt-4 bg-gray-900 hover:bg-gray-700 text-white hover:text-gray-200 font-semibold cursor-pointer"
              >
                Connect
              </Button>
            </div>
          </motion.div>
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold">Education</h3>
            <ul className="text-base md:text-lg space-y-2">
              <li>
                <span className="font-bold">Schooling:</span> Lok Puram Public
                School - 91.04%
              </li>
              <li>
                <span className="font-bold">High School:</span> Pace Institute -
                74%
              </li>
              <li>
                <span className="font-bold">Engineering:</span> A.P. Shah
                Institute Of Technology
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div
        id="skills"
        className="bg-gray-100 text-black font-[Poppins] py-10 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwIDEyLjE1Ni0yMS4zNTIgMTcuODU0LTM2IDM2QzE0LjY0OCAxOS4xNDYgMzYgMTMuNDQ4IDM2IDE4bTI0IDBjMCAxMi4xNTYtMjEuMzUyIDE3Ljg1NC0zNiAzNiAxNC42NDgtMTguODU0IDM2LTEzLjQ0OCAzNi0xOHoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L2c+PC9zdmc+')] opacity-10 pointer-events-none"></div>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 relative z-10 text-blue-950"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Frontend",
              skills: [
                "HTML",
                "CSS",
                "JavaScript(ES6+)",
                "Tailwind CSS",
                "Bootstrap",
                "React.js",
                "Next.js",
                "Shad CN",
              ],
            },
            {
              title: "Backend",
              skills: [
                "JavaScript",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Supabase",
                "Authentication",
              ],
            },
            {
              title: "Technologies",
              skills: [
                "Git & Github",
                "VS Code",
                "Postman",
                "Chrome Dev Tools",
                "React Dev Tools",
                "Vercel",
              ],
            },
            {
              title: "Skills",
              skills: [
                "Team Spirit",
                "Problem Solver",
                "Adaptive",
                "Version Control",
              ],
            },
          ].map((category, index) => (
            <motion.div key={index} variants={cardAnimation}>
              <Card className="h-96 transition-transform transform hover:scale-105 hover:shadow-xl bg-blue-950 border-0 text-white">
                <CardHeader>
                  <CardTitle className="text-blue-400 text-xl md:text-2xl">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-base md:text-xl space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        id="projects"
        className="bg-white text-black font-[Poppins] py-16 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwIDEyLjE1Ni0yMS4zNTIgMTcuODU0LTM2IDM2QzE0LjY0OCAxOS4xNDYgMzYgMTMuNDQ4IDM2IDE4bTI0IDBjMCAxMi4xNTYtMjEuMzUyIDE3Ljg1NC0zNiAzNiAxNC42NDgtMTguODU0IDM2LTEzLjQ48IDM2LTE4eiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-10 pointer-events-none"></div>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10 text-blue-950"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Weather App",
              description:
                "A global weather app showing real-time temperature, humidity, wind, and forecasts for any city with a clean, user-friendly interface.",
              image: "/weather-app.png",
              link: "https://weather-app-black-omega-48.vercel.app/",
            },
            {
              title: "Password Manager",
              description:
                "Securely store and manage website logins with my password manager: easy, encrypted, and accessible anytime, anywhere you need.",
              image: "/password-manager.png",
              link: "https://pass-vault-psi.vercel.app/",
            },
            {
              title: "Urban Nest",
              description:
                "Discover luxury and everyday essentials with our curated marketplace offering premium beauty, fragrances, elegant furniture, and gourmet grocery selections.",
              image: "/urbannest.png",
              link: "https://urban-nest-6esd.vercel.app/",
            },
            {
              title: "Rydo - AI car marketplace",
              description:
                "An AI-powered car marketplace to list vehicles, book test drives, and manage everything seamlessly with a full-featured admin dashboard, advanced analytics, and a smart, user-friendly experience for buyers and sellers.",
              image: "/rydo.png",
              link: "https://rydo-sooty.vercel.app/",
            },
          ].map((project, index) => (
            <motion.div key={index} variants={cardAnimation}>
              <Card className="bg-blue-950 border-0 text-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center text-blue-400">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover rounded-lg mb-4"
                  />
                  <p className="text-base text-center flex-grow">
                    {project.description}
                  </p>
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Button className="w-full mt-4 bg-gray-900 hover:bg-gray-700 text-white hover:text-gray-200 font-semibold cursor-pointer">
                      View Project
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div id="certifications" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
            My Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-blue-950 text-white">
                  <CardHeader className="text-white">
                    <CardTitle className="text-xl font-semibold text-white">
                      {cert.title}
                    </CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      {cert.issuer}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <img src="./full-stack.jpg" className="rounded-sm"/>
                    <p className="text-white mb-2">{cert.description}</p>
                    <p className="text-sm text-white">Earned: {cert.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div
        id="contact"
        className="min-h-screen font-[Poppins] bg-white text-black py-10 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwIDEyLjE1Ni0yMS4zNTIgMTcuODU0LTM2IDM2QzE0LjY0OCAxOS4xNDYgMzYgMTMuNDQ4IDM2IDE4bTI0IDBjMCAxMi4xNTYtMjEuMzUyIDE3Ljg1NC0zNiAzNiAxNC42NDgtMTguODU0IDM2LTEzLjQ0OCAzNi0xOHoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L2c+PC9zdmc+')] opacity-10 pointer-events-none"></div>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Connect
        </motion.h2>
        <motion.div
          className="max-w-5xl mx-auto bg-blue-950 rounded-lg p-6 relative z-10"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="flex flex-col items-center justify-center space-y-6"
              variants={fadeInUp}
            >
              <img
                src="/profile.jpg"
                height={200}
                width={200}
                className="border-2 border-gray-700 rounded-full"
                alt="Profile"
              />
              <span className="font-bold text-white">Atharva Gourshete</span>
            </motion.div>
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 bg-blue-950 backdrop-blur-lg p-6 rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white text-center">
                Hey, Let's Connect!!
              </h3>
              <div className="space-y-4">
                <motion.div className="flex flex-col" whileHover="hover">
                  <label className="text-white font-medium mb-1">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    className="border border-gray-600 p-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    required
                    variants={inputHover}
                  />
                </motion.div>
                <motion.div className="flex flex-col" whileHover="hover">
                  <label className="text-white font-medium mb-1">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="border border-gray-600 p-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    required
                    variants={inputHover}
                  />
                </motion.div>
                <motion.div className="flex flex-col" whileHover="hover">
                  <label className="text-white font-medium mb-1">
                    Your Message
                  </label>
                  <motion.textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows="4"
                    className="border border-gray-600 p-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                    required
                    variants={inputHover}
                  />
                </motion.div>
              </div>
              <motion.button
                type="submit"
                onClick={handleToast}
                className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-102 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LandingPage;

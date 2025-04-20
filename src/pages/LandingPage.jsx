import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div
        id="home"
        className="min-h-screen font-[Poppins] bg-gradient-to-r from-[#62cff4] to-[#2c67f2] px-4"
      >
        <div className="text-center pt-20 md:pt-52 space-y-6 items-center">
          <h1 className="text-4xl md:text-8xl font-extrabold text-white items-center mt-16 ">
            Welcome to my Portfolio
          </h1>
          <h1 className="text-3xl font-bold text-white">Atharva Ganesh Gourshete</h1>
          <p className="text-lg md:text-xl text-white">
            Full Stack Web Developer
          </p>
          <Button
            onClick={() => handleScroll("projects")}
            className="w-32 mt-4 bg-black hover:bg-white text-white hover:text-black cursor pointer font-semibold cursor-pointer"
            variant="secondary"
          >
            View Projects
          </Button>
        </div>
      </div>

      <div
        id="about"
        className="bg-[#003459] text-white font-[Poppins] py-10 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
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
                className="w-32 mt-4 bg-black hover:bg-white text-white hover:text-black cursor pointer font-semibold cursor-pointer"
              >
                View Projects
              </Button>
              <Button
                onClick={() => handleScroll("contact")}
                className="w-32 mt-4 bg-black hover:bg-white text-white hover:text-black cursor pointer font-semibold cursor-pointer"
              >
                Connect
              </Button>
            </div>
          </div>
          <div className="space-y-6">
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
          </div>
        </div>
      </div>

      <div
        id="skills"
        className="bg-[#007EA7] text-white font-[Poppins] py-10 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
            <Card
              key={index}
              className="h-96 transition-transform transform hover:scale-105 hover:shadow-xl bg-[#003459] border-0 text-white"
            >
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
          ))}
        </div>
      </div>

      <div
  id="projects"
  className="bg-[#003459] text-white font-[Poppins] py-16 px-4"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Projects
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: "Weather App",
        description:
          "A global weather app showing real-time temperature, humidity, wind, and forecasts for any city with a clean, user-friendly interface.",
        image: "/weather-app.png",
        link: "https://weather-app-black-omega-48.vercel.app/",
      },
          ].map((project, index) => (
      <Card
        key={index}
        className="bg-[#007EA7] border-0 text-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-200">
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
          <Link to={project.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <Button
              className="w-full mt-4 bg-black hover:bg-white text-white hover:text-black cursor pointer font-semibold"
            >
              View Project
            </Button>
          </Link>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

      <div
        id="contact"
        className="min-h-screen font-[Poppins] bg-gradient-to-r from-[#62cff4] to-[#2c67f2] py-10 px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Connect
        </h2>
        <div className="max-w-5xl mx-auto bg-blue-300/20 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center space-y-6">
              <img
                src="/profile.jpg"
                height={200}
                width={200}
                className="border-2 border-black rounded-full"
                alt="Profile"
              />
              <span className="font-bold text-white">Atharva Gourshete</span>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white/20"
            >
              <h3 className="text-xl md:text-2xl font-bold text-black text-center">
                Hey, Let's Connect!!
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-black font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    className="border border-gray-300 p-3 rounded-lg bg-white/20 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-black font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 p-3 rounded-lg bg-white/20 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-black font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows="4"
                    className="border border-gray-300 p-3 rounded-lg bg-white/20 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={handleToast}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const LandingPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.SERVICE_ID, import.meta.env.TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.USER_ID,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      {" "}
      <div className="min-h-screen font-[Poppins] bg-gradient-to-r from-[#62cff4] to-[#2c67f2]">
        <div className="text-4xl grid justify-center gap-5">
          <span className="font-extrabold text-white text-8xl mt-52">
            Welcome to my Portfolio.
          </span>
          <span className="flex justify-center text-white">
            Full stack Web Developer
          </span>
          <div className="flex justify-center">
            <Button className="w-32 p-5 cursor-pointer" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>
      </div>
      <div className="h-auto bg-[#003459] text-white grid justify-center font-[Poppins]">
        <span className="text-4xl font-bold p-10 text-center">About Me</span>
        <div className="grid grid-cols-2 gap-10 items-center justify-center">
          <div className="grid grid-rows-3 p-10">
            <span className="font-[Poppins] text-3xl text-white font-bold">
              Full Stack Web Developer
            </span>

            <div className="text-lg">
              <span className="block">
                Full Stack Developer studying at A.P. Shah Institute of
                Technology.
              </span>
              <span className="block">
                Experienced in building modern React full stack Web Apps.
              </span>
              <span className="block">
                using latest technologies available in the market
              </span>
            </div>
            <div className="flex gap-2 mt-5 ">
              <div>
                <Button className="text-lg cursor-pointer bg-white text-black">
                  View Projects
                </Button>
              </div>
              <div>
                <Button className="text-lg cursor-pointer bg-white text-black">
                  Connect
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 p-10">
            <span className="font-[Poppins] text-3xl text-white font-bold">
              Education
            </span>
            <ul>
              <div className="text-lg">
                <span className="block">
                  <li>
                    <span className="font-bold tracking-wider">Schooling:</span>{" "}
                    Lok Puram Public School - 91.04%
                  </li>
                </span>
                <span className="block">
                  <li>
                    <span className="font-bold tracking-wider">
                      High School:
                    </span>{" "}
                    Pace Institute - 74%
                  </li>
                </span>
                <span className="block">
                  <li>
                    <span className="font-bold tracking-wider">
                      Engineering:
                    </span>{" "}
                    A.P. Shah Institute Of Technology
                  </li>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-auto bg-[#007EA7] text-white grid justify-center font-[Poppins]">
        <span className="text-4xl font-bold p-10 text-center">Skills</span>
        <div className="grid grid-cols-4 gap-20 mb-56">
          <div className="h-40">
            <Card className="h-80 w-72 transition-transform transform hover:scale-105 hover:shadow-xl bg-[#003459] border-0 text-white">
              <CardHeader>
                <CardTitle className="text-blue-400 text-2xl">
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-xl">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript(ES6+)</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Shad CN</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="h-40">
            <Card className="h-80 w-72 transition-transform transform hover:scale-105 hover:shadow-xl bg-[#003459] border-0 text-white">
              <CardHeader>
                <CardTitle className="text-blue-400 text-2xl">
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-xl">
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                  <li>Supabase</li>
                  <li>Authentication</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="h-40">
            <Card className="h-80 w-72 transition-transform transform hover:scale-105 hover:shadow-xl bg-[#003459] border-0 text-white">
              <CardHeader>
                <CardTitle className="text-blue-400 text-2xl">
                  Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-xl">
                  <li>Git & Github</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>Chrome Dev Tools</li>
                  <li>React Dev Tools</li>
                  <li>Vercel</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="h-40">
            <Card className="h-80 w-72 transition-transform transform hover:scale-105 hover:shadow-xl bg-[#003459] border-0 text-white">
              <CardHeader>
                <CardTitle className="text-blue-400 text-2xl">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-xl">
                  <li>Team Spirit</li>
                  <li>Problem Solver</li>
                  <li>Adaptive</li>
                  <li>Version Control</li>
                  <li></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="h-auto bg-[#003459] text-white grid justify-center font-[Poppins]">
        <span className="text-4xl font-bold p-10 text-center">Projects</span>
      </div>
      {/* Connect */}
      <div className="min-h-screen font-[Poppins] bg-gradient-to-r from-[#62cff4] to-[#2c67f2]">
        <div className="text-4xl grid justify-center gap-5">
          <span className="text-4xl font-bold p-10 text-center text-white">
            Connect
          </span>
          <div className="w-[1200px] bg-gradient-to-r from-[#ffffff] to-[#ffffff] h-[600px] rounded-lg backdrop-blur-2xl">
            <div className="grid grid-cols-2">
              <div className="h-[600px] grid justify-center items-center">
                <img
                  src="/profile.jpg"
                  height={300}
                  width={300}
                  className="border-black border-2 rounded-full"
                />
              </div>
              <div className="h-[600px] grid justify-center items-center">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col gap-4 w-96"
                >
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="border p-2 rounded"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="border p-2 rounded"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    value="Send"
                    className="bg-blue-500 text-white p-2 rounded"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

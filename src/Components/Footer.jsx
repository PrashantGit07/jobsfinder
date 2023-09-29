import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
 

const Footer = () => {
  return (
    <div className="bg-yellow-300">
      <div className="w-[90%] mx-auto mt-10 py-2">
        <div className="flex flex-col md:flex-row p-5 gap-4">
          {/* location */}
          <div className="w-full md:w-[30%] flex flex-col justify-center items-center mb-4 md:mb-0">
            <h1 className="font-bold text-xl">LOCATION</h1>
            <p>Invertis University</p>
            <p>Bareilly, Uttar Pradesh</p>
            <p>India, 274702</p>
          </div>

          {/* contact */}
          <div className="w-full md:w-[30%] flex flex-col justify-center items-center mb-4 md:mb-0">
            <h1 className="font-bold text-xl">AROUND THE WEB</h1>
            <ul className="flex gap-5 mt-2">
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl" />
              </a>
            </li>
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/prashant-mishra-050a48236"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className=" text-xl"> </FaLinkedinIn>
              </a>
            </li>
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://github.com/PrashantGit07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className=" text-xl"></FaGithub>
              </a>
            </li>
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className=" text-xl"></FaWhatsapp>
              </a>
            </li>
              {/* Add other social media icons */}
            </ul>
          </div>

          {/* about */}
          <div className="w-full md:w-[30%] flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl">ABOUT</h1>
            <p>
            "Welcome to our job search application! Our platform connects job seekers with exciting employment opportunities in India. With a user-friendly interface, you can easily search for jobs by title and explore detailed job listings. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
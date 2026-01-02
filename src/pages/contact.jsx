import Section from "../components/Section";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Div from "../components/Div";

import { profileData } from "../data/profileData";

import { FaLinkedin, FaGithub, FaFigma, FaInstagram } from "react-icons/fa";

export default function Contact(){
    
    return(
        <Section>
            <Div>
                <Title>Personal Contact</Title>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-[6px] lg:gap-2 w-full">
             {profileData.perDet.map((det,index) => (
              <div key={index} className="relative p-1 group">

                 <div className="flex justify-between relative overflow-hidden px-2 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-4 mx-auto  
                                border border-orange-400 rounded-lg md:rounded-xl shadow-orange-100/50 shadow-xl transition-all duration-300 ease-out
                                bg-stone-50 group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-orange-300">
                  <span className="absolute z-20 top-1/2 -translate-y-1/2 -left-1/2 w-[120%] h-full pointer-events-none
                  md:bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md opacity-0 group-hover:opacity-100
                   group-hover:animate-[shine-horizontal-card_1.2s_linear_infinite]"/>

                  <div className="flex flex-col gap-1 z-30">
                    <p className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-white/90">{det.title}</p>
                    <p className="text-sm sm:text-base font-semibold group-hover:text-white">{det.value}</p>
                  </div>

                  <div className="hidden md:block z-30"> 
                    <p className="text-xl lg:text-2xl bg-gray-100 rounded-sm p-1 
                                  group-hover:bg-white/50 transition-colors duration-100">
                                  {det.icon}</p>
                  </div>
                </div>

            </div>
            ))}
          </div>
            </Div>

            <Hr></Hr>

            <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7">
              <Title>Social Connect</Title>
             
              <div className="flex gap-4 sm:gap-5 lg:gap-6 pl-6 sm:pl-8 lg:pl-10 text-3xl md:text-4xl">

                <a href="https://www.linkedin.com/in/yuvaraj-elumalai-7a3715334/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-[#0A66C2] hover:scale-110 transition" />
                </a>

                <a href="https://github.com/Yuvaraj-1112" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-[#181717] hover:scale-110 transition" />
                </a>

                <a href="https://www.figma.com/@yuvaraje" target="_blank" rel="noopener noreferrer">
                  <FaFigma className="text-[#F24E1E] hover:scale-110 transition" />
                </a>

                <a href="https://www.instagram.com/yuva._.xyz?igsh=aG1qbG1vN2c1dmdw" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-[#E4405F] hover:scale-110 transition" />
                </a>

              </div>
            </div>
        </Section>
    );
}
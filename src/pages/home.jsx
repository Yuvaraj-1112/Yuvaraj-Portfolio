import Section from "../components/Section";
import Hr from "../components/Hr";
import Title from "../components/Title";
import SplitText from "../components/splitText";
import BlurText from "../components/blurText";
import Shine from "../components/Shine";

import { profileData } from "../data/profileData";

import { Link } from "react-router-dom";
import Div from "../components/Div";

export default function Home() {
  return (
    <Section>
      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <p className="text-gray-600 text-xl sm:text-2xl lg:text-3xl">
            <BlurText
             text="Hi... I am"
             delay={100}
             animateBy="chars"
             direction="top"/>
             </p>

            <SplitText
             text={profileData.name}
             className="text-orange-400 font-bold text-4xl sm:text-6xl lg:text-7xl text-center leading-none"
             delay={100}
             duration={1}
             ease="power3.out"
             splitType="chars"
             from={{ opacity: 0, y: 40}}
             to={{ opacity: 1, y: 0 }}/>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
             <p className="whitespace-pre-line text-zinc-600 
                       text-base sm:text-lg lg:text-xl">
            {profileData.title.join('\n')}
        </p>
        <p className="text-balance text-zinc-600 
                       text-sm sm:text-base lg:text-lg">
            {profileData.objective}
        </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 lg:gap-5">
        <a className="relative overflow-hidden px-4 sm:px-5 lg:px-6 py-2 text-base lg:text-lg
                      bg-orange-400 text-white rounded-lg group hover:scale-105 hover:shadow-xl
                      transition-all duration-200 ease-out active:shadow-inner active:translate-y-[2px] transition duration-150"
                       href="mailto:yuva123e@gmail.com" target="_blank" rel="noopener noreferrer">
                       Email <Shine></Shine> </a>

          <Link className="px-4 sm:px-5 lg:px-6 py-2
                           text-base lg:text-lg bg-orange-50 text-orange-400 
                           border border-orange-400/50 rounded-lg group hover:scale-105 hover:shadow-xl hover:shadow-orange
                           transition-all duration-200 ease-out" to="/project">Projects</Link>

          <a className="relative overflow-hidden px-4 sm:px-5 lg:px-6 py-2 text-base lg:text-lg 
                        bg-orange-400 text-white rounded-lg group group hover:scale-105 hover:shadow-xl
                        transition-all duration-200 ease-out active:shadow-inner active:translate-y-[2px] transition duration-200"
                         href="/Yuvaraj's resume.pdf" download>
                          Resume <Shine></Shine></a>
        </div>

         <Hr/>

       <Div>
           <Title>At a Glance</Title>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-3 w-full">
             {profileData.glance.map((glan,index) => (
              <div key={index} className="relative px-1 py-1 sm:px-2 sm:py-2 lg:px-3 lg:py-3 group">

                <div className="flex justify-between relative overflow-hidden px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-3 mx-auto  
                                border border-orange-400 rounded-xl shadow-orange-100/50 shadow-xl transition-all duration-300 ease-out
                                bg-stone-50 group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-orange-300">
                  <span className="absolute z-20 top-1/2 -translate-y-1/2 -left-1/2 w-[120%] h-full pointer-events-none
                  md:bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md opacity-0 group-hover:opacity-100
                   group-hover:animate-[shine-horizontal-card_1.2s_linear_infinite]"/>

                  <div className="flex flex-col gap-1 z-30">
                    <p className="text-base sm:text-lg font-semibold text-gray-700 group-hover:text-white/90">{glan.title}</p>
                    <p className="text-2xl sm:text-3xl font-bold group-hover:text-white">{glan.value}</p>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-white">{glan.meta}</p>
                  </div>

                  <div className="z-30"> 
                    <p className="text-xl lg:text-2xl bg-gray-100 rounded-sm p-1 
                                  group-hover:bg-white/50 transition-colors duration-100">
                                  {glan.icon}</p>
                  </div>
                </div>

            </div>
            ))}
          </div>
      </Div>

       <Hr/>

      <Div>
        <Title>Specialization</Title>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-2 lg:gap-3 w-full">
          {profileData.specialized.map((spec,index) => (
            <div key={index} className="group relative overflow-hidden">
              <span className="absolute z-20 top-1/2 -translate-y-1/2 -left-1/2 w-[120%] h-full pointer-events-none
                bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md opacity-100
                animate-[shine-horizontal-card_1.2s_linear_infinite]"/>
              <p className="flex justify-center px-1 py-2 border border-orange-300 rounded-full 
               bg-gradient-to-b from-orange-300 via-orange-400 to-orange-400
               text-white text-sm sm:text-base font-medium">
                {spec}</p>
            </div>
          ))}

         </div>
      </Div>
    </Section>
  );
}

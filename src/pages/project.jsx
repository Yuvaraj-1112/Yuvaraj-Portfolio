import Section from "../components/Section";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Div from "../components/Div";
import Shine from "../components/Shine";


import { projData } from "../data/projData";

export default function Project(){

    return(
        <Section>
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                {Object.entries(projData.projects).map(([key, proj], index) =>(
                <div key={key} className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                    <Div>
                    <Title>{proj.Title}</Title>
                    <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 border-[2px] border-orange-200/60 md:hover:scale-101 transition rounded-xl 
                                    px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-4 shadow shadow-xl shadow-orange-100/80">
                       <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                        <div className="flex flex-row gap-1 md:gap-2">
                            <p className="text-base sm:text-lg text-orange-400 font-medium">Type:</p>
                            <p className="text-base sm:text-lg text-gray-600">{proj.Type}</p>
                        </div>

                        <div className="flex flex-row gap-1 sm:gap-[6px] lg:gap-2">
                                    <p className="text-base sm:text-lg text-orange-400 font-medium">Tools:</p>
                                    <p className="text-base sm:text-lg text-gray-600">{proj.Tools.join(", ")}</p>
                                
                        </div>

                        <div className="flex flex-col gap-1 sm:gap-[6px] lg:gap-2">
                            <p className="text-base sm:text-lg text-orange-400 font-medium">Objective</p>
                            <p className="text-sm sm:text-base lg text-justify text-gray-600 md:w-[90%] lg:w-[80%]">{proj.Objective}</p>
                        </div>
                       </div>

                       <div className="flex flex-row gap-2 sm:gap-4 lg:gap-6">
                         <a className="relative overflow-hidden px-4 sm:px-5 lg:px-6 py-2 text-base lg:text-lg
                      bg-orange-400 text-white rounded-lg group hover:scale-105 hover:shadow-xl
                      transition-all duration-200 ease-out active:shadow-inner active:translate-y-[2px] transition duration-150" 
                      href={proj.Git} target="_blank" rel="noopener noreferrer">
                         Code <Shine></Shine></a>

                        {proj.Demo && proj.Demo.trim() !== "" && (
                            <a className="relative overflow-hidden px-4 sm:px-5 lg:px-6 py-2 text-base lg:text-lg
                      bg-orange-400 text-white rounded-lg group hover:scale-105 hover:shadow-xl
                      transition-all duration-200 ease-out active:shadow-inner active:translate-y-[2px] transition duration-150" 
                      href={proj.Demo} target="_blank" rel="noopener noreferrer">
                        Demo <Shine></Shine></a>
                        )}
                        
                        {proj.Paper && proj.Paper.trim() !== "" && (
                            <a className="relative overflow-hidden px-4 sm:px-5 lg:px-6 py-2 text-base lg:text-lg
                      bg-orange-400 text-white rounded-lg group hover:scale-105 hover:shadow-xl
                      transition-all duration-200 ease-out active:shadow-inner active:translate-y-[2px] transition duration-150" 
                      href={proj.Paper} target="_blank" rel="noopener noreferrer">
                        Paper <Shine></Shine></a>
                        )}
                       </div>
                    </div>
                    </Div>
                     <Hr/>   
                </div>
                ))}
            </div>
        </Section>
    );
}
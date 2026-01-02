import Section from "../components/Section";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Div from "../components/Div";
import Shine from "../components/Shine";


import { expData } from "../data/expData";

export default function Experience(){

    return(
        <Section>
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                    {Object.entries(expData.internship).map(([key, intern]) => (
                        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                        <Div key={key} >
                            <Title>{intern.role}</Title>
                            <div className=" flex flex-col gap-1 sm:gap-2">
                                <div className="flex flex-col">
                                    <p className="text-zinc-600 text-base sm:text-lg lg:text-xl">{intern.org}</p>
                                    <p className="text-zinc-600 text-sm md:text-base">{intern.date}</p>
                                </div>
                                <div className="flex flex-col gap-1 sm:gap-2">
                                    <p className="text-base md:text-lg  text-orange-400 font-medium">Overview</p>
                                    <p className="text-sm md:text-base text-gray-600 text-justify md:w-[90%] lg:w-[80%]">{intern.exp}</p>
                                </div>
                                <div className="flex flex-col gap-1 sm:gap-2">
                                    <p className="text-base sm:text-lg text-orange-400 font-medium">
                                        {Object.keys(intern.project).length > 1 ? "Projects" : "Project"}

                                    </p>

                                    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                                    {Object.entries(intern.project).map(([prokey, intProj]) => (
                                        <div key={prokey} className="px-3 sm:px-4 lg:px-5 flex flex-col gap-1 sm:gap-[6px] lg:gap-2 border-[1px] border-orange-200 rounded-xl 
                                                                     py-3 sm:py-4 lg:py-5 md:hover:scale-101 transition shadow shadow-xl shadow-orange-100/70">
                                                <div>
                                                    <p className="flex items-center gap-3 text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
                                                        <span className="inline-block w-[3px] h-3 sm:h-4 bg-orange-400"/>{intProj.title}</p>
                                                </div>

                                                <div className="flex flex-row gap-1 sm:gap-2">
                                                    <p className="text-sm sm:text-base text-orange-400 font-medium">Tools:</p>
                                                    <p className="text-sm sm:text-base text-gray-600">{intProj.tools.join(", ")}</p>
                                                </div>

                                                <div className="flex flex-col gap-1 sm:gap-2">
                                                    <p className="text-sm sm:text-base text-orange-400 font-medium">Objective</p>
                                                    <p className="text-sm sm:text-base text-gray-600 md:w-[85%] lg:w-[70%] text-justify">{intProj.obj}</p>
                                                </div>

                                                <div className="flex flex-row gap-3 sm:gap-4 lg:gap-6"> 
                                                    {intProj.git && intProj.git.trim() !== "" &&(
                                                        <a className="relative overflow-hidden px-2 sm:px-3 lg:px-4 py-1 text-base lg:text-lg
                                                        bg-orange-400 text-white rounded-md group hover:scale-105 hover:shadow-xl
                                                        transition-all duration-200 ease-out" href={intProj.git} target="_blank" rel="noopener noreferrer">
                                                        Code <Shine></Shine></a>
                                                    )}

                                                    {intProj.demo && intProj.demo.trim() !== "" &&(
                                                      <a className="relative overflow-hidden px-2 sm:px-3 lg:px-4 py-1 text-base lg:text-lg
                                                      bg-orange-400 text-white rounded-md group hover:scale-105 hover:shadow-xl
                                                      transition-all duration-200 ease-out" href={intProj.Demo} target="_blank" rel="noopener noreferrer">
                                                      Demo <Shine></Shine></a>
                                                    )}
                                                </div>
                                       </div>

                                    ))}
                                </div>
                                </div>
                            </div>
                        </Div>
                          <Hr></Hr>
                        </div>
                    ))}
                </div>
        </Section>
    );
}
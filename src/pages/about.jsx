import Section from "../components/Section";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Div from "../components/Div";

import { profileData } from "../data/profileData";
import { projData } from "../data/projData";


export default function About(){

    return(
       <Section>
        <Div>
            <Title>About me</Title>
            <p className="pl-4 sm:pl-5 lg:pl-6 w-[100%] lg:w-[80%] text-zinc-600 
                          text-sm sm:text-base lg:text-lg">
                     {profileData.objective}</p>
        </Div>

        <Hr/>

        <Div>
            <Title>Education</Title>
            {Object.entries(profileData.education).map(([key, edu]) => (
               <ul key={key} className="list-disc list-inside pl-4 sm:pl-5 lg:pl-6">
                <div className="flex flex-col  pl-4 sm:pl-5 lg:pl-6">
                    <li className="text-zinc-600 text-sm sm:text-base lg:text-lg font-semibold">{edu.text}</li>
                    <p className="pl-5 sm:pl-6 lg:pl-7 text-zinc-500 text-sm md:text-base">{edu.clg}</p>
                </div>
               </ul>
           ))}
        </Div>

        <Hr/>

        <Div>
            <Title>Technical Skills</Title>
            <Div>
                {Object.entries(projData.techSkill).map(([category, skills],index) => (
                    <div key={index} className="pl-4 sm:pl-5 lg:pl-6 flex flex-col gap-2 sm:gap-3 lg:gap-4">
                        <h2 className="text-zinc-600 text-lg sm:text-xl lg:text-2xl font-semibold">
                            {category}
                            </h2>
                        <div className="pl-4 sm:pl-5 lg:pl-6 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
                            {skills.map((skills,i) =>(
                                <p key={i} className="flex justify-center px-1 py-1 md:py-2 border border-orange-300 rounded-full 
                                bg-orange-500/50 text-white text-sm sm:text-base font-medium">
                                {skills}</p>
                            ))}
                        </div>    
                    </div>
                ))}
            </Div>
        </Div>

        <Hr/>

        <Div>
            <Title>Interpersonal Skills</Title>
            <div className="pl-4 sm:pl-5 lg:pl-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {projData.presonalSkills.map((perSkills, index) => (
                    <div key={index} className="">
                        <p className="flex justify-center px-1 py-1 md:py-2 border border-orange-300 rounded-full 
                                bg-orange-500/50 text-white text-sm sm:text-base font-medium">{perSkills}</p>
                    </div>
                ))}
            </div>
        </Div>

        <Hr/>

        <Div>
            <Title>Languages</Title>
            <div className="pl-4 sm:pl-5 lg:pl-6 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                {profileData.language.map((lang,index) => (
                    <div key={index}>
                        <p className="flex justify-center px-1 py-1 md:py-2 border border-orange-300 rounded-full 
                                bg-orange-500/50 text-white text-sm sm:text-base font-medium">{lang}</p>
                    </div>
                ))}
            </div>
        </Div>
       </Section>
    );
}
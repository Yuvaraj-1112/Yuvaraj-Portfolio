import Section from "../components/Section";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Div from "../components/Div";

import CardInfo from "../components/CertifyCards";

import { certifyData } from "../data/certfyData";

import { useState } from "react";

export default function Certificate(){

    const [openImg, setOpenImg] = useState(false);
    const [imgSrc, setImgSrc] = useState("");

    return(
        <Section>
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                <Div>
                    <Title>NPTEL Course</Title>
                    <Div>
                        {Object.entries(certifyData.nptel).map(([key,nptel]) =>(
                            <div key={key} className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 md:w-[90%] lg:w-[80%] px-3 sm:px-4 lg:px-5 
                                    border-[1px] border-orange-200 rounded-xl md:hover:scale-101 transition
                                    py-3 sm:py-4 lg:py-5 shadow shadow-xl shadow-orange-100/70">

                                <div className="flex flex-col gap-1 sm:gap-[6px] lg:gap-2">
                                    <CardInfo label="Title">{nptel.title}</CardInfo>

                                    <CardInfo label="Year">{nptel.year}</CardInfo>

                                    <CardInfo label="Language">{nptel.lang.join(", ")}</CardInfo>

                                    <CardInfo label="Topics">{nptel.topic.join(", ")}</CardInfo>    
                                </div>

                                <div className="flex items-center justify-center md:justify-end">
                                    <img src={nptel.img} alt="Img-Loading" loading="eager" fetchpriority="high" decoding="async"
                                    className="h-44 mt-2 md:mt-0 cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105"
                                    onClick={() =>{
                                        setImgSrc(nptel.img);
                                        setOpenImg(true);
                                    }
                                    }
                                    />
                                </div>
                            </div>
                        ))}
                    </Div>
                </Div>

                <Hr></Hr>

                <Div>
                    <Title>MATLAB Course</Title>
                    <Div>
                        {Object.entries(certifyData.matlab).map(([key,matlab]) =>(
                            <div key={key} className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 md:w-[90%] lg:w-[80%] px-3 sm:px-4 lg:px-5 
                                    border-[1px] border-orange-200 rounded-xl md:hover:scale-101 transition
                                    py-3 sm:py-4 lg:py-5 shadow shadow-xl shadow-orange-100/70">

                                <div className="flex flex-col gap-1 sm:gap-[6px] lg:gap-2">
                                    <CardInfo label="Title">{matlab.title}</CardInfo>

                                    <CardInfo label="Year">{matlab.year}</CardInfo>

                                    <CardInfo label="Language">{matlab.lang.join(", ")}</CardInfo>

                                    <CardInfo label="Topics">{matlab.topic.join(", ")}</CardInfo>    
                                </div>

                                <div className="flex items-center justify-center md:justify-end">
                                    <img src={matlab.img} alt="Img-Loading" loading="eager" fetchpriority="high" decoding="async"
                                    className="h-44 mt-2 md:mt-0 cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105"
                                    onClick={() =>{
                                        setImgSrc(matlab.img);
                                        setOpenImg(true);
                                    }
                                    }
                                    />
                                </div>
                            </div>
                        ))}
                    </Div>
                </Div>

                <Hr></Hr>

                <Div>
                    <Title>SkillUP Course</Title>
                    <Div>
                        {Object.entries(certifyData.skillup).map(([key,skillup]) =>(
                            <div key={key} className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 md:w-[90%] lg:w-[80%] px-3 sm:px-4 lg:px-5 
                                    border-[1px] border-orange-200 rounded-xl md:hover:scale-101 transition
                                    py-3 sm:py-4 lg:py-5 shadow shadow-xl shadow-orange-100/70">
                                <div className="flex flex-col gap-1 sm:gap-[6px] lg:gap-2">
                                   <CardInfo label="Title">{skillup.title}</CardInfo>

                                    <CardInfo label="Year">{skillup.year}</CardInfo>

                                    <CardInfo label="Language">{skillup.lang.join(",")}</CardInfo>

                                    <CardInfo label="Topics">{skillup.topic.join(",")}</CardInfo> 
                                </div>

                                <div className="flex items-center justify-center md:justify-end">
                                    <img src={skillup.img} alt="Img-Loading" loading="eager" fetchpriority="high" decoding="async"
                                    className="h-44 mt-2 md:mt-0 cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105"
                                    onClick={() =>{
                                        setImgSrc(skillup.img);
                                        setOpenImg(true);
                                    }
                                    }
                                    />
                                </div>
                            </div>
                        ))}
                    </Div>
                </Div>
                
                <Hr></Hr>

                <Div>
                    <Title>Guvi Course</Title>
                    <Div>
                        {Object.entries(certifyData.guvi).map(([key,guvi]) =>(
                            <div key={key} className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 md:w-[90%] lg:w-[80%] px-3 sm:px-4 lg:px-5 
                                    border-[1px] border-orange-200 rounded-xl md:hover:scale-101 transition
                                    py-3 sm:py-4 lg:py-5 shadow shadow-xl shadow-orange-100/70">
                                <div className="flex flex-col gap-1 sm:gap-[6px] lg:gap-2">
                                   <CardInfo label="Title">{guvi.title}</CardInfo>

                                    <CardInfo label="Year">{guvi.year}</CardInfo>

                                    <CardInfo label="Language">{guvi.lang.join(",")}</CardInfo>

                                    <CardInfo label="Topics">{guvi.topic.join(",")}</CardInfo> 
                                </div>

                                <div className="flex items-center justify-center md:justify-end">
                                    <img src={guvi.img} alt="Img-Loading" loading="eager" fetchpriority="high" decoding="async"
                                    className="h-44 mt-2 md:mt-0 cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105"
                                    onClick={() =>{
                                        setImgSrc(guvi.img);
                                        setOpenImg(true);
                                    }
                                    }
                                    />
                                </div>
                            </div>
                        ))}
                    </Div>
                </Div>
                
                <Hr></Hr>

                 <Div>
                    <Title>SkillEcted Webinars</Title>
                    <Div>
                        {Object.entries(certifyData.skillected).map(([key,sklctd]) =>(
                            <div key={key} className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 md:w-[90%] lg:w-[80%] px-3 sm:px-4 lg:px-5 
                                    border-[1px] border-orange-200 rounded-xl md:hover:scale-101 transition
                                    py-3 sm:py-4 lg:py-5 shadow shadow-xl shadow-orange-100/70">
                                <div className="flex flex-col gap-1 sm:gap-[6px] lg:gap-2">
                                   <CardInfo label="Title">{sklctd.title}</CardInfo>

                                    <CardInfo label="Year">{sklctd.year}</CardInfo>

                                    <CardInfo label="Language">{sklctd.lang.join(",")}</CardInfo>

                                    <CardInfo label="Topics">{sklctd.topic.join(",")}</CardInfo> 
                                </div>

                                <div className="flex items-center justify-center md:justify-end">
                                    <img src={sklctd.img} alt="Img-Loading" loading="eager" fetchpriority="high" decoding="async"
                                    className="h-44 mt-2 md:mt-0 cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105"
                                    onClick={() =>{
                                        setImgSrc(sklctd.img);
                                        setOpenImg(true);
                                    }
                                    }
                                    />
                                </div>
                            </div>
                        ))}
                    </Div>
                </Div>
                
                <Hr></Hr>

                 <Div>
                    <Title>Other Programs</Title>
                    <Div>
                        {Object.entries(certifyData.webinar).map(([key,webi]) =>(
                            <div key={key} className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 md:w-[90%] lg:w-[80%] px-3 sm:px-4 lg:px-5 
                                     border-[1px] border-orange-200 rounded-xl md:hover:scale-101 transition 
                                    py-3 sm:py-4 lg:py-5 shadow shadow-xl shadow-orange-100/70">
                                <div className="flex flex-col gap-1 sm:gap-[6px] lg:gap-2">

                                    <CardInfo label="Title">{webi.title}</CardInfo>

                                    <CardInfo label="Year">{webi.year}</CardInfo>

                                    <CardInfo label="Language">{webi.lang.join(",")}</CardInfo>

                                    <CardInfo label="Topics">{webi.topic.join(",")}</CardInfo> 
                                    
                                </div>

                                <div className="flex items-center justify-center md:justify-end">
                                    <img src={webi.img} alt="Img-Loading" loading="eager" fetchpriority="high" decoding="async"
                                    className="h-44 my-2 md:my-0 cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105"
                                    onClick={() =>{
                                        setImgSrc(webi.img);
                                        setOpenImg(true);
                                    }
                                    }
                                    />
                                </div>
                            </div>
                        ))}
                    </Div>
                </Div>

                <Hr></Hr>

                <Div>
                    <Title>Other Certificates</Title>
                    <Div>
                        {certifyData.otherc.map((otherc, index) => (
                            <div key={index}>
                                <p className="flex md:w-[80%] lg:w-[65%] px-2 sm:px-3 lg:px-4 py-2 md:py-3 border border-orange-300 rounded-lg 
                                              bg-orange-500/50 text-white text-sm sm:text-base lg:text-lg font-medium">{otherc}</p>
                            </div>
                        ))}
                    </Div>
                </Div>
            </div>

            <div>
                {openImg && (
                <div onClick={() =>setOpenImg(false)}
                 className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                 <img src={imgSrc}
                className="max-w-[90%] max-h-[90%] rounded-xl"
                onClick={(e) => e.stopPropagation()}/>
                </div>
                )}
            </div>
        </Section>
    );
} 
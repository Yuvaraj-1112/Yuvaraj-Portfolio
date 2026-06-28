import GenAi from "../assets/certificate/nptel/Programming with Generative AI.avif";
import Dsapy from '../assets/certificate/nptel/Data structure and algorithm in py.avif';
import Mlapp from '../assets/certificate/nptel/Machine learning for science app.avif';

import Mlmat from '../assets/certificate/matlab/Machine Learning onramp.avif';
import Dlmat from '../assets/certificate/matlab/Deep Learning onramp.avif';
import Imgmt from '../assets/certificate/matlab/Image processing onramp.avif';
import Matlb from '../assets/certificate/matlab/MATLAB onramp.avif'

import SqlDA from "../assets/certificate/simplelearn/sql certificate.avif";
import CiF from "../assets/certificate/simplelearn/cyber security certificate.avif";
import Reabg from '../assets/certificate/simplelearn/React.js for beginners.avif';

import AWT from "../assets/certificate/guvi/Guvi awt certificate.avif";
import MasAi from '../assets/certificate/guvi/Master the power of gen AI.avif'

import javxAi from "../assets/certificate/skillected/Java certificate.avif";
import Porskd from '../assets/certificate/skillected/portfolio development certificate.avif';
import SenAn from '../assets/certificate/skillected/sentiment analysis certificate.avif';
import BnkSy from '../assets/certificate/skillected/Bank management system certificate.avif';
import Houpre from '../assets/certificate/skillected/House price prediction seminar.avif';
import SqlBc from '../assets/certificate/skillected/SQL bootcamp.avif';
import Rnpre from '../assets/certificate/skillected/rainfall prediction seminar.avif'

import Vib26 from "../assets/certificate/vibeathon winner certificate.avif";
import RtiIt from "../assets/certificate/Recent trends in IT.avif";
import TataCq from "../assets/certificate/Tata_Cruible_Prelims.avif";



export const certifyData = {
    nptel:{
        nCor3:{
            title:"Machine Learning for Science Applications",
            lang:["Python", 'ML', 'DL', 'NLP'],
            topic:["Linear Algebra", "Regression Model", "Back Propogation", 'ML Applications'],
            year:"2026",
            img:Mlapp
        },

        nCor2:{
            title:"Data Structures and Algorithms Using Python",
            lang:["Python", "OOP", "Data Structure"],
            topic:["OOPS concept", "Sorting and Searching", "Greedy, Sliding Window", 'Dynamic Programming'],
            year:"2026",
            img:Dsapy
        },

        nCor1:{
            title:"Programming with Generative AI",
            lang:["Python", "C"],
            topic:["OOPS concept", "Debugging", "Memory Management", "Foundations of DSA"],
            year:"2025",
            img:GenAi
        },
    },

     matlab:{
         mat1:{
            title:"Machine Learning Onramp",
            lang:["Matlab", "Machine Learning"],
            topic:["Decision Tree","Supervised Learning", "Linear Regression", "Classification Model"],
            year:"2026",
            img:Mlmat
        },

         mat2:{
            title:"Deep Learning Onramp",
            lang:["Matlab", "Deep Learning"],
            topic:["FeedForward", "Computation Graphs", "Convolutional Networks", "Transfer Learning"],
            year:"2026",
            img:Dlmat
        },

        mat3:{
            title:"Image Processing Onramp",
            lang:["Matlab", "Image Process"],
            topic:["Color Models", "Image Representation", "Image Restoration", "Image Segmentation"],
            year:"2026",
            img:Imgmt
        },

        mat4:{
            title:"MATLAB Onramp",
            lang:["Matlab"],
            topic:["Array", "Dimensions", "Control Structures", "Standard Libraries"],
            year:"2026",
            img:Matlb
        },
    },

    skillup:{
        skcor3:{
            title:"React js for Begginers",
            lang:["JavaScript", 'React.js'],
            topic:["Promises", "Async await", "Components", "Hooks", "Props", 'Params'],
            year:"2026",
            img:Reabg
        },

        skcor1:{
            title:"SQL for Data Analysis",
            lang:["SQL"],
            topic:["Group", "Order", "Procedure", "Functions", "Data collection", "Perform analysis"],
            year:"2025",
            img:SqlDA
        },

         skcor2:{
            title:"Cybersecurity in Finance",
            lang:["Fundamentals of Cybersecurity"],
            topic:["Finance sector", "Encryption", "Secure Transaction", "Protecting financial data"],
            year:"2025",
            img:CiF
        },

    },

    guvi:{
        guv1:{
            title:"Master the Generative AI",
            lang:["Agentic AI", "Generative AI"],
            topic:["Agentic AI", "Programming with AI", "Power of Gen AI", "Developing Applications"],
            year:"2026",
            img:MasAi 
        },
         guv2:{
            title:"Advanced Web Technology",
            lang:["React.js", "Node.js"],
            topic:["Components", "React Hooks", "Authentication", "Version Control", "Deployment"],
            year:"2025",
            img:AWT
        },
    },

    skillected:{
        sklctd6:{
            title:"Portfolio Development",
            lang:["React.js", 'Tailwind CSS'],
            topic:["Virtual DOM", "State Variables", "Props", "Vitest"],
            year:"2026",
            img:Porskd
        },

        sklctd5:{
            title:"Sentiment Analyzer using Python",
            lang:["Python"],
            topic:["Dynamic Programming", "Model Selection", "Implement Analyzer"],
            year:"2026",
            img:SenAn
        },

        sklctd4:{
            title:"Bank Management System",
            lang:["Artificial Intelligence"],
            topic:["Understanding System", "Implementing Model", "Feed Forwarding", "Back Propogation"],
            year:"2026",
            img:BnkSy
        },

         sklctd3:{
            title:"House Price Prediction System",
            lang:["Machine Learning"],
            topic:["Linear Regression", "Classification Model", "Unsupervised Learning", "Implementing Model"],
            year:"2026",
            img:Houpre
        },

        sklctd2:{
            title:"SOL Bootcamp",
            lang:["SQL"],
            topic:["Group", "Order", "Procedure", "Functions", "DDL", "DML", 'TCL'],
            year:"2026",
            img:SqlBc
        },

         sklctd1:{
            title:"Java X AI",
            lang:["Java"],
            topic:["OOPS Concept", "Java Evolution", "Understanding AI", "Implement AI in Java"],
            year:"2025",
            img:javxAi
        },

        sklctd0:{
            title:"Rainfall Prediction using Machine Learning",
            lang:['Python',"Machine Learing"],
            topic:["Linear Regression", "Classification Model", "Reinforcement Learning", "Developing Model"],
            year:"2026",
            img:Rnpre
        },
    },

    webinar:{
        webc1:{
            title:"Vibeathon 2026",
            lang:["Generative AI"],
            topic:["Prompting", "Programming with AI", "AI agents", "Developing softwares"],
            year:"2025",
            img:Vib26
        },

         webc2:{
            title:"Recent Trends in Information Technology",
            lang:["Domains"],
            topic:["Evolving Domains", "Software testing", "Cyber Security", "AI agents", "Data Science"],
            year:"2025",
            img:RtiIt
        },

            webc3:{
            title:"Tata Crucible Quiz",
            lang:["Technical"],
            topic:["Fundamentals of computer", "Python", "Java"],
            year:"2025",
            img:TataCq
        },
    },

    otherc:["Certified in English Typewriting - Lower", 
            "Completed upto Visharadh utharadh in Dakshin Bharath Hindi prachar Sabha Exam",
    ]
}
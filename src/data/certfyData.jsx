import GenAi from "../assets/certificate/Programming with Generative AI.avif";
import SqlDA from "../assets/certificate/sql certificate.avif";
import CiF from "../assets/certificate/cyber security certificate.avif";
import AWT from "../assets/certificate/Guvi awt certificate.avif";
import javxAi from "../assets/certificate/Java certificate.avif";
import RtiIt from "../assets/certificate/Recent trends in IT.avif";
import TataCq from "../assets/certificate/Tata_Cruible_Prelims.avif";



export const certifyData = {
    nptel:{
        nCor1:{
            title:"Programming with Generative AI",
            lang:["Python", "C"],
            topic:["OOPS concept", "Debugging", "Memory Management", "Foundations of DSA"],
            year:"2025",
            img:GenAi
        },
    },

    skillup:{
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

    webinar:{
        webc1:{
            title:"Advanced Web Technology",
            lang:["React.js", "Node.js"],
            topic:["Components", "React Hooks", "Authentication", "Version Control", "Deployment"],
            year:"2025",
            img:AWT
        },

        webc2:{
            title:"Java X AI",
            lang:["Java"],
            topic:["OOPS Concept", "Java Evolution", "Understanding AI", "Implement AI in Java"],
            year:"2025",
            img:javxAi
        },

         webc3:{
            title:"Recent Trends in Information Technology",
            lang:["Domains"],
            topic:["Evolving Domains", "Software testing", "Cyber Security", "AI agents", "Data Science"],
            year:"2025",
            img:RtiIt
        },

            webc4:{
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
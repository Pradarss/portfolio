import { RightComponentArea } from "../styles";
import Certifications from "./Certifications/Certifications";
import Home from "./Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills";

export const skills = [
    {
      title: 'Front End',
      skills: ["HTML", "CSS", "JavaScript"]
    },
  
    {
        title: 'JavaScript Frameworks/Libraries',
        skills: ["React JS","React Native", "Bootstrap", "jQuery", "Framer-motion","GSAP"]
    },
    {
        title: 'Back End',
        skills: ["Node JS", "Express JS", "Passport JS", "REST API" ]
    },
  
    {
        title: 'Database',
        skills: ["MongoDB" , "MySQL", "SQLite"]
    },
  
    {
        title: 'Programming languages',
        skills: ["Python", "C", "C++" , "Java" ]
    },
    
    {
        title: 'Coursework',
        skills: ["DSA", "OOPS"]
    },
  
  ];

function RightComponent(){
    return(
        <RightComponentArea>
        <div id="home">
            <Home />
        </div>
        <div id="projects">
            <Projects />
        </div>
        <div id="skills" style={{marginBottom:"10rem"}}>
            {skills.map((skill,index)=>(
                <Skills 
                    key={index}
                    title={skill.title}
                    skills={skill.skills}
                />
            ))}
        </div>
        <div id="certifications">
            <Certifications />
        </div>
        </RightComponentArea>
    )
}

export default RightComponent;
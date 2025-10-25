import { RightComponentArea } from "../styles";
import Certifications from "./Certifications/Certifications";
import Home from "./Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills";

export const skills = [
  {
    title: 'Web & App Development',
    skills: [
      "Next.js",
      "React.js",
      "React Native",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "MUI (Material-UI)",
      "Bootstrap",
      "jQuery"
    ]
  },

  {
    title: 'Server-Side & API Development',
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Passport.js"
    ]
  },

  {
    title: 'Databases',
    skills: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "FAISS (Vector DB)"
    ]
  },

  {
    title: 'AI/ML & Data Science Tools',
    skills: [
      "Python",
      "Scikit-learn",
      "LangChain",
      "Hugging Face Transformers",
      "TensorFlow",
      "Keras",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn"
    ]
  },

  {
    title: 'Programming Languages',
    skills: [
      "JavaScript",
      "C++",
      "C",
      "Java"
    ]
  },

  {
    title: 'Core Concepts & Frameworks',
    skills: [
      "Data Structures & Algorithms (DSA)",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Prompt Engineering",
      "RAG Architecture",
      "Object-Oriented Programming (OOP)"
    ]
  }
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
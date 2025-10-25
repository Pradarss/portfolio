import { ProjectArea } from "../../styles";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "url('/assets/MoonDive.png')",
    title: 'MoonDive Official Website',
    para: 'Developed MoonDive’s official website from scratch using Next.js, Node.js, Express.js, and MongoDB. Integrated an AI-powered RAG chatbot connected to company databases for real-time updates and automated lead generation. Implemented full SEO optimization, responsive design, and smooth UI animations using Framer Motion and Tailwind CSS.',
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Tailwind CSS"],
    href: 'https://moondive.co/', 
    x: "-100px",
  },
  {
    image: "url('/assets/NeoInfinite.png')",
    title: 'NeoInfinite',
    para: 'Built and maintained the admin module for NeoInfinite, an industry-level web platform. Designed role-based dashboards, authentication, and user-side integrations using Next.js, Node.js, and MongoDB. Delivered scalable, production-ready solutions aligned with real-world client requirements.',
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    href: 'https://neoinfinite.in/', 
    x: "100px",
  },
  {
  image: 'url("https://cdn.prod.website-files.com/65ba17e9552cb1953803df44/65ba17e9552cb1953803e05e_Dashboard-p-800.webp")', 
  title: 'OCPMS', 
  para: 'The Organization-Centric Collaborative Project Management System (OCPMS) is a cutting-edge application tailored for organizations to manage projects, tasks, and teams efficiently. Featuring Trello-like task management, project analytics, chat functionality, and separate workspaces, OCPMS streamlines collaboration and decision-making. It also integrates future-ready AI tools to assist with project content creation and planning, making it an essential tool for modern organizations.', 
  tech: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"], 
  href: 'https://github.com/SukritiSingh07/ocpms/', 
  x: "100px", 
},
  {
    image: "url('/assets/Portfolio.png')",
    title: 'Portfolio Website',
    para: 'Created a responsive and interactive portfolio using React.js to showcase my projects, skills, and achievements. Integrated SEO and dynamic UI elements for a smooth browsing experience.',
    tech: ["React.js", "Tailwind CSS"],
    href: "https://adarshverma.netlify.app/",
    x: "-100px",
  },
];


  

function Projects(){
    return(
        <ProjectArea>
            {projects.map((project,index)=>(
                <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    para={project.para}
                    tech={project.tech}
                    href={project.href}
                    x={project.x}
                />
            ))
            }
        </ProjectArea>
    )
}

export default Projects;
import { ProjectArea } from "../../styles";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: 'url("https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg")',
    title: 'Portfolio',
    para: 'My personal portfolio is a meticulously designed website aimed at showcasing my professional journey, achievements, and skills. The portfolio offers a deep dive into my projects, experiences, and certifications, providing potential employers and collaborators with a comprehensive view of my capabilities. Each project section is detailed with descriptions, technologies used, and challenges faced, giving visitors a clear understanding of my expertise.',
    tech: ["ReactJS"],
    href: "https://adarshverma.netlify.app/"
  },
  {
    image: 'url("https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png")',
    title: 'Trello',
    para: 'Trello is a comprehensive task management application designed specifically for managers and their teams to organize, track, and collaborate on tasks efficiently. The app offers a user-friendly interface where tasks can be categorized into boards and cards, making it easier to visualize the workflow.',
    tech: ["ReactJS","NodeJS","MongoDB", "ExpressJS"],
    href: 'https://github.com/Pradarss/Keeper-client',
  },

  {
    image: 'url("https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png")',
    title: 'Keeper',
    para: 'Keeper is a secure and intuitive note-keeping application that allows users to create, organize, and manage their notes with ease. Whether it\'s a quick memo, a to-do list, or detailed project notes, Keeper provides a safe space to store all your information. The app features user authentication to ensure that your notes are protected and accessible only to you.',
    tech: ["ReactJS","NodeJS","MongoDB", "ExpressJS"],
    href: 'https://github.com/Pradarss/Keeper',
  },
  

  {
    image: 'url("https://www.codewithmmak.com/wp-content/uploads/2022/12/API_Img.png")',
    title: 'Code-Wiki API',
    para: 'The Code-Wiki API is a powerful and flexible RESTful API designed to provide developers with easy access to a vast repository of programming-related information. Whether you need quick syntax references, code snippets, or explanations of complex programming concepts, the Code-Wiki API has you covered.',
    tech: ["NodeJS","ExpressJS"]
  },

  {
    image: 'url("https://img.y8.com/cloud/v2-y8-thumbs-big-thumbnails-001/113733/big.gif")',
    title: 'Simon Game',
    para: 'The Simon Game is a fun and engaging memory-based game that challenges players to recall and replicate sequences of colors and sounds. Inspired by the classic electronic game from the 1980s, this version brings the same nostalgic excitement to the digital age. The game starts with a simple sequence and gradually increases in complexity as the player successfully completes each level.',
    tech: ["HTML","CSS","JS"]
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
                />
            ))
            }
        </ProjectArea>
    )
}

export default Projects;
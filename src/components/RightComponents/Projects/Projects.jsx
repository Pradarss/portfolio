import { ProjectArea } from "../../styles";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: 'url("https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png")',
    title: 'Spendly',
    para: 'Spendly is an intuitive and user-friendly mobile app designed to help users track and manage their expenses effortlessly. With a sleek, easy-to-navigate interface, Spendly allows users to add, update, and categorize their expenses, providing a clear overview of their financial habits. The app also features a history of recent expenses and displays total spending, helping users stay on top of their budget. Built with React Native, Spendly offers a seamless cross-platform experience for both iOS and Android users, making personal finance management simple and accessible at all times.',
    tech: ["React Native","SQLite"],
    x:"-100px",
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
    image: 'url("https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg")',
    title: 'Portfolio',
    para: 'My personal portfolio is a meticulously designed website aimed at showcasing my professional journey, achievements, and skills. The portfolio offers a deep dive into my projects, experiences, and certifications, providing potential employers and collaborators with a comprehensive view of my capabilities. Each project section is detailed with descriptions, technologies used, and challenges faced, giving visitors a clear understanding of my expertise.',
    tech: ["ReactJS"],
    href: "https://adarshverma.netlify.app/",
    x:"-100px",
  },
  {
    image: 'url("https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png")',
    title: 'Trello',
    para: 'Trello is a comprehensive task management application designed specifically for managers and their teams to organize, track, and collaborate on tasks efficiently. The app offers a user-friendly interface where tasks can be categorized into boards and cards, making it easier to visualize the workflow.',
    tech: ["ReactJS","NodeJS","MongoDB", "ExpressJS"],
    href: 'https://github.com/Pradarss/Keeper-client',
    x:"100px",
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
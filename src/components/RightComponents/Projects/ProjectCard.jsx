import { Link, Typography } from "@mui/material";
import { ProjectButton, ProjectButtonArea, ProjectCardArea, ProjectCardImage } from "../../styles";
import { color } from "framer-motion";

function ProjectCard({image,title,para,tech,href}){
    return(
        <ProjectCardArea>
            <ProjectCardImage style={{backgroundImage: image}} mr="1rem" mt="0.5rem">
            </ProjectCardImage>
            <div>
                <Link href={href} target="_blank" sx={{textDecoration: "none", }}><Typography variant="h6" color="white" sx={{'&:hover':{color: "blue"}}}>{title}</Typography></Link>
                <Typography variant="body2" color="white" textAlign="justify">{para}</Typography>
                <ProjectButtonArea> 
                    {tech.map((techitem,index)=>(
                        <ProjectButton key={index}>{techitem}</ProjectButton>
                    ))}
                </ProjectButtonArea>
            </div>
        </ProjectCardArea>
    )
}

export default ProjectCard;
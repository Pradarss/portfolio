import { Link, Typography } from "@mui/material";
import { ProjectButton, ProjectButtonArea, ProjectCardArea, ProjectCardImage } from "../../styles";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

function ProjectCard({ image, title, para, tech, href, x }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const MotionProjectCardArea = motion(ProjectCardArea);

    return (
        <MotionProjectCardArea
            ref={ref}
            initial={{ x: x, opacity: 0 }}
            animate={{ x: isInView ? 0 : x, opacity: isInView ? 1 : 0}} 
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }} 
            whileHover={{ scale: 0.93}} 
        >
            <ProjectCardImage style={{ backgroundImage: image }} mr="1rem" mt="0.5rem" />
            <div>
                <Link href={href} target="_blank" sx={{ textDecoration: "none" }}>
                    <Typography variant="h6" color="white" sx={{ '&:hover': { color: "blue" } }}>
                        {title}
                    </Typography>
                </Link>
                <Typography variant="body2" color="white" textAlign="justify">{para}</Typography>
                <ProjectButtonArea>
                    {tech.map((techitem, index) => (
                        <ProjectButton key={index}>{techitem}</ProjectButton>
                    ))}
                </ProjectButtonArea>
            </div>
        </MotionProjectCardArea>
    );
}

export default ProjectCard;

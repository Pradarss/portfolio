import { Divider, Typography } from "@mui/material";
import { SkillsArea, SkillsButton, SkillsButtonArea } from "../styles";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

function Skills({ title, skills }) {
    const Button = useRef(null);
    // const isInView = useInView(Button, { once: true });
    const MotionSkillsButton = motion(SkillsButton);

    return (
        <SkillsArea>
            <Typography variant="h6" color="white" fontWeight="bold" mb="1rem" textAlign="left">{title}</Typography>
            <Divider sx={{ borderColor: "white", mb: 4, mr: 10 }} />
            <SkillsButtonArea>
                {skills.map((skillitem, index) => (
                    <MotionSkillsButton
                        ref={Button}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }} 
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.2, delay: index * 0.2, ease: "easeOut" }} 
                        key={index}
                        whileHover={{ scale: 0.9, backgroundColor: "#ffc300" }}
                    >
                        {skillitem}
                    </MotionSkillsButton>
                ))}
            </SkillsButtonArea>
        </SkillsArea>
    );
}

export default Skills;

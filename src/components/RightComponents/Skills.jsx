import { Divider, Typography } from "@mui/material";
import { SkillsArea, SkillsButton, SkillsButtonArea } from "../styles";

function Skills({title, skills}){
    return(
        <SkillsArea>
            <Typography variant="h6" color="white" fontWeight="bold" mb="1rem" textAlign="left">{title}</Typography>
            <Divider sx={{borderColor: "white", mb: 4, mr: 10}}/>
            <SkillsButtonArea>
                {skills.map((skillitem,index)=>(
                    <SkillsButton key={index}>{skillitem}</SkillsButton>
                ))}
            </SkillsButtonArea>
        </SkillsArea>
    )
}

export default Skills;
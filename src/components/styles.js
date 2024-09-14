import { Box, Button, Card, createTheme, Link, styled } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

//Main--------------------------------------------------------------------------->
export const BackgroundArea = styled(Box)(({ theme }) => ({
    display: 'flex',
    backgroundColor: "#101E43",
    alignItems : "center",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]: {
       display: "block"
    },
}))

//LeftComponent---------------------------------------------------------------------------->
export const LeftComponentArea = styled(Box)(({ theme }) => ({
    width: "40vw",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    position: "fixed",
    left: "10rem",
    top: "5rem",
    [theme.breakpoints.down('sm')]: {
        width: "50%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
}))

export const CustomLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'white',
    paddingLeft: '10px',
    '&:hover': { color: 'white' },
}))

export const CustomLine = styled(Box)(({ theme }) => ({
    height: '2px',
    backgroundColor: 'white',
    transition: 'width 0.3s ease-in-out',
}))

export const CustomUl = styled(Box)(({ theme }) => ({
    listStyle: 'none', 
    padding: 0, 
    margin: 0,
    marginBottom: "4rem"
}))

export const CustomLi = styled(Box)(({ theme }) => ({
    marginBottom: '1rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: 'fit-content'
}))

export const Buttonstyle = styled(Button)(({ theme }) => ({
    background: "white",
    color: "black",
    backdropFilter: "blur(10px)",
    border: "50% solid rgba(255, 255, 255, 0.125)",
    padding: "15px 30px",
    borderRadius: "35px",
    '&:hover': {
        backgroundColor: '#ffc300',
        color: "black"
    },
    [theme.breakpoints.down('sm')]: {
        display:"flex",
        justifyContent: "center",
    },
}))

export const SocailLinkArea = styled(Box)(({ theme }) => ({
    paddingTop: "5rem",
    width: "8vw",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]: {
        width: "10rem"
    },
}))

export const Iconstyles = {
    color: "white",
}

//RightComponent------------------------------------------------------------------------->

export const RightComponentArea = styled(Box)(({ theme }) => ({
    width: "40vw",
    height: "100%",
    marginLeft: "35%",
    [theme.breakpoints.down('sm')]: {
        width: "80%",
        marginLeft: "10%"
    },
  }));

//Home---------------------------------------------------------------------------------------->\

export const HomeArea = styled(Box)(({ theme }) => ({
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
        height: "71vh",
        marginTop: "5rem"
    },
}))

//Projects------------------------------------------------------------------------------------>

export const ProjectArea = styled(Box)(({ theme }) => ({
    width: "auto",
    height: "auto",
    marginBottom: "10rem"
}))

export const ProjectCardArea = styled(Box)(({ theme }) => ({
    maxWidth: "auto",
    maxHeight: "auto",
    minHeight: "20%",
    display: "flex",
    padding: "1rem",
    margin: "3rem 0",
    '&:hover': {
        backgroundColor: "rgba(0,0,0,0.3)", 
        borderRadius: "20px"
    }
}))

export const ProjectCardImage = styled(Box)(({ theme }) => ({
    minWidth: "7rem",
    maxHeight: "5.5rem",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
}))

export const ProjectButtonArea = styled(Box)(({ theme }) => ({
    minWidth: "70%",
    Height: "3rem",
    marginTop: "1rem",
    display: "flex",
    gap: "1rem",
}))

export const ProjectButton = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding:"5px 10px",
    borderRadius: "20px",
    justifyContent:"center",
    alignItems: "center",
    display: "flex",
    minWidth: "3rem",
}))

//Skills------------------------------------------------------------------------------------------>

export const SkillsArea = styled(Box)(({ theme }) => ({
    width: "auto",
    height: "auto",
    padding: "1rem",
}))

export const SkillsButtonArea = styled(Box)(({ theme }) => ({
    width: "auto",
    height: "auto",
    display: "flex",
    gap: "1rem",
}))

export const SkillsButton = styled(Box)(({ theme }) => ({
    backgroundColor: "#ffc300",
    padding:"1rem",
    borderRadius: "10px",
    justifyContent:"center",
    alignItems: "center",
    display: "flex",
    minWidth: "3rem",
    '&:hover' : {
        backgroundColor : "white",
    }
}))

//Certifications---------------------------------------------------------------------------------------------->

export const CertificationsArea = styled(Box)(({ theme }) => ({
    width: "auto",
    height: "auto",
    padding: "1rem",
}))

export const CertiCardArea = styled(Card)(({ theme }) => ({
    width: "auto",
    padding: "1rem",
    marginTop: "3rem",
    borderRadius: "20px",
    backgroundColor: "#f5f3f4",
}))
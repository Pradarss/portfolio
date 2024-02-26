import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ContactArea = styled(Box)(({theme})=>({
    width: "100vw",
    height: "85vh", 
    backgroundColor: "grey",
}))

export const ContactFormArea = styled(Box)(({theme})=>({
    width: "75vw",
    height: "65vh", 
    margin: "2rem 12rem",
    padding: "2rem",
    backgroundColor: "white"
}))

export const ContactTitle= styled(Typography)(({theme})=>({
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
}))

export const LabelStyle = {
    fontWeight: 'bold',
}

export const InputStyle = {
    width: '98%',
    padding: 10,
    marginTop: 5,
    // border: '1px solid #ccc',
    borderRadius: 5,
}

export const TextAreaStyle = {
    height: "105px",
    width: "1150px"
}

export const BottonStyle = {
    backgroundColor: '#007acc',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    position: 'relative',
    left: '35rem',

    '&:hover' : {
        backgroundColor: '#005d99',
    }
}
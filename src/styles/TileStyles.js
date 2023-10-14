import styled from "@emotion/styled";
import { Box, Paper, Stack, Typography } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
  }));

export const MinitileArea = styled(Stack)(({theme})=>({
    // direction: "column",
    // display: "flex",
    justifyContent: "center",
    gap: "20px"
}))

export const TileArea = styled(Box)(({theme })=>({
    display: "flex",
    height: "70vh",
    width: "100vw",
    justifyContent: "center",
    alignItems:"center",
    gap: "20px",
    // borderBottom: "2px solid black",
    borderTop: "2px solid black"
    // backgroundColor:"red"
    // backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-mosaic.png')"
}))

export const TitleArea = styled(Typography)(({theme})=>({
    justifyContent:"center", 
    display:"flex", 
    alignItems:"end", 
    height:"30vh", 
    // backgroundColor:"white"
}))
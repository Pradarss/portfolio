import styled from "@emotion/styled";
import {  Card } from "@mui/material";

// export const MinitileArea = styled(Box)(({theme})=>({
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px"
// }))

export const StyledCards = styled(Card)(({theme})=>({
    width: "250px",
    maxWidth: "375px",
    maxHeight: "375px",
    height: "250px",
    backgroundSize: "cover" ,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // opacity: "50%",
    textAlign: "center",
    // border: "1px solid black"
}));

export const StyledMiniTile = styled(Card)({
    width: '250px',
    height: '250px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center',
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    transition: 'opacity 0.3s ease',
    '&:hover': {
      opacity: 0.8,
    },
    borderRadius: '10%',
    margin: '2vw'
  });
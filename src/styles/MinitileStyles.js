import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

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
    border: "1px solid black"
}));
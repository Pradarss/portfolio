import { AppBar, Box, Toolbar, styled } from "@mui/material";

export const StyledAppbar = styled(AppBar)(({theme})=>({
       position:"static",
       backgroundColor:"#333"
}));

export const StyledToolbar = styled(Toolbar)(({theme})=>({
    display:"flex",
    justifyContent:"space-between"
}))

export const LinksArea = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"space-between",
    gap: "20px"
}))
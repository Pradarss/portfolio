import styled from "@emotion/styled";
import { Box, Paper, Stack, Typography } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: "#f0f0f0",
  borderRadius: theme.spacing(1),
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  }
}));

export const MinitileArea = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  gap: theme.spacing(3),
}));

export const TileArea = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(3),
  borderTop: "2px solid black",
  padding: theme.spacing(4),
}));

export const TitleArea = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(4),
}));

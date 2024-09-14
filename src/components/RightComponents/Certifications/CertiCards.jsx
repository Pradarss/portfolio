import { CardContent, CardMedia, Typography } from "@mui/material";
import { CertiCardArea } from "../../styles";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

function CertiCards({ image, title, para }) {

  const MotionCertiCardArea = motion(CertiCardArea);
  const Certicard = useRef(null);
  const isInView = useInView(Certicard, { once: true });

  return (
    <MotionCertiCardArea
      ref={Certicard}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <CardMedia
        sx={{ borderRadius: "20px" }}
        component="img"
        height="200"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} textAlign="justify">
          {para}
        </Typography>
      </CardContent>
    </MotionCertiCardArea>
  );
}

export default CertiCards;

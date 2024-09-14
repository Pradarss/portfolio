import { CardContent, CardMedia, Typography } from "@mui/material";
import { CertiCardArea } from "../../styles";

function CertiCards({image, title, para}){
    return(
        <CertiCardArea>
          <CardMedia
            sx={{borderRadius : "20px"}}
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
      </CertiCardArea>
    )
}

export default CertiCards;
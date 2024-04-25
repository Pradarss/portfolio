import {StyledMiniTile} from '../styles/MinitileStyles';
import { motion } from 'framer-motion';


function MiniTile(props){

    
    const tileStyle = {
        backgroundImage:props.image,
    };
    
    const decodedImageUrl = decodeURIComponent(tileStyle.backgroundImage.replace(/&quot;/g, '"'));
      console.log(decodedImageUrl)

    const MotionStyledMiniTile = motion(StyledMiniTile);

    return(
        <MotionStyledMiniTile style={tileStyle} whileHover={{scale: 1.2}}>
        <div className="minitile"  >
            <h1>{props.title}</h1>
            <p>{props.para}</p>
        </div>
        </MotionStyledMiniTile>
    )
}

export default MiniTile;
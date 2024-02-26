import {StyledMiniTile} from '../styles/MinitileStyles'

function MiniTile(props){

    
    const tileStyle = {
        backgroundImage:props.image,
    };
    
    const decodedImageUrl = decodeURIComponent(tileStyle.backgroundImage.replace(/&quot;/g, '"'));
      console.log(decodedImageUrl)

    return(
        <StyledMiniTile style={tileStyle}>
        <div className="minitile"  >
        {/* <div className="overlay"></div> */}
            <h1>{props.title}</h1>
            <p>{props.para}</p>
        </div>
        </StyledMiniTile>
    )
}

export default MiniTile;
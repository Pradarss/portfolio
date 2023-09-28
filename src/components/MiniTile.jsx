function MiniTile(props){

    
    const tileStyle = {
        backgroundImage:props.image,
    };
    
    const decodedImageUrl = decodeURIComponent(tileStyle.backgroundImage.replace(/&quot;/g, '"'));
      console.log(decodedImageUrl)

    return(
        <div>
        <div className="minitile"  style={tileStyle}>
        {/* <div className="overlay"></div> */}
            <h1>{props.title}</h1>
            <p>{props.para}</p>
        </div>
        </div>
    )
}

export default MiniTile;
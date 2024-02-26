import MiniTile from "./MiniTile";
import { projects, skills, education, certification } from '../minitiles'; 
// import { Fade } from "react-reveal";
// import { Flip } from "react-reveal";
// import { Slide } from "react-reveal";

function Tile(props){

    let data = [];
  if (props.title === "Projects") {
    data = projects;
  } else if (props.title === "Skills") {
    data = skills;
  } else if (props.title === "Education") {
    data = education;
  } else if (props.title === "Certifications") {
    data = certification;
  }
  console.log("props.title:", props.title);
  console.log("data:", data);

    return(
      <div >
      {/* <Slide left> */}
        <h1 className="tile">{props.title}</h1>
      {/* </Slide> */}
      {/* <Slide right> */}
            
            <div className="minitile-area">
            {data.map((item, index) => (
          <MiniTile key={index} {...item} />
        ))}
      {/* </Slide> */}
            </div>
        </div>
       
    )
}

export default Tile;
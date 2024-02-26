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
        <div className="tile">
          <h1 >{props.title}</h1>
        </div>
            <div className="minitile-area">
            {data.map((item, index) => (
          <MiniTile key={index} {...item} />
        ))}
            </div>
        </div>
       
    )
}

export default Tile;
import { Add, FavoriteBorder, PlayArrow, ThumbDownAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listitem.scss"
// all imports

//exported function to call the component elsewhere
export default function ListItem({index}) {
        const [isHovered, setIsHovered] = useState(false);
        const trailer = "/Videos/trailer.mp4"

  return (
    <div className="listItem" 
    style={{left: isHovered && index * 225 -50 + index*2.5}}
    onMouseEnter={()=> setIsHovered(true)} 
    onMouseLeave={()=> setIsHovered(false)}>

      <img src="https://kifim.b-cdn.net/films/medium/1878430.jpg" alt="movie_img" />
      {isHovered && (
    <>
      <video src={trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add  className="icon"/>
          <FavoriteBorder  className="icon"/>
          <ThumbDownAltOutlined  className="icon"/>
          <div className="itemInfoTop">
            <span>2 heures 59 minutes</span>
            <span className="ageLimit">-16</span>
            <span>2022</span>
          </div>
        </div>
          <div className="desc">
            Batman enquête sur les meurtres d'un tueur en série qui se fait connaître sous le nom de Sphinx et sème des énigmes cruelles sur son passage.
          </div>
          <div className="genre">
            Action/Aventure
          </div>
      </div>
        </>   
      )}
    </div>
  )
}

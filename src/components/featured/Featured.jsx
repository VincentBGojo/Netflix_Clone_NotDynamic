import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss"


const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Films" : "Séries"} </span>
                    <select name="genre" id="genre">
                        <option>Genres</option>
                        <option value="adventure">Aventure</option>
                        <option value="comedy">Comédie</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantaisie</option>
                        <option value="historical">Historique</option>
                        <option value="horror">Horreur</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentaire</option>
                    </select>
                </div>
            )}
            <img src="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg" alt="elden_ring_background" 

            />

            <div className="info">
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/KiNgF4ZodyNlueHTDMfwmIwd.png" alt="elden_ring_title" />
                <span className="desc">
                Le protagniste incarne est un Sans-éclat, un exilé de l'Entre-terre qui a perdu la grâce du Cercle, rappelé après l'Éclatement, qui doit traverser le royaume pour trouver toutes les runes majeures, restaurer le Cercle d’Elden et devenir le Seigneur d'Elden.
                </span>
                <div className="buttons">
                    <button className="play">
                    <PlayArrow />
                    <span>Lecture</span>
                    </button>
                    
                    <button className="more">
                    <InfoOutlined />
                    <span>Plus d'infos</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;

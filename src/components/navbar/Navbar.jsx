import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react";
import "./navbar.scss"
// all imports

//exported const to call the component elsewhere
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // get the scroll Y info + boolean in state
    window.onscroll= () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return() => (window.onscroll = null);
    }
    return (
        // display condition for the navbar
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-1920px-Netflix_2015_logo.svg.png" 
                    alt="Netflix_Logo" 
                    />
                    <span>Accueil</span>
                    <span>Séries</span>
                    <span>Films</span>
                    <span>Nouveautés les plus regardées</span>
                    <span>Ma liste</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>Enfant</span>
                    <Notifications className="icon"/>
                   <img src="https://media.gqmagazine.fr/photos/5d8b6763c7191e00083ebdb9/2:3/w_712,h_1068,c_limit/reussite.jpg" alt="Photo_Profil" />
                   <div className="profile">
                     <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Paramètres</span>
                        <span>Se déconnecter</span>
                    </div>
                   </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar
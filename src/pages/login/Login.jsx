
import "./login.scss";

export default function Login() {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">

                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-1920px-Netflix_2015_logo.svg.png"
                        alt="login_background"
                    />
                </div>
            </div>
            <div className="container">
                <form className="form">
                    <h1>Se connecter</h1>
                    <input type="email" placeholder="Email ou numéro de téléphone"/>
                    <input type="password" placeholder="Mot de passe"/>
                    <button className="loginButton">
                        S'identifier
                    </button>
                    <span>Première visite sur Netflix ? <b>Inscrivez-vous.</b></span>
                    <small>
                    Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas
                     un robot. <b>En savoir plus.</b>
                    </small>
                </form>
            </div>
        </div>
    );
}

import { useRef, useState } from "react"
import "./register.scss"

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">

                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/langfr-1920px-Netflix_2015_logo.svg.png"
                        alt="logo"
                    />
                    <button className="loginButton">
                        S'identifier
                    </button>
                </div>
            </div>
            <div className="container">
                <h1>Films, séries TV et bien plus en illimité.</h1>
                <h2>Où que vous soyez. Annulez à tout moment.</h2>
                <p>
                    Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Adresse Email" ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>
                            Commencer
                        </button>
                    </div>
                ) : (
                    <form className="input">
                    <input type="password" placeholder="Mot de passe" ref={passwordRef} />
                    <button className="registerButton" onClick={handleFinish}>
                        Commencer pour de vrai
                    </button>
                </form>
                )}
            </div>
        </div>
    );
}

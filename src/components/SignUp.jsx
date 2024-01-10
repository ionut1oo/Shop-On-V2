import { useState, useRef, useEffect } from 'react';
import Footer from './Footer';
import { Link } from "react-router-dom";
import "../styles/signUp.css";

const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
    const userRef = useRef(); 
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [valideName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(true);

    const [pwd, setPwd] = useState("");
    const [validePWd, setValidePwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [valideMatch, setValideMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [succes, setSucces] = useState(false);

    useEffect(() => {
        setUserFocus(true);
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidePwd(result); 
        const match = pwd === matchPwd;
        setValideMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(user); 
        const v2 = PWD_REGEX.test(pwd); 
        if(!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        console.log(user, pwd);
        setSucces(true)
    }


    return (
        <>
        {succes ? (
            <div>
                <h1 className='succes'>Success!</h1>
                <p className='succes__home'> 
                <Link to="/" >Home</Link>
                </p>
            </div>
      
        ) : (
        <div>
            <div className="login">
                <p ref={errRef} className={errMsg ? 'errmsg' : "offScreen"} aria-live="assertive">{errMsg}</p>
                <h1 className="login__title">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset className="login__border-form">
                    <label htmlFor="login-text" className="login__label">
                        Username:
                        <span className={valideName ? 'valid' : "hide"}> v</span>
                        <span className={valideName || !user ? "hide" : "invalid"}> x</span>
                    </label>
                    <input 
                    type="text" 
                    id="login-text" 
                    className="login__input" 
                    ref={userRef}  
                    autoComplete="off" 
                    onChange={(e) => setUser(e.target.value)} 
                    required 
                    aria-invalid={valideName ? "false" : "true"} 
                    aria-describedby="uidnote" 
                    onFocus={() => setUserFocus(true)} 
                    />
                    <p id='uidnote' className={userFocus && user.length > 0 && !valideName ? 'instructions' : "offscreen"}>
                        4 to 24 characters. <br />
                        Must begin with a letter. <br />
                        Letters, numbers, underscores.
                    </p>

                        <label htmlFor="login-password" className="login__label">
                            Password:
                            <span className={validePWd ? 'valid' : "hide"}> v</span>
                            <span className={validePWd || !pwd ? "hide" : "invalid"}> x</span>
                        </label>
                        <input 
                        type="password" 
                        id="login-password" 
                        className="login__input" 
                        autoComplete='off' 
                        onChange={(e) => setPwd(e.target.value)} 
                        required 
                        aria-invalid={validePWd ? "false" : "true"} 
                        aria-describedby='pwdnote' 
                        onFocus={() => setPwdFocus(true)} 
                        onBlur={() => setPwdFocus(false)}
                        />
                        <p id='pwdnote' className=
                        {pwdFocus && !validePWd ? 
                        'instructions' : "offscreen"}>
                            8 to 24 characters. <br />
                            Must include upperCase and lowerCase <br /> letter, a number  and a special character.
                        </p>

                        <label htmlFor="confirm-pwd" className="login__label">
                            Confirm Password:
                            <span className={valideMatch && matchPwd ? 'valid' : "hide"}> v</span>
                            <span className={valideMatch || !matchPwd ? "hide" : "invalid"}> x</span>
                        </label>
                        <input 
                        type="password" 
                        id="confirm-pwd" 
                        className="login__input" 
                        autoComplete='off' 
                        onChange={(e) => setMatchPwd(e.target.value)} 
                        required 
                        aria-invalid={valideMatch ? "false" : "true"}
                        aria-describedby='confirmnote' 
                        onFocus={() => setMatchFocus(true)} 
                        onBlur={() => setMatchFocus(false)}
                        />
                        <p id='confirmnote' className=
                        {matchFocus && !valideMatch ? 
                        'instructions' : "offscreen"}>
                            Must match first password input field.
                        </p>
                        
                        <button className='login__button' 
                        disabled={!valideName || !validePWd || !valideMatch}>
                            Sign up
                        </button>
                    </fieldset>
                </form>
            </div>
            <Footer />
        </div>
        )}
        </>
    );
}

export default SignUp;

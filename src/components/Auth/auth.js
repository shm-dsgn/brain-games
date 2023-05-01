import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "./auth.css";
import { GoogleLogo } from "@phosphor-icons/react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert("Invalid Email or Password");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
      alert("Invalid Email or Password");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  //console.log(auth.currentUser)

  return (
    <div className="auth-page">
      <h1>Log In/ Sign Up</h1>
      {auth.currentUser == null ? (
        <div>
          <input
            className="auth-input"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="auth-input"
            placeholder="Enter your Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="auth-buttons">
            <button onClick={signIn} className="auth-btn">
              Sign In / Sign Up
            </button>
            <p>OR</p>
            <button onClick={signInWithGoogle} className="auth-btn">
              <GoogleLogo size={24} weight="bold" />
              &nbsp;&nbsp;&nbsp; Sign In With Google
            </button>
          </div>
        </div>
      ) : (
        <button onClick={logout} className="auth-btn">
          Logout
        </button>
      )}
    </div>
  );
};

export default Auth;

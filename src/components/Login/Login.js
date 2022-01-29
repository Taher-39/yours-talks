import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName,
          email: user.email,
          imgUrl: user.photoURL,
        };
        console.log(userInfo.name, userInfo.email, userInfo.imgUrl);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://i.pinimg.com/originals/fb/52/e3/fb52e39c5910bdbcc3b98d58d6ca6944.webp" alt="login-img" />
        <div className="login__text">
          <h1>Sign in to Your-Talks</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;

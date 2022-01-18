import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  registerRequest,
  signinRequest,
} from "../../stateManagement/Authorization/action";
import styles from "../../styles/Home.module.css";
import SignStyle from "../../styles/Registration.module.css";
import Header from "../Header/Header";

export default function Landing() {
  const [signinData, setSignInData] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  useEffect(() => {
    setSignInData({
      ...signinData,
      email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
    });
  }, []);

  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (
      signinData.password != "" &&
      signinData.password != signinData.verifyPassword
    )
      console.log("Error");
    else {
      console.log(signinData);
      dispatch(registerRequest(signinData));
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Gestion SignUp</title>
        <meta name="description" content="sign Up for Gestion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={SignStyle.heading}>
        <b>
          Create A New Account<span className={SignStyle.dot}>.</span>
        </b>
      </div>
      <div>
        Already a member?{" "}
        <Link href="/login">
          <a>
            <b>Log in</b>
          </a>
        </Link>
      </div>
      <div className={styles.Invite} style={{ margin: "20px 0px" }}>
        <form className={SignStyle.form} onSubmit={handleSignIn}>
          <div className={SignStyle.inputContainer}>
            <div className={SignStyle.label}>Username</div>

            <input
              type="text"
              className={SignStyle.inputBox}
              onChange={(e) =>
                setSignInData({ ...signinData, username: e.target.value })
              }
              placeholder="what should we call you?"
              required={true}
            />
          </div>

          <div className={SignStyle.inputContainer}>
            <div className={SignStyle.label}>Email</div>
            <input
              type="email"
              className={SignStyle.inputBox}
              value={signinData.email}
              onChange={(e) =>
                setSignInData({ ...signinData, email: e.target.value })
              }
              placeholder="@your.mail.com"
              required={true}
            />
          </div>
          <div className={SignStyle.inputContainer}>
            <div className={SignStyle.label}>Password</div>
            <input
              type="text"
              className={SignStyle.inputBox}
              onChange={(e) =>
                setSignInData({ ...signinData, password: e.target.value })
              }
              required={true}
              placeholder="Here..."
            />
          </div>
          <div className={SignStyle.inputContainer}>
            <div className={SignStyle.label}>Confirm Password</div>
            <input
              type="password"
              className={SignStyle.inputBox}
              onChange={(e) =>
                setSignInData({ ...signinData, verifyPassword: e.target.value })
              }
              required={true}
              placeholder="Here..."
            />
          </div>

          <button type="submit" className={SignStyle.signUP}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

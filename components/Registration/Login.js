import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../stateManagement/Authorization/action";
import styles from "../../styles/Home.module.css";
import SignStyle from "../../styles/Registration.module.css";

export default function Landing() {
  const [loginData, setLoginInData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginRequest(loginData));
    console.log(loginData);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Gestion Login</title>
        <meta name="description" content="Login in your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>Gestion</div>
      </main>

      <div className={SignStyle.heading}>
        <b>
          Login<span className={SignStyle.dot}>.</span>
        </b>
      </div>
      <div>
        New member?{" "}
        <Link href="/signin">
          <a>
            <b>Sign in</b>
          </a>
        </Link>
      </div>
      <div className={styles.Invite}>
        <form className={SignStyle.form} onSubmit={submitHandler}>
          <div className={SignStyle.inputContainer}>
            <div className={SignStyle.label}>Email</div>
            <input
              type="email"
              onChange={(e) =>
                setLoginInData({ ...loginData, email: e.target.value })
              }
              className={SignStyle.inputBox}
            />
          </div>

          <div className={SignStyle.inputContainer}>
            <div className={SignStyle.label}>Password</div>
            <input
              type="password"
              onChange={(e) =>
                setLoginInData({ ...loginData, password: e.target.value })
              }
              className={SignStyle.inputBox}
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

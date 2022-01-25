import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import landing from "../../public/landing_illustration.svg";
import Header from "../Header/Header.js";
export default function Landing() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("email", email);
    router.push("/signin");
  };

  return (
    <div className={styles.paddingContainer}>
      <Head>
        <title>Gestion</title>
        <meta name="description" content="A Project Management Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <div className={styles.tagLine}>
            Make Your <b>110%</b> of
            <br />
            <b>Everyday</b>
          </div>

          <div className={styles.invite}>
            <div>Invite Your Team Members</div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="@your.mail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit"> Sign up </button>
            </form>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={landing} alt="landing illustration" />
        </div>
      </div>
    </div>
  );
}

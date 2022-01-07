import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

export default function Landing() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    router.push("/signin");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Gestion</title>
        <meta name="description" content="A Project Management Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>Gestion</div>
      </main>

      <div className={styles.tagLine}>
        Make Your <b>110%</b> of
        <br />
        <b>Everyday</b>
      </div>

      <div className={styles.Invite}>
        <div>Invite Your Team Members</div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit"> Sign up </button>
        </form>
      </div>
    </div>
  );
}

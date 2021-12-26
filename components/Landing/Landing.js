import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gestion</title>
        <meta name="description" content="A Project Management Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <b>Gestion</b>
        </div>
      </main>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <div className={styles.tagLine}>
            Make Your <b>110%</b> of
            <br />
            <b>Everyday</b>
          </div>

          <div className={styles.invite}>
            <div>Invite Your Team Members</div>

            <form className={styles.form}>
              <input type="text" placeholder="youremail@here.com" />
              <button type="submit"> Invite </button>
            </form>
          </div>
        </div>
        <div className={styles.image}>
          <img src="/landing_illustration.svg" alt="landing illustration" />
        </div>
      </div>
    </div>
  );
}

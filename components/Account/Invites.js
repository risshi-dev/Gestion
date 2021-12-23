import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Invites() {
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

      <div className={styles.Invite}>
        <div>Add Team Members</div>

        <form className={styles.form}>
          <input type="text" placeholder="email" />
          <button type="submit"> Send Invite </button>
        </form>
      </div>
    </div>
  );
}

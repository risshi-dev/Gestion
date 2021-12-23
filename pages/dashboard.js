import Head from "next/head";
import MainDashboard from "../components/Dashboard/MainDashboard";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gestion</title>
        <meta name="description" content="A Project Mas~nagement Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainDashboard />
    </div>
  );
}

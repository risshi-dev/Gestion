import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MainDashboard from "../components/Dashboard/MainDashboard";
import { isAuth } from "../helper/helper";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    !isAuth() ? router.push("/login") : null;
  }, []);
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

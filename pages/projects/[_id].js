import Sidebar from "../../components/Sidebar/Sidebar";
import Head from "next/head";
import dashboard from "../../styles/Dashboard.module.css";
import Cards from "../../styles/Cards.module.css";
import Header from "../../components/Header/Header.js";
import styles from "../../styles/Home.module.css";
import Card from "../../components/Dashboard/Cards";
export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={dashboard.container}>
        <Head>
          <title>Gestion Login</title>
          <meta name="description" content="Login in your account" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />

        <div className={dashboard.Main}>
          <Sidebar />
          <div className={Cards.container}>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

import Sidebar from "../../components/Sidebar/Sidebar";
import Head from "next/head";
import dashboard from "../../styles/Dashboard.module.css";
import Cards from "../../styles/Cards.module.css";
import Header from "../../components/Header/Header.js";
import styles from "../../styles/Home.module.css";
import Card from "../../components/Cards/Cards";
import EditCardModal from "../../components/Cards/EditCardModal";
import { useState } from "react";
import Chat from "../../components/Chat/Chat";
import ProjectInfo from "../../components/Project/ProjectInfo";
export default function Project() {
  const [openModal, setOpenModal] = useState(false);

  const setModal = (isOpen) => setOpenModal(isOpen);
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
            <Card open={openModal} click={setModal} />
          </div>
          <div className="sideScreen">
            {/* <Chat /> */}
            <ProjectInfo />
          </div>
        </div>
      </div>
      <EditCardModal isOpen={openModal} setModal={setModal} />
    </div>
  );
}

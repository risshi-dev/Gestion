import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import dashboard from "../../styles/Dashboard.module.css";
import CreateProject from "./CreateProject";
import Sidebar from "../Sidebar/Sidebar";

export default function MainDashboard() {
  const [openModal, setOpenModal] = useState(false);

  const setModal = (isOpen) => setOpenModal(isOpen);
  return (
    <div className={dashboard.container}>
      <Head>
        <title>Gestion Login</title>
        <meta name="description" content="Login in your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={dashboard.Header}>
        <main>
          <div className={styles.title}>Gestion</div>
        </main>
      </div>

      <div className={dashboard.Main}>
        <Sidebar />
        <div>
          <div className={dashboard.Card} onClick={() => setModal(true)}>
            <div className={dashboard.newProject}>Add Project</div>
          </div>

          <CreateProject isOpen={openModal} setModal={setModal} />
        </div>
      </div>
    </div>
  );
}

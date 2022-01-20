import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import dashboard from "../../styles/Dashboard.module.css";
import CreateProject from "./CreateProject";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header.js";
import { useRouter } from "next/router";
import SideScreen from "../Project/SideScreen";

export default function MainDashboard() {
  const router = useRouter();

  const [isSideScreen, setSideScreen] = useState(false);
  const [activeScreen, setActiveScreen] = useState("");

  const setScreen = (screen) => setActiveScreen(screen);
  const screenVisible = (is) => setSideScreen(is);

  const openSideScreen = () => {
    if (!isSideScreen) {
      const side = document.getElementsByClassName("sideScreen")[0];
      side.style.width = "320px";
    } else {
      const side = document.getElementsByClassName("sideScreen")[0];
      side.style.width = "0px";
    }
  };

  return (
    <div className={dashboard.container}>
      <Head>
        <title>Gestion Login</title>
        <meta name="description" content="Login in your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={dashboard.Main}>
        <Sidebar openSideScreen={openSideScreen} setSideScreen={setScreen} />
        <div className={dashboard.projectContainer}>
          <div
            className={dashboard.Card}
            onClick={() => router.push("/projects/1")}
          >
            <div className={dashboard.newProject}>Project 1</div>
          </div>

          <div className={dashboard.Card}>
            <div className={dashboard.newProject}>Project 1</div>
          </div>
        </div>

        <SideScreen screen={activeScreen} />
      </div>
    </div>
  );
}

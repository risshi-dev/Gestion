import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import dashboard from "../../styles/Dashboard.module.css";
import CreateProject from "./CreateProject";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header.js";
import { useRouter } from "next/router";
import SideScreen from "../Project/SideScreen";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../stateManagement/Project/action";

const ProjectsList = ({ projects, router }) => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project._id}
          className={dashboard.Card}
          onClick={() => router.push(`/projects/${project._id}`)}
        >
          <div className={dashboard.newProject}>{project.title}</div>
        </div>
      ))}
    </>
  );
};

export default function MainDashboard() {
  const { projects, loading } = useSelector((state) => state.projectReducer);
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

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
          {!loading && <ProjectsList projects={projects} router={router} />}
        </div>

        <SideScreen screen={activeScreen} />
      </div>
    </div>
  );
}

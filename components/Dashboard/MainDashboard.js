import Head from "next/head";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import dashboard from "../../styles/Dashboard.module.css";
import CreateProject from "./CreateProject";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header.js";
import { useRouter } from "next/router";
import SideScreen from "../Project/SideScreen";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../stateManagement/Project/action";
import Image from "next/image";
import image from "../../public/projects.jpg";
const ProjectsList = ({ projects, router }) => {
  return (
    <>
      {projects?.map((project) => (
        <div
          key={project._id}
          className={dashboard.Card}
          onClick={() => router.push(`/projects/${project._id}`)}
        >
          <div></div>
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

  const openSideScreen = useCallback(() => {
    if (!isSideScreen) {
      const side = document.getElementsByClassName("sideScreen")[0];
      side.style.width = "350px";
    } else {
      const side = document.getElementsByClassName("sideScreen")[0];
      side.style.width = "0px";
    }
  }, [isSideScreen]);

  useEffect(() => {
    if (activeScreen !== "") openSideScreen();
  }, [isSideScreen, activeScreen, openSideScreen]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  console.log(projects);
  return (
    <div className={dashboard.container}>
      <Head>
        <title>Gestion Login</title>
        <meta name="description" content="Login in your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 
      <Header /> */}

      <div className={dashboard.Main}>
        <Sidebar
          openSideScreen={openSideScreen}
          setSideScreen={setScreen}
          screenVisible={screenVisible}
        />
        <div style={{ backgroundColor: "#f1f2f98a" }}>
          <div
            style={{ fontSize: "30px", marginBottom: "2vh", padding: "20px" }}
          >
            Projects
          </div>
          <div className={dashboard.projectContainer}>
            {!loading && <ProjectsList projects={projects} router={router} />}
          </div>
        </div>

        <SideScreen
          screen={activeScreen}
          screenVisible={screenVisible}
          openSideScreen={openSideScreen}
        />
      </div>
    </div>
  );
}

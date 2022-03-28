import Head from "next/head";
import Invites from "../../styles/Project.module.css";
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
import { FaUsers } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineDeploymentUnit,
  AiOutlineDown,
} from "react-icons/ai";
import DropDown from "./DropDown";
import { getInvites } from "../../stateManagement/Invites/action";
const ProjectsList = ({ projects, router }) => {
  return (
    <>
      {projects?.map((project) => (
        <div
          key={project._id}
          className={dashboard.Card}
          onClick={() => router.push(`/projects/${project._id}`)}
        >
          <div className={dashboard.newProject}>{project.title}</div>
          <div className={dashboard.cardMid}>
            This project is about something
          </div>
          <div>
            <div className={dashboard.cardFooter}>
              <div className={dashboard.cardFooterLeft}>
                <AiFillGithub
                  style={{ fontSize: "28px", marginRight: "10px" }}
                />
                <AiOutlineDeploymentUnit
                  style={{ fontSize: "28px", marginRight: "10px" }}
                />
              </div>
              <div className={dashboard.cardFooterRight}>
                <FaUsers style={{ fontSize: "28px", marginRight: "10px" }} />{" "}
                {project.teamMembers.length > 0
                  ? project.teamMembers.length
                  : null}
              </div>
            </div>
          </div>
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
      side.style.width = "320px";
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
    dispatch(getInvites());
  }, []);

  console.log(projects);
  return (
    <div className={dashboard.container} style={{ marginRight: "1rem" }}>
      <Head>
        <title>Gestion Login</title>
        <meta name="description" content="Login in your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 
      <Header /> */}

      <div className={`${dashboard.Main} ${dashboard.userMain}`}>
        <Sidebar
          openSideScreen={openSideScreen}
          setSideScreen={setScreen}
          screenVisible={screenVisible}
        />
        <div style={{ backgroundColor: "#f1f2f98a" }}>
          <div style={{ fontSize: "30px", padding: "10px 30px" }}>Welcome</div>
          <div className={dashboard.projectContainer}>
            {!loading && <ProjectsList projects={projects} router={router} />}
          </div>

          <DropDown />
        </div>

        {/* <SideScreen
          screen={activeScreen}
          screenVisible={screenVisible}
          openSideScreen={openSideScreen}
        /> */}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import dashboard from "../../styles/Dashboard.module.css";
import { LoginOutlined, SearchOutlined } from "@ant-design/icons/lib/icons";
import Avatar from "antd/lib/avatar/avatar";
import LandingHeader from "./LandingHeader";
import { useRouter } from "next/router";
import SearchHeader from "./SearchHeader";

function Header() {
  const router = useRouter();
  const [path, setPath] = useState(router.pathname);

  useEffect(() => {
    setPath(router.pathname);
  }, [router]);
  return (
    <div className={dashboard.Header}>
      <div onClick={() => router.push("/")}>Gestion</div>

      {path === "/" ? (
        <LandingHeader />
      ) : path === "/login" || path === "/signin" ? (
        <div></div>
      ) : path === "/dashboard" ? (
        <SearchHeader />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Header;

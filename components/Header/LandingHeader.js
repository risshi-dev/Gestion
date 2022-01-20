import React from "react";
import dashboard from "../../styles/Dashboard.module.css";
import { LoginOutlined } from "@ant-design/icons/lib/icons";
import { useRouter } from "next/router";
import { isAuth } from "../../helper/helper";
function LandingHeader() {
  const router = useRouter();
  return (
    <div
      onClick={() =>
        !isAuth() ? router.push("/login") : router.push("/dashboard")
      }
      style={{ cursor: "pointer" }}
    >
      <LoginOutlined /> Dashboard
    </div>
  );
}

export default LandingHeader;

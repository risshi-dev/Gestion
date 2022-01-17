import React from "react";
import dashboard from "../../styles/Dashboard.module.css";
import { LoginOutlined } from "@ant-design/icons/lib/icons";
import { useRouter } from "next/router";
function LandingHeader() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/login")} style={{ cursor: "pointer" }}>
      <LoginOutlined /> Dashboard
    </div>
  );
}

export default LandingHeader;

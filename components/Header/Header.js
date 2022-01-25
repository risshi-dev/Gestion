import React, { useEffect, useState } from "react";
import dashboard from "../../styles/Dashboard.module.css";
import LandingHeader from "./LandingHeader";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [path, setPath] = useState(router.pathname);

  useEffect(() => {
    setPath(router.pathname);
  }, [router]);
  return (
    <div className={dashboard.Header}>
      <div onClick={() => router.push("/")}>Gestion</div>

      <LandingHeader />
      {/* <div>
        <span>03</span>
        <span>/</span> <span>Jan</span>
        <span>/</span> <span>2022</span>
      </div> */}
    </div>
  );
}

export default Header;

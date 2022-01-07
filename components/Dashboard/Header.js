import React from "react";
import styles from "../../styles/Home.module.css";
import dashboard from "../../styles/Dashboard.module.css";
import { SearchOutlined } from "@ant-design/icons/lib/icons";

function Header() {
  return (
    <div className={dashboard.Header}>
      <main>
        <div className={styles.title}>Gestion</div>
      </main>

      {/* <div>
        <input placeholder="Search Project"></input> <SearchOutlined />
      </div> */}
    </div>
  );
}

export default Header;

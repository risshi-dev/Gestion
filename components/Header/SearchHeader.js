import { SearchOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import header from "../../styles/Dashboard.module.css";
function SearchHeader() {
  return (
    <div className={header.searchHeader}>
      <input
        className={header.inputSearchHeader}
        placeholder="Search Here..."
      ></input>{" "}
      <SearchOutlined />
    </div>
  );
}

export default SearchHeader;

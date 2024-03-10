"use client";
import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className={styles["search-bar-container"]}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles["search-input"]}
      />
    </div>
  );
};

export default SearchBar;

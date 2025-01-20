import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <div className="spinner"></div>
      <p className="loadingText">Loading...</p>
    </div>
  );
};
// const loaderStyle = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "canter",
//   height: "100vh",
//   fontSize: "18px",
//   color: "#555",
// };
export default Loader;

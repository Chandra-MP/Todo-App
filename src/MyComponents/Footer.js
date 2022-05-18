import React from "react";
import "../App.css";

export const Footer = () => {
  let footerStyles = {
    position: "relative",
    top: "10vh",
    width: "100%",
    backgroundColor: "#282c34",
    border: "2px solid cyan",
  };
  return (
    <footer className="bg-dark text-light footer" style={footerStyles}>
      <p className="text-center footertext py-3">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  );
};

export default Footer;

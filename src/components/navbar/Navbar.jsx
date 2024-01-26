import "./navbar.scss";
import React from "react";
import { motion } from "framer-motion";
import SideBar from "../sidebar/SideBar";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <SideBar />
      <motion.div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lama Dev
        </motion.span>
        <div className="social">
          <img src="/public/facebook.png" alt="" />
          <img src="/public/instagram.png" alt="" />
          <img src="/public/youtube.png" alt="" />
          <img src="/public/dribbble.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
}

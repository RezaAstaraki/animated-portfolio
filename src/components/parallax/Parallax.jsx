import React, { useRef, useEffect } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const ref = useRef(null);
  const scrollYProgress = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    ["0%", "250%"]
  );
  const yBg = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1
        //dddddd

        style={{ y: yText }}
      >
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}

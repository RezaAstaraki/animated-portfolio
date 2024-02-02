import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TestParallax({ type }) {
  const ref = useRef(null);

  const scroll = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  }).scrollYProgress;

  const yText = useTransform(scroll, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scroll, [0, 1], ["0%", "70%"]);
  const xBg = useTransform(scroll, [0, 1], ["0%", "50%"]);
  const yPlanets = useTransform(scroll, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="testParallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, rgb(42, 42, 71), rgb(1, 15, 22))"
            : "linear-gradient(rgb(42, 42, 71), rgb(1, 15, 22))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do" : "what we Did"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yPlanets,
          backgroundImage:
            type === "services" ? `url("./planets.png")` : `url("./sun.png")`,
        }}
      ></motion.div>
      <motion.div style={{ x: xBg, y: yBg }} className="stars"></motion.div>
    </div>
  );
}

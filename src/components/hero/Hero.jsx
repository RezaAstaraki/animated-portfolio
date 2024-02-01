import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
const variants = {
  animation: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  initial: {
    x: -500,
    opacity: 0,
  },
  scrollAnimation: {
    y: 15,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-300%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          variants={variants}
          animate={"animation"}
          initial={"initial"}
          className="textContainer"
        >
          <motion.h2 variants={variants}>Reza Astaraki</motion.h2>
          <h1>Web Developer and UI designer</h1>
          <motion.div variants={variants} className="buttons">
            <motion.button variants={variants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={variants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={variants}
            animate="scrollAnimation"
            src="scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        animate={"animate"}
        initial={"initial"}
        className="slidingTextContainer"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="hero.png" alt="" />
      </div>
    </div>
  );
}

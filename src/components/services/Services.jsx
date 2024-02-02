import { useRef } from "react";
import services from "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 100,
    x: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand
          <br /> grow and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            quisquam unde, corporis quasi reiciendis omnis debitis praesentium
            consequatur porro enim est deleniti. Magni laboriosam autem
            accusamus excepturi tempore distinctio voluptates.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            quisquam unde, corporis quasi reiciendis omnis debitis praesentium
            consequatur porro enim est deleniti. Magni laboriosam autem
            accusamus excepturi tempore distinctio voluptates.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            quisquam unde, corporis quasi reiciendis omnis debitis praesentium
            consequatur porro enim est deleniti. Magni laboriosam autem
            accusamus excepturi tempore distinctio voluptates.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            quisquam unde, corporis quasi reiciendis omnis debitis praesentium
            consequatur porro enim est deleniti. Magni laboriosam autem
            accusamus excepturi tempore distinctio voluptates.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

import React, { useState } from "react";
import "./test.scss";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
  },
  closed: {
    clipPath: "circle(25px at 50px 50px)",
  },
};

export default function Test() {
  const [open, setOpen] = useState(false);

  const clickedHandler = () => {
    console.log("open", open);
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <motion.div
        className="bg"
        animate={open ? "open" : "closed"}
        variants={variants}
      >
        <ToggleButton clickedHandler={clickedHandler} />
      </motion.div>
    </div>
  );
}

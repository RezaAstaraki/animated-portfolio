import { motion } from "framer-motion";
import { useState } from "react";
export default function Test() {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      //   transition: { staggerChildren: 0.2 },
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0, transition: { duration: 1 } },
  };

  const items = ["item1", "item2", "item3", "item4"];
  const [open, setOpen] = useState(false);
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((i, index) => (
          <motion.li variants={variants} custom={index}>
            {i}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

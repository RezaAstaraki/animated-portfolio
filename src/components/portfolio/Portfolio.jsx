import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjC-7qC1ECm2QVRGioyIy710aOgGSmawJfWLPIiW8VLyaKcdl5j_nJ_m1KgP6Mt4d0WTc&usqp=CAU",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ea, consectetur magnam debitis cumque alias sit ad repudiandae eos voluptas blanditiis sequi. Cum error, vitae facere corporis ut libero omnis.",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ea, consectetur magnam debitis cumque alias sit ad repudiandae eos voluptas blanditiis sequi. Cum error, vitae facere corporis ut libero omnis.",
  },
  {
    id: 3,
    title: "Vanilla Js App",
    img: "https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.webp",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ea, consectetur magnam debitis cumque alias sit ad repudiandae eos voluptas blanditiis sequi. Cum error, vitae facere corporis ut libero omnis.",
  },
  {
    id: 4,
    title: "Music app",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB8giTN9Hj8QAEz4DVdCtqWbfnrKoZSo2nA&usqp=CAU",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ea, consectetur magnam debitis cumque alias sit ad repudiandae eos voluptas blanditiis sequi. Cum error, vitae facere corporis ut libero omnis.",
  },
];

const Single = ({ item }) => {
  const ref = useRef(null);
  const scrollYProgress = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  }).scrollYProgress;

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          {/* style={{ y: y }} */}

          <motion.div style={{ y: y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const ref = useRef(null);
  const scrollYProgress = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  }).scrollYProgress;

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div ref={ref} className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
}

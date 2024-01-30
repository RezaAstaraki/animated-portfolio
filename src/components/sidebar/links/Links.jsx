import { motion } from "framer-motion";
const variants = {
  open: {
    transition: { staggerChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, stagger },
  },
};
export default function Links() {
  const items = ["HomePage", "Services", "Portfolio", "Contact", "About"];
  return (
    <div className="links">
      {items.map((item) => (
        <a key={item} href={`#${item}`}>
          {item}
        </a>
      ))}
    </div>
  );
}

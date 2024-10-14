// import "./styles.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function FunFactsNumber({ limit }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, limit, { duration: 3.7 });
    return animation.stop;
  }, []);

  return <motion.p>{rounded}</motion.p>;
}

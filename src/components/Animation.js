import * as React from "react";
import { motion } from "framer-motion";

  const Example = () => {
  return (
    <div className=" container d-flex justify-content-between col-lg-12 col-md-12" style={{height:"80px",marginTop:"-3px"}}>
    <motion.img
    src="./images2/gog.jpeg" alt="....."
    className="profile-img"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 4
      }}
    />
        <motion.img
    src="./images2/laptop.jpeg" alt="....."
    className="profile-img"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 4
      }}
    />
  
</ div>
  );
};
export default Example
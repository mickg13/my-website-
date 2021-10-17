import React from 'react'
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className=" container py-5">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="image-wraper">
                        <motion.img
                        className=" profile-img"
                        style={{width:"17rem"}}
                            src="./images2/gog.jpeg" alt="....."
                        
                            animate={{
                                scale: [1, 1, 1, 1, 1],
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
                       
                        
                    </div>

                </div>
                <div className="col-lg-6 col-md-12 mb-4">

                    <h1 className="about-title mt-5">about Me</h1>
                    <p style={{color:"#27273f",fontSize:"19px"}}>
                    Full Stack developer with over a year of experience.  Effective and reliable working autonomously and as part of a team. I am motivated to continue my career in Front and Back End Development, as well as in learning other coding languages. Dedicated athlete that has competed in national competitions
                    </p>
                      
                </div>
            </div>


        </div>
    )
}

export default About

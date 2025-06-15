import React from "react";
import { motion } from "framer-motion";
import "./Banner2Animated.css";
import studentImg from "./2.1.jpg";
import registerImg from "./2.2.jpg";

const Banner2Animated = () => {
    return (
        <div className="banner2-container">
            <motion.h3
                className="banner2-subtitle"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                Başlamak için mükemmel zamanı bekleme.
            </motion.h3>

            <motion.h1
                className="banner2-title"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                Zaman ‘şimdi’
            </motion.h1>

            <div className="banner2-content">
                <motion.img
                    src={studentImg}
                    alt="student"
                    className="banner2-student"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                />

                <motion.div
                    className="banner2-register-box"
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                >
                    <img src={registerImg} alt="register" className="register-img" />

                    <div className="register-text">
                        <span className="small">HEMEN ŞİMDİ</span>
                        <span className="big">KAYIT OL</span>
                    </div>


                </motion.div>
            </div>
        </div>
    );
};

export default Banner2Animated;

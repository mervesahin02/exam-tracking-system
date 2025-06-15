import React from "react";
import { motion } from "framer-motion";
import "./Banner3Animated.css";
import studentImg from "./3.1.jpg"; // senin görselin

const leftItems = [
    "Konu Takip Sistemi",
    "Sınav Analizleri",
    "Denemelerim",
    "Hedeflerim"
];

const rightItems = [
    "Motivasyon Sistemi",
    "Pomodoro Tekniği",
    "Çalışma Planım",
    "Hatırlatıcılar"
];

const Banner3Animated = () => {
    return (
        <div className="banner3-container">
            <motion.h1
                className="banner3-title"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
            >
                Hedefine Ulaştıracak 8 Güçlü Modül!
            </motion.h1>

            <div className="banner3-content">
                {/* Sol Liste */}
                <ul className="banner3-list left">
                    {leftItems.map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ x: -80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>

                {/* Görsel */}
                <motion.img
                    src={studentImg}
                    alt="Öğrenci"
                    className="banner3-img"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                />

                {/* Sağ Liste */}
                <ul className="banner3-list right">
                    {rightItems.map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ x: 80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>

            <motion.p
                className="banner3-description"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                Konu takibinden deneme analizine, motivasyon sisteminden hatırlatıcılara
                kadar tüm modüller senin başarın için tasarlandı.
            </motion.p>
        </div>
    );
};

export default Banner3Animated;

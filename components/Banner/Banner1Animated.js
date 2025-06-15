import React from "react";
import "./Banner1Animated.css";
import { motion } from "framer-motion";
import studentImg from "./1.1.jpg"; // 👈 elindeki öğrenci görseli
import balloonImg from "./balon.png";   // 👈 konuşma balonu görseli

const Banner1Animated = () => {
    return (
        <div className="banner1-container">
            {/* Sol üst balon */}
            <motion.div
                className="balloon left-top"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >
                <img src={balloonImg} alt="Balon" />
                <div className="balloon-text">
                    <strong>YKS İstatistikleri</strong><br />
                    Türkiye geneli ve bölgesel YKS istatistikleriyle gelişimini kolayca takip et.
                </div>
            </motion.div>

            {/* Sol alt balon */}
            <motion.div
                className="balloon left-bottom"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <img src={balloonImg} alt="Balon" />
                <div className="balloon-text">
                    <strong>Akıllı Analiz</strong><br />
                    Performansını detaylı analiz et, güçlü ve zayıf yönlerini keşfet.
                </div>
            </motion.div>

            {/* Sağ balon */}
            <motion.div
                className="balloon right"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
            >
                <img src={balloonImg} alt="Balon" />
                <div className="balloon-text">
                    <strong>Kişiselleştirilmiş YKS Planı</strong><br />
                    Sana özel YKS planları ve önerilerle hedeflerine daha hızlı ulaş.
                </div>
            </motion.div>

            {/* Öğrenci */}
            <motion.img
                src={studentImg}
                alt="students"
                className="student-img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            />

            {/* Başlık */}
            <motion.h2
                className="why-us-title"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
            >
                Neden Biz?
            </motion.h2>
        </div>
    );
};

export default Banner1Animated;

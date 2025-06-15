import React, { useState, useEffect } from "react";
import "./SinavlarPage.css";

const exams = {
    TYT: {
        date: new Date("2025-06-15T10:00:00"),
        title: "TYT 2025'e Kalan Süre",
        lessons: ["Türkçe", "Matematik", "Fen", "Sosyal"],
        duration: "165 dk"
    },
    AYT: {
        date: new Date("2025-06-16T10:00:00"),
        title: "AYT 2025'e Kalan Süre",
        lessons: ["Mat-Geo", "Fizik", "Kimya", "Biyoloji", "Edebiyat", "Coğrafya"],
        duration: "180 dk"
    },
    YDT: {
        date: new Date("2025-06-17T15:00:00"),
        title: "YDT 2025'e Kalan Süre",
        lessons: ["İngilizce", "Dil Bilgisi", "Paragraf"],
        duration: "120 dk"
    }
};

const SinavlarPage = () => {
    const [selectedExam, setSelectedExam] = useState("TYT");
    const [timeLeft, setTimeLeft] = useState({});

    const calculateTimeLeft = (target) => {
        const now = new Date();
        const diff = target - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        return { days, hours, minutes, seconds };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(exams[selectedExam].date));
        }, 1000);
        return () => clearInterval(interval);
    }, [selectedExam]);

    const { title, lessons, duration } = exams[selectedExam];

    return (
        <div className="yks-container">
            <div className="exam-tabs">
                {Object.keys(exams).map((exam) => (
                    <button
                        key={exam}
                        className={`tab-button ${selectedExam === exam ? "active" : ""}`}
                        onClick={() => setSelectedExam(exam)}
                    >
                        {exam}
                    </button>
                ))}
            </div>

            <h1 className="yks-title">{title}</h1>

            <div className="countdown-grid">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div className="countdown-box" key={unit}>
                        <div className="countdown-value animate">
                            {value < 10 ? `0${value}` : value}
                        </div>
                        <div className="countdown-label">
                            {unit === "days"
                                ? "Gün"
                                : unit === "hours"
                                    ? "Saat"
                                    : unit === "minutes"
                                        ? "Dakika"
                                        : "Saniye"}
                        </div>
                    </div>
                ))}
            </div>

            <div className="exam-info">
                <h3>Dersler:</h3>
                <ul>
                    {lessons.map((lesson, i) => (
                        <li key={i}>{lesson}</li>
                    ))}
                </ul>
                <p>
                    <strong>Sınav Süresi:</strong> {duration}
                </p>
            </div>
        </div>
    );
};

export default SinavlarPage;

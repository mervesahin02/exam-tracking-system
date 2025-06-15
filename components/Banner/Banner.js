import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./Banner.css";
import arrowImg from "./arrow.png";
import Banner1Animated from "./Banner1Animated";
import Banner2Animated from "./Banner2Animated";
import Banner3Animated from "./Banner3Animated";

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? 2 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
    };

    // ✅ Swipe handler
    const handlers = useSwipeable({
        onSwipedLeft: () => goToNext(),
        onSwipedRight: () => goToPrev(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    // ✅ 7 saniyede bir otomatik geçiş
    useEffect(() => {
        const interval = setInterval(goToNext, 7000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const renderBanner = () => {
        if (currentIndex === 0) return <Banner1Animated />;
        if (currentIndex === 1) return <Banner2Animated />;
        return <Banner3Animated />;
    };

    return (
        <div className="slider-container" {...handlers}>
            <div className="slider-wrapper">
                {renderBanner()}


                <div className="dots">
                    {[0, 1, 2].map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;

import React from "react";
import "./ForgotPasswordPage.css";
import ForgotImage from "./sifremiutnuttum.jpg";  // küçük e-posta görseli (isteğe bağlı)

const ForgotPasswordPage = () => {
    return (
        <div className="forgot-container">
            <div className="forgot-left">
                <img src={ForgotImage} alt="Şifre Sıfırlama" />
            </div>
            <div className="forgot-right">
                <h2>Şifremi Unuttum</h2>
                <p className="forgot-desc">
                    Lütfen e-posta adresinizi girin. Şifre sıfırlama bağlantısı size gönderilecektir.
                </p>
                <input type="email" placeholder="E-posta adresiniz" />
                <button className="forgot-button">Şifre Sıfırlama Bağlantısı Gönder</button>
                <p className="forgot-back">
                    <a href="/login">Giriş Sayfasına Dön</a>
                </p>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;

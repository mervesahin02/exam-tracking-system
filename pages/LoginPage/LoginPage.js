import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import LoginIllustration from "./girisyap.jpg"; // yeşil görsel (2. görsel)

const LoginPage = () => {
    return (
        <div className="login-container">
            <div className="login-left">
                <img src={LoginIllustration} alt="Login Illustration" />
            </div>
            <div className="login-right">
                <h2 className="login-title">Giriş Yap</h2>
                <input type="text" placeholder="Kullanıcı Adı veya Email" />
                <input type="password" placeholder="Şifre" />
                <button className="login-button">Giriş Yap</button>
                <div className="login-links">
                    <Link to="/forgot">Şifremi Unuttum</Link>
                    <Link to="/register">Hesabın yok mu? Kayıt Ol</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

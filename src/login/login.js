import { useState } from "react";
import { motion } from "framer-motion";
import './style.css'; 

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="login-container bg-gradient">
      <div className="form-card">
        <motion.img 
          src="/logoboite.png" 
          alt="Logo" 
          className="logo1"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        />
        <h2>Connexion</h2>
        <input
          type="text"
          placeholder="Email"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="input-field"
        />
        <motion.div whileTap={{ scale: 0.95 }}>
          <button
            className="login-button1"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </motion.div>
        <a href="/forgot-password" className="forgot-password-link">
          Mot de passe oublié ?
        </a>
      </div>
    </div>
  );
}

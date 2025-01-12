import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaHome, FaBox, FaConciergeBell, FaSearch, FaUser, FaUserPlus, FaShoppingCart, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-info">
          <h4><FaPhone className="icon-phone" /> Téléphone</h4>
          <span>0655482684</span>

          <h4><FaEnvelope className="icon-email" /> Email</h4>
          <span>OrgaSoace@gmail.com</span>

          <h4><FaClock className="icon-clock" /> Horaires</h4>
          <span>Du Lundi au Vendredi De 8h à 12h de 14h à 18h</span>

          <h1><FaMapMarkerAlt className="icon-address" /> Adresse :</h1>
          <span>3537 route du Ansalouse, 57686 Aire sur Oujda</span>
        </div>
          
        <div className="footer-logo">
          <h1 className="logo-text">OrgaSpace</h1>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-navigation">
          <h1> NAVIGATION</h1>
          <Link to='Acceuil'><FaHome className="icon-link" /> Accueil</Link>
          <Link to='Nos produits'><FaBox className="icon-link" /> Nos produits</Link>
          <Link to='Nos Réalisation'><FaConciergeBell className="icon-link" /> Nos Réalisation</Link>
          <Link to='Nos techniques'><FaSearch className="icon-link" /> Nos techniques</Link>
          <Link to='A Propos'><FaUser className="icon-link" /> A Propos</Link>
          <Link to='Contact'><FaPhone className="icon-link" /> Contact</Link>
          <Link to='Politique'><FaUserPlus className="icon-link" /> Politique De Confidentialité</Link>
        </div>

        <div className="footer-guide">
          <h1> Guide d'achat</h1>
          <Link to='Créer un Compte'><FaUserPlus className="icon-link" /> Créer un Compte</Link>
          <Link to='Paiments'><FaShoppingCart className="icon-link" /> Paiments</Link>
        </div>

        <div className="footer-products">
          <h1> NOS PRODUITS</h1>
          <Link to='Matériel'><FaBox className="icon-link" /> Matériel</Link>
          <Link to='Petits Matériel'><FaBox className="icon-link" /> Petits Matériel</Link>
          <Link to='Consommables'><FaBox className="icon-link" /> Consommables</Link>
          <Link to='Les boite'><FaBox className="icon-link" /> Les boite</Link>
          <Link to='Shop pay'><FaShoppingCart className="icon-link" /> Shop Pay</Link>
          <Link to='Shop'><FaShoppingCart className="icon-link" /> Shop</Link>
        </div>
      </div>

      <div className="footer-social">
        <h1> Suivez-nous sur:</h1>
        <Link to='https://facebook.com'><FaFacebook className="icon-link" /></Link>
        <Link to='https://instagram.com'><FaInstagram className="icon-link" /></Link>
        <Link to='https://whatsapp.com'><FaWhatsapp className="icon-link" /></Link>
      </div>
      <div>
      <p className='copy'>&copy; 2025 OrgaSpace. Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default Footer;

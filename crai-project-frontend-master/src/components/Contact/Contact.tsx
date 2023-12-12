import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { Campus } from '../../interfaces/Campus';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import craiLogo from '../../assets/crai-logo.png';


const Contact = () => {
    
    return (
        <>
        <Header />
        <div className="contact-container">
        <img src={craiLogo} alt="CRAI UNITEC Logo" className="crai-logo" />
      <h1>Contacto</h1>
      <div className="contact-info">
        <p>Email: example@example.com</p>
        
        <p>Teléfono: +123456789</p>
        
        <p>Redes Sociales:</p>
        
        <ul>
          <li><a href="https://twitter.com/ejemplo" target="_blank" rel="noopener noreferrer">Twitter</a></li>

          <li><a href="https://facebook.com/ejemplo" target="_blank" rel="noopener noreferrer">Facebook</a></li>

          <li><a href="https://linkedin.com/in/ejemplo" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          
        </ul>
        <p>WhatsApp: +123456789</p>
      </div>
    </div>
  
        </>
        );
    };

export default Contact;
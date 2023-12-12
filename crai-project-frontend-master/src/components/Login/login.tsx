import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="icon-container">
          <img src="ruta/a/tu/icono-de-libros.png" alt="Icono de Libros" />
        </div>
        <h1>CRAI Login</h1>
        <form>
          {/* Agrega tus campos de entrada, botón de enviar, etc. aquí */}
        </form>
      </div>
    </div>
  );
};

export default Login;

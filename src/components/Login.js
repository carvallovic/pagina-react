import React, { useState } from 'react';

const DOMINIOS = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setMensaje('');

    if (!DOMINIOS.test(correo.trim())) {
      setError('El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com');
      return;
    }

    if (contrasena.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Contraseña universal de pruebas, igual que en JSADMIN.js del sitio original
    if (contrasena !== '123456') {
      setError('Correo o contraseña incorrectos');
      return;
    }

    setMensaje('Inicio de sesión correcto');
  };

  return (
    <main>
      <div className="login-card">
        <h2>Iniciar Sesión</h2>

        <form id="formLogin" className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="correo">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="correo@ejemplo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="••••••••"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: '#b00020', margin: 0 }}>{error}</p>}
          {mensaje && <p style={{ color: '#1b7a2f', margin: 0 }}>{mensaje}</p>}

          <button type="submit" className="btn-submit-login">INGRESAR</button>
        </form>

        <p className="login-help-link">
          <a href="#/contacto">¿Olvidaste tu contraseña o necesitas ayuda?</a>
        </p>
      </div>
    </main>
  );
};

export default Login;
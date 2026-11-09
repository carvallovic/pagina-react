const Registro = () => {
  return (
    <main>
      <section>
        <h2>Registro de usuario</h2>
        <p>
          Crea una cuenta para acceder a las funcionalidades de
          Construcciones Montero.
        </p>

        <form id="formRegistro">
          <label htmlFor="nombreRegistro">Nombre:</label>
          <input
            type="text"
            id="nombreRegistro"
            name="nombre"
            maxLength="100"
            autoComplete="name"
            required
          />
          <p id="errorNombreRegistro"></p>

          <label htmlFor="correoRegistro">Correo:</label>
          <input
            type="email"
            id="correoRegistro"
            name="correo"
            maxLength="100"
            autoComplete="email"
            required
          />
          <p id="errorCorreoRegistro"></p>

          <label htmlFor="passwordRegistro">Contraseña:</label>
          <input
            type="password"
            id="passwordRegistro"
            name="contrasena"
            maxLength="50"
            autoComplete="new-password"
            required
          />
          <p id="errorPasswordRegistro"></p>

          <label htmlFor="confirmarPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmarPassword"
            name="confirmarContrasena"
            maxLength="50"
            autoComplete="new-password"
            required
          />
          <p id="errorConfirmarPassword"></p>

          <button type="submit">Registrarse</button>
          <p id="mensajeRegistro"></p>
        </form>
      </section>
    </main>
  );
};

export default Registro;
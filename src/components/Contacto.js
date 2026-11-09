import logo from '../img/LOGO.png';

const Contacto = () => {
  return (
<main>
    <section>
        
        <img id="logo" src={logo} alt="Logo Construcciones Montero" />

        <h2>Contáctanos</h2>


        <p>
        ¿Tienes un proyecto en mente o necesitas realizar una reparación
        en tu hogar? Estamos disponibles para conocer tu idea y ayudarte.
        </p>


        <h3>Solicita información</h3>


        <p>
        Puedes comunicarte con nosotros para consultar por nuestros servicios,
        cotizar un trabajo o resolver tus dudas.
        </p>


        <p>
        <strong>Teléfono:</strong> +56 9 72549922
        </p>


        <p>
        <strong>Correo:</strong> construccionesmontero@gmail.com
        </p>


        <p>
        <strong>Horario de atención:</strong> Lunes a viernes, de 09:00 a 18:00 hrs.
        </p>


        <h3>Formulario de contacto</h3>


        <form id="formulario">

            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" maxLength="100" autoComplete="name" />
            <p id="errorNombre"></p>


            <label for="correo">Correo:</label>
            <input type="text" id="correo" maxLength="100" autoComplete="email" />
            <p id="errorCorreo"></p>


            <label for="telefono">Teléfono:</label>
            <input type="text" id="telefono" autoComplete="tel" />
            <p id="errorTelefono"></p>


            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" maxlength="500"></textarea>
            <p id="errorMensaje"></p>


            <button type="submit">Enviar</button>

            <p id="mensajeEnviado"></p>

        </form>


    </section>

</main>
  );
};

export default Contacto;
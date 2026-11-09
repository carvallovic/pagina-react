import construccion from '../img/Construccion.png';
import tabiqueria from '../img/Tabiqueria.png';
import ceramica from '../img/Ceramica.png';
import mantenciones from '../img/Mantenciones.png';

const Servicios = () => {
  return (
    <main>
      <section>
        <h2>Nuestros servicios</h2>

        <p>
          Conoce los principales servicios que ofrecemos para proyectos de construcción,
          ampliación y mantención del hogar.
        </p>

        <div className="servicios">
          <article className="caja-servicio">
            <img className="servicio" src={construccion} alt="Construcción y ampliaciones" />
            <h3><a href="detalles.html?servicio=construccion">Construcción y ampliaciones</a></h3>
            <p>
              Realizamos construcciones y ampliaciones adaptadas a las necesidades
              de cada proyecto.
            </p>
            <p>
              <strong>Valor referencial:</strong> Desde $500.000
            </p>
            <button className="boton-servicio" data-servicio="Construcción y ampliaciones">
              Agregar a cotización
            </button>
          </article>

          <article className="caja-servicio">
            <img className="servicio" src={tabiqueria} alt="Instalación de tabiquería" />
            <h3><a href="detalles.html?servicio=tabiqueria">Tabiquería</a></h3>
            <p>
              Instalación de tabiquería para dividir y aprovechar mejor los espacios
              interiores del hogar.
            </p>
            <p>
              <strong>Valor referencial:</strong> Desde $150.000
            </p>
            <button className="boton-servicio" data-servicio="Tabiquería">
              Agregar a cotización
            </button>
          </article>

          <article className="caja-servicio">
            <img className="servicio" src={ceramica} alt="Instalación de cerámicas" />
            <h3><a href="detalles.html?servicio=ceramicas">Instalación de cerámicas</a></h3>
            <p>
              Instalación de cerámicas y revestimientos para distintos espacios
              del hogar.
            </p>
            <p>
              <strong>Valor referencial:</strong> Desde $120.000
            </p>
            <button className="boton-servicio" data-servicio="Instalación de cerámicas">
              Agregar a cotización
            </button>
          </article>

          <article className="caja-servicio">
            <img className="servicio" src={mantenciones} alt="Mantenciones del hogar" />
            <h3><a href="detalles.html?servicio=mantenciones">Mantenciones del hogar</a></h3>
            <p>
              Realizamos reparaciones y trabajos de mantención para conservar
              tu hogar en buenas condiciones.
            </p>
            <p>
              <strong>Valor referencial:</strong> Desde $80.000
            </p>
            <button className="boton-servicio" data-servicio="Mantenciones del hogar">
              Agregar a cotización
            </button>
          </article>
        </div>

        <p>
          <strong>Importante:</strong> Los valores mostrados son referenciales.
          El precio final dependerá de las características, dimensiones y materiales
          de cada proyecto.
        </p>
      </section>
    </main>
  );
};

export default Servicios;
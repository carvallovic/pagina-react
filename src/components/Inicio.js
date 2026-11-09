import React, { useState, useEffect } from 'react';
import video from '../video/construccion.mp4';
import construccion from '../img/Construccion.png';
import tabiqueria from '../img/Tabiqueria.png';
import ceramica from '../img/Ceramica.png';
import mantenciones from '../img/Mantenciones.png';

const servicios = [
  { nombre: 'Construcción y ampliaciones', imagen: construccion },
  { nombre: 'Tabiquería', imagen: tabiqueria },
  { nombre: 'Instalación de cerámicas', imagen: ceramica },
  { nombre: 'Mantenciones del hogar', imagen: mantenciones },
];

const Carrusel = () => {
  const [posicion, setPosicion] = useState(0);
  const [moviendo, setMoviendo] = useState(false);

  useEffect(() => {
    let temporizador;
    const intervalo = setInterval(() => {
      setMoviendo(true);
      temporizador = setTimeout(() => {
        setPosicion((p) => (p + 1) % servicios.length);
        setMoviendo(false);
      }, 1000);
    }, 4000);

    return () => {
      clearInterval(intervalo);
      clearTimeout(temporizador);
    };
  }, []);

  const siguiente = (posicion + 1) % servicios.length;

  const estiloActual = moviendo
    ? { transform: 'translateX(-100%)', opacity: 0 }
    : { transition: 'none' };

  const estiloNueva = moviendo
    ? { transform: 'translateX(0)', opacity: 1 }
    : { transition: 'none' };

  return (
    <div className="carrusel">
      <div className="contenedor-imagen">
        <img
          id="imagenActual"
          src={servicios[posicion].imagen}
          alt={servicios[posicion].nombre}
          style={estiloActual}
        />
        <img
          id="imagenNueva"
          src={servicios[siguiente].imagen}
          alt={servicios[siguiente].nombre}
          style={estiloNueva}
        />
      </div>
      <h3 id="nombreServicio">{servicios[posicion].nombre}</h3>
    </div>
  );
};

const Inicio = () => {
  return (
    <main>
      <h2>Conoce nuestro trabajo</h2>

      <div style={{ textAlign: 'center' }}>
        <video className="video-construccion" autoPlay muted loop controls>
          <source src={video} type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
      </div>

      <section>
        <h2>Construcción y mantención para tu hogar</h2>
        <p>
          Cada espacio tiene el potencial de convertirse en algo mejor.
          En Construcciones Montero hacemos realidad tus proyectos,
          cuidando cada detalle desde el inicio hasta el resultado final.
        </p>

        <h3>Compromiso en cada proyecto</h3>
        <p>
          Trabajamos con responsabilidad y atención a los detalles, buscando
          entregar soluciones funcionales y de calidad.
        </p>
      </section>

      <section>
        <h2>Nuestros servicios</h2>
        <Carrusel />
      </section>
    </main>
  );
};

export default Inicio;
import { Container } from 'react-bootstrap';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Login from './components/Login';
import Servicios from './components/Servicios';

const EnConstruccion = () => (
  <main>
    <section>
      <h2>Página en construcción</h2>
      <p>Esta página todavía no se ha convertido a React.</p>
    </section>
  </main>
);

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/login" element={<Login />} />            
            <Route path="/servicios" element={<Servicios />} />
            <Route path="*" element={<EnConstruccion />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
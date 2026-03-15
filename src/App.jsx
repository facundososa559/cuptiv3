import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer/Footer'
import Renovables from './pages/Renovables'
import Efficiency from './pages/Efficiency'
import Industrial from './pages/Industrial'
import NavBar from './components/Navigation/NavBar'
import Home from './pages/Home'
import ContactContainer from './components/Contact/ContactContainer'
import Calculator from "./pages/Calculator/Calculator"
import BlogArticle from "./pages/BlogArticle"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/energias-renovables" element={<Renovables />} />
          <Route path="/eficiencia-energetica" element={<Efficiency />} />
          <Route path="/ingenieria-industrial" element={<Industrial />} />
          <Route path="/calculadora" element={<Calculator />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
        </Routes>
        <ContactContainer
          title="En CUPTI hacemos proyectos a la medida de tus necesidades."
          description="Por consultas sobre nuestros servicios, productos o presupuestos no dudes en ponerte en contacto con nosotros a través del formulario, vía mail o por teléfono."
        />
        <Footer />
      </Router>
    </>
  )
}

export default App

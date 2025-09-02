import Navbar from "./navbar";
import Hero from "./hero";
import Seccion01 from "./seccion01";
import Marcas from "./marcas";
import Dormitorio from "./dormitorio";
import Calidad from "./calidad";
import Contacto from "./contacto";
import Footer from "./footer";
import WhatsAppButton from "./whatsapp";
import Beneficios from "./beneficios";
import Categorias from "./categorias";
import Testimonios from "./testimonios";
import Proceso from "./proceso";
import Galeria from "./galeria";
import FAQ from "./faq";
import Materiales from "./materiales";
import Nosotros from "./nosotros";
import Mapa from "./mapa";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Seccion01 />
      <Materiales />
      <Dormitorio />
      <Calidad />
      <Contacto />
      
      <Proceso />
       <Testimonios />
       <Categorias />
       <Galeria />
      <Beneficios />
      <Nosotros />
      <Mapa />
      <FAQ />
     
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

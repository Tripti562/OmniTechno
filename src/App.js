import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Career from './Career';
import Services from './Services';
import Testimonials from './Testimonials';
import FooterA from './FooterA';
import FooterB from './FooterB';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      
      <Services></Services>
      <Career></Career>
      <Testimonials></Testimonials>
      <FooterA></FooterA>
      <FooterB></FooterB>
    </div>
  );
}

export default App;

function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".menu");
  menu.classList.toggle("show");
  icon.classList.toggle("show");
}

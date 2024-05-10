import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Career from './Career';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Career></Career>
      <Services></Services>
    </div>
  );
}

export default App;

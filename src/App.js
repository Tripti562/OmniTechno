import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Career from './Career';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Career></Career>
    </div>
  );
}

export default App;

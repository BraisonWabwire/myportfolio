import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
      <Hero></Hero>
      <About></About>
      </main>
    </div>
  );
}

export default App;

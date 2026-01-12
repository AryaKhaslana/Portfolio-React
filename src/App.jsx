import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './sections/Skills';
import Product from './sections/Project'
import './styles/index.css'

function App() {

  return (
   <div className='App'>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Product/>
   </div>
  );
}

export default App;

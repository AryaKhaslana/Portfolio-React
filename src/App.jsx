import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './sections/Skills';
import './styles/index.css'

function App() {

  return (
   <div className='App'>
    <Navbar/>
    <Hero/>
    <Skills/>
   </div>
  );
}

export default App;

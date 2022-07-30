import './App.css';
import Shapka from './components/header/Header'
import Welcocme from './components/welcome/Welcome'
import About from './components/About/About.js'
import Work from './components/work/Work.js'
import Compec from './components/compec/Compec.js'
import Me from './components/me/Me.js'
import Footer from './components/footer/Footer.js'


import './components/header/Header.css'
import './components/welcome/Welcome.css'
import './components/About/About.css'
import './components/work/Work.css'
import './components/compec/Compec.css'
import './components/me/Me.css'
import './components/footer/Footer.css'

function App() {
  return (
    
    <div className="App">
      <Shapka/>
      <Welcocme/>
      <About/>
      <Work/>
      <Compec/>
      <Me/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css'
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Hailights from "./components/Hailights"
import HowItWorks from './components/Howitworks'
import Features from './components/Feature'
import Footer from './components/Footer'


function App() {


  return (
    <div className="flex flex-col gap-16">
      <Nav/>
      <Hero/>  
      <Hailights/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </div>
  )
}

export default App
         
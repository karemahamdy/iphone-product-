import './App.css'
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Hailights from "./components/Hailights"


function App() {


  return (
    <div className="flex flex-col gap-16">
      <Nav/>
      <Hero/>  
      <Hailights/>
    
    </div>
  )
}

export default App
         
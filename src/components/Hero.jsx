import heroVideo from "/assets/videos/hero.mp4"
import smallHeroVideo from "/assets/videos/smallHero.mp4"

function Hero() {

return(
  <>
  <section className="nav-height flex-center flex-col h-full">
  <div>
    <p className="hero-title">iPhone 15 Pro</p>
    <video muted autoPlay>
    <source src={heroVideo} type="video/mp4" />
    
    </video>
    </div>
    <div
        id="cta"
        className="opacity- 20  flex flex-col items-center ">
        <a href="#highlights" className="btn ">Buy</a>
        <p className="mt-4">From $199/month or $999</p>
    </div>
  </section>
  </>
)
}
export default Hero
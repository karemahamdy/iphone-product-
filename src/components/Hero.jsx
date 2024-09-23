import { useState } from "react"
import heroVideo from "/assets/videos/hero.mp4"
import smallHeroVideo from "/assets/videos/smallHero.mp4"
import { useEffect } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Hero() {
const [videoSrc , setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

 function handleVideoSrc() {
window.innerWidth < 760 ? setVideoSrc(smallHeroVideo) : setVideoSrc(heroVideo)
}

useEffect(() => {

  window.addEventListener('resize', handleVideoSrc);

  return () => {
    window.removeEventListener('reisze', handleVideoSrc)
  }
} ,[] )

useGSAP(() => {
  gsap.to('#hero', { opacity: 1, delay: 2 })
  gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
}, [])

return(
  <>
  <section className="nav-height flex-center flex-col h-full">
  <div>
    <p id="hero" className="hero-title opacity-0">iPhone 15 Pro</p>
    <video muted autoPlay>
    <source src={videoSrc} type="video/mp4" />
    
    </video>
    </div>
    <div
        id="cta"
        className="opacity-0 20  flex flex-col items-center ">
        <a href="#highlights" className="btn ">Buy</a>
        <p className="mt-4">From $199/month or $999</p>
    </div>
  </section>
  </>
)
}
export default Hero
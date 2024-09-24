import  watchImg from "/assets/images/watch.svg"
import  rightImg from "/assets/images/right.svg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import VedioCarousel from "./VedioCarousel"

function Hailights() {

  useGSAP(() => {
    gsap.to('#link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
    gsap.to('#title', { opacity: 1, y: 0, delay: 1 })
  }, [])

  return (
    <section className=" bg-zinc-950">
      <div className="mx-24 my-8 mt-5 flex-box m-7">
        <h1 className="section-heading" id="title">Get the highlights.</h1>

        <div className="flex flex-wrap items-end  gap-5" >
          <p className="link" id="link">
            Watch the film
            <img src={watchImg} alt="watch"  className="ml-2"/>
          </p>
          <p className="link" id="link">
            Watch the event 
            <img src={rightImg} alt="watch" className="ml-2"/>
          </p>
        </div>

      </div>
        <VedioCarousel/>
    </section>
  )

}

export default Hailights
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


function Features() {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#title",
        toggleActions: 'reverse restart  reverse restart',
        start: 'top 85%',
        markers: true,
      }
    });
  });
  
  return (
    <>
    <section className="">
    <div className="mx-24 my-8 mt-5  m-7">
      <h1 id="title" className="section-heading">Explore the full story.
      </h1>
      </div>
      <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
          </div>
          </div>
    </section>
    </>
  )}

  export default Features
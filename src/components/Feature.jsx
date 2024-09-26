import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from 'react';
import exploreVideo from "/assets/videos/explore.mp4";
import explore1 from "/assets/images/explore1.jpg";
import explore2 from "/assets/images/explore2.jpg";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const videoRef = useRef();

  useEffect(() => {
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    });

    gsap.to(".title-animation", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".title-animation",
        toggleActions: 'reverse restart reverse restart',
        start: 'top 85%',
      }
    });

    gsap.to(".img-animation", {
      scale: 1,
      opacity: 1,
      ease: 'power1',
      scrollTrigger: {
        trigger: ".img-animation",
        toggleActions: 'reverse restart reverse restart',
        start: 'top 85%',
        scrub: 5.5,
      }
    });
  }, []);

  return (
    <section className="">
      <div className="mx-24 my-8 mt-5 m-7">
        <h1 className="section-heading title-animation">Explore the full story.</h1>
      </div>

      <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="mt-32 mb-24 pl-24">
          <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
          <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
        </div>
      </div>

      <div className="flex justify-center flex-col">
        <div className="flex justify-center items-center px-24 w-[75vw] h-[50] relative left-[14%]">
          <video playsInline muted preload="none" autoPlay ref={videoRef} className="object-center">
            <source src={exploreVideo} type="video/mp4" />
          </video>
        </div>

        <div className="flex justify-center items-center px-24 w-[75vw] h-[50] relative left-[14%]">
          <div className="overflow-hidden flex-1 h-[39vh] mr-4">
            <img src={explore1} alt="titanium 2" className="feature-video scale-150 opacity-0 img-animation" />
          </div>
          <div className="overflow-hidden flex-1">
            <img src={explore2} alt="titanium" className="feature-video scale-150 opacity-0 img-animation" />
          </div>
        </div>
      </div>

      <div className="feature-text-container">
        <div className="flex-1 flex-center">
          <p className="feature-text title-animation">
            iPhone 15 Pro is {' '}
            <span className="text-white">
              the first iPhone to feature an aerospace-grade titanium design
            </span>,
            using the same alloy that spacecrafts use for missions to Mars.
          </p>
        </div>

        <div className="flex-1 flex-center">
          <p className="feature-text title-animation">
            Titanium has one of the best strength-to-weight ratios of any metal, making these our {''}
            <span className="text-white">
              lightest Pro models ever.
            </span>
            You ll notice the difference the moment you pick one up.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;

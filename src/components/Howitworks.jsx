import  { useRef } from 'react'
import chipImg from "/assets/images/chip.jpeg";
import frame from "/assets/images/frame.png";
import framemv from "/assets/videos/frame.mp4";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="mx-24 my-8 mt-5 ">
      <div className="screen-max-width">
        <div id="chip" className="flex justify-center items-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className=" text-4xl md:text-7xl font-semibold text-center">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className=" text-gray-600 font-semibold text-xl md:text-2xl py-10 text-center">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex justify-center items-center">
            <div className="overflow-hidden">
              <img 
                src={frame}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className=" absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={framemv} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray-400 font-semibold text-center mt-3">Honkai: Star Rail</p>
          </div>
            </div>
    </section>
  )
}

export default HowItWorks 
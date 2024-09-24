import  watchImg from "/assets/images/watch.svg"
import  rightImg from "/assets/images/right.svg"


function Hailights() {
  return (
    <section className="mx-24 my-8 mt-5 bg-zinc-950">
      <div className=" flex-box m-7">
        <h1 className="section-heading">Get the highlights.</h1>

        <div className="flex flex-wrap items-end  gap-5">
          <p className="link">
            Watch the film
            <img src={watchImg} alt="watch"  className="ml-2"/>
          </p>
          <p className="link">
            Watch the event 
            <img src={rightImg} alt="watch" className="ml-2"/>
          </p>
        </div>

      </div>
    </section>
  )

}

export default Hailights
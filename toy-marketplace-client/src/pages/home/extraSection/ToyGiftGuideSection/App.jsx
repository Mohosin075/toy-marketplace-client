
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}
const animation = { duration: 20000, easing: (t) => t }
export default function App() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
      created(s) {
        s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
    },
    [carousel]
  )

  return (
    <div className="py-16 w-full flex flex-col  bg-base-200 w-fit justify-center items-center ">
      <div className="text-center">
      <h2 className="text-2xl md:text-5xl mb-5  font-semibold">Animal Toy Accessories</h2>
      <p className="text-xs md:text-sm px-4 md:w-2/3 mx-auto mb-8 md: md:mb-16">Are you a passionate animal lover? Do you enjoy collecting animal toys or playing with them? If so, we have exciting news for you! We are thrilled to present a wide range of animal toy accessories that will take your playtime experience to the next level. Whether youre a child or an adult, these accessories are designed to add fun, creativity, and realism to your animal toy collection. Lets explore some of the fantastic options available:</p>
      </div>
      <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1  p-5">
            <img src="https://i.ibb.co/0Yyq9Hz/gggal.jpg" className=" rounded-xl h-full w-full" alt="" />
          </div>
          <div className="carousel__cell number-slide2 p-5">
            <img src="https://i.ibb.co/5F59ZGZ/acc.jpg" className=" rounded-xl h-full w-full" alt="" />
          </div>
          <div className="carousel__cell number-slide3 p-5">
            <img src="https://i.ibb.co/Rby9x43/acc2.jpg" className=" rounded-xl h-full w-full" alt="" />
          </div>
          <div className="carousel__cell number-slide4 p-5">
            <img src="https://i.ibb.co/qYBmJK8/acc3.jpghttps://i.ibb.co/XY9DGD4/acc4.jpg" className=" rounded-xl h-full w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

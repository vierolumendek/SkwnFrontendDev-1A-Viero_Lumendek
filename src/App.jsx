import Button from "./components/reusable/Button"
import Navbar from "./components/reusable/Navbar"
import { IoSearch } from "react-icons/io5"
import { FaRegPlayCircle } from "react-icons/fa"
import { TbBriefcase2 } from "react-icons/tb"
import { PiNumberFiveBold } from "react-icons/pi"
import Footer from "./components/reusable/Footer"
import { MdOutlineMailOutline } from "react-icons/md"
import { useEffect, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const products = [
  {
    id: 1,
    name: "Und Chair",
    price: "$329",
    image: "/img/und-chair.png",
  },
  {
    id: 2,
    name: "Comfort Sofa",
    price: "$549",
    image: "/img/sofa-und.png",
  },
  {
    id: 3,
    name: "Minimalist Table",
    price: "$299",
    image: "/img/minimalist-table.png",
  },
  {
    id: 4,
    name: "Wooden Shelf",
    price: "$199",
    image: "/img/wooden-shelf.png",
  },
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  const visibleProducts = () => {
    const result = []

    if( window.innerWidth > 678 ) {
      const prevIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1
      result.push(products[prevIndex])
    }

    result.push(products[currentIndex])

    const nextIndex = (currentIndex + 1) % products.length
    result.push(products[nextIndex])

    return result
  }

  const prevProduct = () => {
    if (isAnimating) return

    setDirection("right")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1))
    }, 300)
  }

  const nextProduct = () => {
    if (isAnimating) return

    setDirection("left")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 300)
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    <main className="min-w-full scroll-smooth">
      <Navbar />
      <section className="grid lg:grid-cols-3">
        <div className="space-y-5 w-full h-fit flex-4 max-w-5xl grid lg:place-self-center my-10 lg:col-span-2">
          <h1 className="font-bold text-center text-3xl text-primary lg:text-start lg:text-7xl">The kind of <span className="text-accent">furniture</span> you have been looking for</h1>
          <div className="grid place-items-center gap-4 lg:flex lg:items-center mt-4">
            <Button
              variant="secondary"
              size="xl"
              icon={<IoSearch />}
              className="w-fit"
            >
              SEARCH CATALOG
            </Button>
            <Button
              variant="outline"
              size="xl"
              icon={<FaRegPlayCircle />}
              className="w-fit"
            >
              WATCH VIDEO
            </Button>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url('/img/sofa.png')" }}
          // className="flex flex-col bg-accent justify-between p-5 text-white flex-1 w-[380px] h-[233px] bg-size-[100%] bg-center bg-no-repeat place-self-center lg:w-[522px] lg:h-[709px] lg:justify-end"
          className="space-y-5 flex flex-col bg-accent justify-between p-5 text-white flex-1 w-full h-full bg-size-[100%] bg-center bg-no-repeat place-self-center lg:h-[709px] lg:justify-end"
        >
          <h1 className="block lg:hidden">HIGHLIGHTED PRODUCT</h1>
          <div className="space-y-3">
            <span className="bg-white/60 text-sm py-1 px-2 text-primary rounded-lg lg:text-2xl">$329</span>
            <h1 className="text-2xl lg:text-6xl">Pösht Sofa</h1>
            <Button
              size="lg"
              className="text-white font-normal"
            >
              VIEW Details &gt;
            </Button>
          </div>
          {/* <img src="/img/sofa.png" alt="Hero" className="max-w-full h-full object-cover object-center aspect-video lg:aspect-auto" /> */}
        </div>
      </section>

      <section className="space-y-5 flex flex-col justify-center items-center bg-primary text-secondary py-10 px-5 lg:py-20 lg:items-baseline lg:px-36">
        <p>WHY CHOOSE US?</p>
        <h1 className="font-bold text-2xl text-center lg:text-6xl lg:text-start">We care about details and the quality of our products</h1>
        <ul className="grid lg:flex lg:items-center lg:justify-around w-full gap-4 mt-10">
          <li className="flex items-center gap-5 my-5">
            <span className="bg-secondary/70 text-white p-3 rounded-lg">
              <IoSearch />
            </span>
            <p className="font-bold text-2xl">MANUFACTURED WITH QUALITY MATERIALS</p>
          </li>
          <li className="flex items-center gap-5 my-5">
            <span className="bg-secondary/70 aspect-square font-semibold text-white p-3 rounded-lg">
              <PiNumberFiveBold />
            </span>
            <p className="font-bold text-2xl">5 YEARS OF WARRANTY FOR EACH PRODUCT</p>
          </li>
          <li className="flex items-center gap-5 my-5">
            <span className="bg-secondary/70 text-white p-3 rounded-lg">
              <TbBriefcase2 />
            </span>
            <p className="font-bold text-2xl">20 YEARS OF EXPERTISE</p>
          </li>
        </ul>
      </section>

      <section className="space-y-5 w-full flex flex-col place-items-center bg-[#FCFAFA] py-10 px-5 lg:justify-between lg:py-20 lg:flex-row lg:px-36">
        <div>
          <h3 className="text-primary font-bold text-center text-2xl lg:text-start lg:text-8xl">25+</h3>
          <p className="text-sm lg:text-2xl">PARTNERED BRANDS</p>
        </div>
        {/* <div className="max-w-screen flex flex-1 justify-around gap-8 lg:gap-20 *:w-auto"> */}
        <div className="min-w-10/12 grid grid-cols-4 place-items-center gap-8">
          <img
            src="/img/gusto.png"
            alt="Gusto"
            className="w-20 lg:w-32"
          />
          <img
            src="/img/stripe.png"
            alt="Stripe"
            className="w-20 lg:w-32"
          />
          <img
            src="/img/treehouse.png"
            alt="Treehouse"
            className="w-20 lg:w-32"
          />
          <img
            src="/img/upwork.png"
            alt="Upwork"
            className="w-20 lg:w-32"
          />
        </div>
      </section>

      <section className="space-y-5 grid py-10 px-5 lg:flex lg:py-20 lg:items-center lg:gap-12 lg:px-36">
        <div className="space-y-5 max-w-[300px] place-self-center flex flex-col gap-5 order-1 text-primary lg:order-2">
          <div className="space-y-5 text-center lg:text-start">
            <p className="text-sm lg:text-2xl">Categories</p>
            <h1 className="text-lg font-bold lg:text-5xl">Furnitures Sets Recomendations</h1>
          </div>
          <div className="flex flex-col gap-5 bg-[#FCFAFA] rounded-lg">
            <p className="justify-center text-lg p-5 font-bold">Bedroom</p>
            <div className="bg-secondary p-5">
              <h1 className="text-lg font-bold mb-3">Living Room</h1>
              <p>Enjoy a great living room aesthetics with your family  Designs created for increased comfortability</p>
            </div>
            <p className="justify-center text-lg p-5 font-bold">Home Office</p>
            <p className="justify-center text-lg p-5 font-bold">Gaming Room</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 flex-1 order-2 lg:order-1 lg:grid-cols-4">
          <img src="/img/livingroom1.png" alt="" className="w-full h-full object-center object-cover rounded-lg" />
          <img src="/img/livingroom2.png" alt="" className="w-full h-full object-center object-cover rounded-lg" />
          <img src="/img/livingroom3.png" alt="" className="w-full h-full object-center object-cover rounded-lg lg:col-span-2" />
        </div>
      </section>

      <section className="relative space-y-5 grid bg-primary py-10 px-5 lg:py-20 lg:px-36">
        <div className="flex justify-between items-center">
          <div className="text-secondary space-y-3">
            <p className="text-sm lg:text-2xl">OUR PRODUCTS</p>
            <h1 className="text-lg font-bold lg:text-5xl">This mounth's best seller</h1>
          </div>
          <Button
            variant="secondary"
            size={window.innerWidth < 768 ? "defult" : "lg"}
          >
            SEE MORE
          </Button>
        </div>
        <div className="flex overflow-x-hidden">
          {visibleProducts().map((product) => (
            <div
              style={{ backgroundImage: `url(${product.image})` }}
              key={product.id}
              className={`flex flex-col gap-5 p-3 justify-end bg-cover bg-center w-[192px] h-[256px] rounded-lg aspect-2/3 transition-all duration-300 lg:w-[354px] lg:h-[472px] ${product.id === products[currentIndex].id ? "" : "scale-80"}`}
            >
              {product.id === products[currentIndex].id && (
                <div className="flex flex-col gap-2 transition-all duration-300">
                  <span className="w-fit bg-white/60 text-sm py-1 px-2 text-primary rounded-lg lg:text-2xl">{product.price}</span>
                  <h1 className="text-2xl text-white lg:text-5xl">{product.name}</h1>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute w-full top-[50%] flex justify-between lg:justify-end lg:items-center lg:gap-3 lg:place-self-end lg:static">
          <Button
            variant="secondary"
            size="icon"
            rounded="full"
            onClick={prevProduct}
          >
              <IoIosArrowBack />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            rounded="full"
            onClick={nextProduct}
          >
              <IoIosArrowForward />
          </Button>
        </div>
      </section>

      <section className="space-y-5 w-full flex flex-col place-items-center text-primary bg-[#FCFAFA] py-10 px-5 lg:justify-around lg:place-items-baseline lg:py-20 lg:px-36">
        <p className="text-sm lg:text-2xl">LIMITED DEALS</p>
        <h1 className="font-bold text-lg text-center lg:text-6xl lg:text-start">Become a member and get 10% off of your first purchase</h1>
        <div className="flex w-full h-full ">
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full max-w-[800px] h-10 lg:h-16 px-5 rounded-l-lg bg-white placeholder:text-primary lg:placeholder:text-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            className="w-fit min-h-full bg-secondary p-3 rounded-e-lg lg:px-5 hover:bg-secondary/80 transition-all duration-300"
          >
            <MdOutlineMailOutline />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App

import Navbar from "../components/Navbar"
import Hero from "./Hero"

const Home = () => {
  return (
    <div>
      <div className="Home text-white h-[100vh]">
      <Navbar />
        <div className="relative top-20 p-10 pl-20">
        <h1 className="text-[6rem] font-bold">Stay Curious</h1>
        <p className="text-[1.5rem] font-semibold mt-3">Discover stories, thinking, and expertise <br /> from writers on any topic.</p>
        <div className="mt-10 mr-5">
          <button className="text-[1.2rem] border border-1 px-4 py-1">Get Started</button>
        </div>
      </div>
      </div>
      <Hero />
    </div>
  )
}

export default Home

import { CiSearch } from "react-icons/ci";
import Postlist from "../components/Postlist";

const Hero = () => {
  return (
    <div className="h-full w-full bg-[#ebebf983] p-20">
      <div>
      <h1 className="text-black font-bold text-5xl">Expanding Our Knowledge & <br/> Yours, One Blog at a Time</h1>
      <p className="text-[#67626f] text-xl font-medium mt-6">All the Latest news of Tech and Development and Many More.</p>
      </div>
      <div className="h-14 mt-[30px] w-[80vw] relative top-10 bg-white rounded-full drop-shadow-lg">
        <div className=" flex p-4 ml-8">
         <ul className="flex gap-14 text-[#57505c]">
          <button>All</button>
          <button>Development</button>
          <button>technologies</button>
          <button>Bussiness</button>
          <button>Digital Marketing</button>
         </ul>
         <div className=" relative ml-auto mt-[-5px]">
         <CiSearch className="absolute top-2 left-2 h-5 cursor-pointer" />
         <input type="text" placeholder="Search..." className="h-9 w-[20vw] px-6 bg-[#EFEFEF] outline-none rounded-full" />
         </div>
         </div>
      </div>
      <Postlist />
      
    </div>
  )
}

export default Hero

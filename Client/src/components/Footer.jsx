import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="relative p-10 drop-shadow-lg bg-slate-100">
        <div>
        <h1 className="font-bold text-[2rem]">Twix.</h1>
        <p className="text-[1rem] text-[#584565] font-semibold mt-3">Twix is a platform that provides
         you <br />  with the latest news from the world.<br /> Latest articles with several categories</p>
         </div>
         <div className="flex flex-col gap-2 mt-5">
            <h1 className="font-semibold text-[#584565] text-[1rem]">Follow us:</h1>
            <div>
               <ul className='flex gap-10'>
                <li><FaFacebookSquare className="h-8 w-6 cursor-pointer" /></li>
                <li><FaTwitter className="h-8 w-6 cursor-pointer" /></li>
                <li><RiInstagramFill className="h-8 w-6 cursor-pointer" /></li>
                <li><FaLinkedin className="h-8 w-6 cursor-pointer" /></li>
               </ul>
            </div>
         </div>
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  )
}

export default Footer
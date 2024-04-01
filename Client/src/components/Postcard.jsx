
/* eslint-disable react/prop-types */
const Postcard = ({category,title,image,description}) => {
      return (
    <div className="relative mt-10">     
        <div className=" relative h-[32vw] w-[24vw] bg-white drop-shadow-sm rounded-md hover:scale-[1.05] transition-all ease-in duration-[0.3s]">
         <div>
       <img src={image} alt=""className="object-cover rounded-t-lg h-[30vh] w-full " />
         </div>
         <div className="px-4 relative top-1">
         <h1 className="text-[#1D4ED8] font-medium">{category}</h1>
         <div>
          <h1 className="text-[1.1rem] font-medium leading-6">{title}</h1>
          <p className="text-[#7A6B85]">{description.slice(0,120)}</p>
         </div>
         <hr className="border-[#717275] m-3" />
         <div className="relative bottom-0 flex justify-between">
          <h1>15-11-22 .</h1>
          <h1>Comments(4)</h1>
         </div>
        </div>
        </div>
      </div>
  )
}

export default Postcard

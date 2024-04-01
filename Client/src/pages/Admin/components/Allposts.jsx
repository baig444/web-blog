
const Allposts = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-between mt-10">
      <div className=" relative h-[36vw] w-[24vw] bg-white drop-shadow-sm rounded-md">
         <div>
         <img src="https://i.pinimg.com/564x/df/e6/58/dfe65834a8beee12d6d8a54c39dca23d.jpg" height={'10vw'} alt=""className="object-cover rounded-t-lg " />
         </div>
         <div className="px-4 relative top-1">
         <h1 className="text-[#1D4ED8] font-medium">Development</h1>
         <div>
          <h1 className="text-[1.1rem] font-medium leading-6">How to Create a Professional Website in simple steps</h1>
          <p className="text-[#7A6B85]">it has survived not only leap <br /> year also the future of the <br /> world it..</p>
         </div>
         <hr className="border-[#717275] m-3" />
         <div className="flex justify-between pb-2">
          <h1>15-11-22 .</h1>
          <h1>Comments(4)</h1>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Allposts

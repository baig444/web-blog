/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt"
import Postcard from "./Postcard"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


const defaultOptions={
  speed: 1000,
  transition: true,
  easing:"cubic-bezier(.03,.98,.52,.99)",
  max:10,
  scale: 1,
  perspective:1000

}

const Postlist = () => {
  const [data,setData] = useState([])
  const [post,setPost] = useState(6)
  
  const getPost = async() => {
    const res = await axios.get('http://localhost:5000/api/getpost')
    const data = res.data
    setData(data)
    console.log(data) 
  }
 useEffect(() => {
  getPost()
 },[])
  
 const slice = data.slice(0,post)

 const loadMore = () => {
   setPost(post+6)
 }

  return (
    <div className="relative mt-20">
      <h1 className="border-l-4 border-[#1D4ED8]  pl-2 font-semibold text-[1.3rem]">Recent Post:</h1>
      <div className="flex gap-12 mt-8">
        <Tilt options={defaultOptions}>
        <div className="h-[30vw] w-[35vw]">
            <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post" className="object-cover rounded-md h-[30vw] w-[35vw] " />
        </div>
        </Tilt>
        <div className=" relative p-4 left-12 h-[30vw] w-[35vw]"> 
            <div className="flex gap-8">
            <h1 className="text-[#1D4ED8] font-semibold">Development .</h1>
            <h1>2hr ago</h1>
            </div>
            <h1 className="text-[2.3rem] font-bold leading-[45px] mt-4">Important Features to look for in Web Development Services</h1>
            <div className="relative top-8">
            <button className=" bg-blue-700 text-white p-3 px-6 rounded-full">Read More  →</button>
            </div>
        </div>
      </div>
      <h1 className="border-l-4 border-[#1D4ED8] mt-20  pl-2 font-semibold text-[1.4rem]">Must Read Article:</h1>
      <div className="flex flex-wrap gap-10 justify-between mt-10">
      {
      slice.map((item) => {
    return (
      <Link to={`/post/${item._id}`} key={item._id}>
        <Postcard description={item.description} title={item.title} image={item.image} category={item.category} />
      </Link>
    );
  })
}
      </div>
      <div className="flex items-center justify-center mt-10">
      <button onClick={()=> loadMore()} className=" bg-blue-700 text-white p-2 px-6 rounded-full">Load More <span> ↓</span></button>
      </div>
    </div>
  )
}

export default Postlist

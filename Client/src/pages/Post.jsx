/* eslint-disable react/prop-types */
import PostHeader from "../components/PostHeader"
import Footer from "../components/Footer"


const Post = ({ post }) => {
  
  return (
    <div>
      <div className="w-full fixed">
        <PostHeader />
      </div>
      <div className="flex justify-between min-h-[90vh] bg[#FFFFFF]">
        <div className="w-[20%] ">
          left bar
        </div>
          <div className="w-[60%]  py-[20vh]">
          <h1 className="text-[#1D4ED8] font-medium text-[1.3rem]">{post.category}</h1>
          <div className=" flex flex-col gap-16">
            <h1 className="text-[2.5rem] mt-5 font-semibold">{post.title}</h1>
            <div className="flex gap-3">
              <h1>Faisal Baig.</h1>
              <h1>14 Feb.</h1>
              <h1>20 min read</h1>
            </div>
            <div className="h-[80vh]">
              <img src={post.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p>{post.description}</p>
            </div>
          </div>
        </div>
        <div className="w-[20%]">
          right
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Post


const PostHeader = () => {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between h-[10vh] p-3 px-20 bg-blue-500 text-white drop-shadow-lg">
        <h1 className="text-[1.3rem] font-semibold">Twix.</h1>
        <div className="flex gap-10 font-medium">
            <h1>Home</h1>
            <h1>Blogs</h1>
            <h1>Contact</h1>
        </div>
        <div>
            <button className="text-[1rem] border rounded-full border-1 px-4 py-1">Sign In</button>
        </div>
      </nav>
    </div>
  )
}

export default PostHeader

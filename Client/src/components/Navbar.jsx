import {NavLink } from "react-router-dom"

const Navbar = () => {
  
  return (
    <div className=" w-full text-white font-sm">
      <nav className="flex items-center justify-between p-5 px-20">
        <h1 className="font-bold text-[2rem]">Twix.</h1>
        <div>
          <ul className="navlist flex gap-10 text-[1.2rem]">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Blogs</NavLink>
            <NavLink to='/'>Contact</NavLink>
            <NavLink to='/'>About</NavLink>
          </ul>
        </div>
        <button className="text-[1.2rem] border border-1 px-4 py-1">Login</button>
      </nav>
    </div>
  )
}

export default Navbar

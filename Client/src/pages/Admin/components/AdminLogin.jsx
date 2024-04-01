import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import PostContext from "../../../context/PostContext"
const AdminLogin = () => {
  const {setisAuth} = useContext(PostContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const login = () => {
      setisAuth(true)
      navigate('/admin')
    }

  return (
    <div className="bg-gray-500">
      <div className='w-screen h-screen flex justify-center items-center'>
      <form className='flex flex-col justify-center items-center gap-3 w-[80vw] lg:w-[20vw] mx-auto'>
        <input
         type="email" 
         name='email'
          id='email'
           placeholder='Enter Email'
           onChange={(e)=>setEmail(e.target.value)}
           value={email}
           className='px-3 py-2 rounded-lg bg-transparent border-2 text-white w-full' />
        <input
         type="password"
          name='password'
           id='password'
            placeholder='Enter Password'
            onChange={(e)=>setPassword(e.target.value)}
            value={password} 
        className='px-3 py-2 rounded-lg bg-transparent border-2 text-white w-full'
        />
        <button 
        onClick={login}
        type='submit'
        className='px-3 py-2 rounded-lg bg-transparent border-2 text-white w-full'
        >Login</button>
      </form>
    </div>
    </div>
  )
}

export default AdminLogin

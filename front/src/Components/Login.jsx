import { useState } from "react"
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios'


export default function Login(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    

    const handleSubmit = e =>{
        e.preventDefault()
        axios.post("http://localhost:3000/login",{
            email,password
        }).then(res => {console.log(res) 
            if(res.data === "success"){
                navigate('/home')
            }
        }).catch(e=>console.log(e))
     
     
    }
    return <div className="main h-screen w-screen flex items-center content-end justify-center">
    <div className="shadow-xl h-[600px] w-[900px] rounded-3xl bg-white flex items-end justify-center">
       <img src="https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-1/2 h-[600px] pt-7 pr-2 rounded-bl-3xl rounded-tr-4xl"/>
       <img src="https://images.pexels.com/photos/2249965/pexels-photo-2249965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-1/2 h-[600px] pt-7 pl-2 rounded-br-3xl rounded-tl-4xl" />
       <div className="h-[500px] w-[600px] bg-glass absolute rounded-t-large backdrop-blur-[20px] flex items-center justify-center flex-col shadow-xl">
       <div className="h-[400px] w-72 gap-4 ">
       <h1 className="text-xl font-bold text-gray-600">Book Harbor</h1>
        <p className="mt-10 text-white text-sm">Welcome</p>
        <p className="mt-1 text-white text-sm mb-6">Please Enter Your Login Credentials </p>
        <form action="POST" className="flex flex-col mt-2 gap-4 text-white">
            <input className="h-10 p-2 rounded tracking-wider bg-glass-dark text-white" type="email" name="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input className="h-10 p-2 rounded tracking-wider bg-glass-dark text-white" type="password" name="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button className="h-10 p-2 rounded tracking-wider bg-gray-600 text-white" onClick={handleSubmit}>Login</button>
            
            <div className="flex gap-3 text-white text-sm "><p>New User?</p>
            <Link to='/signup'>Sign Up</Link></div>
        </form>
       </div>
       </div>
    </div>
        
</div>
}
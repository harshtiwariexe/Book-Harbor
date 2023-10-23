import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'


export default function App(){
  return <>
  <Router>
    <Routes>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  </Router>
  </>
}
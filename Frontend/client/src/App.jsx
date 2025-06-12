import {Routes, Route} from 'react-router-dom';
import Login from './components/Users/Login'
import Signup from './components/Users/Signup';
import HomePage from './HomePage'
import Welcome from './Welcome'
function App(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path ="/home" element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App

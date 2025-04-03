import {Routes, Route} from 'react-router-dom';
import Login from './components/Users/Login'
import Test from './test'

function App(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path ="/test" element={<Test/>}/>
      </Routes>
    </>
  )
}

export default App

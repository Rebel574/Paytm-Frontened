import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import Signup from './pages/signup'
import Signin from './pages/signin';
import Send from './pages/send';
import Dashboard from './pages/dashboard'


function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/send" element={<Send/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

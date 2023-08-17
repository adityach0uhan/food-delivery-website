import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>

      <Router>
      <Navbar />
        <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signUp' element={<SignUp />} />
          </Routes>
        </div>
      </Router>
       
      
      



    </>
  );
}

export default App;


import './App.css';
import Header from './component/header';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./pages/home";
import Profile from './pages/profile';
import Signup from './pages/signup';
import Signin from './pages/signin';
import About from "./pages/about";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup />}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { RegisterPage } from './pages/Register';
import { LoginPage } from './pages/Login';
import { MyNavbar } from './components/Navbar';
import { ListingPage } from './pages/List';

function App() {
  

  return (
   <>
   <div>
    <MyNavbar></MyNavbar>
   </div>
    <Routes>
      <Route path='/' element={<h1>Home</h1>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/book/list' element={<ListingPage/>}></Route>
    </Routes>
   </>
  )
}

export default App

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route } from 'react-router-dom';
// import { RegisterPage } from './pages/Register';
// import { LoginPage } from './pages/Login';
// import { MyNavbar } from './components/Navbar';
// import { ListingPage } from './pages/List';

// function App() {
  

//   return (
//    <>
//    <div>
//     <MyNavbar></MyNavbar>
//    </div>
//     <Routes>
//       <Route path='/' element={<h1>Home</h1>}></Route>
//       <Route path='/login' element={<LoginPage/>}></Route>
//       <Route path='/register' element={<RegisterPage/>}></Route>
//       <Route path='/book/list' element={<ListingPage/>}></Route>
//     </Routes>
//    </>
//   )
// }

// export default App
import { Routes, Route } from "react-router-dom";

// Components
import MyNavbar from "./components/Navbar";

// Pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";
import HomePage from "./pages/Home";
import BookDetailPage from "./pages/Detail";
import OrdersPage from "./pages/ViewOrder";
import ViewOrderDetails from "./pages/ViewOrderDetail";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/list" element={<ListingPage />} />
        <Route path="/book/view/:bookId" element={<BookDetailPage />} />
        <Route path="/book/orders" element={<OrdersPage />} />
        <Route path="/books/orders/:bookId" element={<ViewOrderDetails />} />
      </Routes>
    </div>
  );
}

export default App;
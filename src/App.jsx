import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Nopage from "./pages/nopage/Nopage"
import Productinfo from "./components/product info/Productinfo"
import Scrolltop from "./components/scrolltop/Scrolltop"
import Carts from "./pages/cart/Carts"
import AllProduct from "./pages/allproduct/Allproduct"
import Signup from "./pages/registeration/Signup"
import Login from "./pages/registeration/Login"
import { Toaster } from "react-hot-toast"
import MyState from "./context/Mystate"
import { Protectedrouteforadmin } from "./protectedroute/Protectedrouteforadmin"
import { Protectedrouteforuser } from "./protectedroute/Protectedrouteforuser"
import Addproduct from "./pages/Adim/Addproduct"
import Updateproductpage from "./pages/Adim/Updateproductpage"
import Admindashboard from "./pages/Adim/Admindashboard"
import Userdashboard from "./user/Userdashboard"
import CategoryPage from "./pages/catagory/Categorypage"



function App() {
  
  return (
    <div>
      <MyState>
      <Router>
        <Scrolltop/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/Productinfo" element={<Productinfo />} />
          <Route path="/Carts" element={<Carts />} />
          <Route path="/Allproduct" element={<AllProduct/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<Catagorypage />} />
          <Route path="/user-dashboard" element={
            <Protectedrouteforuser>
          <Userdashboard />
          </Protectedrouteforuser> }/>
          <Route path="/admin-dashboard" element={
            <Protectedrouteforuser>
          <Admindashboard />
          </Protectedrouteforuser>} />
          <Route path="/Addproduct" element={
            <Protectedrouteforadmin>
              <Addproduct />
            </Protectedrouteforadmin>
          } />
          <Route path="/Updateproduct/:id" element={
            <Protectedrouteforadmin>
              <Updateproductpage />
            </Protectedrouteforadmin>
          } />
         
        </Routes>
       <Toaster/>
      </Router>
      </MyState>
    </div>
  )
}

export default App

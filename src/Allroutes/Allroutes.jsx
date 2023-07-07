import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Components/Home"
import ProductData from "../Components/Product"
const AllRoutes=()=>{
    const Auth=useSelector((state)=>state.isAuth)
    console.log(Auth);
        return <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/product" element={<ProductData />}/>
        <Route path="/product/:id" element={<h1>Single Product</h1>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/signup" element={<h1>SignUp</h1>}/>
        <Route path="/cart" element={Auth?<h1>Cart PAge </h1>:<h1>Login Page</h1>} />
    </Routes>
}
export { AllRoutes }

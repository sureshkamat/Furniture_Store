import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Components/Home"
const AllRoutes=()=>{
   return <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<h1>About</h1>}/>
        <Route path="/product" element={<h1>Product List</h1>}/>
        <Route path="/product/:id" element={<h1>Single Product</h1>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/signup" element={<h1>SignUp</h1>}/>
        <Route path="/cart" element={<h1>Cart</h1>}/>
    </Routes>
}
export { AllRoutes }

import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Components/Home"
import SignIn from "../Components/SignIn"
import SignUp from "../Components/SignUp"
const AllRoutes=()=>{
   return <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<h1>About</h1>}/>
        <Route path="/product" element={<h1>Product List</h1>}/>
        <Route path="/product/:id" element={<h1>Single Product</h1>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/cart" element={<h1>Cart</h1>}/>
    </Routes>
}
export { AllRoutes }

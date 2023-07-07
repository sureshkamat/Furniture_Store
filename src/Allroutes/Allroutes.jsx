import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Cart } from "../Components/Cart"
import { Delivery } from "../Components/Delivery"
import { Homepage } from "../Components/Home"

import { Information } from "../Components/Information"
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
        <Route path="/cart" element={Auth?<Cart />:<h1>Login Page</h1>} />
        <Route path="/Info/:totalPrice" element={<Information />}> </Route>
        <Route path="/Delivery/:discountedPrice" element={<Delivery />}> </Route>

    </Routes>
}
export { AllRoutes }

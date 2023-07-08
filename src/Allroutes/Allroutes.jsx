import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Cart } from "../Components/Cart"
import { Delivery } from "../Components/Delivery"
import { Homepage } from "../Components/Home"

import { Information } from "../Components/Information"
import ProductData from "../Components/Product"
import ProductDetails from "../Components/ProductDetails"
import SignIn from "../Components/SignIn"
import SignUp from "../Components/SignUp"

const AllRoutes=()=>{
    const Auth=useSelector((state)=>state.isAuth)
    console.log(Auth);
    console.log(Auth)
        return <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/product" element={<ProductData />}/>
        <Route path="/product/:id" element={<ProductDetails /> }/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cart" element={Auth?<Cart />:<SignIn />} />
        <Route path="/Info/:totalPrice" element={Auth?<Information />:<SignIn />}> </Route>
        <Route path="/Delivery/:discountedPrice" element={Auth?<Delivery />:<SignIn />}> </Route>

    </Routes>
}
export { AllRoutes }


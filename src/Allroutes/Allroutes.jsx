import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Cart } from "../Components/Cart"
import { Delivery } from "../Components/Delivery"
import { Homepage } from "../Components/Home"

import { Information } from "../Components/Information"
import ProductData from "../Components/Product"

import SignIn from "../Components/SignIn"
import SignUp from "../Components/SignUp"
import DetailsContext from "../Components/DetailsContext"
const AllRoutes=()=>{
    const Auth=useSelector((state)=>state.isAuth)
    const details = {
        name: '',
        totalPrice: '',
        country: '',
        discountedPrice: '',
        city: '',
        Zip: '',
        phone: '',
        email: '',
        address: '',
        orderId: ''
    }
        return <DetailsContext.Provider value={details}> 
  <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/product" element={<ProductData />}/>
        <Route path="/product/:id" element={<h1>Single Product</h1>}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cart" element={Auth?<Cart />:<SignIn />} />
        <Route path="/Info/:totalPrice" element={Auth?<Information />:<SignIn />}> </Route>
        <Route path="/Delivery/:discountedPrice" element={Auth?<Delivery />:<SignIn />}> </Route>
        <Route path="/order-details" element={<OrderDetails />}> </Route>


    </Routes>
    </DetailsContext.Provider>
}
export { AllRoutes }


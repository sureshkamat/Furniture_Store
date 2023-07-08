import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Cart } from "../Components/Cart"
import { Delivery } from "../Components/Delivery"
import { Homepage } from "../Components/Home"

import DetailsContext from "../Components/DetailsContext"
import { Information } from "../Components/Information"
import { OrderDetails } from "../Components/OrderDetails"
import ProductData from "../Components/Product"
import SingleProductPage from "../Components/ProductDetails"
import SignIn from "../Components/SignIn"
import SignUp from "../Components/SignUp"
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
        <Route path="/product/:id" element={<SingleProductPage /> }/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cart" element={Auth?<Cart />:<SignIn />} />
        <Route path="/Info" element={Auth?<Information />:<SignIn />}> </Route>
        <Route path="/Delivery" element={Auth?<Delivery />:<SignIn />}> </Route>
        <Route path="/order-details" element={<OrderDetails />}> </Route>


    </Routes>
    </DetailsContext.Provider>
}
export { AllRoutes }


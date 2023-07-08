import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Cart } from "../Components/Cart"
import { Delivery } from "../Components/Delivery"
import { Homepage } from "../Components/Home"
import { Information } from "../Components/Information"
import ProductData from "../Components/Product"
import { OrderDetails } from "../Components/OrderDetails"
import DetailsContext from "../Components/DetailsContext"
const AllRoutes = () => {
    const Auth = useSelector((state) => state.isAuth)
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
    console.log(Auth);
    return <DetailsContext.Provider value={details}>
    <Routes>
        
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<ProductData />} />
            <Route path="/product/:id" element={<h1>Single Product</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/signup" element={<h1>SignUp</h1>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Info" element={<Information />}> </Route>
            <Route path="/Delivery/" element={<Delivery />}> </Route>
            <Route path="/order-details" element={<OrderDetails />}> </Route>
       

    </Routes>
    </DetailsContext.Provider>
}
export { AllRoutes }

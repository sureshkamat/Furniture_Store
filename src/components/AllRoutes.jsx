import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Cart } from './Cart'
import { Information } from './Information'
import { Delivery } from './Delivery'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/Cart" element={<Cart/>}> </Route>
                <Route path="/Info/:totalPrice" element={<Information/>}> </Route>
                <Route path="/Delivery/:discountedPrice" element={<Delivery/>}> </Route>
            </Routes>
        </div>
    )
}

export {AllRoutes}
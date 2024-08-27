import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Pages/HomePage/HomePage'
import Cart from '../Customer/components/Cart/Cart'
import Product from '../Customer/components/Product/Product'
import ProductDetails from '../Customer/components/ProductDetails/ProductDetails'
import Navigation from '../Customer/components/navigation/Navigation.jsx'
import Footer from '../Customer/components/Footer/Footer'
import Checkout from '../Customer/components/Checkout/Checkout.jsx'
import Order from '../Customer/components/Order/Order.jsx'
import OrderDetails from '../Customer/components/Order/OrderDetails.jsx'
import PaymentSuccess from '../Customer/components/Payment/PaymentSuccess.jsx'

const CustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/login' element={<HomePage/>}/>
            <Route path='/register' element={<HomePage/>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}/>
            <Route path='/product/:productId' element={<ProductDetails/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/account/order' element={<Order/>}/>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}/>
            <Route path='/payment/:orderId' element={<PaymentSuccess/>}/>
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoutes
import { Alert, AlertTitle, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OrderTracker from '../Order/OrderTracker'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../../State/store'
import { useParams } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'
import { updatePayment } from '../../../State/Payment/Action'
import AddressCard from '../AddressCard/AddressCard'

const PaymentSuccess = () => {
  const [paymentId, SetPaymentId] = useState();
  const [paymentStatus, SetPaymentStatus] = useState();

  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector(store => store);
  console.log(order);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    SetPaymentId(urlParam.get("razorpay_payment_id"));
    SetPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId]);

  return (
    <div className='px-2 lg:px-36'>
      <div className='flex flex-col justify-center items-center'>
        <Alert variant='filled' severity='success' sx={{ mb: 6, width: "fit-content" }}>
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations! Your order has been placed.
        </Alert>
      </div>

      <OrderTracker activeStep={1} />

      <Grid container className='space-y-5 py-5 pt-20'>
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className='shadow-lg p-5 bg-white'
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            key={item._id}  // Make sure to use a unique key here, like item._id
          >
            <Grid item xs={6}>
              <div className='flex items-center'>
                <img
                  className='w-[5rem] h-[5rem] object-cover object-top'
                  src={item.product.imageUrl}  
                  alt={item.product.title}
                />
                <div className='ml-5 space-y-2'>
                  <p className='font-semibold'>{item.product.title}</p>
                  <div className='opacity-50 text-xs font-semibold space-x-3'>
                    <span>Color: {item.product.color}</span>
                    <span>Size: {item.size}</span>
                  </div>
                  <p className='text-xs opacity-50'>Seller: {item.product.brand}</p>
                  <p className='font-bold'>₹ {item.discountedPrice}</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <AddressCard address={order.order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;

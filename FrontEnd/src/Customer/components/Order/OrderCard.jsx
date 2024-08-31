import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = ({order}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${order._id}`)} className="p-5 shadow-md shadow-gray-400 hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={order.orderItems[0]?.product?.imageUrl}
              alt="img"
            />
            <div className="ml-5 space-y-2">
              <p className="">{order.orderItems[0]?.product?.title}</p>
              <p className="opacity-50 text-xs font-semibold">Size: {order.orderItems[0]?.size}</p>
              <p className="opacity-50 text-xs font-semibold">Color: {order.orderItems[0]?.product?.color}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          ₹{order.totalDiscountedPrice}
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>{order.orderStatus==="DELIVERED"?"Delivered":"Confirmed"}</span>
              </p>
              <p className="text-xs">{order.orderStatus==="DELIVERED"?"Your Item Has Been Delivered":""}</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivered On March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;

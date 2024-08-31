import React from "react";
import { Link } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  return (
    <Link to={`/product/${product?._id}`}>
      <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden h-[20rem] w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem]">
          <img
            src={product.imageUrl}
            alt=""
            className="object-cover object-top w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
          <p className="mt-2 text-sm text-gray-500">
            {product.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeSectionCard;

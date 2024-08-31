import { Box, FormControl, InputLabel, MenuItem, Select, Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";
import HomeSectionCarousel from "../HomeSectionCarousel/HomeSectionCarousel";

const SearchPage = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store); // Assume 'loading' is part of the store

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  console.log(products.products);

  useEffect(() => {
    const [minPrice, maxPrice] = price ? price.split("-").map(Number) : [0, 10000];

    const data = {
      category,
      colors: color ? [color] : [],
      sizes: [],
      minDiscount: 0,
      sort: "price_low",
      minPrice,
      maxPrice,
      pageNumber: 1,
      pageSize: 100,
      stock: ""
    };

    dispatch(findProducts(data));
  }, [category, price, color, dispatch]);

  return (
    <div>
      <div className="flex justify-center">
        <Box className="p-4 m-2 w-[78rem] flex justify-between bg-gray-100 rounded-md shadow-md">
          {/* Category Dropdown */}
          <FormControl variant="outlined" className="mb-4 w-[25rem]">
            <InputLabel className="text-gray-700">Category</InputLabel>
            <Select
              value={category}
              onChange={handleCategoryChange}
              label="Category"
              className="bg-white"
            >
              <MenuItem value="mens_kurta">Mens Kurtas</MenuItem>
              <MenuItem value="shirt">Shirt</MenuItem>
              <MenuItem value="men_jeans">Men Jeans</MenuItem>
              <MenuItem value="men_sweaters">Sweaters</MenuItem>
              <MenuItem value="men_t-shirt">T-Shirts</MenuItem>
              <MenuItem value="men_jackets">Jackets</MenuItem>
              <MenuItem value="top">Women Tops</MenuItem>
              <MenuItem value="women_dress">Dresses</MenuItem>
              <MenuItem value="women_jeans">Women Jeans</MenuItem>
            </Select>
          </FormControl>

          {/* Price Dropdown */}
          <FormControl variant="outlined" className="mb-4 w-[25rem]">
            <InputLabel className="text-gray-700">Price</InputLabel>
            <Select
              value={price}
              onChange={handlePriceChange}
              label="Price"
              className="bg-white"
            >
              <MenuItem value="159-399">₹159 To ₹399</MenuItem>
              <MenuItem value="399-999">₹399 To ₹999</MenuItem>
              <MenuItem value="999-1999">₹999 To ₹1999</MenuItem>
              <MenuItem value="1999-2999">₹1999 To ₹2999</MenuItem>
              <MenuItem value="2999-3999">₹2999 To ₹3999</MenuItem>
              <MenuItem value="3999-4999">₹3999 To ₹4999</MenuItem>
            </Select>
          </FormControl>

          {/* Color Dropdown */}
          <FormControl variant="outlined" className="mb-4 w-[25rem]">
            <InputLabel className="text-gray-700">Color</InputLabel>
            <Select
              value={color}
              onChange={handleColorChange}
              label="Color"
              className="bg-white"
            >
              <MenuItem value="white">White</MenuItem>
              <MenuItem value="black">Black</MenuItem>
              <MenuItem value="beige">Beige</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="brown">Brown</MenuItem>
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="purple">Purple</MenuItem>
              <MenuItem value="yellow">Yellow</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        {loading ? (
          <div className="flex flex-col space-y-4">
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="80%" />
          </div>
        ) : (
          <HomeSectionCarousel data={products.products?.content || []} sectionName={"Results"} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;

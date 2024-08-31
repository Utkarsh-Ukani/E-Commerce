import React, { useEffect } from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
import { useDispatch, useSelector } from "react-redux"
import { findProducts } from "../../../State/Product/Action";

const HomePage = () => {
  const dispatch = useDispatch()
  const {products} = useSelector((store)=>store)


  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 1,
      pageSize: 1000,
      stock: "",
    };
    dispatch(findProducts(data));
  }, []);

  return (
    <div className="bg-gradient-to-b  from-blue-500 to-green-500">
      <MainCarousel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={products.products?.content?.filter((item)=>item.category.name==="mens_kurta")} sectionName={"Men's kurta"}/>
        <HomeSectionCarousel data={products.products?.content?.filter((item)=>item.category.name==="Pant")} sectionName={"Men's Jeans"}/>
        <HomeSectionCarousel data={products.products?.content?.filter((item)=>item.category.name==="men_sweaters")} sectionName={"Men's Sweaters"}/>
        <HomeSectionCarousel data={products.products?.content?.filter((item)=>item.category.name==="shirt")} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={products.products?.content?.filter((item)=>item.category.name==="top")} sectionName={"Women's top"}/>
        <HomeSectionCarousel data={products.products?.content?.filter((item)=>item.category.name==="women_dress")} sectionName={"Women's dress"}/>
      </div>
    </div>
  );
};

export default HomePage;

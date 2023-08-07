import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import useHttps from "../hooks/useHttps";
import styles from "./ShopProduct.module.css";
import URL from "../constants/constants";
import ProductList from "./Product/ProductList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function ShopProduct() {
   const cate = useSelector((state) => state.cateShop.cate);
   const [products, setProducts] = useState([]);
   const [allProducts, setAllProducts] = useState([]);
   const navigate = useNavigate();
   const transformData = (data) => setAllProducts(data);
   const { sendRequest } = useHttps(
      {
         url: URL,
      },
      transformData
   );
   useEffect(() => {
      if (!cate.length || cate === "all") {
         setProducts(allProducts);
         return;
      }
      const products = allProducts.filter((product) => {
         return product.category === cate;
      });
      setProducts(products);
   }, [cate, allProducts]);
   useEffect(() => {
      sendRequest();
   }, []);
   const goToDetail = (idProduct) => {
      navigate("/shop/" + idProduct);
   };
   return (
      <section className={cx("product")}>
         <ProductList list={products} click={goToDetail} />
      </section>
   );
}

export default ShopProduct;

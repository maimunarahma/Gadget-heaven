import { Outlet } from "react-router-dom";
import { createContext ,useContext} from "react";
import Navbar from "./Navbar";
import Gadget from "./Gadget";
import { getCart, getWishList } from './LocalDB';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import usePageTitle from "./Title";
import Footer from "./Footer";

export  const context=createContext();
const Root = () => {
    const [cartList, setCartList]=useState([]);
    const [sum,setSum]=useState(0);
    const allProduct=useLoaderData();
    console.log(allProduct)
    const productArray = Object.values(allProduct); 
    const [purchase,setPurchase]=useState(false);
    const handlePurchase=()=>{
     setPurchase(!purchase);
     document.getElementById('my_modal_3').showModal()
   
    
    }
    useEffect(
        ()=>{
            document.title="Home-Gadget Heaven"
        },[]
    )
    useEffect(() => {
        const cartArr = getCart();
        const ExtractCartProducts = productArray.filter(product => cartArr.includes(product.product_id));
        setCartList(ExtractCartProducts);
        const total = ExtractCartProducts.reduce((acc, product) => acc + product.price, 0);
        setSum(total);
    });
   

 
// cartList.map(p=> sum+=p.price);
// console.log(sum)

   const contextValue={
    sum,
     cartList,
     purchase,
     handlePurchase
   }
    return (
        <div>
            <context.Provider value={contextValue}>
      
        <Navbar> </Navbar>
      
       <Outlet></Outlet>
       <Footer></Footer>
       </context.Provider>
        </div>
    );
};

export default Root;
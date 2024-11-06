
import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getCart, getWishList } from './LocalDB';
import { GrSort } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { context } from './Root';
import { FcCheckmark } from "react-icons/fc";

const Dashboard = () => {
    // const [cartList, setCartList]=useState([]);
    const allProduct=(useLoaderData());
    const productArray = Object.values(allProduct); 
    console.log(typeof allProduct)
    const {sum,cartList,puchase,  handlePurchase}=useContext(context);
    console.log(allProduct)
 
   const [WishList,setWishList]= useState([]);
    useEffect(()=>{
       const wishArr=getWishList();
       console.log(wishArr)
       const extractWishedProduct=productArray.filter(p=> wishArr.includes(p.product_id))
    console.log(extractWishedProduct)
    setWishList(extractWishedProduct)
    },[])
   

    useEffect(()=>{
        document.title='DashBoard-Gadget Heaven'
    },[])
  
    
  
    return (
        <div className='mx-auto px-7 border-2 p-8  text-white'>
             <Tabs className='bg-[#9538E2]'>
                <div className='flex flex-col justify-center items-center py-6'>
                <h1 className='font-bold text-3xl '>Dashboard</h1>
                <p className='text-lg  px-60 my-3 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                
    <TabList className='flex justify-between gap-10 mx-auto w-[30%] items-center mb-5'>
      <Tab><button className='btn text-[#9538E2]'>Cart</button></Tab>
      <Tab><button className='btn text-[#9538E2]'>WishList</button></Tab>
    </TabList>

<div className='bg-white text-black'>
<TabPanel >
      <div className='pt-20'>
        <div className='flex justify-end items-center gap-14 '>
            <h1 className='text-2xl font-bold'>Total Cost: {sum}</h1>
          
         
        <button className='btn text-[#9538E2] border-[#9538E2]'>Sort By Price <GrSort />
        </button>
      
     {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button  onClick={()=>handlePurchase()} className='btn bg-[#9538E2] text-white'>Purchase</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className='flex flex-col justify-around items-center'>
    <img src="https://i.ibb.co.com/kyfKjb3/success-1.png" alt="" />
  <h1 className="font-bold text-lg">Payment Successfully</h1>
   <p>Thanks for purchasing.</p>
   <p>Total:{sum}</p>
 
    </div>
 
  </div>
</dialog>
        </div>
        <div className='p-3 '>
        {cartList.map(p=> <div key={p.product_id} className='flex justify-between border-2 rounded items-center w-full p-10 mb-5'>
            <div className='  flex justify-start items-center gap-7'>
            <img src={p.product_image} alt="" className='w-[250px] p=3 rounded'/>
         
<div className='flex flex-col justify-between items-start gap-5'>   
     <h1 className='text-2xl font-bold '>   {p.product_title}</h1>
     <p className='font-semibold text-lg text-gray-400'>{p.description}</p>
     <h3 className='text-xl font-bold'>Price:${p.price}</h3>
</div>


        </div>
        <button className='text-red  rounded-btn  btn'> <RxCrossCircled /></button>
       
        </div>)}
        </div>
       
     
      </div>
     
     
    </TabPanel>
    <TabPanel>
    <div className='pt-20'>
        {
            WishList.map(w=><div className='flex justify-between border-2 rounded items-center w-full p-10 mb-5 '>
               <div className='  flex justify-start items-center gap-7'>
            <img src={w.product_image} alt="" className='w-[250px] p=3 rounded'/>
         
<div className='flex flex-col justify-between items-start gap-5'>   
     <h1 className='text-2xl font-bold '>   {w.product_title}</h1>
     <p className='font-semibold text-lg text-gray-400'>{w.description}</p>
     <h3 className='text-xl font-bold'>Price:${w.price}</h3>
</div>


        </div>
        <button className='text-red  rounded-btn  btn'> <RxCrossCircled /></button>
       
 






            </div>)
        }
    </div>
    </TabPanel>
</div>
   
  </Tabs>
        </div>
    );
};

export default Dashboard;
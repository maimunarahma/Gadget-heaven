import { useEffect, useState } from "react";
import { useLoaderData ,Link } from "react-router-dom";
import Banner from "./Banner";

const Gadget = () => {
    const all=useLoaderData();
  
    const productArray = Object.values(all); 
 
// const categoryArr=all.map(products=> products.category)
// const [All,setAll]=useState([all])
 const [allData, setAllData]=useState(false)
const [phone,setPhone]=useState([])
const [phoneData,setPhoneData] =useState(false)
const [laptop,setLaptop]=useState([]);
 const [laptopData,setLaptopData]= useState(false);
  const [watch, setWatch]= useState([])
  const [watchData ,setWatchData] =useState(false)
  const [accessories,setAccessories] =useState([])
  const [accessoryData, setAccessoriesData] =useState(false)
 useEffect(()=>{
   
      
            document.title="Home-Gadget Heaven"
     
    setAllData(true)
    setPhoneData(false)
 
    setLaptopData(false)
    setWatchData(false)
    setAccessoriesData(false)
},[]);
  const handlePhone=()=>{
    setPhone(productArray.filter(p=> p.category==="Phone"))
    console.log(phone)
    setPhoneData(true)
    setAllData(false)
    setLaptopData(false)
    setWatchData(false)
    setAccessoriesData(false)
}
const handleLaptop=()=>{
    setLaptop(productArray.filter(p=> p.category==='Laptop'))
    console.log(laptop)
   setLaptopData(true)
   setAllData(false)
   setPhoneData(false)
   setWatchData(false)
   setAccessoriesData(false)
}
 const handleWatch=()=>{
    setWatch(productArray.filter(p=> p.category==='Smart Watch'))
    setWatchData(true)
    setAllData(false)
    setLaptopData(false)
    setPhoneData(false)
    setAccessoriesData(false)
 }
    const handleAccessory=()=>{
        setAccessories(productArray.filter(ac=>(ac.category==='Accessory')))
        setAccessoriesData(true)
        setAllData(false)
        setLaptopData(false)
        setPhoneData(false)
        setWatchData(false)
    }
// console.log(all.filter(p=> !categoryArr.includes(p.category)))
   
    return (

      
        <div className="text-center  border-2 p-6">
              <Banner></Banner>
            <h1 className="font-bold text-3xl">Explore Cutting-Edge Gadgets</h1>
            <div className="grid grid-cols-4">
                <div className="col-span-1 flex flex-col p-4">
                    <button className="btn" onClick={()=>setAllData(true)} >All</button>
                 <button className="btn" onClick={()=> handleLaptop()}>Laptop</button>
                 <button className="btn" onClick={()=>handlePhone()}>Phone</button>
                 <button className="btn" onClick={()=>handleWatch()}>Smart Watch</button>
                 <button className="btn" onClick={()=>handleAccessory()} >Accessory</button>
                </div>
                <div className="col-span-3 p-5">

<div >
    {
        allData===true?<div className="grid grid-cols-3 gap-3 p-6">
            {productArray.map(p=> 
            <div className=" flex flex-col border-2 justify-between items-center p-5">
                <img src={p.product_image} alt="" className="w-[280px] h-[180px] rounded"/>
                 <h1 className="font-bold text-xl my-3">{p.product_title}</h1>
                 <p className="text-gray-600 text-lg mb-2">Price: ${p.price}K</p>
                 <button className="btn text-[#9538E20] bg-purple-200"><Link to={`/products/${p.product_id}`}>View Details</Link></button>
            </div>
           
        )}
           
        </div>:null
    }
    
{
phoneData===true?
  <div className="grid grid-cols-3 gap-3">{ 
     phone.map(ph=>
        <div className=" flex flex-col border-2 justify-between items-center p-5">
            <img src={ph.product_image} alt=""  className="w-[280px] h-[180px] rounded"/>
             <h1 className="font-bold text-xl my-3">{ph.product_title}</h1>
             <p className="text-gray-600 text-lg mb-2">Price: ${ph.price}K</p>
             <button className="btn text-[#9538E20] bg-purple-200"><Link to={`/products/${ph.product_id}`}>View Details</Link></button>
        </div>
        )
     }
</div>:null
}
{ laptopData===true ?
<div className="grid grid-cols-3 gap-3">
    {
    laptop.map(lp=>
        <div className=" flex flex-col border-2 justify-between items-center p-5">
                <img src={lp.product_image} alt=""  className="w-[280px] h-[180px] rounded"/>
  <h1 className="font-bold text-xl my-3">{lp.product_title}</h1>
<p className="text-gray-600 text-lg mb-2">Price: ${lp.price}K</p>
<button className="btn text-[#9538E20] bg-purple-200"><Link to={`/products/${lp.product_id}`}>View Details</Link></button>
        </div>
      )
    }
</div>:null
}
   { watchData===true?
   <div className="grid grid-cols-3 gap-3">
    {watch.map(w=>  
    <div className=" flex flex-col border-2 justify-between items-center p-5">
                <img src={w.product_image} alt=""  className="w-[280px] h-[180px] rounded"/>
            <h1 className="font-bold text-xl my-3">{w.product_title}</h1>
            <p className="text-gray-600 text-lg mb-2">Price: ${w.price}K</p>
            <button className="btn text-[#9538E20] bg-purple-200"><Link to={`/products/${w.product_id}`}>View Details</Link></button>
    </div>
   )}
   </div>:null
   
}
  {
    accessoryData===true?
    <div className="grid grid-cols-3 gap-3">
        {
            accessories.map(ac=> 

                <div className=" flex flex-col border-2 justify-between items-center p-5">
                        <img src={ac.product_image} alt=""  className="w-[280px] h-[180px] rounded"/>
                    <h1 className="font-bold text-xl my-3">{ac.product_title}</h1>
                    <p className="text-gray-600 text-lg mb-2">Price: ${ac.price}K</p>
                    <button className="btn text-[#9538E20] bg-purple-200">
                    <Link to={`/products/${ac.product_id}`}> View Details</Link></button>

                    </div>
            )
        }
        </div>:null
  }


</div>
     </div>
        
            </div>
        </div>
    );
};

export default Gadget;
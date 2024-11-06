import { useLoaderData, useNavigate, useParams} from "react-router-dom";
import { addtoCartList, addtoWishList } from "./LocalDB";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { document } from "postcss";

const Details = () => {
    const {product_id}=useParams();
    const datas=(useLoaderData());
  
    const id=parseInt(product_id)
    console.log(typeof id,typeof datas[0].product_id)
    const navigate=useNavigate();
  
  const productArray = Object.values(datas); 
 
  const product = productArray.find(data => parseInt(data.product_id) === id);
    const handleCart=(id)=>{
        if(product.availability===true){
        addtoCartList(id)
        toast.success('Added to Cart',{
            position:'top-center',
            autoClose:2000
        })
    
    
    }
    else{
        alert("Not Available in Stock")
    }

    }
 const[Disabled,setDisabled]=useState(false)
    const handlewishList=(id)=>{
        setDisabled(true)
        addtoWishList(id);
       toast.success('Add to WishList',
   {
    autoClose:2000,
    position:'top-center'
   }
       );
 
      
    }
 
    return (
        <div key={id} className="mx-auto p-6">
            <div className="flex justify-start gap-10 items-center border-2 p-6">
            
              <img src={product.product_image} alt="" className="w-1/2 p-5" />
                    <div className="w-1/2">
                        <h1 className="font-semibold text-2xl "> {product.product_title} </h1>
                        <p className="font-semibold text-xl mt-3">Price:$ {product.price}</p>
                    {product.availability===true ? <button className="rounded-full px-5 my-5 text-[#309C081A]/70 bg-green-100">In Stock</button>:<button className="rounded-full px-5 my-5 text-[red]/70 bg-red-100">Out of Stock</button>}
                        <p className="text-gray-500" key={product.product_id}>{product.description}</p>
                        <ul>
                            <h1 className="font-bold mt-3">Specification</h1>
                            {product.Specification.map((sp,index)=><ol className="list-disc" key={index}>{sp}</ol> )}
                            
                        </ul>
                        <h2>Rating</h2>
                       
                            <div>
                            <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
 

</div>
                       <div className='flex gap-5 justify-start items-center '>
                       <button onClick={()=> handleCart(product.product_id)} className="btn bg-[#9538E2] text-white mt-3">Add to Cart <FaShoppingCart /></button>
                       <ToastContainer />
                       {Disabled===false?  <button className="rounded-full p-4 bg-gray-200 btn-circle" onClick={()=>handlewishList(product.product_id)} ><FaRegHeart /> </button>:  <button className="rounded-full p-4 bg-gray-200 btn-circle" onClick={()=>handlewishList(product.product_id)} disabled><FaRegHeart /> </button>
                       }
                     
                       </div>
                       
                    </div>
               
            </div>
      
        </div>
    );
};

export default Details;
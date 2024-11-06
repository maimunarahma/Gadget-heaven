
  const getCart=()=>{
     const cartListStr=localStorage.getItem('cart-list');
    
     if(cartListStr){
        const cartList= JSON.parse(cartListStr );
        return cartList;
     }
     else
     return ([]);
  }
  const addtoCartList=(id)=>{
    const cartList=getCart();
   
    if(cartList.includes(id)){
        console.log('already exists');
    }
    else{
        cartList.push(id);
        const cartListStr=JSON.stringify(cartList);
        localStorage.setItem('cart-list',cartListStr);
      
    }
  }
    const getWishList=()=>{
      const wishListStr=localStorage.getItem('wish-list');
      if(wishListStr){
        const wishList=JSON.parse(wishListStr);
        return wishList;
      }
      else return ([]);

    }
    const addtoWishList=(id)=>{
      const wishList=getWishList();
      if(wishList.includes(id)){
        console.log('alredy added');
      }
      else{
        wishList.push(id);
        const wishListStr=JSON.stringify(wishList)
        localStorage.setItem('wish-list',wishListStr);

      }
    }
  export {getCart ,addtoCartList ,getWishList ,addtoWishList} ;

const Banner = () => {
    return (
        <div className="mx-auto px-10 relative mb-96">
       <div className="flex flex-col bg-[#9538E2] justify-center text-white items-center lg:p-48">
        <h1 className="font-bold text-5xl text-center ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className="mt-4 text-lg font-normal text-center px-28">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
       <button className="btn mt-5 rounded-full text-[#9538E2]">Shop Now</button>
      <div className="absolute -bottom-96 left-60">
      <img src='https://i.ibb.co.com/MD7BZT5/banner-9.jpg' alt="" className=" w-[1000px] h-[510px] bg-transparent p-5   rounded-xl " />
      </div>
    
     
       </div>
      
     
        </div>
    );
};

export default Banner;
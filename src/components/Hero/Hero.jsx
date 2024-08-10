import {useState} from "react";
import BiryaniImg1 from "../../assets/burger/burger1.png";
import BiryaniImg2 from "../../assets/burger/burger2.png";
import BiryaniImg3 from "../../assets/burger/burger3.png";


import Vector from "../../assets/vector.png"

const imageList= [{
id:1,
img:BiryaniImg1,

},
{
    id:2,
    img:BiryaniImg2

},
{
    id:3,
img:BiryaniImg3
}
]


const Hero =()=>{

    const [imgId,setImgId]=useState(BiryaniImg1)
const bgImg={
    backgroundImage:`url(${Vector})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",

};


return <>
 <div className="min-h-[650px] bg-gray-100 " style={bgImg}>
 <div className="min-h-[650px] backdrop-blur-md flex justify-center items-center" >
 <div className="container pb-8 sm:pb-0">
 <div className="grid grid-cols-1 sm:grid-cols-2">
    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 ">
        <h1 data-aos="zoom out" className="text-5xl sm:text-6xl lg:text-7xl font-bold ">Welcome to {" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)] " style={{filter:"drop-shadow(4px 4px 0 rgba(255, 255, 255,1))"}}>Burger</span>{" "} king
        </h1>
        <p data-aos="fade-up">Experience the Ultimate Burger Bliss - Fresh, Juicy, and Made Just for You!</p>
        <div data-aos="fade-up" data-aos-delay="300">
        <button className="rounded-full bg-gradient-to-r from-primary to-white w-fit px-4 py-2 font-bold border-2 border-white hover:scale-105 duration-300">Order Now</button>
    </div>
    </div>
    <div className="min-h-[400px] flex justify-center  gap-4 items-center order-1 sm:order-2 relative">
      
        <div data-aos="fade-left" data-aos-delay="300">
        <img src={imgId} alt="burger image" 
        className="max-w-[430px] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]"/>
          </div>
        <div className="flex lg:flex-col lg-top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[-30px] lg:-right-10 bg-white/30 rounded-full ">
            {imageList.map((item)=>(
                <div key={item.id} data-aos="zoom-in">
                    <img  src={item.img} onClick={()=>{setImgId(item.id===1?BiryaniImg1:item.id===2?BiryaniImg2:BiryaniImg3 )}} alt="Burger"className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration:200" />
                    
                </div>
            ))}
        </div>
    
      
    </div>
 </div>
 </div>
 </div>
 </div>
</>
}

export default Hero
import React from "react";
import Logo from "../../assets/logo.png"

const Navlinks=[{
    id:1,
    title:"Home",
    link:"/#Home"
},{
    id:2,
    title:"About",
    link:"/#about"
},{
    id:3,
    title:"Menu",
    link:"/#menu"
},
{
    id:4,
    title:"Services",
    link:"/#services"
}]
const  Navbar=()=>{
return (
<div className="shadow-xl">
    <div className="container py-3 sm:py-0">
    <div className="flex justify-center justify-between">
        <div>
            <a href="/#" >
               <img src={Logo} alt="logo" className="w-16"></img> 
            </a>
        </div>
      <div className="flex justify-between items-center gap-4">
          <ul className="hidden sm:flex items-center gap-4">
            {Navlinks.map((menu)=>(
            <li key={menu.id}>
            <a href={menu.link} className="inline-block py-4 px-4 hover:text-primary ">{menu.title}</a>
            </li>))}
          </ul>
      
      
        <button className="bg-gradient-to-r from-primary to-secondary py-1 px-4  hover:scale-105 duration-200 text-white rounded-full">Order</button>
        </div>
    </div>
    </div>
</div>
)};

export default Navbar;
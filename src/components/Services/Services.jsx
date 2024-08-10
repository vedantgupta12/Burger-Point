import Img2 from "../../assets/burger/burger2.png";
import Img3 from "../../assets/burger/burger3.png"
import HeaderTitle from "../HeaderTitle/HeaderTitle"

const serviceData=[{
    id:1,
    img: Img2,
    name: "Burger",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "Chiken Burger",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Veg Burger",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  
}
]
const Services=()=>{
return <>
<div className="bg-gray-100">
    <div className="py-12 lg:py-20">
    <div className="container">
        <HeaderTitle title="Services" subtitle="Our Services" description="Flavor Your Way, Anytime, Anywhere!"/>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 md:gap-5 place-items-center">
         {serviceData.map((service)=>(
            <div key={service.id} data-aos="fade-up" data-aos-delay={service.aosDelay} className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-200 group max-w-[300px]">
             <div className="h-[100px]">

                <img src={service.img} alt="" className="max-w-[200px] block mx-auto transform -translate-y-16 group-hover:scale-105 duration-300"></img>
             </div>
            <div className="p-4 text-center">
                <h1 className="text-xl font-bold ">{service.name}</h1>
             <p className="text-gray-500 group-hover:text-white duration-200 text-sm line-clamp-2">{service.description}</p>

            </div>
             
            </div>
         ))}
        </div>
    </div>
    </div>
</div>

</>
}
export default Services
import BurgerImg from "../../assets/burger/burger5.png"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const Banner=()=>{

    return (
        <div className="min-h-[550px]">
            <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
              <div className="container">
                <div className="grid gird-cols-1 sm:grid-cols-2 gap-6">
                    <div data-aos="flip-up">
                        <img src={BurgerImg} alt="burger image "  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"/>
                    </div>
                    <div className="flex flex-col justify-cenrter gap-6 sm:pt-0">
                        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">Buy 2 burger get 1 free</h1>
                        <p data-aos="fade-up" className="text-gray-500 text-sm leading-5 tracking-wide">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                        </p>
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ab sed, exercitationem minima aliquid eligendi
                  distinctio? Fugit repudiandae numquam hic quo recusandae.
                  Excepturi totam ad nam velit quasi quidem aspernatur.
                     <div className="flex gap-6">
                        <div data-aos="fade-up">
                            <GrSecure className=" h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100"></GrSecure>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                          <IoFastFood className="h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100"></IoFastFood>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400">
                          <GiFoodTruck className="h-20 w-20 shadow-sm p-5 rounded-full bg-green-100"></GiFoodTruck>
                        </div>
                     </div>
                     <div data-aos="fade-up" data-aos-delay="500">
                     <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md sm:mt-2">
                    Order Now
                  </button>
                     </div>
                    </div>
                </div>
              </div>

            </div>
 
        </div>
    )
}

export default Banner
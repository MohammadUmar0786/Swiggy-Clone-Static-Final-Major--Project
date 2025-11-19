import { Link } from "react-router";

export default function Header(){
    return(
        <header className="bg-[#FF5200] font-serif">
            
            <div className="flex justify-between max-w-[1200px] mx-auto py-6 px-4">
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                <div className="text-white text-base font-extrabold flex flex-wrap justify-end gap-8 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a target="_blank" href="" className="border border-white py-3 px-4 rounded-2xl">Get the App</a>
                    <a target="_blank" href="" className="border border-black bg-black py-3 px-4 rounded-2xl">Sign in</a>
                </div>
            </div>

            <div className="pt-[64px] pb-[32px] relative">

                <img className="w-[250px] h-[450px] absolute top-0 right-0  hidden lg:block w-[250px] h-[450px] xl:w-[250px] xl:h-[450px] lg:w-[200px] lg:h-[400px] md:w-[150px] md:h-[300px] sm:hidden" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <img className="w-[250px] h-[450px] absolute top-0 left-0   hidden sm:block hidden lg:block w-[250px] h-[450px] xl:w-[250px] xl:h-[450px] lg:w-[200px] lg:h-[400px] md:w-[150px] md:h-[300px] sm:hidden" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>

                <div className="max-w-[90%] md:text-[48px] sm:text-[32px] xs:text-[24px] leading-tight text-white font-bold container mx-auto text-center max-w-[1200px]" >Order food & groceries. Discover best restaurants. Swiggy it!</div>

                <div className="max-w-[70%] container mx-auto mt-5 flex flex-wrap justify-center items-center gap-5">
                    <input className="bg-white text-2xl text-gray-600 px-5 py-3 rounded-2xl mt-2 text-md sm:text-xl md:text-2xl" type="text" placeholder="Delhi, India"/>
                    <input className="bg-white text-2xl text-gray-600 w-[55%] px-5 py-3 rounded-2xl mt-2 text-md sm:text-xl md:text-2xl" type="text" placeholder="Search for restaurant, item or more" />
                
                </div>
            </div>
            
            <div className=" max-w-[80%] container mx-auto flex">
               <Link to="/restaurant">
               <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
               </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
               <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
               </a>
                <a href="https://www.swiggy.com/dineout">
               <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
               </a>
            </div>
        </header>
    )
}
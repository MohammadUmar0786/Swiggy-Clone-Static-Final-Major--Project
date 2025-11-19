import { Link } from "react-router";

export default function AllRestaurantsCards({restInfo}){
    return(

    <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <div className=" w-[273px] h-[340px] flex-shrink rounded-2xl overflow-hidden shadow-md bg-white transform duration-200 hover:scale-95">

        <div className="relative">   

            <img className= "w-[273px] h-[182px] object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <p className="absolute bottom-2 left-3 text-white text-xl font-bold">
                {
                    restInfo?.info?.aggregatedDiscountInfoV3?.header
                }
                </p>
            </div>

        </div> 

        <div className="w-[95%] mx-auto mt-3"> 

            <div className="font-bold text-xl ">
                {restInfo.info.name}
            </div>

            <div className=" flex items-center gap-1 font-bold text-gray-600 text-lg">

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rounded-full"viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" className="fill-[#1C913D]" />
                    <path className="fill-white" d="M12 5.5l2.09 4.23 4.66.68-3.38 3.29.8 4.63L12 16.77l-4.17 2.2.8-4.63-3.38-3.29 4.66-.68z"/>
                </svg>

                <span>    
                    {restInfo?.info?.avgRatingString +", "}</span>
                <span>{restInfo?.info?.sla?.slaString}</span>

            </div>

            <div className=" text-gray-600">
                <p>{restInfo?.info?.cuisines[0]}</p>
                <p>{restInfo?.info?.areaName}</p>
            </div>
            </div>
        </div>
    </Link>   
    )
}
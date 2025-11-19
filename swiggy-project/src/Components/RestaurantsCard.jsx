export default function RestaurantsCard({restData}){
    return(
        <div className="flex-none w-[273px]">

        <div className="relative relative rounded-2xl overflow-hidden">   

            <img className= "w-full h-[182px] object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.info?.cloudinaryImageId}></img>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <p className="absolute bottom-2 left-3 text-white text-xl font-bold">
                {
                    restData?.info?.aggregatedDiscountInfoV3?.header
                }
                </p>
            </div>

        </div> 

        <div className="p-3"> 

            <div className="font-bold text-xl ">
                {restData.info.name}
            </div>

            <div className=" flex items-center gap-1 font-bold text-gray-600 text-lg">

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rounded-full"viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" className="fill-[#1C913D]" />
                    <path className="fill-white" d="M12 5.5l2.09 4.23 4.66.68-3.38 3.29.8 4.63L12 16.77l-4.17 2.2.8-4.63-3.38-3.29 4.66-.68z"/>
                </svg>

                <span>    
                    {restData?.info?.avgRatingString +", "}</span>
                <span>{restData?.info?.sla?.slaString}</span>

            </div>

            <div className=" text-gray-600">
                <p>{restData?.info?.cuisines[0]}</p>
                <p>{restData?.info?.areaName}</p>
            </div>

        </div>
        </div>
    )
}
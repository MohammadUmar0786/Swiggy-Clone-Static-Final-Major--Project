export default function DineCard({dineData}){

    // Dynamic offer shows
    const offerHeader = dineData?.info?.offerInfoV2?.otherOffers?.offers[0]?.header;
    return(
        <div className="max-w-sm flex-none rounded-xl shadow-md mb-10">
           <a target="_blank" href={dineData.cta.link}>
            <div className="relative">
                <img className="w-80 h-50 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+dineData?.info?.mediaFiles[0].url}></img>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <p className="absolute bottom-2 left-3 text-white text-xl font-bold">{dineData?.info?.name}</p>
                <p className="absolute bottom-2 right-3 text-white text-xl font-bold">{dineData?.info?.rating?.value}</p>
            </div>
           </a> 

           <div className="mt-2 text-gray-500 text-sm font-medium p-3">
            <div className="flex justify-between">
                <span>{dineData?.info?.cuisines[0]+ "-"+ dineData.info.cuisines[1]}</span>
                <span>{dineData?.info?.costForTwo}</span>
            </div>
            <div className="flex justify-between mt-1">
                <span>{dineData.info.locality+", "+ dineData.info.locationInfo.city.name}</span>
                <span>{dineData.info.locationInfo.distanceString}</span>
            </div>
           </div>
          
          
          {offerHeader && (
           <div className="flex justify-center bg-[#1BA672] text-white font-bold m-3 p-1 rounded-md">
            {offerHeader}
           </div>
           )}
        </div>
    )
}
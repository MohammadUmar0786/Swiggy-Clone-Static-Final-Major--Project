import {dineoutRestaurants} from "../Utils/DineData";
import DineCard from "./DineCard";

export default function DineOutOptions(){
    return(
        <div className="w-[80%] container mx-auto mt-25 mb-10">
        <h2 className="text-2xl font-bold mb-5">Discover best restaurants on Dineout</h2>
        <div className="flex flex-nowrap overflow-x-auto gap-5 hide-scrollbar">
            {dineoutRestaurants.map((dineData)=><DineCard key={dineData.info.id} dineData={dineData}></DineCard>)}
        </div>
        </div>
    )
}
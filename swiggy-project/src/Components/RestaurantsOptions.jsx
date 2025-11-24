import { TopRestaurants } from "../Utils/RestaurantsData";
import FoodOptions2 from "./FoodOptions2";
import RestaurantsCard from "./RestaurantsCard";
import AllRestaurantsOptions from "./AllRestaurantsOptions";

export default function RestaurantsOptions(){


    return(

        <>
        
        <FoodOptions2/>

        <div className="w-[80%] container mx-auto mt-15 mb-10">

                 <hr className="my-8 border-[1px] border-gray-200" />

            <h2 className="text-2xl font-bold mb-5">Top restaurant chains in Delhi</h2>

        <div className="flex flex-nowrap gap-8 overflow-x-auto hide-scrollbar">
            {TopRestaurants.map((restData)=> <RestaurantsCard restData={restData} key={restData?.info?.id}></RestaurantsCard>)}
        </div>
        </div>

        <AllRestaurantsOptions/>

        </>


    )

}
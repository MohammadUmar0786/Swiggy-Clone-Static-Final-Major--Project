import { AllRestaurantsData } from "../Utils/AllRestaurantsData";
import AllRestaurantsCards from "./AllRestaurantsCards";


export default function AllRestaurantsOptions(){


        return(

            <div className="w-[80%] container mx-auto mt-25 mb-10 ">

            <h2 className="text-2xl font-bold mb-5">Restaurants with online food delivery in Delhi</h2>

            <div className="flex flex-wrap gap-8">
            {AllRestaurantsData.map((restInfo)=> <AllRestaurantsCards restInfo={restInfo} key={restInfo?.info?.id}></AllRestaurantsCards>)}
            </div>
            </div>
    )

}
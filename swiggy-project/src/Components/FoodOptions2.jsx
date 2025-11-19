import { FoodData } from "../Utils/RestaurantsPageFoodData";
import FoodCard2 from "./FoodCard2";

export default function FoodOptions2(){

    return(

        <div className="mt-25">

        
            <h1 className="w-[77%] container mx-auto mb-7 text-2xl font-bold">What's on your mind?</h1>
                
                <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-5 hide-scrollbar">
                    
                {
                   FoodData.map((value)=><FoodCard2 value={value} key={value?.id}></FoodCard2>)
                }
                </div>
        
        </div>
    )
}
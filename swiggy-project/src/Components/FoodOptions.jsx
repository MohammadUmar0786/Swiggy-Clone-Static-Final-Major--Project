import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard"

export default function FoodOptions(){
    return(
    
        <div className="mt-25">

        <h1 className="w-[77%] container mx-auto mb-7 text-2xl font-bold">Order our best food options</h1>
        
        <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-5 hide-scrollbar">
            
        {
            imageGridCards.map((foodData)=> <FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
        }
        </div>

        </div>

    )
}
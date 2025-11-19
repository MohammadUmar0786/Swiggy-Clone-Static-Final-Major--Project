import { GroceryGridCards } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOptions(){
    return(
        <div className="mt-25">
            <h1 className="w-[77%] container mx-auto mb-7 text-2xl font-bold">Shop groceries on Instamart</h1>

            <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-8 hide-scrollbar">
                { GroceryGridCards.map((groceryData)=> <GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard>)}
            </div>
            
        </div>
    )
}
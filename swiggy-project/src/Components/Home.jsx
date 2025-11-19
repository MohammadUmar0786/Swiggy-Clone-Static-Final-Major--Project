import Header from "./Header";
import FoodOptions from "./FoodOptions";
import GroceryOptions from "./GroceryOptions";
import DineOutOptions from "./DineOutOptions";

export default function Home(){
    return(
        <>
            <Header></Header>
            <FoodOptions></FoodOptions>
            <GroceryOptions></GroceryOptions>
            <DineOutOptions></DineOutOptions>
        </>
    )
}
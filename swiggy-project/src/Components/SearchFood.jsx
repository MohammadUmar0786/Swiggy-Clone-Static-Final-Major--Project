import RestaurantMenuItem from "./RestaurantMenuItem";
import { useState,useEffect } from "react";
import { useParams } from "react-router"

export default function SearchFood(){

    const {id} = useParams();
    const [food, setFood] = useState("");
    const [menuData, setMenuData] = useState(null);
    const [selected, setSelected] =useState(null);

    useEffect(() => {
        async function fetchMenu() {
            const res = await fetch(`/Data/menu/${id}.json`);
            const data = await res.json();
            //console.log(data);
        setMenuData(data);

        }
        fetchMenu();
        }, [id]);

        // --- FLATTEN ALL DISHES FROM menuData ---
let allItems = [];

if (menuData) {
  const categories =
    menuData?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  categories.forEach((cat) => {
    const items = cat.card?.itemCards || [];
    items.forEach((item) => {
      // push the inner info object (dish)
      allItems.push(item.card.info);
    });
  });
}

// --- FILTER BASED ON search state `food` ---
let filteredFood = allItems;

if (food && food.trim() !== "") {
  const q = food.trim().toLowerCase();
  filteredFood = allItems.filter((it) =>
    it.name.toLowerCase().includes(q)
  );
}

    return(
        <div className="mt-30 w-[80%] mx-auto">
            <input className="w-full text-2xl bg-gray-200 border rounded-2xl pl-10 py-3" placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
            <div className="mt-10 space-y-5">

  {/* Don't show anything when search box is empty */}
  {food.trim() === "" ? null : (

    filteredFood.length === 0 ? (
      <p className="text-center text-gray-500">No items found</p>
    ) : (
      filteredFood.map((item) => (
        <RestaurantMenuItem key={item.id} info={item} />
      ))
    )

  )}
</div>

        </div>
    )
}
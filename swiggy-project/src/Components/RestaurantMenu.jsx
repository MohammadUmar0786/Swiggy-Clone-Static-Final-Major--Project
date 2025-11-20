import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [selected, setSelected] =useState(null);

  useEffect(() => {
    async function fetchMenu() {
      const res = await fetch(`/Data/menu/${id}.json`);
      const data = await res.json();
      setMenuData(data);
    }
    fetchMenu();
  }, [id]);

  if (!menuData) return <p className="text-center mt-10">Loading menu...</p>;

  const restaurantInfo = menuData?.data?.cards?.[0]?.card?.info;

  const categories = menuData?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="p-6 max-w-4xl mx-auto">

      {/* Restaurant Info */}
      <h1 className="text-3xl font-bold mb-2">{restaurantInfo?.name}</h1>
      <p className="text-gray-600 mb-6">
        {restaurantInfo?.cuisines?.join(", ")} • {restaurantInfo?.areaName}
      </p>

      {/* Loop through categories */}
      {categories.map((category, index) => {
        const title = category.card?.title;
        const items = category.card?.itemCards || [];
        if (!items.length) return null;

       // Filter: Veg & NonVeg
      
          let filteredItems = items;

          if (selected === "veg") {
            filteredItems = items.filter((i) => i.card.info.isVeg === true);
          }

          if (selected === "nonveg") {
            filteredItems = items.filter((i) => i.card.info.isVeg === false);
          }

        return (
       
          <div>
            <div className=" mt-10 mb-10">
              <button className= {`text-xl py-2 px-8 mr-4 border rounded-2xl ${selected=="veg"?"bg-green-600 text-white":"bg-gray-300"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
              <button className= {`text-xl py-2 px-8 mr-4 border rounded-2xl ${selected=="nonveg"?"bg-red-600 text-white":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non veg</button>
            </div>
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>

            <div className="space-y-4">
              {filteredItems.map((item) => (
                <RestaurantMenuItem key={item.card.info.id} info={item.card.info} />
              ))}
            </div>
          </div>
        </div>
        );
      })}
    </div>
  );
}

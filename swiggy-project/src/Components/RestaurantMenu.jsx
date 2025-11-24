import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";
import MenuNotAvailable from "./MenuNotAvailable";
import MenuLoader from "./MenuLoader";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true); // new

useEffect(() => {
  async function fetchMenu() {
    setLoading(true);               // start loading
    try {
      const res = await fetch(`/Data/menu/${id}.json`);
      const data = await res.json();
      setMenuData(data);
    } catch (err) {
      setMenuData(null);             // handle fetch errors
    } finally {
      setLoading(false);             // stop loading
    }
  }
  fetchMenu();
}, [id]);


if (loading) return <MenuLoader />;       // show shimmer while loading
if (!menuData) return <MenuNotAvailable />; // show unavailable only if data is null

  const restaurantInfo = menuData?.data?.cards?.[0]?.card?.info;

  const categories = menuData?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="p-6 max-w-4xl mx-auto pt-30">

      {/* Restaurant Info */}
      <h1 className="text-3xl font-bold mb-2">{restaurantInfo?.name}</h1>
      <p className="text-gray-600 mb-6">
        {restaurantInfo?.cuisines?.join(", ")} • {restaurantInfo?.areaName}
      </p>
      
          <div>
            <div className="flex items-center justify-center my-6">
              <span className="mx-3">🍽️</span>
              <h2 className="text-xl tracking-[0.3em] text-gray-700 font-semibold">MENU</h2>
              <span className="mx-3">🍽️</span>
          </div>

            <div className="mx-auto">
              <Link to={`/city/delhi/${id}/search`}>
                <p className="w-full text-center text-xl text-gray-600 bg-gray-200 p-2 rounded-2xl ">Search for dishes</p>
              </Link>
            </div>

            <div className=" mt-10 mb-10">
              <button className= {`text-xl py-2 px-8 mr-4 border rounded-2xl ${selected=="veg"?"bg-green-600 text-white":"bg-gray-300"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
              <button className= {`text-xl py-2 px-8 mr-4 border rounded-2xl ${selected=="nonveg"?"bg-red-600 text-white":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non veg</button>
            </div>

            {/* Loop through categories */}
      {categories.map((category, index) => {
        const title = category.card?.title;
        const items = category.card?.itemCards || [];
        if (!items.length) return null;

       // Filter: Veg & NonVeg
      
          let filteredItems = items;

          if (selected === "veg") 
            filteredItems = items.filter((i) => i.card.info.isVeg === true);          

          if (selected === "nonveg") 
            filteredItems = items.filter((i) => i.card.info.isVeg === false);
          
          return(
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>

            <div className="space-y-4">
              {filteredItems.map((item) => (
                <RestaurantMenuItem key={item.card.info.id} info={item.card.info} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
}

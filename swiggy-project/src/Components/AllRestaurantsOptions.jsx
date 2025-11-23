import { useState } from "react";
import { AllRestaurantsData } from "../Utils/AllRestaurantsData";
import AllRestaurantsCards from "./AllRestaurantsCards";
import RestFilter from "./RestFilter";

export default function AllRestaurantsOptions() {
  // Store all restaurants
  const [restaurants, setRestaurants] = useState(AllRestaurantsData);

  // Filter handler
  function handleFilter(type) {
  if (type === "RATING") {
    const filtered = AllRestaurantsData.filter(
      (item) => Number(item?.info?.avgRatingString) >= 4.5
    );
    setRestaurants(filtered);
  }

 // Delivery Time 15–20 min Filter
if (type === "DELIVERY_15_20") {
  const filtered = AllRestaurantsData.filter((item) => {
    const time = item?.info?.sla?.deliveryTime;
    return time >= 15 && time <= 20;
  });

  setRestaurants(filtered);
}

  if (type === "RESET") {
    setRestaurants(AllRestaurantsData);
  }
}


  return (

    <div className="w-[80%] container mx-auto mt-5 mb-10">

    <hr className="my-8 border-[1px] border-gray-200" />

      <h2 className="text-2xl font-bold mb-5">
        Restaurants with online food delivery in Delhi
      </h2>

      {/* Filter Component */}
      <RestFilter onFilter={handleFilter} />

      {/* Cards */}
      <div className="flex flex-wrap gap-8">
        {restaurants.map((restInfo) => (
          <AllRestaurantsCards
            restInfo={restInfo}
            key={restInfo?.info?.id}
          />
        ))}
      </div>
    </div>
  );
}

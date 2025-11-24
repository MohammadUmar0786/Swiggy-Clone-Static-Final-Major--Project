import { useState } from "react";
import { AllRestaurantsData } from "../Utils/AllRestaurantsData";
import AllRestaurantsCards from "./AllRestaurantsCards";
import RestFilter from "./RestFilter";

export default function AllRestaurantsOptions() {
  const BASE_DATA = AllRestaurantsData;

  // Extract price safely (₹250 for two → 250)
  function extractPrice(costString) {
    if (!costString) return 0;
    const match = costString.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  }

  // Store all restaurants
  const [restaurants, setRestaurants] = useState(BASE_DATA);

  // Filter handler
  function handleFilter(type) {

    // ⭐ Rating ≥ 4.5
    if (type === "RATING") {
      const filtered = BASE_DATA.filter(
        (item) => Number(item?.info?.avgRatingString) >= 4.5
      );
      setRestaurants(filtered);
    }

    // ⭐ Delivery Time 15–20
    if (type === "DELIVERY_15_20") {
      const filtered = BASE_DATA.filter((item) => {
        const time = item?.info?.sla?.deliveryTime;
        return time >= 15 && time <= 20;
      });
      setRestaurants(filtered);
    }

    // ⭐ Price Low → High
    if (type === "PRICE_LOW_HIGH") {
      const sorted = [...BASE_DATA].sort((a, b) => {
        const priceA = extractPrice(a?.info?.costForTwo);
        const priceB = extractPrice(b?.info?.costForTwo);
        return priceA - priceB;
      });
      setRestaurants(sorted);
    }

    // ⭐ Price High → Low
    if (type === "PRICE_HIGH_LOW") {
      const sorted = [...BASE_DATA].sort((a, b) => {
        const priceA = extractPrice(a?.info?.costForTwo);
        const priceB = extractPrice(b?.info?.costForTwo);
        return priceB - priceA;
      });
      setRestaurants(sorted);
    }

    // ⭐ Only Pure Veg
    if (type === "PURE_VEG") {
      const filtered = BASE_DATA.filter(
        (item) => item?.info?.veg === true
      );
      setRestaurants(filtered);
    }

    // ⭐ Reset
    if (type === "RESET") {
      setRestaurants(BASE_DATA);
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
        {restaurants.map((restInfo, index) => {
          // Prevent crashes from undefined data
          if (!restInfo || !restInfo.info) return null;

          return (
            <AllRestaurantsCards
              restInfo={restInfo}
              key={restInfo.info.id || index}
            />
          );
        })}
      </div>
    </div>
  );
}

import { useState } from "react";

export default function RestFilter({ onFilter }) {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex gap-3 my-5 mb-12 flex-wrap relative">

      {/* RATING */}
      <button
        onClick={() => onFilter("RATING")}
        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-sm font-medium"
      >
        Rating 4.5+
      </button>

      {/* DELIVERY */}
      <button
        onClick={() => onFilter("DELIVERY_15_20")}
        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-sm font-medium"
      >
        Delivery 15–20 min
      </button>

      {/* MORE FILTERS BUTTON */}
      <div className="relative">
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-sm font-medium"
        >
          More Filters ▾
        </button>

        {/* POPUP */}
        {showPopup && (
          <div className="absolute left-0 mt-2 bg-white shadow-xl rounded-xl p-4 w-56 z-50 border">

            <p className="font-semibold mb-2">Sort by Price</p>

            <button
              onClick={() => { onFilter("PRICE_LOW_HIGH"); setShowPopup(false); }}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
            >
              Low → High
            </button>

            <button
              onClick={() => { onFilter("PRICE_HIGH_LOW"); setShowPopup(false); }}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
            >
              High → Low
            </button>

            <hr className="my-3" />

            <button
              onClick={() => { onFilter("PURE_VEG"); setShowPopup(false); }}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
            >
              Pure Veg
            </button>

          </div>
        )}
      </div>

      {/* RESET BUTTON */}
      <button
        onClick={() => onFilter("RESET")}
        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-sm font-medium"
      >
        Reset
      </button>
    </div>
  );
}

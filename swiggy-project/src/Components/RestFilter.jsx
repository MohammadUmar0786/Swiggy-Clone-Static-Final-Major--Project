export default function RestFilter({ onFilter }) {
  return (
    <div className="flex gap-3 my-5 mb-12 flex-wrap">

      <button
        onClick={() => onFilter("RATING")}
        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-sm font-medium"
      >
        Rating 4.5+
      </button>
    
       <button
  onClick={() => onFilter("DELIVERY_15_20")}
  className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-sm font-medium"
>
  Delivery 15–20 min
</button>

      <button
        onClick={() => onFilter("RESET")}
        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-sm font-medium"
      >
        Reset
      </button>

    </div>
  );
}

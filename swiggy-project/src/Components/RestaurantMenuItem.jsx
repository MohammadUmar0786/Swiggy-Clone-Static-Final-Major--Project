export default function RestaurantMenuItem({ info }) {
  
  return (
    <div className="flex justify-between items-start border-b pb-3">

      <div>
        <h3 className="text-lg font-medium">{info.name}</h3>
        <p className="text-gray-600 text-sm">{info.description}</p>
        <p className="mt-1 font-semibold">₹{(info.price || info.defaultPrice) / 100}</p>
      </div>

      <div className="relative">

      {info.imageId && (
        <img
          src={`/foodImages/${info.imageId}`}
          alt={info.name}
          className="w-45 h-36 object-cover rounded-xl"
        />
      )}

      <button className="absolute bottom-1 left-14 text-lg text-green-600 font-bold shadow-md border border-white rounded-xl px-4 py-2 bg-white">Add</button>

      </div>
    </div>
  );
}

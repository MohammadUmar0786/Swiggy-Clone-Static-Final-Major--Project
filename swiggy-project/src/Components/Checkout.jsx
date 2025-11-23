// Checkout.jsx
import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector(state => state.cartslice.items);

  const grandTotal = items.reduce(
    (sum, item) =>
      sum + ((item.price || item.defaultPrice) / 100) * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto pt-28 px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
      
      {/* LEFT SIDE */}
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Your CheckOut</h1>

        {items.map(item => {
          const price = (item.price || item.defaultPrice) / 100;
          const total = price * item.quantity;

          return (
            <div
              key={item.id}
              className="bg-white p-4 md:p-5 rounded-xl shadow 
                         flex flex-col md:flex-row md:justify-between gap-4"
            >
              {/* IMAGE + LEFT DETAILS */}
              <div className="flex items-center gap-4">
                <img
                  src={`/foodImages/${item.imageId}`}
                  alt={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border"
                />

                <div>
                  <p className="text-lg md:text-xl font-bold">{item.name}</p>
                  <p className="text-gray-600">
                    ₹{price} ×{" "}
                    <span className="text-blue-600 font-bold">
                      {item.quantity}
                    </span>
                  </p>
                </div>
              </div>

              {/* TOTAL PRICE */}
              <p className="text-lg md:text-xl font-bold text-green-700 md:self-center">
                ₹{total}
              </p>
            </div>
          );
        })}
      </div>

      {/* RIGHT SUMMARY */}
      <div className="bg-white p-5 md:p-6 rounded-xl shadow h-fit">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        <p className="text-lg font-semibold mb-4">Items: {items.length}</p>

        <div className="flex justify-between text-xl font-bold mb-6">
          <span>Total</span>
          <span className="text-green-700">₹{grandTotal}</span>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 w-full py-3 rounded-xl text-white font-bold">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
}

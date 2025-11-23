//import { useState} from "react";
import {addItems, incrementItems, decrementItems} from "../Stored/CartSlicer";
import {useDispatch, useSelector} from "react-redux";

export default function RestaurantMenuItem({ info }) {

  const dispatch = useDispatch();
  // Cart: useState
  //const [count,setCount] = useState(0);  

  const items = useSelector(state => state.cartslice.items);
  const element = items.find(item=>item.id===info.id);
  const count = element? element.quantity:0;

  // Our 3 functions:

  function handleAddItems(){
    dispatch(addItems(info)); 
  }

  function handleIncrementItems(){
    dispatch(incrementItems(info));
  }

  function handleDecrementItems(){
    dispatch(decrementItems(info));
  }

  return (
    <div className="flex justify-between items-start border-b pb-3">

      <div>
        <h3 className="text-lg font-medium">{info.name}</h3>
        <p className="text-gray-600 text-sm">{info.description}</p>
        <p className="mt-1 font-semibold">₹{(info.price || info.defaultPrice) / 100}</p>
      </div>

      <div className=" relative h-42 ">

      {info.imageId && (
        <img
          src={`/foodImages/${info.imageId}`}
          alt={info.name}
          className="w-45 h-36 object-cover rounded-xl"
        />
      )}

      {
        (count===0)?(<button onClick={()=>handleAddItems()} className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xl w-[60%] text-green-600 font-bold shadow-md border border-white rounded-xl px-4 py-2 bg-white">Add</button>)
        :(<div className=" absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-3 text-xl text-green-600 font-bold shadow-md border border-white rounded-xl px-4 py-2 bg-white">
          <button onClick={()=>handleDecrementItems()}>-</button>
          <span>{count}</span>
          <button onClick={()=>handleIncrementItems()}>+</button>
        </div>
          )
      }

      </div>
    </div>
  );
}

import { useNavigate } from "react-router";

export default function MenuNotAvailable() {

  const navigate = useNavigate();

  return (
    <div className="mt-24 flex flex-col items-center text-center px-4 animate-fadeIn">

      {/* Floating Icon */}
      <div className="w-40 h-40 mb-6 animate-float">
        <img
          src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
          alt="Closed Icon"
          className="w-full h-full opacity-90"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-extrabold mb-3 tracking-wide">
        Restaurant Closed
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-md text-lg leading-relaxed">
        The menu is currently unavailable. We’ll refresh this page 
        as soon as the restaurant opens. Check again soon!
      </p>

      {/* Button animation */}
      <button onClick={()=>navigate(-1)} className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 animate-pop">
        Explore Other Restaurants
      </button>
    </div>
  );
}

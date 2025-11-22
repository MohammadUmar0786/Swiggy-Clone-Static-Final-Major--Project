export default function ExternalFeaturePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6 bg-white">

      {/* Animated Icon */}
      <div className="text-6xl mb-6 animate-bounce">🛍️</div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        This Feature Is Not Included
      </h1>

      {/* Message */}
      <p className="text-gray-600 max-w-lg text-lg leading-relaxed mb-8">
        This section is outside the scope of this Swiggy Clone project.  
        You can explore the original experience directly on Swiggy.
      </p>

      {/* Button → Opens real Swiggy Page */}
      <a
        href="https://www.swiggy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 text-lg rounded-xl bg-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
      >
        🔗 Open on Swiggy
      </a>

    </div>
  );
}

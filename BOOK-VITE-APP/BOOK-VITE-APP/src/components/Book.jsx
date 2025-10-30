export default function Book({ imageURL, title, price }) {
  const placeholder = "https://placehold.co/400x600?text=No+Image+Available";
  const giveAlert = (title) => {
    try {
      alert(`${title} added to the cart..`);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative w-full h-64">
        <img
          src={imageURL}
          alt={title}
          onError={(e) => (e.target.src = placeholder)}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-grow p-4 gap-3">
        <h1 className="text-xl font-semibold text-gray-800 line-clamp-2">
          {title}
        </h1>

        <p className="text-lg text-gray-700">
          Price: <span className="text-green-600 font-semibold">₹{price}</span>
        </p>

        <button
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition-colors duration-300"
          onClick={() => {
            giveAlert(title);
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

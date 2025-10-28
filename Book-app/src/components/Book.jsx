import React from "react";

export default function Book({ title, imageURL, price }) {
  const formattedPrice =
    typeof price === "number"
      ? new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(price)
      : price;

  return (
    <article className="max-w-xs bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
      <div className="relative h-60 w-full bg-gray-100 flex items-center justify-center">
        <img
          src={imageURL}
          alt={`Cover of ${title}`}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />

        <div className="absolute top-3 right-3 bg-white/85 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold shadow">
          {formattedPrice}
        </div>

        <button
          aria-label={`Add ${title} to wishlist`}
          className="absolute top-3 left-3 rounded-full p-2 bg-white/80 shadow-sm hover:scale-105 active:scale-95 transition-transform"
          title={`Add ${title} to wishlist`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657 3.172 11.83a4 4 0 010-5.657z" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <h3
          className="text-sm font-medium text-gray-900 line-clamp-2"
          title={title}
        >
          {title}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-500">Paperback</span>

          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 text-sm rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              aria-label={`Buy ${title}`}
            >
              Buy
            </button>

            <button
              className="px-3 py-1 text-sm rounded-lg border border-gray-200 bg-white hover:bg-gray-50 focus:outline-none"
              aria-label={`Preview ${title}`}
            >
              Preview
            </button>
          </div>
        </div>

        <div className="mt-3 text-xs text-gray-500">
          Free delivery • 3-5 business days
        </div>
      </div>
    </article>
  );
}

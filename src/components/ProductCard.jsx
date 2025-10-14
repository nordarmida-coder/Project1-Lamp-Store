import { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4" />
      <h3 className="text-lg font-bold text-center">{product.title}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <div className="mt-2 flex gap-2">
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Add to Cart
        </button>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`px-3 py-1 rounded ${isFavorite ? "bg-red-500 text-white" : "bg-gray-300"}`}
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
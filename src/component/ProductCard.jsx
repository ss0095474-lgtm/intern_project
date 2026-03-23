function ProductCard({product}) {
    return (
        <div className="bg-white p-4 rounded-xl-shadow
        hover:scale-105 transition">
            <img
             src={product.image}
             alt={product.title}
             className="h-40 mx-auto"
            />
            <h2 className="text-sm font-bold mt-2">{product.title}</h2>
            <p className="text-green-600 font-semibold mt-2">
              ₹{product.price}
            </p>
        </div>
    );
}

export default ProductCard;
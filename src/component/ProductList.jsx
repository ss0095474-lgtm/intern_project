import ProductCard from "./ProductCard";

function ProductList({products}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3
        lg:grid-cols-4 gap-6 p-4">
            {Array.isArray(products)&&
            products.map((item) => (
                <ProductCard key={item.id} product={item}/>
            ))
            }
        </div>
    );
}

export default ProductList;
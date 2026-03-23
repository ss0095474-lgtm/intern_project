import { useEffect, useState } from "react";
import Error from "./component/Error";
import Loader from "./component/Loader";
import SearchBar from "./component/searchbar";
import NavBar from "./component/Navbar";
import ProductList from "./component/ProductList";

function App() {
     const [products,setProducts] = useState([]);
     const [filtered,setFiltered] = useState([]);
     const [loading,setLoading] = useState(true);
     const [error,setError] = useState(null);


    useEffect(() => {
      fetch(`https://fakestoreapi.com/products`)
            .then((res) =>res.json())            
            .then((data) => {
              setProducts(data);
              setFiltered(data);
              setLoading(false);
            })

            .catch(() => {
              setError("failed to fetch data");
              setLoading(false);
            });
    }, []);

    const handleSearch = (query) => {
      const result = products.filter((item) => 
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  };

    return (
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <SearchBar onSearch = {handleSearch} />

        {loading && <Loader />}
        {error && <Error message={error}/>}
        {!loading && !error && <ProductList products={filtered}/>}
      </div>
    );
};    

export default App;

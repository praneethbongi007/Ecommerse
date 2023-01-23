import Header1 from "./components/header";
import Header from "./components/header1";
import Header2 from "./components/header2";
import Header3 from "./components/header3";
import PopularProducts from "./components/popularProducts";
import axios from "axios";
import { useEffect, useState } from "react";




function Home() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    });

    const fetchData = async () => {
        const resp = await axios.get("http://localhost:8000/products/all");
        setProducts(resp.data);
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div>

            <Header1 />
            <Header2 />
            <Header3 />
            <Header />
            <PopularProducts products={products} cart={cart} setCart={setCart} />

        </div>
    );
}

export default Home;

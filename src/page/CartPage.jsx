import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../component/landing/Footer"
import Navbar from "../component/landing/Navbar"

const CartPage = () => {
    const [orders, setOrders] = useState([]);
    const getOrders = async () => {
        const { data } = await axios.get(`http://localhost:3001/orders`);
        setOrders(data);
    }
    useEffect(() => {
        getOrders();
    }, []);
    return (
        <div>
            <h4>Tas Belanja</h4>
            <div>
                {orders.map((order) => (
                    <div key={order.id}>
                        <img src={order.cover}></img>
                        <p>{order.title}</p>
                        <p>{order.weight}</p>
                        <p>Rp {order.price}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}
export default CartPage
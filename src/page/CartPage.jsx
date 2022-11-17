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
    const deleteOrder = x => async () => {
        try {
            await axios.delete(`http://localhost:3001/orders/${x}`)
        } catch (e) {
            console.log(e)
        } finally { //no matter success or fail
            getOrders() // refresh
        }
    }
    const increaseOrder = (x, y) => async () => {
        await axios.patch(
            `http://localhost:3001/orders/${x}`,
            { count: y + 1 }
        )
        getOrders()
    }
    const decreaseOrder = (x, y) => async () => {
        if (y != 1) {
            await axios.patch(
                `http://localhost:3001/orders/${x}`,
                { count: y - 1 }
            )
            getOrders()
        } else {
            return
        }
    }
    return (
        <div>
            <h4>Tas Belanja</h4>
            <div>
                {orders.map((order, index) => (
                    <div key={order.id}>
                        <img src={order.cover}></img>
                        <p>{order.title}</p>
                        <p>{order.weight}</p>
                        <p>Rp {order.price}</p>
                        <button onClick={decreaseOrder(order.id, order.count)}>-</button>
                        <span>{order.count}</span>
                        <button onClick={increaseOrder(order.id, order.count)}>+</button>
                        <button onClick={deleteOrder(order.id)}>Hapus</button>
                        <p>Total Pesanan {index + 1} : {order.price * order.count}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}
export default CartPage
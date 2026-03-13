import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaShoppingBag, FaCalendar, FaReceipt } from "react-icons/fa";

const Orders = () => {
  const orders = useSelector((state) => state.orders);
  const navigate = useNavigate();

  if (orders.length === 0) {
    return (
      <main>
        <div className="orders-empty">
          <FaShoppingBag size={80} color="#d4d5d9" />
          <h2>No Orders Yet</h2>
          <p>You haven't placed any orders yet.</p>
          <button className="btn-primary" onClick={() => navigate("/")}>
            Start Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="orders-container">
        <h1 className="orders-title">My Orders</h1>
        <p className="orders-subtitle">View all your orders and track deliveries</p>

        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div className="order-info">
                  <h3 className="order-id">
                    <FaReceipt /> Order #{order.paymentId}
                  </h3>
                  <p className="order-date">
                    <FaCalendar /> {order.orderDate}
                  </p>
                </div>
                <div className="order-status">
                  <span className="status-badge confirmed">Confirmed</span>
                </div>
              </div>

              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.item_name} className="order-item-image" />
                    <div className="order-item-details">
                      <p className="order-item-name">{item.item_name}</p>
                      <p className="order-item-company">{item.company}</p>
                      <p className="order-item-price">₹{item.current_price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <div className="order-total">
                  <span>Total Amount:</span>
                  <span className="total-amount">₹{order.totalAmount}</span>
                </div>
                <div className="order-delivery">
                  <span className="delivery-status">Expected Delivery: 3-5 days</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Orders;

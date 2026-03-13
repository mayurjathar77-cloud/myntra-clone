import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ordersActions } from "../store/ordersSlice";
import { EMAIL_CONFIG } from "../data/emailConfig";
import { FaCheckCircle, FaBox, FaTruck } from "react-icons/fa";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [countdown, setCountdown] = useState(10);
  const [emailSent, setEmailSent] = useState(false);
  const orderSaved = useRef(false); // Prevent duplicate saves

  const orderData = location.state || {};
  const {
    paymentId = "DEMO" + Date.now(),
    totalAmount = 0,
    items = [],
    orderDate = new Date().toLocaleString(),
  } = orderData;

  useEffect(() => {
    if (orderData.paymentId && !orderSaved.current) {
      orderSaved.current = true; // Mark as saved
      dispatch(ordersActions.addOrder(orderData));
      sendEmailNotification(orderData);
    }
  }, []); // Run only once on mount

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const sendEmailNotification = async (order) => {
    try {
      const emailData = {
        to: EMAIL_CONFIG.RECIPIENT_EMAIL,
        subject: EMAIL_CONFIG.SUBJECT_TEMPLATE(order.paymentId),
        orderDetails: {
          paymentId: order.paymentId,
          orderDate: order.orderDate,
          totalAmount: order.totalAmount,
          items: order.items.map(item => ({
            name: item.item_name,
            company: item.company,
            price: item.current_price,
            image: item.image
          })),
          itemCount: order.items.length
        }
      };

      const response = await fetch(EMAIL_CONFIG.FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailData.to,
          subject: emailData.subject,
          message: `
Order Confirmation
==================

Payment ID: ${emailData.orderDetails.paymentId}
Order Date: ${emailData.orderDetails.orderDate}
Total Amount: ₹${emailData.orderDetails.totalAmount}
Total Items: ${emailData.orderDetails.itemCount}

Ordered Items:
${emailData.orderDetails.items.map((item, index) => `
${index + 1}. ${item.name}
   Company: ${item.company}
   Price: ₹${item.price}
`).join('')}

Thank you for your order!
Myntra Clone Store
          `
        }),
      });

      if (response.ok) {
        setEmailSent(true);
        console.log("Email notification sent successfully to", EMAIL_CONFIG.RECIPIENT_EMAIL);
      }
    } catch (error) {
      console.error("Failed to send email notification:", error);
    }
  };

  return (
    <main>
      <div className="order-success-container">
        <div className="success-card">
          <div className="success-icon">
            <FaCheckCircle size={80} color="#4CAF50" />
          </div>
          
          <h1 className="success-title">Payment Successful!</h1>
          <p className="success-message">
            Thank you for your order. Your payment has been processed successfully.
          </p>

          <div className="order-details-box">
            <h3>Order Details</h3>
            <div className="detail-row">
              <span className="detail-label">Payment ID:</span>
              <span className="detail-value">{paymentId}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Order Date:</span>
              <span className="detail-value">{orderDate}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Total Amount:</span>
              <span className="detail-value amount">₹{totalAmount}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Items Ordered:</span>
              <span className="detail-value">{items.length} items</span>
            </div>
          </div>

          {items.length > 0 && (
            <div className="ordered-items">
              <h3>Your Items</h3>
              <div className="items-grid">
                {items.slice(0, 4).map((item) => (
                  <div key={item.id} className="success-item">
                    <img src={item.image} alt={item.item_name} />
                    <p className="item-name">{item.item_name}</p>
                  </div>
                ))}
              </div>
              {items.length > 4 && (
                <p className="more-items-text">+{items.length - 4} more items</p>
              )}
            </div>
          )}

          <div className="delivery-timeline">
            <h3>What's Next?</h3>
            <div className="timeline">
              <div className="timeline-item">
                <FaCheckCircle className="timeline-icon completed" />
                <div className="timeline-content">
                  <h4>Order Confirmed</h4>
                  <p>Your order has been placed successfully</p>
                </div>
              </div>
              <div className="timeline-item">
                <FaBox className="timeline-icon" />
                <div className="timeline-content">
                  <h4>Processing</h4>
                  <p>We're preparing your items</p>
                </div>
              </div>
              <div className="timeline-item">
                <FaTruck className="timeline-icon" />
                <div className="timeline-content">
                  <h4>Delivery</h4>
                  <p>Expected delivery in 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn-primary" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
            <button className="btn-secondary" onClick={() => navigate("/orders")}>
              View Orders
            </button>
          </div>

          {emailSent && (
            <p className="email-confirmation">
              ✉️ Order confirmation sent to {EMAIL_CONFIG.RECIPIENT_EMAIL}
            </p>
          )}

          <p className="redirect-message">
            Redirecting to home in {countdown} seconds...
          </p>
        </div>
      </div>
    </main>
  );
};

export default OrderSuccess;

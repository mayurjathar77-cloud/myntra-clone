import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { RAZORPAY_CONFIG } from "../data/razorpayConfig";
import "../css/Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  
  const paymentData = location?.state || {};
  const [amount] = useState(paymentData.finalPayment || 0);
  const [totalMRP] = useState(paymentData.totalMRP || 0);
  const [totalDiscount] = useState(paymentData.totalDiscount || 0);
  const [totalItems] = useState(paymentData.totalItems || 0);
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    setLoading(true);

    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      setLoading(false);
      return;
    }

    const options = {
      key: RAZORPAY_CONFIG.KEY_ID,
      amount: amount * 100, // Razorpay expects amount in paise
      currency: RAZORPAY_CONFIG.CURRENCY,
      name: RAZORPAY_CONFIG.COMPANY_NAME,
      description: `Purchase of ${totalItems} items`,
      image: RAZORPAY_CONFIG.COMPANY_LOGO,
      handler: function (response) {
        // Payment successful
        dispatch(bagActions.clearBag());
        navigate("/order-success", {
          state: {
            paymentId: response.razorpay_payment_id,
            totalAmount: amount,
            items: paymentData.items || [],
            orderDate: new Date().toLocaleString(),
          }
        });
      },
      prefill: {
        name: "",
        email: "jatharmayur628@gmail.com",
        contact: ""
      },
      theme: {
        color: RAZORPAY_CONFIG.THEME_COLOR
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  const handleMockPayment = () => {
    setLoading(true);
    
    setTimeout(() => {
      dispatch(bagActions.clearBag());
      navigate("/order-success", {
        state: {
          paymentId: "MOCK_PAY_" + Date.now(),
          totalAmount: amount,
          items: paymentData.items || [],
          orderDate: new Date().toLocaleString(),
        }
      });
    }, 1500);
  };

  const isRazorpayConfigured = RAZORPAY_CONFIG.KEY_ID !== "YOUR_RAZORPAY_KEY_HERE";

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p className="loading-text">Processing Payment...</p>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h1 className="payment-header">💳 Payment</h1>

      {!isRazorpayConfigured && (
        <div className="alert-banner" style={{
          background: '#fff3cd',
          border: '1px solid #ffc107',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <strong>Demo Mode:</strong> Razorpay not configured. Using mock payment.
          <br/>
          <small>To enable real payments, add your Razorpay key in razorpayConfig.js</small>
        </div>
      )}

      <div className="summary-card">
        <p className="label">Total Items: {totalItems}</p>
        <p className="label">Total MRP: ₹{totalMRP}</p>
        <p className="label" style={{ color: 'green' }}>Discount: -₹{totalDiscount}</p>
        <p className="label">Convenience Fee: ₹99</p>
        <hr style={{ margin: '10px 0' }} />
        <p className="label">Total Amount:</p>
        <p className="amount">₹{amount}</p>
      </div>

      {paymentData.items && paymentData.items.length > 0 && (
        <div className="items-preview" style={{
          marginTop: '20px',
          padding: '15px',
          background: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Items in Order:</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {paymentData.items.slice(0, 3).map((item) => (
              <div key={item.id} style={{
                width: '80px',
                textAlign: 'center'
              }}>
                <img src={item.image} alt={item.item_name} style={{
                  width: '100%',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }} />
                <p style={{ fontSize: '10px', marginTop: '5px' }}>{item.item_name.substring(0, 20)}...</p>
              </div>
            ))}
            {paymentData.items.length > 3 && (
              <div style={{
                width: '80px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#e9ecef',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                +{paymentData.items.length - 3} more
              </div>
            )}
          </div>
        </div>
      )}

      <button 
        className="pay-button" 
        onClick={isRazorpayConfigured ? handleRazorpayPayment : handleMockPayment}
        style={{ marginTop: '20px' }}
      >
        {isRazorpayConfigured ? `Pay ₹${amount} with Razorpay` : `Pay ₹${amount} (Demo Mode)`}
      </button>
    </div>
  );
};

export default Payment;

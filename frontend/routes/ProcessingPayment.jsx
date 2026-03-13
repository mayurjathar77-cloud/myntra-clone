import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProcessingPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.state) {
        navigate("/order-success", { state: location.state });
      } else {
        navigate("/");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <main>
      <div className="processing-container">
        <div className="processing-card">
          <div className="processing-animation">
            <div className="spinner-large"></div>
          </div>
          
          <h2 className="processing-title">Processing Your Payment</h2>
          <p className="processing-message">
            Please wait while we confirm your payment...
          </p>
          
          <div className="processing-steps">
            <div className="step active">
              <div className="step-icon">✓</div>
              <p>Payment Initiated</p>
            </div>
            <div className="step active">
              <div className="step-icon">⟳</div>
              <p>Verifying Payment</p>
            </div>
            <div className="step">
              <div className="step-icon">✓</div>
              <p>Order Confirmed</p>
            </div>
          </div>

          <p className="processing-note">
            Do not refresh or close this page
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProcessingPayment;

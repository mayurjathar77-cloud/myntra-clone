import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { bagActions } from "../store/bagSlice";
import { profileActions } from "../store/profileSlice";

const MockPayment = () => {
    const bagItemIds = useSelector((state) => state.bag);
    const items = useSelector((state) => state.items);
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);

    const finalItems = items.filter((item) => {
        const itemIndex = bagItemIds.indexOf(item.id);
        return itemIndex >= 0;
    });

    const CONVENIENCE_FEES = 99;
    let totalMRP = 0;
    let totalDiscount = 0;

    finalItems.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    const handleMockPayment = async () => {
        if (bagItemIds.length === 0) {
            alert('Your bag is empty!');
            navigate('/bag');
            return;
        }

        setProcessing(true);

        // Simulate payment processing
        setTimeout(async () => {
            const mockPaymentId = 'pay_mock_' + Date.now();
            
            const orderData = {
                items: finalItems,
                totalAmount: finalPayment,
                orderDate: new Date().toISOString(),
                status: 'Confirmed',
                paymentId: mockPaymentId,
                customerEmail: profile.email,
                customerName: profile.name
            };

            try {
                const res = await fetch('http://localhost:8081/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(orderData),
                });

                if (!res.ok) {
                    throw new Error('Failed to place order');
                }

                const data = await res.json();

                // Update profile
                const updatedProfile = {
                    ...profile,
                    totalOrders: profile.totalOrders + 1,
                    loyaltyPoints: profile.loyaltyPoints + Math.floor(finalPayment / 10)
                };

                await fetch('http://localhost:8081/profile', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedProfile),
                });

                dispatch(profileActions.updateProfile(updatedProfile));
                dispatch(bagActions.clearBag());

                alert(`Payment Successful! (Mock Payment)\nOrder ID: ${data.order.id}\nPayment ID: ${mockPaymentId}\nYou earned ${Math.floor(finalPayment / 10)} loyalty points!\n\nEmail sent to: jatharmayur628@gmail.com`);
                navigate('/');
            } catch (error) {
                console.error('Error placing order:', error);
                alert('Payment failed. Please try again.');
            } finally {
                setProcessing(false);
            }
        }, 2000); // 2 second delay to simulate payment processing
    };

    return (
        <main>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg border-0">
                            <div className="card-header text-white text-center" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px'}}>
                                <h3>Payment Summary</h3>
                                <small className="badge bg-warning text-dark mt-2">Demo Mode - Mock Payment</small>
                            </div>
                            <div className="card-body p-4">
                                <div className="mb-3">
                                    <h5>Order Details</h5>
                                    <p className="mb-1">Total Items: {bagItemIds.length}</p>
                                    <p className="mb-1">Total MRP: ₹{totalMRP}</p>
                                    <p className="mb-1 text-success">Discount: -₹{totalDiscount}</p>
                                    <p className="mb-1">Convenience Fee: ₹{CONVENIENCE_FEES}</p>
                                    <hr/>
                                    <h4>Total Amount: ₹{finalPayment}</h4>
                                </div>
                                <div className="mb-3">
                                    <h5>Delivery Address</h5>
                                    <p className="mb-0">{profile.name}</p>
                                    <p className="mb-0">{profile.address.street}</p>
                                    <p className="mb-0">{profile.address.city}, {profile.address.state} - {profile.address.pincode}</p>
                                    <p className="mb-0">{profile.phone}</p>
                                </div>
                                <div className="alert alert-info">
                                    <small>
                                        <strong>Demo Mode:</strong> This is a simulated payment. No real money will be charged.
                                        Order confirmation will be sent to jatharmayur628@gmail.com
                                    </small>
                                </div>
                                <button 
                                    onClick={handleMockPayment} 
                                    disabled={processing}
                                    className="btn btn-lg w-100" 
                                    style={{
                                        background: processing ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                                        color: 'white', 
                                        border: 'none', 
                                        borderRadius: '25px'
                                    }}
                                >
                                    {processing ? 'Processing Payment...' : `Pay ₹${finalPayment} (Demo)`}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MockPayment;

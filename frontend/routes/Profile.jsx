import { useSelector, useDispatch } from "react-redux";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave, FaTimes, FaCamera, FaBirthdayCake, FaVenusMars, FaCalendarAlt, FaShoppingBag, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { profileActions } from "../store/profileSlice";

const Profile = () => {
    const profile = useSelector((store) => store.profile);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(profile);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await fetch('http://localhost:8081/profile');
            const data = await response.json();
            if (data.profile) {
                dispatch(profileActions.updateProfile(data.profile));
                setFormData(data.profile);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching profile:', error);
            setLoading(false);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
        setFormData(profile);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData(profile);
    };

    const handleSave = async () => {
        try {
            console.log('Saving profile:', formData);
            const response = await fetch('http://localhost:8081/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (!response.ok) {
                throw new Error('Failed to save profile');
            }
            
            const data = await response.json();
            console.log('Profile saved:', data);
            dispatch(profileActions.updateProfile(formData));
            setIsEditing(false);
            alert('Profile saved successfully!');
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Failed to save profile. Check console for details.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('address.')) {
            const addressField = name.split('.')[1];
            setFormData({
                ...formData,
                address: { ...formData.address, [addressField]: value }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, avatar: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    if (loading) {
        return (
            <main>
                <div className="container mt-5 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-lg border-0">
                            <div className="card-header bg-gradient text-white text-center" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '30px'}}>
                                <div className="mb-3 position-relative d-inline-block">
                                    <img src={isEditing ? formData.avatar : profile.avatar} alt="Profile" className="rounded-circle img-thumbnail shadow" style={{width: '120px', height: '120px', objectFit: 'cover', border: '4px solid white'}} />
                                    {isEditing && (
                                        <label htmlFor="imageUpload" className="position-absolute" style={{bottom: '0', right: '0', background: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.2)'}}>
                                            <FaCamera size={20} color="#667eea" />
                                            <input type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} style={{display: 'none'}} />
                                        </label>
                                    )}
                                </div>
                                <h2 className="mb-0">{profile.name}</h2>
                                <p className="mb-0 mt-2" style={{fontSize: '14px', opacity: '0.9'}}>Member Since {profile.memberSince}</p>
                            </div>
                            <div className="card-body p-4">
                                <div className="row mb-4">
                                    <div className="col-md-4 text-center">
                                        <div className="p-3 bg-light rounded">
                                            <FaShoppingBag size={30} color="#667eea" />
                                            <h4 className="mt-2 mb-0">{profile.totalOrders}</h4>
                                            <small className="text-muted">Total Orders</small>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="p-3 bg-light rounded">
                                            <FaStar size={30} color="#FFD700" />
                                            <h4 className="mt-2 mb-0">{profile.loyaltyPoints}</h4>
                                            <small className="text-muted">Loyalty Points</small>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="p-3 bg-light rounded">
                                            <FaCalendarAlt size={30} color="#667eea" />
                                            <h4 className="mt-2 mb-0">{new Date().getFullYear() - profile.memberSince}</h4>
                                            <small className="text-muted">Years Active</small>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4"/>
                                <div className="row mb-4">
                                    <div className="col-md-6 mb-3">
                                        <div className="d-flex align-items-center p-3 bg-light rounded">
                                            <FaVenusMars size={24} color="#667eea" className="me-3" />
                                            <div className="flex-grow-1">
                                                <small className="text-muted d-block">Gender</small>
                                                {isEditing ? (
                                                    <select name="gender" value={formData.gender} onChange={handleChange} className="form-control">
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                ) : (
                                                    <strong>{profile.gender}</strong>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="d-flex align-items-center p-3 bg-light rounded">
                                            <FaBirthdayCake size={24} color="#667eea" className="me-3" />
                                            <div className="flex-grow-1">
                                                <small className="text-muted d-block">Date of Birth</small>
                                                {isEditing ? (
                                                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="form-control" />
                                                ) : (
                                                    <strong>{new Date(profile.dateOfBirth).toLocaleDateString('en-IN', {day: 'numeric', month: 'long', year: 'numeric'})}</strong>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <div className="d-flex align-items-center p-3 bg-light rounded">
                                            <FaEnvelope size={24} color="#667eea" className="me-3" />
                                            <div className="flex-grow-1">
                                                <small className="text-muted d-block">Email Address</small>
                                                {isEditing ? (
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
                                                ) : (
                                                    <strong>{profile.email}</strong>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <div className="d-flex align-items-center p-3 bg-light rounded">
                                            <FaPhone size={24} color="#667eea" className="me-3" />
                                            <div className="flex-grow-1">
                                                <small className="text-muted d-block">Phone Number</small>
                                                {isEditing ? (
                                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" />
                                                ) : (
                                                    <strong>{profile.phone}</strong>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-12">
                                        <div className="d-flex align-items-start p-3 bg-light rounded">
                                            <FaMapMarkerAlt size={24} color="#667eea" className="me-3 mt-1" />
                                            <div className="flex-grow-1">
                                                <small className="text-muted d-block">Address</small>
                                                {isEditing ? (
                                                    <div>
                                                        <input type="text" name="address.street" value={formData.address.street} onChange={handleChange} className="form-control mb-2" placeholder="Street" />
                                                        <input type="text" name="address.city" value={formData.address.city} onChange={handleChange} className="form-control mb-2" placeholder="City" />
                                                        <input type="text" name="address.state" value={formData.address.state} onChange={handleChange} className="form-control mb-2" placeholder="State" />
                                                        <input type="text" name="address.pincode" value={formData.address.pincode} onChange={handleChange} className="form-control" placeholder="Pincode" />
                                                    </div>
                                                ) : (
                                                    <strong>
                                                        {profile.address.street}<br/>
                                                        {profile.address.city}, {profile.address.state}<br/>
                                                        PIN: {profile.address.pincode}
                                                    </strong>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    {isEditing ? (
                                        <>
                                            <button onClick={handleSave} className="btn btn-lg px-4 me-2" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '25px'}}>
                                                <FaSave className="me-2" />
                                                Save
                                            </button>
                                            <button onClick={handleCancel} className="btn btn-lg btn-secondary px-4" style={{borderRadius: '25px'}}>
                                                <FaTimes className="me-2" />
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <button onClick={handleEdit} className="btn btn-lg px-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '25px'}}>
                                            <FaEdit className="me-2" />
                                            Edit Profile
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;

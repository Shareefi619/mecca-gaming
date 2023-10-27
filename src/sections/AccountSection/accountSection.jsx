import React, { useState } from "react";
import { author } from "../../assets/images";
import { Link } from "react-router-dom";

const AccountSection = () => {
    const [activeFilter, setActiveFilter] = useState("dashboard");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const isFilterActive = (filter) => {
        return activeFilter === filter ? "active" : "";
    };

    return (
        <>
            <div className="rts-account-section section-gap">
                <div className="container">
                    <div className="account-inner">
                        <div className="account-side-navigation">
                            <button
                                className={`filter-btn ${isFilterActive("dashboard")}`}
                                data-show=".dashboard"
                                onClick={() => handleFilterClick("dashboard")}
                            >
                                <i className="fal fa-chart-bar" />
                                Dashboard
                            </button>
                            <button
                                className={`filter-btn ${isFilterActive("orders")}`}
                                data-show=".orders"
                                onClick={() => handleFilterClick("orders")}
                            >
                                <i className="fal fa-shopping-cart" /> Orders
                            </button>
                            <button
                                className={`filter-btn ${isFilterActive("address")}`}
                                data-show=".address"
                                onClick={() => handleFilterClick("address")}
                            >
                                <i className="fal fa-map-marker-alt" />
                                Address
                            </button>
                            <button
                                className={`filter-btn ${isFilterActive("accountdtls")}`}
                                data-show=".accountdtls"
                                onClick={() => handleFilterClick("accountdtls")}
                            >
                                <i className="fal fa-user" /> Account Details
                            </button>
                            <Link
                                to="/login"
                                className={`filter-btn ${isFilterActive("logout")}`}
                                data-show=".dashboard"
                                onClick={() => handleFilterClick("dashboard")}
                            >
                                <i className="fal fa-long-arrow-left" />
                                Logout
                            </Link>
                        </div>
                        <div className="account-main-area">
                            <div className={`account-main dashboard filterd-items ${activeFilter === "dashboard" ? "" : "hide"}`}>
                                <div className="account-profile-area">
                                    <div className="profile-dp">
                                        <img src={author} alt="profile-dp" />
                                    </div>
                                    <div className="d-block">
                                        <span className="profile-name">
                                            <span>Hi,</span> Rosalina D.
                                        </span>
                                        <span className="profile-date d-block">June 23, 2023</span>
                                    </div>
                                </div>
                                <p>
                                    From your account dashboard you can view your recent orders,
                                    manage your shipping and billing addresses, and edit your password
                                    and account details.
                                </p>
                                <div className="activity-box">
                                    <div className="activity-item">
                                        <div className="icon">
                                            <i className="fas fa-box-check" />
                                        </div>
                                        <span className="title">Active Orders</span>
                                        <span className="value">33</span>
                                    </div>
                                    <div className="activity-item">
                                        <div className="icon">
                                            <i className="fas fa-download" />
                                        </div>
                                        <span className="title">Downloads</span>
                                        <span className="value">10</span>
                                    </div>
                                    <div className="activity-item">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt" />
                                        </div>
                                        <span className="title">Address</span>
                                        <span className="value">12/A, New Castle, NYC</span>
                                    </div>
                                    <div className="activity-item">
                                        <div className="icon">
                                            <i className="fas fa-user" />
                                        </div>
                                        <span className="title">Account Details</span>
                                        <span className="value">33</span>
                                    </div>
                                    <div className="activity-item">
                                        <div className="icon">
                                            <i className="fas fa-heart" />
                                        </div>
                                        <span className="title">Wishlist</span>
                                        <span className="value">33</span>
                                    </div>
                                    <Link to="/login" className="activity-item">
                                        <div className="icon">
                                            <i className="fas fa-sign-out-alt" />
                                        </div>
                                        <span className="title">Logout</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={`account-main orders filterd-items ${activeFilter === "orders" ? "" : "hide"}`}>
                                <h2 className="mb--30">My Orders</h2>
                                <table className="table">
                                    <thead>
                                        <tr className="top-tr">
                                            <th>Order</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1357</td>
                                            <td>March 45, 2020</td>
                                            <td>Processing</td>
                                            <td>$125.00 for 2 item</td>
                                            <td>
                                                <Link to="#" className="btn-small d-block">
                                                    View
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#2468</td>
                                            <td>June 29, 2020</td>
                                            <td>Completed</td>
                                            <td>$364.00 for 5 item</td>
                                            <td>
                                                <Link to="#" className="btn-small d-block">
                                                    View
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#2366</td>
                                            <td>August 02, 2020</td>
                                            <td>Completed</td>
                                            <td>$280.00 for 3 item</td>
                                            <td>
                                                <Link to="#" className="btn-small d-block">
                                                    View
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={`account-main address filterd-items ${activeFilter === "address" ? "" : "hide"}`}>
                                <div className="row">
                                    <div className="col-xl-5 col-md-5">
                                        <div className="billing-address">
                                            <h2 className="mb--30">Billing Address</h2>
                                            <address>
                                                3522 Interstate
                                                <br />
                                                75 Business Spur,
                                                <br />
                                                Sault Ste. <br />
                                                Marie, MI 49783
                                            </address>
                                            <p className="mb--10">New York</p>
                                            <Link to="#" className="btn-small">
                                                Edit
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-5">
                                        <div className="shipping-address">
                                            <h4 className="mb--30">Shipping Address</h4>
                                            <address>
                                                4299 Express Lane
                                                <br />
                                                Sarasota, <br />
                                                FL 34249 USA <br />
                                                Phone: 1.941.227.4444
                                            </address>
                                            <p className="mb--10">Sarasota</p>
                                            <Link to="#" className="btn-small">
                                                Edit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`account-main accountdtls filterd-items ${activeFilter === "accountdtls" ? "" : "hide"}`}>
                                <div className="login-form">
                                    <div className="section-title">
                                        <h2>Login</h2>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <form>
                                                <div className="form">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="username"
                                                        placeholder="Username or email address*"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form">
                                                    <div className="password-input">
                                                        <input
                                                            type={showPassword ? "text" : "password"}
                                                            className="form-control"
                                                            id="password"
                                                            placeholder="Password*"
                                                            required=""
                                                        />
                                                        <span
                                                            className="show-password-input"
                                                            onClick={togglePasswordVisibility}
                                                        >
                                                            {showPassword ? (
                                                                <i className="fas fa-eye-slash"></i>
                                                            ) : (
                                                                <i className="fas fa-eye"></i>
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="remember"
                                                    />
                                                    &nbsp;
                                                    <label htmlFor="remember" className="form-label">
                                                        Remember Me
                                                    </label>
                                                </div>
                                                <div className="form">
                                                    <button type="submit" className="btn">
                                                        Login <i className="fal fa-long-arrow-right" />
                                                    </button>
                                                </div>
                                                <Link className="forgot-passwordLink" to="#">
                                                    Lost your password?
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountSection;

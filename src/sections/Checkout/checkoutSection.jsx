import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
const CheckoutSection = () => {
    const [couponInputVisible, setCouponInputVisible] = useState(false); // State to control the visibility of coupon input


    const toggleCouponInput = () => {
        setCouponInputVisible(!couponInputVisible);
    };


    return (
        <>
            {/*================= Checkout Section strat Here =================*/}
            <div className="rts-checkout-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-8">
                            <div className="coupon-area">
                                <div className="coupon-ask">
                                    <span>Have a coupon?</span>
                                    <button className="coupon-click" onClick={toggleCouponInput}>
                                        &nbsp;Click here to enter your code
                                    </button>
                                </div>
                                <div className={`coupon-input-area${couponInputVisible ? ' show' : ''}`}>
                                    <input type="text" placeholder="Enter Coupon Code..." />
                                    <button type="submit" className="apply-btn">
                                        Apply Coupon
                                    </button>
                                </div>
                            </div>
                            <form className="checkout-form">
                                <div className="row">
                                    <div className="col-xl-6  col-md-6">
                                        <div className="input-div">
                                            <input type="text" placeholder="First name**" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6  col-md-6">
                                        <div className="input-div">
                                            <input type="text" placeholder="Last name**" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6  col-md-6">
                                        <select>
                                            <option value="us">Country/Region</option>
                                            <option value="us">USA</option>
                                            <option value="ast">Australia</option>
                                            <option value="cnd">Canada</option>
                                            <option value="bd">Bangladesh</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="input-div">
                                            <input type="text" placeholder="State**" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-md-6">
                                        <div className="input-div">
                                            <input type="text" placeholder="Town/City**" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="input-div">
                                            <input type="text" placeholder="Zip Code**" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-md-6">
                                        <div className="input-div">
                                            <input type="text" placeholder="Street Address**" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="input-div">
                                            <input
                                                type="text"
                                                placeholder="Appartments, suit, unit, etc (Optional)"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-md-6">
                                        <div className="input-div">
                                            <input type="text" placeholder="Phone Number**" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6">
                                        <div className="input-div">
                                            <input type="email" placeholder="Email Address**" />
                                        </div>
                                    </div>
                                </div>
                                <div className="check-options">
                                    <div className="form-group">
                                        <input type="checkbox" id="crat" />
                                        <label className="check-title" htmlFor="crat">
                                            Create an account?
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="shadd" />
                                        <label className="check-title" htmlFor="shadd">
                                            Ship to a different address?
                                        </label>
                                    </div>
                                </div>
                                <textarea
                                    id="orderNotes"
                                    cols={80}
                                    rows={4}
                                    placeholder="Order notes (optional)"
                                    defaultValue={""}
                                />
                            </form>
                        </div>
                        <div className="col-xl-4">
                            <div className="action-item">
                                <div className="action-top">
                                    <span className="action-title">Product</span>
                                    <span className="subtotal">Subtotal</span>
                                </div>
                                <div className="category-item">
                                    <div className="category-item-inner">
                                        <div className="category-title-area">
                                            <span className="category-title">
                                                Preschool Flex Runner × 1
                                            </span>
                                        </div>
                                        <div className="price">$69.00</div>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="category-item-inner">
                                        <div className="category-title-area">
                                            <span className="category-title">Hiking Boots × 1</span>
                                        </div>
                                        <div className="price">$220.00</div>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="category-item-inner">
                                        <div className="category-title-area">
                                            <span className="category-title">Tiktok Tshirt × 1</span>
                                        </div>
                                        <div className="price">$75.00</div>
                                    </div>
                                </div>
                                <div className="action-middle">
                                    <span className="subtotal">Subtotal</span>
                                    <span className="total-price">$364.00</span>
                                </div>
                                <div className="shipping-options checkout-options">
                                    <span className="shipping">Shipping</span>
                                    <form>
                                        <div className="form-group">
                                            <input type="checkbox" id="fltrt2" />
                                            <label className="check-title" htmlFor="fltrt2">
                                                Flat rate
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="frsh2" />
                                            <label className="check-title" htmlFor="frsh2">
                                                Free shipping
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className="action-bottom">
                                    <span className="total">Total</span>
                                    <span className="total-price">$364.00</span>
                                </div>
                            </div>
                            <div className="action-item m-0">
                                <div className="payment-options checkout-options">
                                    <form>
                                        <div className="form-group">
                                            <input type="checkbox" id="drbank" />
                                            <label className="check-title" htmlFor="drbank">
                                                Direct bank transfer
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" id="freetrans" />
                                            <label className="check-title" htmlFor="freetrans">
                                                Cash on delivery
                                            </label>
                                        </div>
                                        <div className="form-group last-child">
                                            <input type="checkbox" id="paypl" />
                                            <label className="check-title" htmlFor="paypl">
                                                PayPal <a href="blog-details.html">What is PayPal?</a>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <Link to="/thankyou" className="place-order-btn">
                                Place Order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*================= Checkout Section End Here =================*/}
        </>

    )
}

export default CheckoutSection
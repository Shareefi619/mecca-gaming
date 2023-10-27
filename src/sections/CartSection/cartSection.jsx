import React, { useState } from "react";
import { product1, product2, product3, product4 } from "../../assets/images";
import { Link } from "react-router-dom";

const CartSection = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "CLUB FOOTBALL", price: 69.0, quantity: 3, image: product1 },
        { id: 2, name: "CLUB BOOT", price: 69.0, quantity: 3, image: product2 },
        { id: 3, name: "CLUB JERSEY", price: 69.0, quantity: 3, image: product3 },
        { id: 4, name: "CLUB JERSEY AWAY", price: 69.0, quantity: 3, image: product4 },
    ]);

const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
        if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
    });
    setCartItems(updatedCartItems);
};

const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
        if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    });
    setCartItems(updatedCartItems);
};

const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
};

return (
    <>
        <div className="rts-cart-section section-gap">
            <div className="container">
                <h4 className="section-title">Product List</h4>
                <div className="row justify-content-between">
                    <div className="col-xl-7">
                        <div className="cart-table-area">
                            <table className="table table-bordered table-hover">
                                <thead className="thead-dark"></thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="product-thumb">
                                                    <img src={item.image} alt="product-thumb" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="product-title-area">
                                                    <span className="pretitle">Nighty</span>
                                                    <h4 className="product-title">{item.name}</h4>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="product-price">${item.price.toFixed(2)}</span>
                                            </td>
                                            <td>
                                                <div className="cart-edit">
                                                    <div className="quantity-edit">
                                                        <button className="button" onClick={() => decreaseQuantity(item.id)}>
                                                            <i className="fal fa-minus minus" />
                                                        </button>
                                                        <input type="text" className="input" value={item.quantity} readOnly />
                                                        <button className="button plus" onClick={() => increaseQuantity(item.id)}>
                                                            +<i className="fal fa-plus plus" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="last-td">
                                                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="coupon-apply">
                                <span className="coupon-text">Coupon Code:</span>
                                <div className="apply-input">
                                    <input type="text" placeholder="Apply coupon here" />
                                    <button type="submit" className="apply-btn">
                                        Apply <i className="fal fa-long-arrow-right ml--5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="checkout-box">
                            <div className="checkout-box-inner">
                                <div className="subtotal-area">
                                    <span className="title">Subtotal</span>
                                    <span className="subtotal-price">$364.00</span>
                                </div>
                                <div className="shipping-check">
                                    <span className="title">Shipping</span>
                                    <div className="check-options">
                                        <form>
                                            <div className="form-group">
                                                <input type="checkbox" id="fltrt" />
                                                <label className="check-title" htmlFor="fltrt">
                                                    Flat rate
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <input type="checkbox" id="frsh" />
                                                <label className="check-title" htmlFor="frsh">
                                                    Free shipping
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="shipping-location">
                                    <span className="shipping-to">
                                        Shipping to <span>NY.</span>
                                    </span>
                                    <span className="change-address">
                                        <i className="fal fa-map-marker-alt mr--5" />
                                        Change address
                                    </span>
                                </div>
                                <div className="total-area">
                                    <span className="title">Total</span>
                                    <span className="total-price">$364.00</span>
                                </div>
                            </div>
                            <Link to="/checkout" className="procced-btn">
                                Proceed To Checkout
                            </Link>
                            <Link to="/shop" className="continue-shopping">
                                <i className="fal fa-long-arrow-left" /> Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default CartSection;

import "../assets/css/bootstrap.min.css";
import "../assets/css/all.min.css";
import "../assets/css/rt-icons.css";
import "../assets/css/animate.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/magnific.css";
import "../assets/css/animate.min.css";
import "../assets/css/swiper-bundle.min.css";
import "../assets/css/metisMenu.css";
import "../assets/css/rtsmenu.css";
import "../assets/css/variables/variable1.css";
import "../assets/css/main.css";
import PropTypes from "prop-types"; // Import PropTypes
import { useState, useRef, useEffect } from "react";
import { logo, product1, product2, product6 } from "../assets/images";
import { Link } from "react-router-dom";


const MainHeader = ({ props1, props2 }) => {
  const [sidebar, setSidebar] = useState(false);
  const [cartbar, setCartBar] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [pageMenuOpen, setPageMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [newsMenuOpen, setNewsMenuOpen] = useState(false);
  // Function to toggle the visibility of sub-menus in the mobile menu
  const cartRef = useRef(null);
  useEffect(() => {
    if (cartbar && cartRef.current) {
      // Scroll to the cart when it becomes visible
      cartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [cartbar]);


  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Parachute Jacket',
      image: product1,
      color: 'Green',
      size: 'XL',
      quantity: 3,
      price: 198.0,
    },
    {
      id: 2,
      name: 'Narrow Trouser',
      image: product2,
      color: 'Green',
      size: 'XL',
      quantity: 2,
      price: 88.0,
    },
    {
      id: 3,
      name: 'Bellyless Hoodie',
      image: product6,
      color: 'Green',
      size: 'XL',
      quantity: 1,
      price: 289.0,
    },
  ]);

  const handleIncrement = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedItems);
  };

  const handleDecrement = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedItems);
  };

  const handleDelete = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedItems);
  };
  const toggleNewsMenu = () => {
    setNewsMenuOpen(!newsMenuOpen);
  };
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const toggleShopMenu = () => {
    setShopMenuOpen(!shopMenuOpen);
  };
  const togglePageMenu = () => {
    setPageMenuOpen(!pageMenuOpen);
  };
  return (
    // <!--================= Header Section Start Here =================-->
    <header id="rtsHeader" className="rts-header1">
      <div className="navbar-sticky sticky-menu">
        <div className="navbar-part navbar-part1">
          <div className="container">
            <div className="navbar-inner">
              <Link to="/" className="logo">
                <img src={logo} alt="logo" />
              </Link>
              <Link to="/" className="logo-sticky">
                <img src={logo} alt="Mecca of Gaming-logo" />
              </Link>
              <div className="rts-menu">
                <nav className="menus menu-toggle">
                  <ul className="nav__menu">
                    <li className="has-dropdown">
                      <Link className="menu-item" to="#">
                        Home
                      </Link>
                      <ul className="dropdown-ul">
                        <li className="">
                          <Link className="dropdown-link active" to="/">
                            Homepage 1
                          </Link>
                        </li>
                        <li className="dropdown-li">
                          <Link className="dropdown-link" to="/home-two">
                            Homepage 2
                          </Link>
                        </li>
                        <li className="dropdown-li">
                          <Link className="dropdown-link" to="/home-three">
                            Homepage 3
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="menu-item active1" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="has-dropdown">
                      <Link className="menu-item" to="#">
                        Pages
                      </Link>
                      <ul className="dropdown-ul mega-dropdown">
                        <li className="mega-dropdown-li">
                          <ul className="mega-dropdown-ul">
                            <li className="dropdown-li">
                              <Link className="dropdown-link" to="/teamDetails">
                                Team Details
                              </Link>
                            </li>
                            <li className="dropdown-li">
                              <Link
                                className="dropdown-link"
                                to="/playerDetails"
                              >
                                Player Details
                              </Link>
                            </li>
                            <li className="dropdown-li">
                              <Link className="dropdown-link" to="/history">
                                History
                              </Link>
                            </li>
                            <li className="dropdown-li">
                              <Link className="dropdown-link" to="/award">
                                Awards
                              </Link>
                            </li>
                            <li className="dropdown-li">
                              <Link className="dropdown-link" to="/faq">
                                FAQ
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-dropdown-li">
                          <ul className="mega-dropdown-ul">
                            <li className="dropdown-li">
                              <Link className="dropdown-link" to="/gallery">
                                Gallery
                              </Link>
                            </li>
                            <li className="dropdown-li">
                              <Link className="dropdown-link" to="/event">
                                Event
                              </Link>
                            </li>
                            <li className="dropdown-li">
                              <Link
                                className="dropdown-link"
                                to="/eventDetails"
                              >
                                Event Details
                              </Link>
                            </li>
                            <li className="dropdown-li">
                              <Link className="dropdown-link" to="/error">
                                Error
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-dropdown-li">
                          <ul className="mega-dropdown-ul">
                            <li className="dropdown-li">
                              <Link
                                className="dropdown-link"
                                to="/matchSchedule"
                              >
                                Match Schedule
                              </Link>
                            </li>
                            <li className="dropdown-li">
                              <Link
                                className="dropdown-link"
                                to="/matchResult"
                              >
                                Match Result
                              </Link>
                            </li>
                            <li className="dropdown-li">
                              <Link
                                className="dropdown-link"
                                to="/leagueStanding"
                              >
                                Point Table
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link className="menu-item" to="#">
                        Shop
                      </Link>
                      <ul className="dropdown-ul">
                        <li className="dropdown-li">
                          <Link className="dropdown-link" to="/shop">
                            Shop
                          </Link>
                        </li>
                        <li className="dropdown-li">
                          <Link
                            className="dropdown-link"
                            to="/productDetails"
                          >
                            Product Details
                          </Link>
                        </li>
                        <li className="dropdown-li">
                          <Link className="dropdown-link" to="/cart">
                            Cart
                          </Link>
                        </li>
                        <li className="dropdown-li">
                          <Link className="dropdown-link" to="/checkout">
                            Checkout
                          </Link>
                        </li>
                        <li className="dropdown-li">
                          <Link className="dropdown-link" to="/account">
                            My Account
                          </Link>
                        </li>
                        <li className="dropdown-li">
                          <Link className="dropdown-link" to="/thankyou">
                            Thank you
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link className="menu-item" to="#">
                        News
                      </Link>
                      <ul className="dropdown-ul">
                        <li className="dropdown-li">
                          <Link className="dropdown-link" to="/news">
                            News
                          </Link>
                        </li>
                        <li className="dropdown-li">
                          <Link className="dropdown-link" to="/newsDetails">
                            News Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="menu-item" to="/contactUs">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action-items header-action-items1">
                <div className="search-part">
                  <div
                    onClick={() => setSearchInput(true)}
                    className="search-icon action-item icon"
                  >
                    <i className="rt-search" />
                  </div>
                  <div
                    className={`search-input-area ${searchInput ? "show" : ""}`}
                  >
                    <div className="container">
                      <div className="search-input-inner">
                        <select className="custom-select select-hidden">
                          <option value="hide">All Catagorys</option>
                          <option value="all">All</option>
                          <option value="league">League</option>
                          <option value="club">Club</option>
                          <option value="team">Team</option>
                          <option value="player">Player</option>
                          <option value="match">Match</option>
                          <option value="score">Score</option>
                        </select>
                        <div className="input-div">
                          <div className="search-input-icon">
                            <i className="rt-search mr--10" />
                          </div>
                          <input
                            id="searchInput1"
                            className="search-input"
                            type="text"
                            placeholder="Search by keyword or #"
                          />
                        </div>
                        <div onClick={() => setSearchInput(false)} className="search-close-icon">
                          <i className="rt-xmark" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart action-item">
                  <div className="cart-nav">
                    <div
                      onClick={() => setCartBar(true)}
                      className="basket-icon cart-icon icon"
                    >
                      <Link to="#0">
                        <i className="fal fa-shopping-basket" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                onClick={() => setSidebar(!sidebar)}
                className="hamburger-menu aitem d-block"
              >
                <div className="hamburger-menu-inner">
                  <span />
                  <span className="" />
                  <span />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`cart-bar ${cartbar ? 'show' : ''}`} ref={cartRef} style={{
        maxHeight: '1000px',  // Set a fixed height for the container
        overflowY: 'auto',    // Enable vertical scrolling
      }}>
        <div className="cart-header">
          <h3 className="cart-heading">MY CART ({cartItems.length} ITEMS)</h3>
          <div onClick={() => setCartBar(false)} className="close-cart">
            <i className="fal fa-times"></i>
          </div>
        </div>
        <div className="product-area">
          {cartItems.map((item) => (
            <div className="product-item" key={item.id}>
              <div className="product-detail">
                <div className="product-thumb">
                  <img src={item.image} alt="product-thumb" />
                </div>
                <div className="item-wrapper">
                  <span className="product-name">{item.name}</span>
                  <div className="item-wrapper">
                    <span className="product-variation">
                      <span className="color">{item.color} /</span>
                      <span className="size">{item.size}</span>
                    </span>
                  </div>
                  <div className="item-wrapper">
                    <span className="product-qnty">
                      {item.quantity} ×
                    </span>
                    <span className="product-price">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="cart-edit">
                <div className="quantity-edit">
                  <button
                    className="button"
                    onClick={() => handleDecrement(item)}
                  >
                    <i className="fal fa-minus minus"></i>
                  </button>
                  <input
                    type="text"
                    className="input"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    className="button plus"
                    onClick={() => handleIncrement(item)}
                  >
                    +<i className="fal fa-plus plus"></i>
                  </button>
                </div>
                <div className="item-wrapper d-flex mr--5 align-items-center">
                  <Link to="#" className="product-edit">
                    <i className="fal fa-edit"></i>
                  </Link>
                  <Link
                    to="#"
                    className="delete-cart"
                    onClick={() => handleDelete(item)}
                  >
                    <i className="fal fa-times"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-bottom-area">
          <span className="spend-shipping">
            <i className="fal fa-truck"></i> SPENT{" "}
            <span className="amount">$199.00</span> MORE FOR FREE SHIPPING
          </span>
          <span className="total-price">
            TOTAL: $
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
          <Link to="/checkout" className="checkout-btn cart-btn">
            PROCEED TO CHECKOUT
          </Link>
          <Link to="/cart" className="view-btn cart-btn">
            VIEW CART
          </Link>
        </div>
      </div>
      {/*================= Slide Bar Start Here =================*/}
      <aside className={`slide-bar ${sidebar ? 'show' : ''}`}>
        <div className="offset-sidebar">
          <button onClick={() => setSidebar(false)} className="slide-bar-close ml--30">
            <i className="fal fa-times" />
          </button>
          <div className="offset-widget offset-logo mb-30">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        {/* side-mobile-menu start */}
        <nav className={`side-mobile-menu ${subMenuOpen ? "open" : ""}`}>
          <ul id="mobile-menu-active">
            <li
              className={`has-dropdown firstlvl ${subMenuOpen ? "mm-active" : ""
                }`}
            >
              <Link
                className="mm-link"
                to="#"
                onClick={toggleSubMenu}
                aria-expanded={subMenuOpen}
              >
                Home{" "}
                <i
                  className={`rt-angle-down ${subMenuOpen ? "rt-angle-up" : ""
                    }`}
                ></i>
              </Link>
              {subMenuOpen && (
                <ul className="sub-menu">
                  <li>
                    <Link to="/">Home Style 1</Link>
                  </li>
                  <li>
                    <Link to="/home-two">Home Style 2</Link>
                  </li>
                  <li>
                    <Link to="/home-three">Home Style 3</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link className="mm-link" to="/about" onClick={togglePageMenu}>
                About
              </Link>
            </li>
            <li
              className={`has-dropdown firstlvl ${pageMenuOpen ? "mm-active" : ""
                }`}
            >
              <Link
                className="mm-link"
                to="#"
                onClick={togglePageMenu}
                aria-expanded={pageMenuOpen}
              >
                Pages{" "}
                <i
                  className={`rt-angle-down ${pageMenuOpen ? "rt-angle-up" : ""
                    }`}
                ></i>
              </Link>
              {pageMenuOpen && (
                <ul className="sub-menu mega-dropdown-mobile">
                  <li className="mega-dropdown-li">
                    <ul className="mega-dropdown-ul mm-show">
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/teamDetails">
                          Team Details
                        </Link>
                      </li>
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/playerDetails">
                          Player Details
                        </Link>
                      </li>
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/history">
                          History
                        </Link>
                      </li>
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/faq">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-dropdown-li">
                    <ul className="mega-dropdown-ul mm-show">
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/gallery">
                          Gallery
                        </Link>
                      </li>
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/event">
                          Event
                        </Link>
                      </li>
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/eventDetails">
                          Event Details
                        </Link>
                      </li>
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/error">
                          Error
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-dropdown-li">
                    <ul className="mega-dropdown-ul mm-show">
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/matchSchedule">
                          Match Schedule
                        </Link>
                      </li>
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/matchResult">
                          Match Result
                        </Link>
                      </li>
                      <li className="dropdown-li">
                        <Link className="dropdown-link" to="/leagueStanding">
                          Point Table
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`has-dropdown firstlvl ${shopMenuOpen ? "mm-active" : ""
                }`}
            >
              <Link className="mm-link" to="#" onClick={toggleShopMenu}>
                Shop{" "}
                <i
                  className={`rt-angle-down ${shopMenuOpen ? "rt-angle-up" : ""
                    }`}
                ></i>
              </Link>
              {shopMenuOpen && (
                <ul className="sub-menu">
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/productDetails">Product Details</Link>
                  </li>
                  <li>
                    <Link to="/cart">cart</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/account">My Account</Link>
                  </li>
                  <li>
                    <Link to="/thankyou">Thank You</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`has-dropdown firstlvl ${newsMenuOpen ? "mm-active" : ""
                }`}
            >
              <Link
                className="mm-link"
                to="#"
                onClick={toggleNewsMenu}
                aria-expanded={newsMenuOpen}
              >
                News{" "}
                <i
                  className={`rt-angle-down ${newsMenuOpen ? "rt-angle-up" : ""
                    }`}
                ></i>
              </Link>
              {newsMenuOpen && (
                <ul className="sub-menu">
                  <li>
                    <Link to="/news">News</Link>
                  </li>
                  <li>
                    <Link to="/newsDetails">News Details</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link className="mm-link" to="/contactUs">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* side-mobile-menu end */}
        <div className="side-bar-social-links">
          <Link to="#0" className="platform">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link to="#0" className="platform">
            <i className="fab fa-twitter" />
          </Link>
          <Link to="#0" className="platform">
            <i className="fab fa-behance" />
          </Link>
          <Link to="#0" className="platform">
            <i className="fab fa-youtube" />
          </Link>
        </div>
      </aside>
      {/*================= Slide Bar Start Here =================*/}
      {/*================= Banner Section Start Here =================*/}
      <div className="banner banner1">
        <div className="inner-page-banner banner-bg">
          <div className="container">
            <div className="banner-content">
              <div className="page-path">
                <ul>
                  <li>
                    <Link className="home-page-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="current-page" to="/about">
                      {props1}
                    </Link>
                  </li>
                </ul>
              </div>
              <h1 className="banner-heading">{props2}</h1>
            </div>
          </div>
        </div>
      </div>
      {/*================= Banner Section End Here =================*/}

    </header>
    // <!--================= Header Section End Here =================-->
  );
};

// Define propTypes for your component
MainHeader.propTypes = {
  props1: PropTypes.string,
  props2: PropTypes.string, // about prop is expected to be a string
};

export default MainHeader;

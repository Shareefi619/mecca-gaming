import { Link } from "react-router-dom"
import { logo, logo02, logoSticky, logoSticky2, product1, product2, product6 } from "../../assets/images"
import { useState, useRef, useEffect } from "react";
const HeaderSection = () => {

    const [sidebar, setSidebar] = useState(false);
    const [cartbar, setCartBar] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [pageMenuOpen, setPageMenuOpen] = useState(false);
    const [shopMenuOpen, setShopMenuOpen] = useState(false);
    const [newsMenuOpen, setNewsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);


    // Function to handle scrolling and add/remove the "sticky-menu" class
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    // Add scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
        <>
            {/*================= Header Section Start Here =================*/}
            <header id="rtsHeader" className="rts-header3">
                <div className="inline-wrapper d-flex">
                    <div className="navbar-wrapper">
                        <div className="navbar-part navbar-part3 navbar-upper d-flex">
                            <div className="container">
                                <div className="navbar-inner">
                                    <Link to="#" className="subscribe-btn">
                                        <i className="fas fa-envelope mr--5" />
                                        SUBSCRIBE
                                    </Link>
                                    <Link to="/" className="logo">
                                        <img src={logo02} alt="sportius-logo" />
                                    </Link>
                                    <Link to="/" className="logo2">
                                        <img src={logoSticky2} alt="sportius-logo" />
                                    </Link>
                                    <div className="flex-wrapper">
                                        <div className="header-action-items header-action-items1">
                                            <div className="cart action-item">
                                                <div className="cart-nav item" onClick={() => setCartBar(true)}>
                                                    <div className="cart-icon icon">
                                                        <i className="far fa-shopping-cart" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="#" className="hamburger-menu item" onClick={() => setSidebar(!sidebar)}>
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
                        <div className={isSticky ? 'navbar-sticky sticky-menu' : 'navbar-sticky'}>
                            <div className="navbar-part navbar-part3 navbar-lower">
                                <div className="container">
                                    <div className="navbar-inner">
                                        <Link to="/" className="logo-sticky">
                                            <img
                                                src={logoSticky}
                                                alt="Mecca of Gaming-logo"
                                            />
                                        </Link>
                                        <div className="rts-menu">
                                            <nav className="menus menu-toggle">
                                                <ul className="nav__menu">
                                                    <li className="has-dropdown">
                                                        <Link className="menu-item active1" to="#">
                                                            Home
                                                        </Link>
                                                        <ul className="dropdown-ul">
                                                            <li className="">
                                                                <Link
                                                                    className="dropdown-link active"
                                                                    to="/"
                                                                >
                                                                    Homepage 1
                                                                </Link>
                                                            </li>
                                                            <li className="dropdown-li">
                                                                <Link className="dropdown-link" to="/home-two">
                                                                    Homepage 2
                                                                </Link>
                                                            </li>
                                                            <li className="dropdown-li">
                                                                <Link
                                                                    className="dropdown-link"
                                                                    to="/home-three"
                                                                >
                                                                    Homepage 3
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link className="menu-item" to="/about">
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
                                                                        <Link
                                                                            className="dropdown-link"
                                                                            to="/history"
                                                                        >
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
                                                                <ul className="mega-dropdown-ul">
                                                                    <li className="dropdown-li">
                                                                        <Link
                                                                            className="dropdown-link"
                                                                            to="/gallery"
                                                                        >
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
                                                                <Link
                                                                    className="dropdown-link"
                                                                    to="/newsDetails"
                                                                >
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
                                        <div className="search-part">
                                            <div className="search-input-div">
                                                <i className="rt-search" />
                                                <input
                                                    type="text"
                                                    placeholder="SEARCH HERE...."
                                                    className="search-input"
                                                />
                                            </div>
                                        </div>
                                        <a className="hamburger-menu aitem" onClick={() => setSidebar(!sidebar)}>
                                            <div className="hamburger-menu-inner">
                                                <span />
                                                <span className="" />
                                                <span />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-input-area">
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
                                <div className="search-close-icon">
                                    <i className="rt-xmark" />
                                </div>
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
                            <i className="fal fa-times" />
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
                                        <a href="#" className="product-edit">
                                            <i className="fal fa-edit"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="delete-cart"
                                            onClick={() => handleDelete(item)}
                                        >
                                            <i className="fal fa-times"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-bottom-area">
                        <span className="spend-shipping">
                            <i className="fal fa-truck" /> SPENT{" "}
                            <span className="amount">$199.00</span> MORE FOR FREE SHIPPING
                        </span>
                        <span className="total-price">
                            TOTAL: {cartItems
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
                <aside className={`slide-bar ${sidebar ? "show" : ""}`}>
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
                    <nav className={`side-mobile-menu side-mobile-menu1 ${subMenuOpen ? "open" : ""}`}>
                        <ul id="mobile-menu-active">
                            <li className={`has-dropdown firstlvl ${subMenuOpen ? "mm-active" : ""
                                }`}>
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
                                <a
                                    className="mm-link"
                                    href="#"
                                    onClick={togglePageMenu}
                                    aria-expanded={pageMenuOpen}
                                >
                                    Pages{" "}
                                    <i
                                        className={`rt-angle-down ${pageMenuOpen ? "rt-angle-up" : ""
                                            }`}
                                    ></i>
                                </a>
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
                            <li className={`has-dropdown firstlvl ${shopMenuOpen ? "mm-active" : ""
                                }`}>
                                <a className="mm-link" href="#" onClick={toggleShopMenu}>
                                    Shop{" "}
                                    <i
                                        className={`rt-angle-down ${shopMenuOpen ? "rt-angle-up" : ""
                                            }`}
                                    ></i>
                                </a>
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
                                <a
                                    className="mm-link"
                                    href="#"
                                    onClick={toggleNewsMenu}
                                    aria-expanded={newsMenuOpen}
                                >
                                    News{" "}
                                    <i
                                        className={`rt-angle-down ${newsMenuOpen ? "rt-angle-up" : ""
                                            }`}
                                    ></i>
                                </a>
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
                <section className="banner banner3">
                    <div className="banner-single banner-single-2">
                        <div className="video-section-inner text-center">
                            <div className="play-video">
                                <a
                                    className="popup-video"
                                    href="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                                >
                                    <i className="fas fa-play" />
                                </a>
                            </div>
                        </div>
                        <div className="container">
                            <div className="banner-content">
                                <div className="flex-wrap d-flex">
                                    <span className="blog-catagory-tag">FOOTBALL</span>
                                </div>
                                <h1 className="banner-heading">
                                    The World Cup 2023 What to Expect our from france
                                </h1>
                                <div className="flex-wrap post d-flex">
                                    <span className="post-date">
                                        <i className="far fa-calendar-alt" /> JUNE 21, 2023
                                    </span>
                                    <span className="post-by">
                                        <i className="far fa-user" /> BY DAVID SMITH
                                    </span>
                                </div>
                                <div className="banner-btn-area">
                                    <Link
                                        to="/newsDetails"
                                        className="more-btn blog-details-btn one"
                                    >
                                        WATCH HIGHLIGHTS
                                    </Link>
                                    <Link to="/newsDetails" className="more-btn blog-details-btn">
                                        LEARN MORE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================= Banner Section End Here =================*/}
            </header>
            {/*================= Header Section End Here =================*/}
        </>

    )
}

export default HeaderSection
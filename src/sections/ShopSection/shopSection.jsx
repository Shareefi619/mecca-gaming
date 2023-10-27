import { Link } from "react-router-dom";
import {
    product1,
    post1,
    post2,
    post3,
    gridIcon,
    listIcon,
    gloves,
    product3,
    product5,
    product7,
    product4,
    product2,
    product6,
} from "../../assets/images"

import { useEffect } from "react"
const ShopSection = () => {

    useEffect(() => {
        const lowerInput = document.getElementById('lower');
        const upperInput = document.getElementById('upper');
        const lowerValue = document.getElementById('one');
        const upperValue = document.getElementById('two');

        // Function to update the input values when the range inputs change
        const updateValues = () => {
            lowerValue.value = lowerInput.value;
            upperValue.value = upperInput.value;
        };

        // Add an input event listener to the range inputs
        lowerInput.addEventListener('input', updateValues);
        upperInput.addEventListener('input', updateValues);

        // Initialize the values
        updateValues();
    }, []);

    return (
        <>
            <>
                {/*================= Shop Section Start Here =================*/}
                <div className="rts-merch-section section-gap">
                    <div className="container">
                        <div className="rts-merch-section-inner">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="search-area">
                                        <h3 className="title">SEARCH HERE</h3>
                                        <form>
                                            <div className="form">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="Enter Your Email"
                                                    required=""
                                                />
                                            </div>
                                            <div className="button">
                                                <button type="submit" className="btn">
                                                    <i className="rt-search" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="wrapper">
                                        <h3 className="title">FILTER BY PRICE</h3>
                                        <fieldset className="filter-price">
                                            <div className="price-field">
                                                <input type="range" min={100} max={500} defaultValue={100} id="lower" />
                                                <input type="range" min={100} max={500} defaultValue={500} id="upper" />
                                            </div>
                                            <div className="price-wrap">
                                                <span className="price-title">PRICE:</span>
                                                <div className="price-wrap-1">
                                                    <input id="one" readOnly />
                                                    <label htmlFor="one">$</label>
                                                </div>
                                                <div className="price-wrap_line">-</div>
                                                <div className="price-wrap-2">
                                                    <input id="two" readOnly />
                                                    <label htmlFor="two">$</label>
                                                </div>
                                            </div>
                                            <div className="filter-btn">
                                                <button type="submit" className="btn">
                                                    FILTER
                                                </button>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="catagories">
                                        <h3 className="title">CATAGORIES</h3>
                                        <ul className="item-list">
                                            <li className="item">ACCESSORIES (2)</li>
                                            <li className="item">BAGPACKS (2)</li>
                                            <li className="item">CLOTHES (4)</li>
                                            <li className="item">SHOES (5)</li>
                                        </ul>
                                    </div>
                                    <div className="best-seller">
                                        <h3 className="title">BEST SELLER</h3>
                                        <div className="full-wrapper">
                                            <div className="wrapper">
                                                <div className="image">
                                                    <img src={post1} alt="" />
                                                </div>
                                                <div className="content">
                                                    <ul className="star-rating">
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="last">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <Link to="#" className="title">
                                                        INDIOMANE CAP
                                                    </Link>
                                                    <p className="price">$38.00</p>
                                                </div>
                                            </div>
                                            <div className="wrapper">
                                                <div className="image">
                                                    <img src={post2} alt="" />
                                                </div>
                                                <div className="content">
                                                    <ul className="star-rating">
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="last">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <Link to="#" className="title">
                                                        INDIOMANE CAP
                                                    </Link>
                                                    <p className="price">$38.00</p>
                                                </div>
                                            </div>
                                            <div className="wrapper">
                                                <div className="image">
                                                    <img src={post3} alt="" />
                                                </div>
                                                <div className="content">
                                                    <ul className="star-rating">
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-star" />
                                                        </li>
                                                        <li className="last">
                                                            <i className="fas fa-star" />
                                                        </li>
                                                    </ul>
                                                    <Link to="#" className="title">
                                                        INDIOMANE CAP
                                                    </Link>
                                                    <p className="price">$38.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tags">
                                        <h3 className="title">POPULAR TAGS</h3>
                                        <ul className="tags-inner">
                                            <li>
                                                <Link to="#">INDIOMANE</Link>
                                            </li>
                                            <li>
                                                <Link to="#">CAP</Link>
                                            </li>
                                            <li>
                                                <Link to="#">JERSEY</Link>
                                            </li>
                                            <li>
                                                <Link to="#">FITA</Link>
                                            </li>
                                            <li>
                                                <Link to="#">FOOTBALL</Link>
                                            </li>
                                            <li>
                                                <Link to="#">PANT</Link>
                                            </li>
                                            <li>
                                                <Link to="#">SHOES</Link>
                                            </li>
                                            <li>
                                                <Link to="#">TAO</Link>
                                            </li>
                                            <li>
                                                <Link to="#">SPORTS</Link>
                                            </li>
                                            <li>
                                                <Link to="#">FITNESS</Link>
                                            </li>
                                            <li>
                                                <Link to="#">HEALTH</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="shop-product-topbar">
                                        <span className="items-onlist">
                                            <span>30</span> ITEM ON LIST
                                        </span>
                                        <div className="filter-area">
                                            <button className="product-filter">
                                                <i className="fas fa-list" /> FILTER
                                            </button>
                                            <div className="separator" />
                                            <div className="product-show">
                                                SHOW
                                                <select>
                                                    <option value={1}>12</option>
                                                    <option value={2}>8</option>
                                                    <option value={3}>6</option>
                                                    <option value={4}>4</option>
                                                </select>
                                            </div>
                                            <button className="grid-btn">
                                                <img
                                                    src={gridIcon}
                                                    alt="grid-icon"
                                                />
                                            </button>
                                            <button className="list-btn">
                                                <img
                                                    src={listIcon}
                                                    alt="list-icon"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="product-area">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="product-item">
                                                    <Link to="/productDetails" className="product-thumb">
                                                        <img
                                                            src={gloves}
                                                            alt="product-thumb"
                                                        />
                                                    </Link>
                                                    <div className="contents">
                                                        <Link to="/productDetails" className="product-name">
                                                            GOALKEEPER GLOVES
                                                        </Link>
                                                        <div className="product-action-area">
                                                            <span className="product-price d-block">
                                                                $38.00 <span className="prev-price">$56.00</span>
                                                            </span>
                                                            <Link to="/cart" className="addto-cart">
                                                                ADD TO CART
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="product-tag-area">
                                                        <div className="sale-tag">SALE</div>
                                                    </div>
                                                    <ul className="social-area">
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fal fa-shopping-basket" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-heart" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="rt-search" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-share-alt" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="product-item">
                                                    <Link to="/productDetails" className="product-thumb">
                                                        <img
                                                            src={product3}
                                                            alt="product-thumb"
                                                        />
                                                    </Link>
                                                    <div className="contents">
                                                        <Link to="/productDetails" className="product-name">
                                                            MEN FOOTBALL JERSEY
                                                        </Link>
                                                        <div className="product-action-area">
                                                            <div className="product-action-area">
                                                                <span className="product-price d-block">
                                                                    $42.00 <span className="prev-price">$60.00</span>
                                                                </span>
                                                                <Link to="/cart" className="addto-cart">
                                                                    ADD TO CART
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-tag-area">
                                                        <div className="sale-tag">SALE</div>
                                                    </div>
                                                    <ul className="social-area">
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fal fa-shopping-basket" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-heart" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="rt-search" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-share-alt" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="product-item">
                                                    <Link to="/productDetails" className="product-thumb">
                                                        <img
                                                            src={product5}
                                                            alt="product-thumb"
                                                        />
                                                    </Link>
                                                    <div className="contents">
                                                        <Link to="/productDetails" className="product-name">
                                                            MEN FOOTBALL TARF (NEW)
                                                        </Link>
                                                        <div className="product-action-area">
                                                            <div className="product-action-area">
                                                                <span className="product-price d-block">
                                                                    $58.00 <span className="prev-price">$90.00</span>
                                                                </span>
                                                                <Link to="/cart" className="addto-cart">
                                                                    ADD TO CART
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-tag-area">
                                                        <div className="sale-tag">SALE</div>
                                                    </div>
                                                    <ul className="social-area">
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fal fa-shopping-basket" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-heart" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="rt-search" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-share-alt" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="product-item">
                                                    <Link to="/productDetails" className="product-thumb">
                                                        <img
                                                            src={product1}
                                                            alt="product-thumb"
                                                        />
                                                    </Link>
                                                    <div className="contents">
                                                        <Link to="/productDetails" className="product-name">
                                                            NEW WORLD CUP FOOTBALL
                                                        </Link>
                                                        <div className="product-action-area">
                                                            <span className="product-price d-block">
                                                                $20.00 <span className="prev-price">$36.00</span>
                                                            </span>
                                                            <Link to="/cart" className="addto-cart">
                                                                ADD TO CART
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="product-tag-area">
                                                        <div className="sale-tag">SALE</div>
                                                    </div>
                                                    <ul className="social-area">
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fal fa-shopping-basket" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-heart" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="rt-search" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-share-alt" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="product-item">
                                                    <Link to="/productDetails" className="product-thumb">
                                                        <img
                                                            src={product2}
                                                            alt="product-thumb"
                                                        />
                                                    </Link>
                                                    <div className="contents">
                                                        <Link to="/productDetails" className="product-name">
                                                            SPORTS SHOES
                                                        </Link>
                                                        <div className="product-action-area">
                                                            <span className="product-price d-block">
                                                                $66.00 <span className="prev-price">$99.00</span>
                                                            </span>
                                                            <Link to="/cart" className="addto-cart">
                                                                ADD TO CART
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="product-tag-area">
                                                        <div className="sale-tag">SALE</div>
                                                    </div>
                                                    <ul className="social-area">
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fal fa-shopping-basket" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-heart" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="rt-search" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-share-alt" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="product-item">
                                                    <Link to="/productDetails" className="product-thumb">
                                                        <img
                                                            src={product6}
                                                            alt="product-thumb"
                                                        />
                                                    </Link>
                                                    <div className="contents">
                                                        <Link to="/productDetails" className="product-name">
                                                            STYLISH CAP
                                                        </Link>
                                                        <div className="product-action-area">
                                                            <div className="product-action-area">
                                                                <span className="product-price d-block">
                                                                    $30.00 <span className="prev-price">$70.00</span>
                                                                </span>
                                                                <Link to="/cart" className="addto-cart">
                                                                    ADD TO CART
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-tag-area">
                                                        <div className="sale-tag">SALE</div>
                                                    </div>
                                                    <ul className="social-area">
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fal fa-shopping-basket" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-heart" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="rt-search" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-share-alt" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="product-item">
                                                    <Link to="/productDetails" className="product-thumb">
                                                        <img
                                                            src={product7}
                                                            alt="product-thumb"
                                                        />
                                                    </Link>
                                                    <div className="contents">
                                                        <Link to="/productDetails" className="product-name">
                                                            CLUB T-SHIRT
                                                        </Link>
                                                        <div className="product-action-area">
                                                            <div className="product-action-area">
                                                                <span className="product-price d-block">
                                                                    $45.00 <span className="prev-price">$71.00</span>
                                                                </span>
                                                                <Link to="/cart" className="addto-cart">
                                                                    ADD TO CART
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-tag-area">
                                                        <div className="sale-tag">SALE</div>
                                                    </div>
                                                    <ul className="social-area">
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fal fa-shopping-basket" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-heart" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="rt-search" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-share-alt" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="product-item">
                                                    <Link to="/productDetails" className="product-thumb">
                                                        <img
                                                            src={product4}
                                                            alt="product-thumb"
                                                        />
                                                    </Link>
                                                    <div className="contents">
                                                        <Link to="/productDetails" className="product-name">
                                                            CLUB JERSEY (NEW)
                                                        </Link>
                                                        <div className="product-action-area">
                                                            <span className="product-price d-block">
                                                                $39.00 <span className="prev-price">$57.00</span>
                                                            </span>
                                                            <Link to="/cart" className="addto-cart">
                                                                ADD TO CART
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="product-tag-area">
                                                        <div className="sale-tag">SALE</div>
                                                    </div>
                                                    <ul className="social-area">
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fal fa-shopping-basket" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-heart" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="rt-search" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-share-alt" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="product-item">
                                                    <Link to="/productDetails" className="product-thumb">
                                                        <img
                                                            src={product4}
                                                            alt="product-thumb"
                                                        />
                                                    </Link>
                                                    <div className="contents">
                                                        <Link to="/productDetails" className="product-name">
                                                            CLUB JERSEY (NEW)
                                                        </Link>
                                                        <div className="product-action-area">
                                                            <span className="product-price d-block">
                                                                $39.00 <span className="prev-price">$57.00</span>
                                                            </span>
                                                            <Link to="/cart" className="addto-cart">
                                                                ADD TO CART
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="product-tag-area">
                                                        <div className="sale-tag">SALE</div>
                                                    </div>
                                                    <ul className="social-area">
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fal fa-shopping-basket" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-heart" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="rt-search" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="far fa-share-alt" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-pagination-area mt--20">
                                        <button className="prev">
                                            <i className="far fa-angle-double-left" />
                                        </button>
                                        <button className="number active">01</button>
                                        <button className="number">02</button>
                                        <button className="skip-number">---</button>
                                        <button className="number">07</button>
                                        <button className="number">08</button>
                                        <button className="next">
                                            <i className="far fa-angle-double-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*================= shop Section End Here =================*/}
            </>

        </>
    )
}

export default ShopSection
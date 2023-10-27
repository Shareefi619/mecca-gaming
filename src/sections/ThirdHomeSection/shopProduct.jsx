import React from 'react'
import { gloves, product1, product2, product3, product4, product5, product6, product7 } from '../../assets/images'
import { Link } from 'react-router-dom'

const ShopProduct = () => {
    return (
        <>
            {/*================= Shop Section Start Here =================*/}
            <div className="rts-shop-section section-gap">
                <div className="container">
                    <div className="top-wrapper">
                        <div className="section-title-area section-title-area1 text-start mb--20">
                            <h2 className="section-title">SHOP BY LOOK</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
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
                        <div className="col-lg-3 col-md-6">
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
                        <div className="col-lg-3 col-md-6">
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
                        <div className="col-lg-3 col-md-6">
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
                        <div className="col-lg-3 col-md-6">
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
                        <div className="col-lg-3 col-md-6">
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
                        <div className="col-lg-3 col-md-6">
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
                        <div className="col-lg-3 col-md-6">
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
            </div>
            {/*================= Shop Section End Here =================*/}
        </>

    )
}

export default ShopProduct
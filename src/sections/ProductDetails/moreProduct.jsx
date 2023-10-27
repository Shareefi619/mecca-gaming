import { gloves, product2, product3, product4 } from "../../assets/images";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation, } from 'swiper/modules';
import { Link } from "react-router-dom";


const MoreProduct = () => {

    return (
        <>
            {/*================= More Product Section Start Here =================*/}
            <div className="rts-related-product-section">
                <div className="container">
                    <div className="section-title-area section-title-area1 mb--50">
                        <h1 className="section-title">RELATED PRODUCT</h1>
                    </div>
                    <div className="team-section-inner">

                        <div className="swiper">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={false}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                               
                                navigation={true}
                                slidesPerView={3} // Set the number of slides per view
                                modules={[Autoplay, Navigation]}
                                className="mySwiper"
                            >
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="product-item">
                                                <Link to="/productDetails" className="product-thumb">
                                                    <img
                                                        src={product2}
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
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="product-item">
                                                <Link to="/productDetails" className="product-thumb">
                                                    <img
                                                        src={product3}
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
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper-slide">
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
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="product-item">
                                                <Link to="/productDetails" className="product-thumb">
                                                    <img
                                                        src={gloves}
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
                                    </SwiperSlide>
                                                                        

                                </div>
                            </Swiper>

                        </div>

                    </div>
                </div>
            </div >
            {/*================= More Product Section End Here =================*/}
        </>

    )
}

export default MoreProduct;

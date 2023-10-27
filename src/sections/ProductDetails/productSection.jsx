import { Link } from "react-router-dom";
import { product1, gloves, product2, prod1, prod2, prod3 } from "../../assets/images";
import { useEffect, useState } from "react";
const ProductSection = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeFilter, setActiveFilter] = useState('dls-one');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        const thumbFilters = document.querySelectorAll('.thumb-filter');
        const thumbWrappers = document.querySelectorAll('.thumb-wrapper');

        thumbFilters.forEach((filter) => {
            filter.addEventListener('click', () => {
                // Remove "active" class from all thumb-filters
                thumbFilters.forEach((f) => f.classList.remove('active'));

                // Add "active" class to the clicked thumb-filter
                filter.classList.add('active');

                const filterClass = filter.getAttribute('data-show');

                thumbWrappers.forEach((wrapper) => {
                    if (wrapper.classList.contains(filterClass)) {
                        wrapper.classList.remove('hide');
                    } else {
                        wrapper.classList.add('hide');
                    }
                });
            });
        });
    }, []);

    return (
        <>
            {/*================= Product-details Section Start Here =================*/}
            <div className="rts-product-details-section rts-product-details-section2 section-gap">
                <div className="container">
                    <div className="product-area details-product-area mb--70">
                        <div className="product-thumb-area">
                            <div className="product-thumb-filter-group">
                                <div className="thumb-filter filter-btn active" data-show="one">
                                    <img
                                        src={gloves}
                                        alt="product-thumb-filter"
                                    />
                                </div>
                                <div className="thumb-filter filter-btn" data-show="two">
                                    <img
                                        src={product1}
                                        alt="product-thumb-filter"
                                    />
                                </div>
                                <div className="thumb-filter filter-btn" data-show="three">
                                    <img
                                        src={product2}
                                        alt="product-thumb-filter"
                                    />
                                </div>
                            </div>
                            <div className="cursor" />
                            <div className="thumb-wrapper one filterd-items figure">
                                <div
                                    className="product-thumb"
                                    style={{
                                        backgroundImage: { prod1 }
                                    }}
                                >
                                    <img src={prod1} alt="product-thumb" />
                                </div>
                            </div>
                            <div className="thumb-wrapper two filterd-items hide">
                                <div
                                    className="product-thumb"
                                    style={{
                                        backgroundImage: { prod2 }
                                    }}
                                >
                                    <img src={prod2} alt="product-thumb" />
                                </div>
                            </div>
                            <div className="thumb-wrapper three filterd-items hide">
                                <div
                                    className="product-thumb"
                                    style={{
                                        backgroundImage: { prod3 }
                                    }}
                                >
                                    <img src={prod3} alt="product-thumb" />
                                </div>
                            </div>
                        </div>
                        <div className="contents">
                            <div className="product-status">
                                <span className="product-catagory">FOOTBALL</span>
                                <div className="rating-stars-group">
                                    <div className="rating-star">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-star">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-star">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-star">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-star">
                                        <i className="fas fa-star-half-alt" />
                                    </div>
                                </div>
                            </div>
                            <h2 className="product-title">WIDE COTTON TUNIC EXTREME HAMMER</h2>
                            <span className="product-price">
                                <span className="old-price">$90.35</span> $70.25
                            </span>
                            <p>
                                Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It
                                is a completely modern design and you feel comfortable to put on
                                this hijab. Buy it at the best price.
                            </p>
                            <div className="product-bottom-action">
                                <div className="cart-edit">
                                    <div className="quantity-edit action-item">
                                        <button className="button" onClick={handleDecrement}>
                                            <i className="fal fa-minus minus" />
                                        </button>
                                        <input type="text" className="input" value={quantity} readOnly />
                                        <button className="button plus" onClick={handleIncrement}>
                                            <i className="fal fa-plus plus" />
                                        </button>
                                    </div>
                                </div>
                                <Link to="/cart" className="addto-cart-btn action-item">
                                    <i className="rt-basket-shopping" /> Add To Cart
                                </Link>
                                <Link to="wishlist.html" className="wishlist-btn action-item">
                                    <i className="rt-heart" />
                                </Link>
                            </div>
                            <div className="product-uniques">
                                <span className="sku product-unipue">
                                    <span>SKU: </span> BO1D0MX8SJ
                                </span>
                                <span className="catagorys product-unipue">
                                    <span>Categories: </span> T-Shirts, Tops, Mens
                                </span>
                                <span className="tags product-unipue">
                                    <span>Tags: </span> fashion, t-shirts, Men
                                </span>
                            </div>
                            <div className="share-social">
                                <span>Share:</span>
                                <Link className="platform" to="#0">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                <Link className="platform" to="#0">
                                    <i className="fab fa-twitter" />
                                </Link>
                                <Link className="platform" to="#0">
                                    <i className="fab fa-behance" />
                                </Link>
                                <Link className="platform" to="#0">
                                    <i className="fab fa-youtube" />
                                </Link>
                                <Link className="platform" to="#0m">
                                    <i className="fab fa-linkedin" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="product-full-details-area product-full-details-area2">
                        <div className="details-filter-bar">
                            <button
                                className={`details-filter filter-btn ${activeFilter === 'dls-one' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('dls-one')}
                            >
                                Description
                            </button>
                            <button
                                className={`details-filter filter-btn ${activeFilter === 'dls-two' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('dls-two')}
                            >
                                Additional information
                            </button>
                            <button
                                className={`details-filter filter-btn ${activeFilter === 'dls-three' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('dls-three')}
                            >
                                Reviews (2)
                            </button>
                            <button
                                className={`details-filter filter-btn ${activeFilter === 'dls-four' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('dls-four')}
                            >
                                Size Chart
                            </button>
                        </div>
                        <div className={`full-details dls-one filterd-items ${activeFilter === 'dls-one' ? '' : 'hide'}`}>
                            <div className="full-details-inner">
                                <p className="mb--30">
                                    In marketing a product is an object or system made available for
                                    consumer use it is anything that can be offered to a market to the
                                    desire or need of a \retailing, products are often referred to as
                                    merchandise, and in manufacturing, products are bought as
                                    materials and then sold as finished goods. A service regarded to
                                    as a type of product. Commodities are usually raw materials metals
                                    and agricultural products, but a commodity can also be anything
                                    wide the open market. In project management, the formal definition
                                    of the project deliverables some kind of efforts you have on it.
                                </p>
                                <p>
                                    A product can be classified as tangible or intangible. A tangible
                                    product is a physical object that can be perceived by touch
                                    building, vehicle, gadget, An intangible product is a product that
                                    can only be perceived indirectly such as an insurance policy. can
                                    be broadly classified under intangible be durable or non durable.
                                    A product line is "a group of products that are closely either
                                    because they function in a similar manner, are sold to the same
                                    customergroups.
                                </p>
                            </div>
                        </div>
                        <div className={`full-details dls-two filterd-items ${activeFilter === 'dls-two' ? '' : 'hide'}`}>
                            <div className="full-details-inner">
                                <p className="mb--30">
                                    In marketing a product is an object or system made available for
                                    consumer use it is anything that can be offered to a market to the
                                    desire or need of a \retailing, products are often referred to as
                                    merchandise, and in manufacturing, products are bought as
                                    materials and then sold as finished goods. A service regarded to
                                    as a type of product. Commodities are usually raw materials metals
                                    and agricultural products, but a commodity can also be anything
                                    wide the open market. In project management, the formal definition
                                    of the project deliverables some kind of efforts you have on it.
                                </p>
                                <p>
                                    A product can be classified as tangible or intangible. A tangible
                                    product is a physical object that can be perceived by touch
                                    building, vehicle, gadget, An intangible product is a product that
                                    can only be perceived indirectly such as an insurance policy. can
                                    be broadly classified under intangible be durable or non durable.
                                    A product line is "a group of products that are closely either
                                    because they function in a similar manner, are sold to the same
                                    customergroups.
                                </p>
                            </div>
                        </div>
                        <div className={`full-details dls-three filterd-items ${activeFilter === 'dls-three' ? '' : 'hide'}`}>
                            <div className="full-details-inner">
                                <p>There are no reveiws yet.</p>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 mr-10">
                                        <div className="reveiw-form">
                                            <h2 className="section-title">
                                                Be the first to reveiw{" "}
                                                <strong>
                                                    {" "}
                                                    <Link to="/productDetails">
                                                        "WIDE COTTON TUNIC DRESS"
                                                    </Link>
                                                </strong>
                                            </h2>
                                            <h4 className="sect-title">
                                                Your email address will not be published. Required fields
                                                are marked*{" "}
                                            </h4>
                                            <div className="reveiw-form-main mb-10">
                                                <div className="contact-form">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-12">
                                                            <div className="input-box text-input mb-20">
                                                                <textarea
                                                                    name="Message"
                                                                    id="validationDefault01"
                                                                    cols={30}
                                                                    rows={10}
                                                                    placeholder="Your Review*"
                                                                    required=""
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-sm-12">
                                                            <div className="col-lg-12">
                                                                <div className="input-box mb-20">
                                                                    <input
                                                                        type="text"
                                                                        id="validationDefault02"
                                                                        placeholder="Name*"
                                                                        required=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="input-box mail-input mb-20">
                                                                    <input
                                                                        type="text"
                                                                        id="validationDefault03"
                                                                        placeholder="E-mail*"
                                                                        required=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="rating">
                                                                    <p>Your Rating :</p>
                                                                    <div className="rating-icon">
                                                                        <span className="one">
                                                                            <Link to="#">
                                                                                {" "}
                                                                                <i className="fal fa-star" />
                                                                            </Link>
                                                                        </span>
                                                                        <span className="two">
                                                                            <Link to="#">
                                                                                {" "}
                                                                                <i className="fal fa-star" />
                                                                            </Link>
                                                                        </span>
                                                                        <span className="three">
                                                                            <Link to="#">
                                                                                {" "}
                                                                                <i className="fal fa-star" />
                                                                            </Link>
                                                                        </span>
                                                                        <span className="four">
                                                                            <Link to="#">
                                                                                {" "}
                                                                                <i className="fal fa-star" />
                                                                            </Link>
                                                                        </span>
                                                                        <span className="five">
                                                                            <Link to="#">
                                                                                {" "}
                                                                                <i className="fal fa-star" />
                                                                            </Link>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 mb-15">
                                                                <button className="form-btn form-btn4">
                                                                    Submit <i className="fal fa-long-arrow-right" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`full-details dls-four filterd-items ${activeFilter === 'dls-four' ? '' : 'hide'}`}>
                            <div className="full-details-inner">
                                <p className="mb--30">
                                    In marketing a product is an object or system made available for
                                    consumer use it is anything that can be offered to a market to the
                                    desire or need of a \retailing, products are often referred to as
                                    merchandise, and in manufacturing, products are bought as
                                    materials and then sold as finished goods. A service regarded to
                                    as a type of product. Commodities are usually raw materials metals
                                    and agricultural products, but a commodity can also be anything
                                    wide the open market. In project management, the formal definition
                                    of the project deliverables some kind of efforts you have on it.
                                </p>
                                <p>
                                    A product can be classified as tangible or intangible. A tangible
                                    product is a physical object that can be perceived by touch
                                    building, vehicle, gadget, An intangible product is a product that
                                    can only be perceived indirectly such as an insurance policy. can
                                    be broadly classified under intangible be durable or non durable.
                                    A product line is "a group of products that are closely either
                                    because they function in a similar manner, are sold to the same
                                    customergroups.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*================= Product-details Section End Here =================*/}
        </>

    )
}

export default ProductSection;
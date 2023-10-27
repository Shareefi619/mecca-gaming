import React from 'react'
import { feature1, feature2, feature3 } from '../../assets/images';

const FeatureSection = () => {
    return (
        <>
            {/*================= Features Section Start Here =================*/}
            <div className="rts-features-section">
                <div className="container">
                    <div className="features-section-inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <a className="image-section" href="#">
                                        <img src={feature1} alt="" />
                                    </a>
                                    <div className="content">
                                        <h3 className="product-name">CLASSIFIED GLOVES</h3>
                                        <div className="product-price">
                                            <a href="#" className="price">
                                                30 ITEM
                                            </a>
                                            <a href="#" className="add-to-cart">
                                                VEIW COLLECTIONS
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <a className="image-section" href="#">
                                        <img src={feature2} alt="" />
                                    </a>
                                    <div className="content">
                                        <h3 className="product-name">MEN CLASSIFIED JERSEY</h3>
                                        <div className="product-price">
                                            <a href="#" className="price">
                                                48 ITEM
                                            </a>
                                            <a href="#" className="add-to-cart">
                                                VEIW COLLECTIONS
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item">
                                    <a className="image-section" href="#">
                                        <img src={feature3} alt="" />
                                    </a>
                                    <div className="content">
                                        <h3 className="product-name">STYLISH TARF</h3>
                                        <div className="product-price">
                                            <a href="#" className="price">
                                                25 ITEM
                                            </a>
                                            <a href="#" className="add-to-cart">
                                                VEIW COLLECTIONS
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*================= Features Section End Here =================*/}
        </>

    )
}

export default FeatureSection;
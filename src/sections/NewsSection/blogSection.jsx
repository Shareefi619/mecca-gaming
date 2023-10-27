import { author8, feed1, feed2, feed3, quickBlog1, quickBlog2, quickBlog3, quote, soundCloud, sponsorsad } from "../../assets/images";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const BlogSection = () => {
    return (
        <>
            {/*news-feed-area start*/}
            <section className="news-feed-section section-gap">
                <div className="container">
                    <div className="row mb-15">
                        <div className="col-xl-9 col-md-8">
                            <div className="news-feed-area">
                                <div className="blog-item feed-blog-item">
                                    <Link to="/newsDetails" className="blog-picture">
                                        <img src={feed1} alt="blog-image" />
                                    </Link>
                                    <div className="contents">
                                        <div className="flex-wrapper">
                                            <span className="catagory-tag">BUSINESS, DESIGN</span>
                                            <div className="blog-author">
                                                <div className="author-dp">
                                                    <img
                                                        src={author8}
                                                        alt="author-dp"
                                                    />
                                                </div>
                                                <span className="author-name">BY HETMAYAR</span>
                                            </div>
                                        </div>
                                        <Link to="/newsDetails" className="blog-title">
                                            SERVICE CONSTRUCT DEALS PHYSICAL DAMAG0 WITH HIS BASIC ATTACK
                                            IN THE MATCH.
                                        </Link>
                                        <p>
                                            Novia's spaciously two bedroom apartments are perfect for
                                            families and even business partners. Look out into the
                                            Manhattan skyline from the open fully equipped kitchen.
                                        </p>
                                        <div className="blog-bottom-action">
                                            <span className="item views">
                                                <i className="fas fa-eye" /> 100 Views
                                            </span>
                                            <div className="separator" />
                                            <span className="item comments">
                                                <i className="fas fa-comments" /> 30 Comments
                                            </span>
                                            <div className="separator" />
                                            <span className="item date">
                                                <i className="fas fa-calendar-alt" /> 24th June 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-item feed-blog-item">
                                    <div className="blog-picture">
                                        <img src={feed2} alt="blog-image" />
                                        <div className="play-btn play-video">
                                            <Link
                                                className="popup-video"
                                                to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                                                data-effect="mfp-move-horizontal"
                                            >
                                                <i className="fas fa-play" />
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="contents">
                                        <div className="flex-wrapper">
                                            <span className="catagory-tag">BUSINESS, DESIGN</span>
                                            <div className="blog-author">
                                                <div className="author-dp">
                                                    <img
                                                        src={author8}
                                                        alt="author-dp"
                                                    />
                                                </div>
                                                <span className="author-name">BY HETMAYAR</span>
                                            </div>
                                        </div>
                                        <Link to="/newsDetails" className="blog-title">
                                            SERVICE CONSTRUCT DEALS PHYSICAL DAMAG0 WITH HIS BASIC ATTACK
                                            IN THE MATCH.
                                        </Link>
                                        <p>
                                            Novia's spaciously two bedroom apartments are perfect for
                                            families and even business partners. Look out into the
                                            Manhattan skyline from the open fully equipped kitchen.
                                        </p>
                                        <div className="blog-bottom-action">
                                            <span className="item views">
                                                <i className="fas fa-eye" /> 100 Views
                                            </span>
                                            <div className="separator" />
                                            <span className="item comments">
                                                <i className="fas fa-comments" /> 30 Comments
                                            </span>
                                            <div className="separator" />
                                            <span className="item date">
                                                <i className="fas fa-calendar-alt" /> 24th June 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-item feed-blog-item">
                                    <div className="swiper oneManual">
                                        <Swiper
                                            spaceBetween={30}
                                            loop={true}
                                            centeredSlides={false}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}

                                            navigation={true}
                                            slidesPerView={1} // Set the number of slides per view
                                            modules={[Autoplay, Navigation]}
                                            className="mySwiper"
                                        >


                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <Link to="/newsDetails" className="blog-picture">
                                                            <img
                                                                src={feed3}
                                                                alt="blog-image"
                                                            />
                                                        </Link>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <Link to="/newsDetails" className="blog-picture">
                                                            <img
                                                                src={feed2}
                                                                alt="blog-image"
                                                            />
                                                        </Link>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="swiper-slide">
                                                        <Link to="/newsDetails" className="blog-picture">
                                                            <img
                                                                src={feed1}
                                                                alt="blog-image"
                                                            />
                                                        </Link>
                                                    </div>
                                                </SwiperSlide>
                                            </div>

                                        </Swiper>
                                    </div>
                                    <div className="contents">
                                        <div className="flex-wrapper">
                                            <span className="catagory-tag">BUSINESS, DESIGN</span>
                                            <div className="blog-author">
                                                <div className="author-dp">
                                                    <img
                                                        src={author8}
                                                        alt="author-dp"
                                                    />
                                                </div>
                                                <span className="author-name">BY HETMAYAR</span>
                                            </div>
                                        </div>
                                        <Link to="/newsDetails" className="blog-title">
                                            SERVICE CONSTRUCT DEALS PHYSICAL DAMAG0 WITH HIS BASIC ATTACK
                                            IN THE MATCH.
                                        </Link>
                                        <p>
                                            Novia's spaciously two bedroom apartments are perfect for
                                            families and even business partners. Look out into the
                                            Manhattan skyline from the open fully equipped kitchen.
                                        </p>
                                        <div className="blog-bottom-action">
                                            <span className="item views">
                                                <i className="fas fa-eye" /> 100 Views
                                            </span>
                                            <div className="separator" />
                                            <span className="item comments">
                                                <i className="fas fa-comments" /> 30 Comments
                                            </span>
                                            <div className="separator" />
                                            <span className="item date">
                                                <i className="fas fa-calendar-alt" /> 24th June 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="quote-box">
                                    <div className="quote-area">
                                        <div className="quote-icon">
                                            <img src={quote} alt="quote-icon" />
                                        </div>
                                        <div className="quote">
                                            OFFICE/PARTNERSHIP BY SUBMITTING ALL THE RELEVANT DOCUMENTS
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-item feed-blog-item">
                                    <div className="blog-picture">
                                        <img src={feed2} alt="blog-image" />
                                        <div className="play-btn play-video">
                                            <Link
                                                className="popup-video"
                                                to="https://www.youtube.com/watch?v=G4t6TqG5LM8"
                                                data-effect="mfp-move-horizontal"
                                            >
                                                <i className="fas fa-play" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="contents">
                                        <div className="flex-wrapper">
                                            <span className="catagory-tag">BUSINESS, DESIGN</span>
                                            <div className="blog-author">
                                                <div className="author-dp">
                                                    <img
                                                        src={author8}
                                                        alt="author-dp"
                                                    />
                                                </div>
                                                <span className="author-name">BY HETMAYAR</span>
                                            </div>
                                        </div>
                                        <Link to="/newsDetails" className="blog-title">
                                            SERVICE CONSTRUCT DEALS PHYSICAL DAMAG0 WITH HIS BASIC ATTACK
                                            IN THE MATCH.
                                        </Link>
                                        <p>
                                            Novia's spaciously two bedroom apartments are perfect for
                                            families and even business partners. Look out into the
                                            Manhattan skyline from the open fully equipped kitchen.
                                        </p>
                                        <div className="blog-bottom-action">
                                            <span className="item views">
                                                <i className="fas fa-eye" /> 100 Views
                                            </span>
                                            <div className="separator" />
                                            <span className="item comments">
                                                <i className="fas fa-comments" /> 30 Comments
                                            </span>
                                            <div className="separator" />
                                            <span className="item date">
                                                <i className="fas fa-calendar-alt" /> 24th June 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-item feed-blog-item">
                                    <Link to="/newsDetails" className="blog-picture">
                                        <img src={soundCloud} alt="blog-image" />
                                    </Link>
                                    <div className="contents">
                                        <Link to="/newsDetails" className="blog-title">
                                            SERVICE CONSTRUCT DEALS PHYSICAL DAMAG0 WITH HIS BASIC ATTACK
                                            IN THE MATCH.
                                        </Link>
                                        <p>
                                            Novia's spaciously two bedroom apartments are perfect for
                                            families and even business partners. Look out into the
                                            Manhattan skyline from the open fully equipped kitchen.
                                        </p>
                                        <div className="blog-bottom-action">
                                            <span className="item views">
                                                <i className="fas fa-eye" /> 100 Views
                                            </span>
                                            <div className="separator" />
                                            <span className="item comments">
                                                <i className="fas fa-comments" /> 30 Comments
                                            </span>
                                            <div className="separator" />
                                            <span className="item date">
                                                <i className="fas fa-calendar-alt" /> 24th June 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-pagination-area mt--50">
                                <button className="prev">
                                    <i className="fal fa-angle-double-left" />
                                </button>
                                <button className="number active">01</button>
                                <button className="number">02</button>
                                <button className="skip-number">---</button>
                                <button className="number">07</button>
                                <button className="number">08</button>
                                <button className="next">
                                    <i className="fal fa-angle-double-right" />
                                </button>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="news-right-widget">
                                <div className="widget widget-search mb-40">
                                    <div className="widget-title-box pb-25 mb-30">
                                        <h4 className="widget-sub-title2 fs-20">Search Here</h4>
                                    </div>
                                    <form className="subscribe-form mb-10" action="#">
                                        <input type="text" placeholder="Keyword..." />
                                        <button className="widget-btn">
                                            <i className="far fa-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="widget widget-post mb-40">
                                    <div className="widget-title-box pb-25 mb-30">
                                        <h4 className="widget-sub-title2 fs-20">Popular Feeds</h4>
                                    </div>
                                    <ul className="post-list">
                                        <li>
                                            <div className="blog-post mb-30">
                                                <Link to="/newsDetails">
                                                    <img
                                                        src={quickBlog1}
                                                        alt="Post Img"
                                                    />
                                                </Link>
                                                <div className="post-content">
                                                    <h6 className="mb-10">
                                                        <Link to="/newsDetails">
                                                            Having education in an area helps
                                                        </Link>
                                                    </h6>
                                                    <span className="fs-14">
                                                        <i className="fas fa-calendar-alt" /> 24th March 2023
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="blog-post mb-30">
                                                <Link to="/newsDetails">
                                                    <img
                                                        src={quickBlog2}
                                                        alt="Post Img"
                                                    />
                                                </Link>
                                                <div className="post-content">
                                                    <h6 className="mb-10">
                                                        <Link to="/newsDetails">
                                                            People think, feel, &amp; behave in a way
                                                        </Link>
                                                    </h6>
                                                    <span className="fs-14">
                                                        <i className="fas fa-calendar-alt" /> 24th March 2023
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="blog-post mb-30">
                                                <Link to="/newsDetails">
                                                    <img
                                                        src={quickBlog3}
                                                        alt="Post Img"
                                                    />
                                                </Link>
                                                <div className="post-content">
                                                    <h6 className="mb-10">
                                                        <Link to="/newsDetails">
                                                            That contributes to their success
                                                        </Link>
                                                    </h6>
                                                    <span className="fs-14">
                                                        <i className="fas fa-calendar-alt" /> 24th March 2023
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget widget-categories-list mb-40">
                                    <div className="widget-title-box pb-25 mb-30">
                                        <h4 className="widget-sub-title2 fs-20">Categories</h4>
                                    </div>
                                    <ul className="list-none" >
                                        <li>
                                            <Link to="#" onClick={() => {
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }}>
                                                <i className="fal fa-angle-right" /> Business{" "}
                                                <span className="f-right">26</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={() => {
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }}>
                                                <i className="fal fa-angle-right" /> Consultant{" "}
                                                <span className="f-right">30</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={() => {
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }}>
                                                <i className="fal fa-angle-right" /> Creative{" "}
                                                <span className="f-right">71</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={() => {
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }}>
                                                <i className="fal fa-angle-right" /> UI/UX{" "}
                                                <span className="f-right">56</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" onClick={() => {
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }}>
                                                <i className="fal fa-angle-right" /> Technologys{" "}
                                                <span className="f-right">60</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget widget-categories-tag mb-40">
                                    <div className="widget-title-box pb-25 mb-25">
                                        <h4 className="widget-sub-title2 fs-20">TAGS</h4>
                                    </div>
                                    <div className="tag-list">
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Popular</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Design</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>UX</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Usability</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Develop</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Icon</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Business</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Consult</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Kit</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Keyboard</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Mouse</Link>
                                        <Link to="#" onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}>Tech</Link>
                                    </div>
                                </div>
                                <div className="widget widget-sponsors-ad">
                                    <div className="widget-title-box pb-25 mb-25">
                                        <h4 className="widget-sub-title2 fs-20">SPONSOR ADS</h4>
                                    </div>
                                    <Link to="#" onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }}>
                                        <div className="ad-thumb">
                                            <img
                                                src={sponsorsad}
                                                alt="sponsorad"
                                            />
                                        </div>
                                        <span className="ad-tag">FOR AD: 270X240</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*news-feed-area end*/}
        </>

    )
}

export default BlogSection;
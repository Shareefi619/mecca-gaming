import { Link } from "react-router-dom"
import { authorDp, blogImage, blogPart, gridShape, quickBlog1, quickBlog2, quickBlog3, quoteRound, sponsorsad, user1, user2, user3 } from "../../assets/images"

const NewsDetailSection = () => {
    return (
        <>
            {/*Blog Details area start*/}
            <section className="rts-blog-details news-feed-section section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 left-news-col">
                            <div className="blog-details news-left2">
                                <div className="news-top">
                                    <div className="icon-text">
                                        <span className="viewers fs-10">
                                            <Link to="#">
                                                <i className="fas fa-eye" /> 100 Views
                                            </Link>
                                        </span>
                                        <span className="comment fs-10">
                                            <Link to="#">
                                                <i className="fas fa-comments" /> 30 Comments
                                            </Link>
                                        </span>
                                        <span className="date fs-10">
                                            <Link to="#">
                                                <i className="fas fa-calendar-alt" /> 24th March 2023
                                            </Link>
                                        </span>
                                    </div>
                                    <p className="description">
                                        A great commerce experience cannot be distilled to a single
                                        number. It’s not a Lighthouse score, or a set of Core Web Vitals
                                        figures, although both are important inputs. A great commerce
                                        experience is a trilemma thimport ScrollToTop from './../../components/scrollToTop';
                                        at carefully balances competing needs
                                        of delivering great customer experience, dynamic storefront
                                        capabilities, and long-term business — conversion, retention,
                                        re-engagement — objectives. As developers, we rightfully obsess
                                        about the customer experience, relentlessly working to squeeze
                                        every millisecond out of the critical rendering path, optimize
                                        input latency, and eliminate jank. At the limit, statically
                                        generated, edge delivered, and HTML-first pages look like the
                                        optimal strategy. That is until you are confronted with the
                                        realization that the next step function in improving conversion
                                        rates and business.
                                    </p>
                                    <div className="image-section">
                                        <div className="blog-image">
                                            <img
                                                src={blogImage}
                                                alt="blog-image"
                                            />
                                        </div>
                                    </div>
                                    <h2 className="blog-point-text">
                                        A CLEANSING HOT SHOWER OR BATH
                                    </h2>
                                    <p className="description">
                                        The journey, often, starts “simple” with localization. But then,
                                        quickly advances to contextual pricing, juggling complexity of
                                        large and frequently updated product catalog, managing
                                        continuously running multivariate tests and promotion campaigns,
                                        and serving customer-tailored dynamic recommendations.
                                        Eventually, you reach a realization that every page is similar
                                        to an open Tetris board where each “slot” can and should be
                                        dynamically tailored by dynamic visitor preferences, all powered
                                        by an ever-growing set of dynamic business rules.
                                    </p>
                                </div>
                                <div className="blog-part blog-part2 part-gap">
                                    <h2 className="blog-point-text">SETTING THE MOOD WITH INCENSE</h2>
                                    <div className="flex-wrapper">
                                        <div className="blog-part-image">
                                            <img
                                                src={blogPart}
                                                alt="blog-part-image"
                                            />
                                        </div>
                                        <p className="description">
                                            From connecting back-office operations to front-of-the-house
                                            A/B testing and dynamic personalization for each customer, the
                                            shared foundation is fast server-side rendering powered by
                                            fast storefront data access. On top of this foundation, we add
                                            layers of caching, prerendering and edge delivery
                                            optimizations — not the other way around.
                                        </p>
                                    </div>
                                </div>
                                <div className="blog-quote-box part-gap">
                                    <div className="author-box">
                                        <div className="quote-icon">
                                            <img
                                                src={quoteRound}
                                                alt="quote-icon"
                                            />
                                        </div>
                                        <div className="author">
                                            <span className="blog-author">ROSALINA D. WILLIAM</span>
                                            <span className="role">FOUNDER</span>
                                        </div>
                                    </div>
                                    <h3 className="blog-quote">
                                        Choices to take a holiday and travelling out inthis pandemic
                                        situation are limited. Why not take a stay action on quality.
                                    </h3>
                                </div>
                                <p className="description">
                                    Surveying the existing landscape of available developer tools and
                                    runtimes, we felt that there is a gap. Enabling dynamic commerce
                                    requires close integration between server and client, an optimized
                                    streaming and data fetch strategy, and a production platform that
                                    operates at scale. These are hard technical problems that Shopify
                                    can help solve and this is why we’ve been hard at work on the
                                    Hydrogen framework. It’s a React-based framework optimized for
                                    commerce and specialized to be powered by Shopify APIs and
                                    infrastructure: The future of commerce is dynamic and
                                    personalized.
                                </p>
                                <div className="bottom-area">
                                    <div className="blog-actions part-gap">
                                        <div className="tag-area">
                                            <h3>RELATED TAGS</h3>
                                            <div className="button-tag">
                                                <ul>
                                                    <li>
                                                        <Link to="#" onClick={() => {
                                                            window.scrollTo({
                                                                top: 0,
                                                                behavior: 'smooth'
                                                            });
                                                        }}>POPULAR</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" onClick={() => {
                                                            window.scrollTo({
                                                                top: 0,
                                                                behavior: 'smooth'
                                                            });
                                                        }}>DESIGN</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" onClick={() => {
                                                            window.scrollTo({
                                                                top: 0,
                                                                behavior: 'smooth'
                                                            });
                                                        }}>UX</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="social-area">
                                            <div className="social-title">
                                                <h3>SOCIAL SHARE</h3>
                                            </div>
                                            <div className="social-icon">
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fab fa-facebook-f" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fab fa-twitter" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fab fa-behance" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fab fa-linkedin-in" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fab fa-tumblr" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-area part-gap mb--50">
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-lg-4 col-sm-4 col-12 text-start">
                                                <div className="previous-post quick-post">
                                                    <div className="post-text">
                                                        <h3 className="sub-title">Prev Post</h3>
                                                        <h2 className="sect-title">
                                                            <Link to="#" onClick={() => {
                                                                window.scrollTo({
                                                                    top: 0,
                                                                    behavior: 'smooth'
                                                                });
                                                            }}>TIPS ON MINIMALIST</Link>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-4 col-12 text-sm-center text-center">
                                                <div className="icon-area">
                                                    <Link to="#" onClick={() => {
                                                        window.scrollTo({
                                                            top: 0,
                                                            behavior: 'smooth'
                                                        });
                                                    }}>
                                                        <img
                                                            src={gridShape}
                                                            alt="img"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-4 col-12 text-sm-end text-start justify-content-sm-end justify-content-start">
                                                <div className="next-post quick-post">
                                                    <div className="post-text">
                                                        <h3 className="sub-title">Next Post</h3>
                                                        <h2 className="sect-title">
                                                            <Link to="#" onClick={() => {
                                                                window.scrollTo({
                                                                    top: 0,
                                                                    behavior: 'smooth'
                                                                });
                                                            }}>LESS IS MORE</Link>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-author-box part-gap">
                                        <div className="author-dp">
                                            <img src={authorDp} alt="author-dp" />
                                        </div>
                                        <div className="content">
                                            <span>Written by</span>
                                            <h2 className="author-name">ROSALINA D. WILLIAM</h2>
                                            <p className="author-description">
                                                Getting fast initial render with streaming server-side
                                                rendering, efficient component-level updates and state
                                                transitions, while also setting up a performant loading and
                                                bundling strategy.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="comment-header">
                                        <div className="comment">
                                            <h3>03 COMMENT</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="comment-section first-child">
                                                <div className="comment-text">
                                                    <div className="commentator">
                                                        <Link to="#" onClick={() => {
                                                            window.scrollTo({
                                                                top: 0,
                                                                behavior: 'smooth'
                                                            });
                                                        }}>
                                                            <img
                                                                src={user1}
                                                                alt="commentator"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="text">
                                                        <div className="section-title">
                                                            <div className="title">
                                                                <h2 className="sub-title">ROSALINA KELIAN</h2>
                                                                <span className="sect-title">
                                                                    <Link to="#">
                                                                        <i className="fas fa-calendar-alt" />
                                                                        24th March 2023
                                                                    </Link>
                                                                </span>
                                                            </div>
                                                            <div className="button">
                                                                <Link to="#">
                                                                    <i className="fas fa-reply" /> Reply
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <p className="description">
                                                            But that's not all. Not to be outdone, individual
                                                            sellers have increasingly engaged in e-commerce
                                                            transactions via their own personal websites. And
                                                            digital marketplaces such as eBay or Etsy serve as
                                                            exchanges where multitudes of buyers and sellers come
                                                            together to conduct business. commerce has changed the
                                                            way people shop and consume products and services.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-2" />
                                        <div className="col-lg-10">
                                            <div className="comment-section">
                                                <div className="comment-text">
                                                    <div className="commentator">
                                                        <Link to="#" onClick={() => {
                                                            window.scrollTo({
                                                                top: 0,
                                                                behavior: 'smooth'
                                                            });
                                                        }}>
                                                            <img
                                                                src={user2}
                                                                alt="commentator"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="text">
                                                        <div className="section-title">
                                                            <div className="title">
                                                                <h2 className="sub-title">ALONSO WILLIAM</h2>
                                                                <span className="sect-title">
                                                                    <Link to="#">
                                                                        <i className="fas fa-calendar-alt" />
                                                                        24th March 2023
                                                                    </Link>
                                                                </span>
                                                            </div>
                                                            <div className="button">
                                                                <Link to="#">
                                                                    <i className="fas fa-reply" /> Reply
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <p className="description">
                                                            Ecommerce has changed the way people shop and consume
                                                            products and services. More and more people are
                                                            turning to their computers and smart devices to order
                                                            goods, which can easily be delivered to their homes.
                                                            As such, it has disrupted the retail landscape. Amazon
                                                            and Alibaba have gained considerable popularity.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="comment-section">
                                                <div className="comment-text">
                                                    <div className="commentator">
                                                        <Link to="#" onClick={() => {
                                                            window.scrollTo({
                                                                top: 0,
                                                                behavior: 'smooth'
                                                            });
                                                        }}>
                                                            <img
                                                                src={user3}
                                                                alt="commentator"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="text">
                                                        <div className="section-title">
                                                            <div className="title">
                                                                <h2 className="sub-title">MIRANDA HALIM</h2>
                                                                <span className="sect-title">
                                                                    <Link to="#">
                                                                        <i className="fas fa-calendar-alt" />
                                                                        24th March 2023
                                                                    </Link>
                                                                </span>
                                                            </div>
                                                            <div className="button">
                                                                <Link to="#">
                                                                    <i className="fas fa-reply" /> Reply
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <p className="description">
                                                            commerce has changed the way people shop and consume
                                                            products and services. More and more people are
                                                            turning to their computers and smart devices to order
                                                            goods, which can easily be delivered to their homes.
                                                            As such, it has disrupted the retail landscape. Amazon
                                                            and Alibaba have gained considerable popularity
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-form mb-10">
                                        <div className="contact-form">
                                            <div className="input-box text-input mb-20">
                                                <textarea
                                                    name="Message"
                                                    id="validationDefault01"
                                                    cols={30}
                                                    rows={10}
                                                    placeholder="Type Your Comments..."
                                                    required=""
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="input-box name-input mb-20">
                                                <input
                                                    type="text"
                                                    id="validationDefault02"
                                                    placeholder="Type Your Name..."
                                                    required=""
                                                />
                                            </div>
                                            <div className="input-box mail-input mb-20">
                                                <input
                                                    type="text"
                                                    id="validationDefault03"
                                                    placeholder="Type Your E-mail..."
                                                    required=""
                                                />
                                            </div>
                                            <div className="input-box sub-input mb-30">
                                                <input
                                                    type="text"
                                                    id="validationDefault04"
                                                    placeholder="Type Your Website..."
                                                    required=""
                                                />
                                            </div>
                                            <button className="form-btn form-btn4">
                                                GIVE COMMENT <i className="fal fa-long-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
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
                                    <ul className="list-none">
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
                                        <Link to="#">Popular</Link>
                                        <Link to="#">Design</Link>
                                        <Link to="#">UX</Link>
                                        <Link to="#">Usability</Link>
                                        <Link to="#">Develop</Link>
                                        <Link to="#">Icon</Link>
                                        <Link to="#">Business</Link>
                                        <Link to="#">Consult</Link>
                                        <Link to="#">Kit</Link>
                                        <Link to="#">Keyboard</Link>
                                        <Link to="#">Mouse</Link>
                                        <Link to="#">Tech</Link>
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
                                        <span className="ad-tag">270X240</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Blog Details Area end*/}
        </>

    )
}

export default NewsDetailSection
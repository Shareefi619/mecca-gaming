import React from 'react'

const NewsLetter = () => {
    return (
        <>
            {/*================= Top Newsletter Start Here =================*/}
            <section className="rts-newsletter-section2 section-gap-100">
                <div className="container">
                    <div className="newsletter-inner">
                        <h3 className="title">SUBSCRIBE NEWSLETTER</h3>
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
                                    SUBSCRIBE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/*================= Top Newsletter End Here =================*/}
        </>

    )
}

export default NewsLetter
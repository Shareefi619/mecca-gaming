import { useState, useEffect } from 'react';
import { blogbg, club1, club6, ig13, ig14, ig15, ig16, ig17, ig18, logo } from '../../assets/images'
import { Link } from 'react-router-dom'

const BlogSection = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Set the target date for the countdown
    const targetDate = new Date('2023-12-31T00:00:00').getTime();

    // Function to update the countdown values
    const updateCountdown = () => {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        if (timeRemaining > 0) {
            const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setDays(daysRemaining);
            setHours(hoursRemaining);
            setMinutes(minutesRemaining);
            setSeconds(secondsRemaining);
        }
    };

    // Update the countdown values every second
    useEffect(() => {
        const countdownInterval = setInterval(updateCountdown, 1000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(countdownInterval);
        };
    }, []);
    return (
        <>
            {/*================= Blog Section Start Here =================*/}
            <section className="rts-blog-section2 section-gap">
                <div className="container">
                    <div className="blog-area">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="section-title-area section-title-area2">
                                    <h1 className="section-title">LATEST POSTS</h1>
                                </div>
                                <div className="rts-post-area">
                                    <div className="rts-post rts-post-wide mb--35">
                                        <Link to="/newsDetails" className="gallery-picture">
                                            <img src={ig13} alt="" />
                                        </Link>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <p className="tag">FOOTBALL</p>
                                                        <span className="blog-date">JULY 21, 2023</span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">
                                                            THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL
                                                            CLUB BETWEEN POLICY SOLUTION
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="author-info">
                                                    <div className="content">
                                                        <Link to="/newsDetails" className="read-more">
                                                            READ MORE
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rts-post rts-post-wide mb--35">
                                        <Link to="/newsDetails" className="gallery-picture">
                                            <img src={ig14} alt="" />
                                        </Link>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <p className="tag">FOOTBALL</p>
                                                        <span className="blog-date">JULY 21, 2023</span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">
                                                            THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL
                                                            CLUB BETWEEN POLICY SOLUTION
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="author-info">
                                                    <div className="content">
                                                        <Link to="/newsDetails" className="read-more">
                                                            READ MORE
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rts-post rts-post-wide mb--35">
                                        <Link to="/newsDetails" className="gallery-picture">
                                            <img src={ig15} alt="" />
                                        </Link>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <p className="tag">FOOTBALL</p>
                                                        <span className="blog-date">JULY 21, 20202322</span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">
                                                            THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL
                                                            CLUB BETWEEN POLICY SOLUTION
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="author-info">
                                                    <div className="content">
                                                        <Link to="/newsDetails" className="read-more">
                                                            READ MORE
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rts-post rts-post-wide mb--35">
                                        <Link to="/newsDetails" className="gallery-picture">
                                            <img src={ig16} alt="" />
                                        </Link>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <p className="tag">FOOTBALL</p>
                                                        <span className="blog-date">JULY 21, 2023</span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">
                                                            THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL
                                                            CLUB BETWEEN POLICY SOLUTION
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="author-info">
                                                    <div className="content">
                                                        <Link to="/newsDetails" className="read-more">
                                                            READ MORE
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rts-post rts-post-wide mb--35">
                                        <Link to="/newsDetails" className="gallery-picture">
                                            <img src={ig17} alt="" />
                                        </Link>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <p className="tag">FOOTBALL</p>
                                                        <span className="blog-date">JULY 21, 2023</span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">
                                                            THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL
                                                            CLUB BETWEEN POLICY SOLUTION
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="author-info">
                                                    <div className="content">
                                                        <Link to="/newsDetails" className="read-more">
                                                            READ MORE
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rts-post rts-post-wide mb--35">
                                        <Link to="/newsDetails" className="gallery-picture">
                                            <img src={ig18} alt="" />
                                        </Link>
                                        <div className="contents-wrapper">
                                            <div className="contents text-start">
                                                <div className="d-block">
                                                    <div className="heading d-flex">
                                                        <p className="tag">FOOTBALL</p>
                                                        <span className="blog-date">JULY 21, 2023</span>
                                                    </div>
                                                    <div className="gallery-title">
                                                        <Link to="/newsDetails">
                                                            THE WORLD CUP – WHAT TO EXPECT FROM ENGLAND FOOTBALL
                                                            CLUB BETWEEN POLICY SOLUTION
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="author-info">
                                                    <div className="content">
                                                        <Link to="/newsDetails" className="read-more">
                                                            READ MORE
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="side-content">
                                    <div className="side-content-inner">
                                        <div className="next-match-area side-item">
                                            <div className="side-item-inner">
                                                <h3 className="side-content-title">NEXT MATCH</h3>
                                                <div className="match-single">
                                                    <div className="match-scores">
                                                        <div className="club club-top">
                                                            <div className="club-logo mr--20">
                                                                <img
                                                                    src={club1}
                                                                    alt="club-logo"
                                                                />
                                                                <span className="club-name">REAL M.</span>
                                                            </div>
                                                        </div>
                                                        <div className="block">
                                                            <span className="match-date">PLAYOFF, JULY 21</span>
                                                            <span className="stadium-name">MC ARMY STADIUM</span>
                                                        </div>
                                                        <div className="club club-bottom">
                                                            <div className="club-logo ml--20">
                                                                <img
                                                                    src={club6}
                                                                    alt="club-logo"
                                                                />
                                                                <span className="club-name">HEMILTON H.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="countdown-box">
                                                <div className="match-countdown-area">
                                                    <div className="countdown">
                                                        <div className="countdown-item">
                                                            <div className="countdown-el days-c">
                                                                <span className="value" id="days">
                                                                    {days}
                                                                </span>
                                                            </div>
                                                            <span className="letter">DAYS</span>
                                                        </div>
                                                        <span className="colon">:</span>
                                                        <div className="countdown-item">
                                                            <div className="countdown-el hours-c">
                                                                <span className="value" id="hours">
                                                                    {hours}
                                                                </span>
                                                            </div>
                                                            <span className="letter">HOURS</span>
                                                        </div>
                                                        <span className="colon">:</span>
                                                        <div className="countdown-item">
                                                            <div className="countdown-el mins-c">
                                                                <span className="value" id="mins">
                                                                    {minutes}
                                                                </span>
                                                            </div>
                                                            <span className="letter">MINUTES</span>
                                                        </div>
                                                        <span className="colon">:</span>
                                                        <div className="countdown-item">
                                                            <div className="countdown-el seconds-c">
                                                                <span className="value" id="seconds">
                                                                    {seconds}
                                                                </span>
                                                            </div>
                                                            <span className="letter">SECONDS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="premier-league-area side-table-item side-item">
                                            <div className="side-item-inner">
                                                <h3 className="side-content-title">GOAL STATUS</h3>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr className="head-tr">
                                                            <th scope="col">POS</th>
                                                            <th scope="col">CLUB</th>
                                                            <th scope="col">GOAL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span className="position-number">01</span>
                                                            </td>
                                                            <td>
                                                                <div className="player-name-area">
                                                                    <h4 className="player-name">
                                                                        Mecca of Gaming F.C.
                                                                    </h4>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="match-count">10</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="position-number">02</span>
                                                            </td>
                                                            <td>
                                                                <div className="player-name-area">
                                                                    <h4 className="player-name">
                                                                        Mecca of Gaming F.C.
                                                                    </h4>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="match-count">10</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="position-number">03</span>
                                                            </td>
                                                            <td>
                                                                <div className="player-name-area">
                                                                    <h4 className="player-name">
                                                                        Mecca of Gaming F.C.
                                                                    </h4>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="match-count">10</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="position-number">04</span>
                                                            </td>
                                                            <td>
                                                                <div className="player-name-area">
                                                                    <h4 className="player-name">
                                                                        Mecca of Gaming F.C.
                                                                    </h4>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="match-count">10</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="position-number">05</span>
                                                            </td>
                                                            <td>
                                                                <div className="player-name-area">
                                                                    <h4 className="player-name">
                                                                        Mecca of Gaming F.C.
                                                                    </h4>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="match-count">10</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className="position-number">06</span>
                                                            </td>
                                                            <td>
                                                                <div className="player-name-area">
                                                                    <h4 className="player-name">
                                                                        Mecca of Gaming F.C.
                                                                    </h4>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="match-count">10</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <Link
                                                    to="#"
                                                    className="full-table-btn more-btn btn"
                                                >
                                                    VIEW FULL TABLE
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="subscription-area side-item">
                                            <div className="area-inner">
                                                <div className="img">
                                                    <img src={blogbg} alt="" />
                                                </div>
                                                <div className="logo">
                                                    <img src={logo} alt="" />
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">
                                                        WATCH THE AMAZING LIVE SEASON NOW
                                                    </h3>
                                                    <Link to="#" className="button">
                                                        START FREE TRIAL
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Blog Section Section End Here =================*/}
        </>

    )
}

export default BlogSection
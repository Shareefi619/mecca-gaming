import React from 'react'
import { teamlogo1, teamlogo2, teamlogo3, teamlogo4, teamlogo5, teamlogo6 } from '../../assets/images'
import { Link } from 'react-router-dom'

const Nextmatch = () => {
    return (
        <div className="rts-next-match-section section-gap">
            <div className="container">
                <div className="section-title-area section-title-area1 text-center mb--50">
                    <span className="pretitle">GAMES</span>
                    <h1 className="section-title">PREMIER LEAGUE</h1>
                    <p>It is one of the most popular football clubs that offer training programs
                        for the youth, as well as summer camps</p>
                </div>
                <ul className="table-area table-full">
                    <li className="table-inner">
                        <div className="team-name">
                            <p className="mode">2v2, Double Elimination</p>
                            <h3 className="name">Lusail Ico. Stadium, Dubai</h3>
                            <p className="time">December 25, 2022 4:00 PM</p>
                        </div>
                        <div className="team-logo-area">
                            <Link to="#" className="text-center">
                                <img src={teamlogo1} alt="" />
                                <p className="team">Mecca of Gaming F.C</p>
                            </Link>
                            <span className="versus">VS</span>
                            <Link to="#" className="text-center">
                                <img src={teamlogo2} alt="" />
                                <p className="team">Champions</p>
                            </Link>
                        </div>
                        <div className="button-area">
                            <Link to="#" className="btn-1">Get Tickets</Link>
                            <Link to="#" className="btn-2">Watch Stream</Link>
                        </div>
                    </li>
                    <li className="table-inner">
                        <div className="team-name">
                            <p className="mode">2v2, Double Elimination</p>
                            <h3 className="name">Lusail Ico. Stadium, Dubai</h3>
                            <p className="time">December 27, 2022 4:00 PM</p>
                        </div>
                        <div className="team-logo-area">
                            <Link to="#" className="text-center">
                                <img src={teamlogo3} alt="" />
                                <p className="team">Mecca of Gaming F.C</p>
                            </Link>
                            <span className="versus">VS</span>
                            <Link to="#" className="text-center">
                                <img src={teamlogo4} alt="" />
                                <p className="team">Asia Pasific</p>
                            </Link>
                        </div>
                        <div className="button-area">
                            <Link to="#" className="btn-1">Get Tickets</Link>
                            <Link to="#" className="btn-2">Watch Stream</Link>
                        </div>
                    </li>
                    <li className="table-inner">
                        <div className="team-name">
                            <p className="mode">2v2, Double Elimination</p>
                            <h3 className="name">Lusail Ico. Stadium, Dubai</h3>
                            <p className="time">December 30, 2022 4:00 PM</p>
                        </div>
                        <div className="team-logo-area">
                            <Link to="#" className="text-center">
                                <img src={teamlogo5} alt="" />
                                <p className="team">Mecca of Gaming F.C</p>
                            </Link>
                            <span className="versus">VS</span>
                            <Link to="#" className="text-center">
                                <img src={teamlogo6} alt="" />
                                <p className="team">West Ham</p>
                            </Link>
                        </div>
                        <div className="button-area">
                            <Link to="#" className="btn-1">Get Tickets</Link>
                            <Link to="#" className="btn-2">Watch Stream</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nextmatch
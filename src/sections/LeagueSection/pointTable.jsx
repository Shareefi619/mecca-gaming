import React from "react";
import { Link } from "react-router-dom";

const PointTable = () => {
  return (
    <>
      {/*================= Point Table Section Start Here =================*/}
      <div className="rts-point-table-section section-gap">
        <div className="container">
          <div className="title-area">
            <h2 className="title text-center">PRIMARY LEAGUE 2022</h2>
          </div>
          <div className="table-area table-full">
            <table className="table table-bordered">
              <thead className="thead-dark"></thead>
              <tbody>
                <tr className="head-tr">
                  <th scope="col">POSITION</th>
                  <th scope="col">CLUB NAME</th>
                  <th scope="col">MATCH</th>
                  <th scope="col">WIN</th>
                  <th scope="col">DRAW</th>
                  <th scope="col">LOSE</th>
                  <th scope="col">DUE</th>
                  <th scope="col">PTS</th>
                </tr>
                <tr>
                  <td>
                    <span className="position-number">01</span>
                  </td>
                  <td>
                    <div className="product-title-area">
                      <h4 className="player-name">Mecca of Gaming F.C.</h4>
                    </div>
                  </td>
                  <td>
                    <span className="match-count">39</span>
                  </td>
                  <td>
                    <span className="win-count">30</span>
                  </td>
                  <td>
                    <span className="draw-count">02</span>
                  </td>
                  <td>
                    <span className="lose-count">01</span>
                  </td>
                  <td>
                    <span className="due-count">03</span>
                  </td>
                  <td>
                    <span className="pts-count">60</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="position-number">02</span>
                  </td>
                  <td>
                    <div className="player-name-area">
                      <h4 className="player-name">Romada Football Club</h4>
                    </div>
                  </td>
                  <td>
                    <span className="match-count">27</span>
                  </td>
                  <td>
                    <span className="win-count">10</span>
                  </td>
                  <td>
                    <span className="draw-count">02</span>
                  </td>
                  <td>
                    <span className="lose-count">01</span>
                  </td>
                  <td>
                    <span className="due-count">03</span>
                  </td>
                  <td>
                    <span className="pts-count">56</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="position-number">03</span>
                  </td>
                  <td>
                    <div className="player-name-area">
                      <h4 className="player-name">Holonso F.C.</h4>
                    </div>
                  </td>
                  <td>
                    <span className="match-count">24</span>
                  </td>
                  <td>
                    <span className="win-count">35</span>
                  </td>
                  <td>
                    <span className="draw-count">02</span>
                  </td>
                  <td>
                    <span className="lose-count">01</span>
                  </td>
                  <td>
                    <span className="due-count">03</span>
                  </td>
                  <td>
                    <span className="pts-count">46</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="position-number">04</span>
                  </td>
                  <td>
                    <div className="player-name-area">
                      <h4 className="player-name">Real Madrid</h4>
                    </div>
                  </td>
                  <td>
                    <span className="match-count">25</span>
                  </td>
                  <td>
                    <span className="win-count">19</span>
                  </td>
                  <td>
                    <span className="draw-count">02</span>
                  </td>
                  <td>
                    <span className="lose-count">01</span>
                  </td>
                  <td>
                    <span className="due-count">03</span>
                  </td>
                  <td>
                    <span className="pts-count">58</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="position-number">05</span>
                  </td>
                  <td>
                    <div className="player-name-area">
                      <h4 className="player-name">Barcelona F.C.</h4>
                    </div>
                  </td>
                  <td>
                    <span className="match-count">19</span>
                  </td>
                  <td>
                    <span className="win-count">25</span>
                  </td>
                  <td>
                    <span className="draw-count">02</span>
                  </td>
                  <td>
                    <span className="lose-count">01</span>
                  </td>
                  <td>
                    <span className="due-count">03</span>
                  </td>
                  <td>
                    <span className="pts-count">47</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="position-number">06</span>
                  </td>
                  <td>
                    <div className="player-name-area">
                      <h4 className="player-name">Chelsea</h4>
                    </div>
                  </td>
                  <td>
                    <span className="match-count">10</span>
                  </td>
                  <td>
                    <span className="win-count">23</span>
                  </td>
                  <td>
                    <span className="draw-count">02</span>
                  </td>
                  <td>
                    <span className="lose-count">01</span>
                  </td>
                  <td>
                    <span className="due-count">03</span>
                  </td>
                  <td>
                    <span className="pts-count">-10</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="position-number">07</span>
                  </td>
                  <td>
                    <div className="player-name-area">
                      <h4 className="player-name">Burusia Dortmond</h4>
                    </div>
                  </td>
                  <td>
                    <span className="match-count">10</span>
                  </td>
                  <td>
                    <span className="win-count">23</span>
                  </td>
                  <td>
                    <span className="draw-count">02</span>
                  </td>
                  <td>
                    <span className="lose-count">01</span>
                  </td>
                  <td>
                    <span className="due-count">03</span>
                  </td>
                  <td>
                    <span className="pts-count">-10</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="position-number">08</span>
                  </td>
                  <td>
                    <div className="player-name-area">
                      <h4 className="player-name">Del Rio</h4>
                    </div>
                  </td>
                  <td>
                    <span className="match-count">10</span>
                  </td>
                  <td>
                    <span className="win-count">23</span>
                  </td>
                  <td>
                    <span className="draw-count">02</span>
                  </td>
                  <td>
                    <span className="lose-count">01</span>
                  </td>
                  <td>
                    <span className="due-count">03</span>
                  </td>
                  <td>
                    <span className="pts-count">-10</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="position-number">09</span>
                  </td>
                  <td>
                    <div className="player-name-area">
                      <h4 className="player-name">Wakanda Forever</h4>
                    </div>
                  </td>
                  <td>
                    <span className="match-count">10</span>
                  </td>
                  <td>
                    <span className="win-count">23</span>
                  </td>
                  <td>
                    <span className="draw-count">02</span>
                  </td>
                  <td>
                    <span className="lose-count">01</span>
                  </td>
                  <td>
                    <span className="due-count">03</span>
                  </td>
                  <td>
                    <span className="pts-count">-10</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="position-number">10</span>
                  </td>
                  <td>
                    <div className="player-name-area">
                      <h4 className="player-name">Avengers</h4>
                    </div>
                  </td>
                  <td>
                    <span className="match-count">10</span>
                  </td>
                  <td>
                    <span className="win-count">23</span>
                  </td>
                  <td>
                    <span className="draw-count">02</span>
                  </td>
                  <td>
                    <span className="lose-count">01</span>
                  </td>
                  <td>
                    <span className="due-count">03</span>
                  </td>
                  <td>
                    <span className="pts-count">-10</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="button-area">
            <Link to="#" className="full-table-btn">
              LOAD MORE <i className="fal fa-plus ml--5" />
            </Link>
          </div>
        </div>
      </div>
      {/*================= Point Table Section End Here =================*/}
    </>
  );
};

export default PointTable;

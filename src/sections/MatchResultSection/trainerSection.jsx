
const TrainerSection = () => {
  return (
    <>
      {/*================= Trainer Section Start Here =================*/}
      <div className="rts-trainer-section-section section-gap">
        <div className="container">
          <div className="section-title-area section-title-area-inner mb--50">
            <h1 className="section-title">OFFICIAL TRAINERS</h1>
          </div>
          <div className="table-area table-full">
            <table className="table table-bordered">
              <thead className="thead-dark"></thead>
              <tbody>
                <tr className="head-tr">
                  <th scope="col">REFEREE</th>
                  <th scope="col">ASSISTANT REFEREE</th>
                  <th scope="col">TIMEKEEPERS</th>
                </tr>
                <tr>
                  <td>
                    <span className="text">Alonso D. Dowson</span>
                  </td>
                  <td>
                    <span className="text">Peter Jackson</span>
                  </td>
                  <td>
                    <span className="long-text">
                      Franklin Rhys, Theodore Lewis
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/*================= Trainer Section End Here =================*/}
    </>
  );
};

export default TrainerSection;

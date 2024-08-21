import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null); // Initialize as null for better condition handling
  useEffect(() => {
    fetch("http://localhost:3030/jobapply/" + id)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((resp) => {
        setDetail(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  if (!detail) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }
  return (
    <div className="vacancy-bg">
      <div className="container">
          <div className="header-bg">
          <div className="row">
            <div className="col-lg-8">
              <h5>Job Application Detail</h5>
            </div>
            <div className="col-lg-4 back-list">
              <Link to="/">Back to job List</Link>
            </div>
          </div>
        </div>
        <div className="row detail-scroll">
          <div className="col-lg-12 card-inner mt-3 mb-3">
            <div className="detail-card card">
              <h4>{detail.jobtitle}</h4>
              <p>{detail.company}</p>
              <p>{detail.location}</p>
              <h6>{detail.pay}</h6>
              <Link to={`/apply-form/${id}`}>
              <button>Apply Now</button></Link>
              <hr />
              <h5>Job Detail</h5>
              <p>Job Detail Align with Your profile ?</p>
              <h6>
                Pay <br /> <span className="mx-2"> {detail.pay} </span>
              </h6>
              <h6>
                job type <br /> <span className="mx-2">full Time </span>
              </h6>
              <h6>
                Shift and schedule <br />{" "}
                <span className="mx-2">Day shift</span>
              </h6>
              <hr />
              <h5>Location</h5>
              <h6>{detail.location}</h6>
              <hr />
              <h5>Job Description</h5>
              <p>{detail.jobdescriptionone}</p>
              <p>{detail.jobdescriptiontwo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

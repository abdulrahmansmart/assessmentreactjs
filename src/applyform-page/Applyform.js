import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Applyform = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null); // Initialize as null for better condition handling
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [skill, setSkill] = useState('')
  const [about, setAbout] = useState('')

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
  function handleClick() {
    if (name === "") {
        document.getElementById("nameerror").innerHTML = "name is Required";
    }
    else {
        document.getElementById("nameerror").innerHTML = "";
    }
    if (email === "") {
        document.getElementById("emailerror").innerHTML = "Email is Required";
    }
    else {
        document.getElementById("emailerror").innerHTML = "";
    }
    if (skill === "") {
        document.getElementById("skillerror").innerHTML = "Skill is Required";
    }
    else {
        document.getElementById("skillerror").innerHTML = "";
    }

    if (about === "") {
        document.getElementById("abouterror").innerHTML = "About Me is Required";
    }
    else {
        document.getElementById("abouterror").innerHTML = "";
    }
    if (name !== "" && email !== "" && skill !== "" && about !== "") {
        console.log(name);
        console.log(email);
        console.log(skill);
        console.log(about);
    }
}
  return (
    <div className="vacancy-bg">
      <div className="container">
        <div className="header-bg">
          <div className="row">
            <div className="col-lg-8">
              <h5>Job Apply Form</h5>
            </div>
            <div className="col-lg-4 back-list">
              <Link to={`/vacancy-detail/${id}`}>Back to job Detail</Link>
            </div>
          </div>
        </div>
        <div className="row detail-scroll">
          <div className="col-lg-12 card-inner mt-3 mb-3">
            <div className="card">
              <h4>{detail.jobtitle}</h4>
              <p>{detail.company}</p>
              <p>{detail.location}</p>
              <h6>{detail.pay}</h6>
              <hr />
              <h5>Apply Form</h5>
              <div className="row">
                <div className="col-lg-12 apply-input">
                  <label className="mb-2">
                    Name <sup>*</sup>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    maxLength="22"
                    onKeyPress={(event) => {
                      if (!/[a-z,A-Z," ",]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  ></input>
                  <small id="nameerror"></small>
                </div>
                <div className="col-lg-12 apply-input">
                  <label className="mb-2">
                    Email<sup>*</sup>
                  </label>
                  <br />
                  <input type="email" placeholder="Email"
                  onChange={e => setEmail(e.target.value)} required></input>
                  <small id="emailerror"></small>
                </div>
                <div className="col-lg-12 apply-input">
                  <label className="mb-2">
                    Skill<sup>*</sup>
                  </label>
                  <br />
                  <input type="email" placeholder="Name"onChange={e => setSkill(e.target.value)}></input>
                  <small id="skillerror"></small>
                </div>
                <div className="col-lg-12 apply-input">
                  <label className="mb-2">
                    About Me<sup>*</sup>
                  </label>
                  <br />
                  <textarea type="message" placeholder="Name" onChange={e => setAbout(e.target.value)}></textarea>
                  <small id="abouterror"></small>
                </div>
                <div className="col-lg-12 apply-input apply-input-btn">
                  <button onClick={handleClick}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applyform;

import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';

const Vacancy = () => {
    const [data, seData] = useState([]);
    const [search, setSearch] = useState(''); 
    useEffect(() => {
      fetch('http://localhost:3030/jobapply')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          seData(data);
        });
    }, []);


     // Filter the data based on the search input
     const filteredData = data.filter((item) =>
        item.jobtitle.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className="vacancy-bg">
      <div className="container">
        <div className="row">
          <div className="header-bg">
            <div className="col-lg-12">
              <h5>Job Application</h5>
            </div>
          </div>
        </div>
        <div className="row input-bg" >
          <div className="col-lg-12">
            <div className="input-field">
              <input type="text" placeholder="Job Title..." 
                 value={search}             
                 onChange={(e) => setSearch(e.target.value)}
              />
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
        <div className="row vacant-scroll">
        {filteredData.map((item)=>(
        <div className="col-lg-12 card-inner mb-3">
            <Link to={`/vacancy-detail/${item.id}`} className="apply-card card">
              <h4>{item.jobtitle}</h4>
              <p>{item.company}</p>
              <p>{item.location}</p>
              <ul>
                <li>
                 {item.frontdescone}
                </li>
                <li>
                {item.frontdesctwo}
                </li>
              </ul>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Vacancy;

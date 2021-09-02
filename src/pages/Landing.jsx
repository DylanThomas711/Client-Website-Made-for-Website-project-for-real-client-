import React, { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="main">
        <h1 className="companyName">Clancy's RV AC</h1>
        <Link to="/about">
          <button className="contactBTN">About Us</button>
        </Link>
      </div>
      <hr />
      <div className="subMain">
        <div className="homeAbout subDiv">
          <div className="background">
            <h1 className="title">Background</h1>
            <hr />
            <h3 className="subTitle">Education</h3>
            <ul className="education">
              <li>Went to school here</li>
              <ul className="honors">
                <li>got this degree.</li>
                <li>Had these honors</li>
              </ul>
            </ul>
            <hr />
            <h3 className="subTitle">Job Experience</h3>
            <ul className="jobExpr">
              <li>Worked here</li>
              <ul className="responsabilities">
                <li>Had to do this, this, and this.</li>
              </ul>
              <ul className="skills">
                <li>Learned this, this, and this.</li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="homeServices subDiv">
          <h1 className="title">Service Overview</h1>
          <hr/>
          <h3 className="subTitle">Seperate Services</h3>
          <ul>
            <li>This Service</li>
            <li>This Service</li>
          </ul>
          <hr />
          <h3 className="subTitle">Service Bundles</h3>
          <ul className="packageNames">
            <li>Package 1</li>
            <ul>
              <li>I do this</li>
              <li>I do this</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;

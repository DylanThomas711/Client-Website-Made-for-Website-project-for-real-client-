import React, { useState } from "react";

const About = () => {
  return (
    <div className="about">
      <div className="jobExp aboutDiv">
        <h1 className="title">Job Experience</h1>
        <hr />
        <ul className="titles">
          <li>
            Job Title
            <hr />
            <h2 className="subTitle">Responsibilities</h2>
            <ul className="awards">
              <li>I had to do this.</li>
              <li>I had to do this.</li>
            </ul>
            <h2 className="subTitle">Learned Skills</h2>
            <ul className="awards">
              <li>I learned this.</li>
              <li>I learned this.</li>
            </ul>
          </li>
          <hr />
        </ul>
      </div>
      <div className="education aboutDiv">
        <h1 className="title">Education</h1>
        <hr />
        <ul className="titles">
          <li>
            School Name
            <hr />
            <h2 className="subTitle">Awards</h2>
            <ul className="awards">
              <li>I got this.</li>
              <li>I got this.</li>
            </ul>
            <ul className="awards">
              <li>I got this degree</li>
            </ul>
          </li>
          <hr />
        </ul>
      </div>
      <div className="contact aboutDiv">
        <h1 className="title">Contact</h1>
        <ul className="contacts">
          <li className="subTitle">Main Cellular</li>
          <ul className="mains">
            <li>xxx-xxx-xxxx</li>
          </ul>
          <li className="subTitle">Main Email</li>
          <ul className="mains">
            <li>example@gmail.com</li>
          </ul>
          <li className="subTitle">Main Social</li>
          <ul className="mains">
            <li>@name</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default About;

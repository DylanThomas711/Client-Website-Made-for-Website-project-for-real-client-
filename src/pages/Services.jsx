import React from "react";
import { singles, bundles } from "../utils/consts";

const Services = () => {
  return (
    <div>
      <div className="header">
        <h1 className="singles">Single Services</h1>
        <h1 className="bundles">Service Bundles</h1>
      </div>
      <div className="serviceMain">
        <div className="service">
          {singles.map((single) => {
            return (
              <div className="card" key={single.id}>
                <img src="" alt="" className="serviceImage" />
                <h1 className="serviceName">{single.title}</h1>
                <h2 className="servicePrice">{single.price}</h2>
                <p className="serviceDesc">{single.description}</p>
              </div>
            );
          })}
        </div>
        <div className="service">
          {bundles.map((bundle) => {
            return (
              <div className="card" key={bundle.id}>
                <img src="" alt="" className="serviceImage" />
                <h1 className="serviceName">{bundle.title}</h1>
                <h2 className="servicePrice">{bundle.price}</h2>
                <p className="serviceDesc">{bundle.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

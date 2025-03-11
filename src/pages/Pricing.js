import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PricingCard({ title, price, description }) {
  return (
    <div className="col-md-4 ">
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 fw-normal">{title}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">${price} <small className="text-muted">/ mo</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>{description}</li>
          </ul>
          <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <PricingCard title="Free" price="0" description="10 users included"/>
        <PricingCard title="Pro" price="15" description="20 users included"/>
        <PricingCard title="Enterprise" price="29" description="30 users included"/>
      </div>
    </div>
  );
}

export default Pricing;

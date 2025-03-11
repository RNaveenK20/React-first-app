import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to MegTrends</h1>
        <p className="lead">We offer the best LMS to meet your needs.</p>
        <hr className="my-4" />
        <p>Explore our website to learn more about what we have to offer.</p>
        <a className="btn btn-primary btn-lg" href="/about" role="button">Learn More</a>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h2>Commune Discussion</h2>
          <p>Community to discuss your doubts with experts and students</p>
        </div>
        <div className="col-md-4">
          <h2>Labs</h2>
          <p>Interactive labs for practice</p>
        </div>
        <div className="col-md-4">
          <h2>Aligned Q&A</h2>
          <p>Contains Q&A for very specific curated questions</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

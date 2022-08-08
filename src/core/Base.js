import React from "react";

const Base = ({
  title = "My Title",
  description = "My Description",
  className = "bg-dark text-white p-4",
  children,
}) => (
  <div className="bg-black">
    <div className="container-fluid">
      <div className="jumbotron d-flex flex-column align-items-center justify-content-center teaxt-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>

    <footer className="footer bg-dark position-fixed w-100 bottom-0">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions,feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container py-2">
        <span className="text-muted d-flex justify-content-center">
          An Amazing Tshirt Store
        </span>
      </div>
    </footer>
  </div>
);

export default Base;

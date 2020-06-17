import React from "react";
import PropTypes from "prop-types";

const Program = ({ item }) => {
  return (
    <div className="col-md-6 position-relative mt-4">
      <div
        className="item-desc h-75 w-50  "
        style={{
          position: "absolute",
          bottom: "10%",
          backgroundColor: "#E5E5E5",
        }}
      >
        <div className="container h-100 w-100">
          <div className="content h-100 m-auto">
            <div className="d-flex align-items-baseline">
              <h3>{item.id}</h3>
              <span className="line"></span>
              <h3 className="font-weight-bold">{item.topic}</h3>
            </div>
            <p className="my-4">{item.text}</p>
            <div>
              <button className="btn btn-dark rounded-0 px-4">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <img
          src={item.image}
          alt={item.topic}
          style={{ width: "341px", height: "469px" }}
        />
      </div>
    </div>
  );
};

Program.propTypes = {
  item: PropTypes.object,
};

export default Program;

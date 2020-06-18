import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Program = ({ item }) => {
  return (
    <Wrapper className="col-md-6 position-relative mt-4">
      <div
        className="item-desc h-75 "
        style={{
          position: "absolute",
          bottom: "10%",
          backgroundColor: "#E5E5E5",
        }}
      >
        <div className="content d-flex flex-column justify-content-center px-3 w-100 h-100">
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
      <div className="text-right">
        <img src={item.image} alt={item.topic} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 341px;
    height: 469px;
    max-width: 80%;
  }
  .item-desc {
    width: 240px;
    max-width: 90%;
    height: 90%;

    .content {
      p {
        font-size: 90%;
      }
    }
  }
`;

Program.propTypes = {
  item: PropTypes.object,
};

export default Program;

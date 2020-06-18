import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper classNameName="pt-3 ">
      <nav className="navbar navbar-expand-lg container d-flex justify-content-between  ">
        <div>
          <a className="navbar-brand text-light" href="/">
            <img src="/Vector.png" alt="logo" style={{ width: "1rem" }} />
            <span className="pl-1">OdinBreed</span>
          </a>
        </div>

        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link text-light" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Locations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="d-none d-md-block">
          <button className="btn btn-outline-light rounded-lg">Login</button>
          <button className="btn btn-outline bg-light ml-2 ">Signup</button>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  font-family: Montserrat;
  .btn {
    border: 2px solid;
  }
  .navbar-brand {
    span {
      font-weight: bold;
      font-size: 22px;
    }
  }
  .navbar-collapse {
    /* flex-basis: 100%; */
    flex-grow: 0;
    li {
      font-size: 1.2em;
    }
    .active {
      font-weight: bold;
    }
  }
`;

export default Header;

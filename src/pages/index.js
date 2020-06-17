import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Program from "../components/Program";

const p = {
  id: 1,
  text: `At OdinBreed we understand the huge 
importance aerobics plays in improving
our health and as such we have the best
of instructors who tailored excercises to
suit your bodys needs. We will give you
the treatment you deserve.`,
  topic: "Aerobics",
  image: "/pic-1.png",
};
const programs = [
  {
    id: 1,
    text: `At OdinBreed we understand the huge 
importance aerobics plays in improving
our health and as such we have the best
of instructors who tailored excercises to
suit your bodys needs. We will give you
the treatment you deserve.`,
    topic: "Aerobics",
    image: "/pic-1.png",
  },
  {
    id: 2,
    text: `Eat. Metal
No, literally, we have the best of programs
for you to build your msucles alpha, with
thje right amount of strain, we will get you
to top shape in little time`,
    topic: "Strength",
    image: "/pic-2.png",
  },
  {
    id: 3,
    text: `Your core, is the source of your strength.
Of this we are aware, we offer the best 
options for you to get that core strenght
to peak levels.`,
    topic: "Balance",
    image: "/pic-3.png",
  },
  {
    id: 4,
    text: `Within us lies the endurance to take on 
each day with its troubles. OdinBreed
offers training that boosts endurance  
levels.`,
    topic: "Endurance",
    image: "/pic-4.png",
  },
];

const brands = [
  "/lg-1.png",
  "/lg-2.png",
  "/lg-3.png",
  "/lg-4.png",
  "/lg-5.png",
  "/lg-6.png",
  "/lg-7.png",
  "/lg-8.png",
];

const HomePage = () => {
  return (
    <Wrapper>
      <div className="mainbg">
        <Header />
        <div className="hero h-100 container w-100 d-flex align-items-center ">
          <div className="row w-100 text-light">
            <div className="col-md-6">
              <h3 className="display-2 font-weight-bold">One Day</h3>
              <h3 className="display-2 font-weight-bold">Or</h3>
              <h3 className="display-2 font-weight-bold">Day One</h3>
              <h3 className="display-4">the choice is yours</h3>
            </div>
            <div className="col-md-6 d-flex text-right  ">
              <div className=" m-auto ">
                <img src="/stores.png" alt="stores" className="text-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="showcase">
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="text-content mb-3">
                <h2 className="font-weight-bold mb-3">
                  OdinBreed is everything you need for your dream body
                </h2>
                <p className="py-3 " style={{ fontSize: "22px" }}>
                  First you must understand, that within you lies the potential
                  to acheieve everything you set your mind to. We, can see that
                  very ernomour potential within you. Come, let us take you on a
                  journey that surpases the very realms of men. Let us show you
                  what godhood feels like.
                </p>
                <button className="btn btn-dark" style={{ fontSize: "22px" }}>
                  Sign up
                </button>
              </div>
            </div>
            <div className="col-md-6 img ">
              <img src="/Group5.png" alt="phone-left" />
            </div>
            <div className="col-md-6 img ">
              <img src="/Group6.png" alt="phone-left" />
            </div>
            <div className="col-md-6 m-auto">
              <div className="text-center my-3 pl-2">
                <h2 className="display-4 font-weight-bold">
                  A program for everyone. No one left behind.
                </h2>
                <p className="py-3 " style={{ fontSize: "22px" }}>
                  We have programs for all. All we seek is your zeal. We will
                  build you into who you need to be. The best version of
                  yourselfvery realms of men. Let us show you what godhood feels
                  like.
                </p>
                <button className="btn btn-dark" style={{ fontSize: "22px" }}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container mt-3">
          <h3 className="text-center display-4 font-weight-bold my-3">
            Features
          </h3>
          <div className="row">
            <div className="col-md-6">
              <div className="row my-3">
                <div className="col-md-3 text-center mb-3">
                  <img
                    src="/vector-2.png"
                    alt="call-center"
                    // width="7rem"
                    style={{ width: "5rem" }}
                  />
                </div>
                <div className="col-md-9">
                  <h2 className="text-center">Personalized Services</h2>
                  <p className="text-center">
                    Our team of professionals are always ready to guide you
                    through your programs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3 text-center mb-3">
                  <img
                    src="/vector-3.png"
                    alt="call-center"
                    style={{ width: "5rem" }}
                  />
                </div>
                <div className="col-md-9">
                  <h2 className="text-center">Security</h2>
                  <p className="text-center">
                    Our top notch secutiy system provides excellent firewalls
                    for your transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="other">
        <div className="container">
          <div className="row">
            {programs.map((p) => (
              <Program item={p} key={p.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="container d-flex align-items-center ">
          <div>
            <h2 className="display-4 text-uppercase font-weight-bold text-center mt-4 mb-3">
              Our partners
            </h2>
            <div className="row h-100 ">
              {brands.map((item, i) => (
                <div className="col-md-3 mt-4 text-center" key={i + 1}>
                  <a href="/">
                    <img src={item} alt="" style={{ width: "7rem" }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark " style={{ height: "20rem" }}>
        <div className="container d-flex justify-content-center flex-column h-100">
          <div className="row ">
            <div className="col-md-4">
              <div className="text-center">
                <img src="/Vector.png" alt="logo" />
                <h3 className="text-light font-weight-bold mt-2">OdinBreed</h3>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="nav flex-column text-center">
                <li className="nav-item">
                  <a className="nav-link text-light active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/">
                    Location
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
            <div className="col-md-4">
              <div className="text-center text-light">
                <ul className="nav flex-column">
                  <li className="nav-item py-1">04 BL344</li>
                  <li className="nav-item py-1">Lagos, Nigeria</li>
                  <li className="nav-item py-1">+2347062275085</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  .mainbg {
    background: url("/mainbg.png");
    height: 90vh;
    background-position: center;
    background-size: cover;
  }
  .showcase {
    .col-md-6 {
      margin-top: 1rem;
    }
  }
  .line {
    border: 1px solid black;
    /* height: 1px; */
    width: 20px;
    margin: 0 1rem;
  }
  .content {
    display: grid;
    place-content: center;
  }
  .partners .container {
    height: 60vh;
  }
`;
export default HomePage;

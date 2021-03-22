import React from "react";


import stock from "../img/Dev1.png";
import stock1 from "../img/Dev2.png";
import stock2 from "../img/Dev3.png";
import stock3 from "../img/Dev4.png";
import stock4 from "../img/Dev5.png";
//import Images from Dev
import dev from "../img/Dev1.png";
import dev1 from "../img/Dev2.png";
import dev2 from "../img/Dev3.png";
import dev3 from "../img/Dev4.png";
import dev4 from "../img/Dev5.png";

//import Images from Algo
import algo from "../img/Algo1.png";
import algo1 from "../img/Algo4.png";
import algo2 from "../img/Algo3.png";
import algo3 from "../img/Algo2.png";

//import Images from PWA
import pwa from "../img/PWA1.png";
import pwa1 from "../img/PWA2.png";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  I have projects mostly related to Web Development using ReactJS for Frontend and NodeJS for Backend development.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                  <a href={dev} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={dev} alt="project-image" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">DevConnector</h2>
                        <div className="w-more">
                          <span>
                            Social networking app
                          </span>
                          <br/>
                          <span className="w-ctegory">
                            ReactJS Redux NodeJS Express MongoDB
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://secret-mesa-38907.herokuapp.com" target="_blank">
                          <span className="ion-ios-plus-outline"></span>
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                
                <a
                  href={dev1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dev2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dev3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={dev4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={algo} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={algo} alt="" className="img-fluid" />
                  </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Algorithm Visualizer</h2>
                        <div className="w-more">
                          <span>
                            Dijkstra and Merge Sort Visualizer
                          </span>
                          <br/>
                          <span className="w-ctegory">
                            ReactJS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://obscure-dawn-73430.herokuapp.com/" target="_blank">
                          <span className="ion-ios-plus-outline"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                
                <a
                  href={algo1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={algo2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={algo3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={pwa} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={pwa} alt="" className="img-fluid" />
                  </div>
                </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Weather App</h2>
                        <div className="w-more">
                          <span>
                            PWA that shows weather forecast
                          </span>
                          <br/>
                          <span className="w-ctegory">
                            ReactJS and OpenWeather API
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="https://master.d3u3no45x76s24.amplifyapp.com/" target="_blank">
                            <span className="ion-ios-plus-outline"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                
                <a
                  href={pwa1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

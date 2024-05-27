import { useNavigate } from "react-router-dom";
import carousel1 from "../assets/Images/carousel1.jpg";
import carousel2 from "../assets/Images/carousel2.jpg";
import carousel3 from "../assets/Images/carousel3.jpg";
import wd from "../assets/Images/web-development.svg";
// import br1 from "../assets/Images/1.png";
// import br2 from "../assets/Images/2.png";
// import br3 from "../assets/Images/3.png";
// import br4 from "../assets/Images/4.png";
// import br5 from "../assets/Images/5.png";
// import br11 from "../assets/Images/11.png";
// import br21 from "../assets/Images/21.png";
// import br31 from "../assets/Images/31.png";
// import br41 from "../assets/Images/41.png";
// import br51 from "../assets/Images/51.png";
import allstate from "../assets/Images/clients/allstate.png";
import altinity from "../assets/Images/clients/altinity.png";
import amazon from "../assets/Images/clients/amazon.png";
import bgrs from "../assets/Images/clients/bgrs.png";
import chorus from "../assets/Images/clients/chorus.png";
import codepx from "../assets/Images/clients/codepx.png";
import corelogic from "../assets/Images/clients/corelogic.png";
import cruciallogics from "../assets/Images/clients/cruciallogics.png";
import deloitte from "../assets/Images/clients/deloitte.png";
import emergitel from "../assets/Images/clients/emergitel.png";
import fiddlehead from "../assets/Images/clients/fiddlehead.png";
import freshbooks from "../assets/Images/clients/freshbooks.png";
import harris_computer from "../assets/Images/clients/harris_computer.png";
import industrielle_Alliance1 from "../assets/Images/clients/industrielle_Alliance1.png";
import kids_help_phone from "../assets/Images/clients/kids_help_phone.png";
import liberty_client from "../assets/Images/clients/liberty_client.png";
import loblaw_companies_ltd from "../assets/Images/clients/loblaw_companies_ltd.png";
import London_Health_Sciences_Centre from "../assets/Images/clients/London_Health_Sciences_Centre.png";
import mideanet from "../assets/Images/clients/mideanet.png";
import morgan_stanley from "../assets/Images/clients/morgan_stanley.png";
import Morningstar_DBRS from "../assets/Images/clients/Morningstar_DBRS.png";
import New_SCIEX_Directory from "../assets/Images/clients/New_SCIEX_Directory.png";
import NL_Health_Services from "../assets/Images/clients/NL_Health_Services.png";
import novatek from "../assets/Images/clients/novatek.png";
import nttdata from "../assets/Images/clients/nttdata.png";
import Ontario_Brain_Institute from "../assets/Images/clients/Ontario_Brain_Institute.png";
import Open_Text_Corp from "../assets/Images/clients/Open_Text_Corp.png";
import paytm from "../assets/Images/clients/paytm.png";
import pearl from "../assets/Images/clients/pearl.png";
import qhr from "../assets/Images/clients/QHR.png";
import scene from "../assets/Images/clients/scene.png";
import Sun_Life_Financial from "../assets/Images/clients/Sun_Life_Financial.png";
import syntax from "../assets/Images/clients/syntax.png";
import tcs from "../assets/Images/clients/tcs.png";
import td from "../assets/Images/clients/td.png";
import Telus from "../assets/Images/clients/Telus.png";
import yash from "../assets/Images/clients/yash.png";
import zafin from "../assets/Images/clients/zafin.png";
import bmo from "../assets/Images/clients/bmo.svg";
import capgemini from "../assets/Images/clients/capgemini.svg";
import sita from "../assets/Images/clients/sita.svg";
import android from "../assets/Images/ITservice/android.svg";
import aws from "../assets/Images/ITservice/aws.svg";
import Google from "../assets/Images/ITservice/Google.svg";
import java from "../assets/Images/ITservice/java.svg";
import magento from "../assets/Images/ITservice/magento.svg";
import Nodejs from "../assets/Images/ITservice/Nodejs.svg";
import python from "../assets/Images/ITservice/python.svg";
import react from "../assets/Images/ITservice/react.svg";
import swift from "../assets/Images/ITservice/swift.svg";
import ppl from "../assets/Images/group-presentation.svg";
import { motion } from "framer-motion";
// import { Splide, SplideSlide } from '@splidejs/react-splide';

// var companyImages = [br1, br11, br2, br21, br3, br31, br4, br41, br5, br51];
var serviceImages = [android,aws,Google,java,magento,Nodejs,python,react,swift];
var companyImages = [allstate,altinity,amazon,bgrs,chorus,codepx,corelogic,cruciallogics,
  deloitte,emergitel,fiddlehead,freshbooks,harris_computer,industrielle_Alliance1,kids_help_phone,
  liberty_client,loblaw_companies_ltd,London_Health_Sciences_Centre,mideanet,morgan_stanley,yash,
  Morningstar_DBRS,New_SCIEX_Directory,NL_Health_Services,novatek,nttdata,syntax,tcs,td,Telus,sita,
  Open_Text_Corp,Ontario_Brain_Institute,paytm,pearl,qhr,scene,Sun_Life_Financial,zafin,bmo,capgemini];
var numbers = [...Array(4).keys()];
var servicesInfo = [
  {
    img: carousel1,
    icon: "fa-solid fa-palette",
    title: "Software Developement",
    link: "services",
    desc: "Customer satisfaction is at the core of our business. We strive to exceed your expectations by delivering software solutions that are user-friendly, scalable, and reliable.",
  },
  {
    img: carousel1,
    icon: "fa-solid fa-window-maximize",
    title: "Web Development",
    link: "services",
    desc: "We offer all kinds of Web development services. from HTMl to Python, we design and develop all kinds of development and e-commerce solutions.",
  },
  {
    img: carousel1,
    icon: "fa-solid fa-mobile",
    title: "Mobile App Development",
    link: "services",
    desc: "We create amazing Mobile apps that are the driven from your ideas and requirements. Our Mobile expertise helps you to launching your first mobile app.",
  },
];

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Home-page">
        <div className="block0 Darkbg headings">
                      <div className="container-fluid p-0">
                          <div className="profile banner-carousel">
                              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                  <div class="carousel-inner h-100">
                                      <div class="carousel-item active">
                                        <img src={carousel1} class="card-img-top" alt="..." />
                                        <div class="container carousel-caption d-none d-md-block">
                                          <h5>Software development</h5>
                                          <p>Software development encompasses a wide range of activities and disciplines, and it plays a crucial role in modern technology-driven industries. 
                                            <br />
                                            <br />
                                            {/* <button type="button" class="btn btn-info" onClick={() => navigate('/services')}>Get Started</button> */}
                                          </p>
                                        </div>                                          
                                      </div>
                                      <div class="carousel-item">
                                        <img src={carousel2} class="card-img-top" alt="..." />
                                        <div class="container carousel-caption d-none d-md-block">
                                          <h5>Web Development</h5>
                                          <p>Web development encompasses both front-end and back-end aspects of building websites.
                                            <br />
                                            <br />
                                            {/* <button type="button" class="btn btn-info" onClick={() => navigate('/services')}>Get Started</button> */}
                                          </p>
                                        </div>
                                      </div>
                                      <div class="carousel-item">
                                        <img src={carousel3} class="card-img-top" alt="..." />
                                        <div class="container carousel-caption d-none d-md-block">
                                          <h5>Mobile Development</h5>
                                          <p>Mobile development is building mobile apps like android and IOS.
                                            <br />
                                            <br />
                                            {/* <button type="button" class="btn btn-info" onClick={() => navigate('/services')}>Get Started</button> */}
                                          </p>
                                        </div>
                                      </div>
                                  </div>
                                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                      <i class="fa-solid fa-arrow-left"></i>
                                      <span class="visually-hidden">Previous</span>
                                  </button>
                                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                      <i class="fa-solid fa-arrow-right"></i>
                                      <span class="visually-hidden">Next</span>
                                  </button>
                              </div>

                          </div>
                      </div>
                  </div>
        <div className="block1 lightbg mt-5 pb-5"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
          <div className="container p-0 block1">
            <div className="row gx-0">
              <div className="col-lg-7 p-3 ps-5 py-5 left-bar">
                <h2>Engineered for Excellence</h2>
                <p>We make your product stand out from the crowd.</p>
                <button className="btn btn-warning"  onClick={() => navigate('/about')}>About US</button>
              </div>
              <div className="col-lg-5 py-5 icons">
                <div>
                    <img src={wd} alt="" />
                    <div>
                        <i class="fa-brands fa-square-js icon-float"></i>
                        <i class="fa-brands fa-python icon-float"></i>
                        <i class="fa-brands fa-node icon-float"></i>
                        <i class="fa-brands fa-java icon-float"></i>
                        <i class="fa-brands fa-aws icon-float"></i>
                        <i class="fa-solid fa-cloud icon-float"></i>
                        <i class="fa-brands fa-jenkins icon-float"></i>
                        <i class="fa-brands fa-android icon-float"></i>
                        <i class="fa-brands fa-app-store-ios icon-float"></i>
                        <i class="fa-brands fa-google-play icon-float"></i>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block2 Darkbg headings client"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
          <div className="container">
            <h1 className="mb-4">Trusted by</h1>
            <div className="logos">
              <div className="logos-slide">
              {companyImages.map((val, index) => (
              <img
                        src={val}
                        key={index}
                        className="card-img-top h-100"
                        alt="..."
                      />
                      ))}
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="block3 lightbg headings">
            <div className="container">
              <h1>What we do ?</h1>
              <h5 className="rightlink">
                <a href={`/services`} class="btn btn-secondary btn-lg">
                  Know More
                </a>
              </h5>
              <div className="serviceBlocks row m-0 py-4 pt-0 g-5">
                {servicesInfo.map((val, i) => (
                  <div
                    className="col-lg-4 m-0 mb-4"
                    key={i}
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay={200 * i}
                    data-aos-duration={1000 * i}
                  >
                    <motion.button
                      className="motion-card"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="card h-100 p-4 highlight">
                        <div className="card-body">
                          <i className={"mb-4 " + val.icon}></i>
                          <h5 className="card-title mb-3">{val.title}</h5>
                          <p className="card-text">{val.desc}</p>
                          <a href={val.link} className="btn btn-primary kbtn">
                            Know More <i class="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="block2 Darkbg headings it-service"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
          <div className="container">
            <h1 className="mb-4">IT Services</h1>
            <div className="logos">
              <div className="logos-slide">
              {serviceImages.map((val, index) => (
              <img
                        src={val}
                        key={index}
                        className="card-img-top"
                        alt="..."
                      />
                      ))}
              </div>
            </div>
          </div>
        </div>
        <div className="block4 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
          <div className="container headings">
            <div className="row m-0">
              <div className="col-lg-6 right-section p-0">
                <div className="row m-0">
                  <div className="col-lg-12 mb-4 p-0">
                    <h1>
                      Working Process <span>Path that drives the project.</span>{" "}
                    </h1>
                  </div>
                  <div
                    className="col-lg-12 mb-3"
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="200"
                    data-aos-duration="600"
                  >
                    <h5>01. Idea Genaration</h5>
                    <p>
                      Idea generation is a process that is used to form new
                      ideas and to help convert intangible ideas into a tangible
                      course of action. Idea generation involves coming up with
                      as many ideas as possible, coming up with ways to use the
                      idea, and then making sure that the idea can be
                      transferred to the real-world.
                    </p>
                  </div>
                  <div
                    className="col-lg-12 mb-3"
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="200"
                    data-aos-duration="600"
                  >
                    <h5>02. Working plan</h5>
                    <p>
                      A work plan is a written document designed to streamline a
                      project. The purpose is to create a visual reference for
                      the goal, objectives, tasks and team members who are
                      responsible for each area.
                    </p>
                  </div>
                  <div
                    className="col-lg-12 mb-3"
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="200"
                    data-aos-duration="600"
                  >
                    <h5>03. Implementation</h5>
                    <p>
                      mplementation is the carrying out of planned, intentional
                      activities that aim to turn evidence and ideas into
                      policies and practices that work for people in the real
                      world.{" "}
                    </p>
                  </div>
                  <div
                    className="col-lg-12 mb-3"
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="200"
                    data-aos-duration="600"
                  >
                    <h5>04. Launch Project</h5>
                    <p>
                      The project launch marks the beginning of a project. In
                      the narrower sense the project launch includes all
                      activities and measures of the project preparation, in the
                      broader sense also the conceptual orientation of the
                      project
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 left-section pt-4 ps-5">
                <div
                  className="row m-0 g-4"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  {numbers.map((i) => (
                    <div className="col-lg-6 col-md-6 col-6">
                      <motion.button
                        className="motion-card"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div
                          className={
                            "card h-100 petal " +
                            (i == 0 || i == 3 ? "even-petal" : "odd-petal")
                          }
                        >
                          <div className="card-body">
                            <div className="card-title petal_title">
                              {i == 0 ? (
                                <div>
                                  {" "}
                                  <div className="title">
                                    Idea Genaration
                                  </div>{" "}
                                  <i class="fa-brands fa-ideal"></i>
                                </div>
                              ) : i == 1 ? (
                                <div>
                                  <div className="title">Working plan</div>{" "}
                                  <i class="fa-solid fa-gears"></i>
                                </div>
                              ) : i == 2 ? (
                                <div>
                                  <div className="title">Implementation</div>
                                  <i class="fa-solid fa-code"></i>
                                </div>
                              ) : (
                                <div>
                                  <div className="title">Launch Project</div>{" "}
                                  <i class="fa-solid fa-shuttle-space"></i>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block5 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
          <div className="container">
          <h1 className="mb-5">
                  Why Choose us? <span>we are trusted software company.</span>
                </h1>
            <div className="row">
              <div className="col-lg-6 imgs mb-4">
                {/* <img src={img1} alt="" srcset="" /> */}
                <img src={ppl} alt="" srcset="" />
              </div>
              <div className="col-lg-6">
                <div>
                  <div className="row mt-4">
                    <div className="col-lg-2 icon">
                      <i class="fa-solid fa-user-shield"></i>
                    </div>
                    <div className="col-lg-10">
                      <h5>High Quality, You Can Trust</h5>
                      <p>
                        We know you want to invest in a company you can trust.
                        That's why we offer high-quality IT training & Placement
                        services - because we care about your success.
                      </p>
                    </div>
                  </div>
                  <div
                    className="row m-0"
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="200"
                    data-aos-duration="500"
                  >
                    <div className="col-lg-2 p-0 icon">
                      <i class="fa-solid fa-users-rectangle"></i>
                    </div>
                    <div className="col-lg-10">
                      <h5>Our Team Of Experts</h5>
                      <p>
                        Need help with a project? Our team of experts are here
                        to help! We offer branding services, so your company can
                        remain strong no matter what storm life throws at it. .
                        We value each and every customer.
                      </p>
                    </div>
                  </div>
                  <div
                    className="row m-0"
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="200"
                    data-aos-duration="500"
                  >
                    <div className="col-lg-2 p-0 icon">
                      <i class="fa-solid fa-chart-line"></i>
                    </div>
                    <div
                      className="col-lg-10"
                      data-aos="fade-down"
                      data-aos-offset="100"
                      data-aos-delay="200"
                      data-aos-duration="500"
                    >
                      <h5>High Customer Retention Rate</h5>
                      <p>
                        We have a client satisfaction rate of 99% as we focus on
                        quality no matter what. our happy clients always revert
                        to us with new requirements always.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block6 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
          <div className="container">
            <h1 className="mb-5">Testimonials <span>Client Stories: Our Work, Your Success</span></h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

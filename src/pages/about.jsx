// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import about1 from '../assets/Images/about1.svg'
import about2 from '../assets/Images/about2.svg'
import support from '../assets/Images/it-support.svg'
import anusha1 from '../assets/Images/team/anusha1.png'
import Ashu1 from '../assets/Images/team/Ashu1.png'
import Bava1 from '../assets/Images/team/Bava1.png'
import chari1 from '../assets/Images/team/chari1.png'
import Jai1 from '../assets/Images/team/Jai1.png'
import kalyan1 from '../assets/Images/team/kalyan1.png'
import Poojith1 from '../assets/Images/team/Poojith1.png'
import Ravi1 from '../assets/Images/team/Ravi1.png'
import Sindhura1 from '../assets/Images/team/Sindhura1.png'

function About(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="about-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <svg viewBox="0 0 1320 300">
                        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                            {props.title}
                        </text>
                    </svg>	
                    </div>
                </div>
                <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h1 className='mb-4'>Our Objective </h1>
                                <p className="pe-5">To become an exclusive IT service provider with a focus on operational excellence by continually creating more innovative opportunities for growth in our strategic business and focusing on exceeding customer expectations by understanding their business needs to be completely rewarded with a smile and social responsibility.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-0 imgs">
                                <img src={about1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block3 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <div className="row m-0">
                            <div className="col-lg-6 col-md-6 col-sm-0 imgs">
                                <img src={about2} alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h1 className='mb-4'>Our Vision</h1>
                                <p className="pe-5">To become an exclusive IT service provider with a focus on operational excellence by continually creating more innovative opportunities for growth in our strategic business and focusing on exceeding customer expectations by understanding their business needs to be completely rewarded with a smile and social responsibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block4 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 imgs mb-4">
                                <img src={support} alt="" srcset="" />
                            </div>
                            <div className="col-lg-6">
                                <h1 className='mb-5'>Why Choose us? <span>we are trusted software company.</span></h1>
                                <p className="my-3">
                                    There are various companies who will provide all these services. Are you thinking about what is special about us? Below we are providing the answer to your question. Have a look.
                                </p>
                                <div>
                                    <div className='row mt-4'>
                                        <div className="col-lg-2 icon"><i class="fa-solid fa-user-shield"></i></div>
                                        <div className="col-lg-10">
                                            <h5>Affordable Prices</h5>
                                            <p>Most clients don't show interest because of the high prices. But at our company, you don't need to worry about the cost. All costs of our services are affordable and reasonable for clients.</p>
                                        </div>
                                    </div>
                                    <div className="row m-0" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="500">
                                        <div className="col-lg-2 p-0 icon"><i class="fa-solid fa-users-rectangle"></i></div>
                                        <div className="col-lg-10">
                                            <h5>Quick Support</h5>
                                            <p>We have 24/7 customer services who can help you with any queries at any time.</p>
                                        </div>
                                    </div>
                                    <div className="row m-0" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="500">
                                        <div className="col-lg-2 p-0 icon">
                                            <i class="fa-solid fa-chart-line"></i>
                                        </div>
                                        <div className="col-lg-10" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="500">
                                            <h5>High Customer Retention Rate</h5>
                                            <p>We have a client satisfaction rate of 99% as we focus on quality no matter what. our happy clients always revert to us with new requirements always.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block5 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-4'>FAQ <span>Get help, find answers and more.</span></h1>
                        <div class="row mx-0 gx-4 accordion" id="accordionFlushExample">
                                <div className="col-lg-6 col-md-6 col-sm-12 ps-0 mb-4">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Why you are unique?
                                        </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">We are Solution focused. We offer a wide variety of services like IT Training, Digital Marketing, and Branding Services to help you grow your business. We have over 10 years' experience in providing these services so you can count on us for quality work at an affordable price.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 pe-0 mb-4">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            How can you help start-ups with your solutions?
                                        </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Personalized attention. No matter what your needs are, we want to provide personalized attention so that we can understand your business needs better and deliver high-quality services tailored to your budget and timeline</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 ps-0">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How Training and placements work ? 
                                        </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Job Placement and Interviews: Participants are provided with job leads and may be scheduled for interviews with potential employers. The placement team may arrange for on-campus recruitment drives, job fairs, or connect participants directly with hiring companies. The participants are typically guided and supported throughout the job placement process.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 pe-0">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingThre">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThre" aria-expanded="false" aria-controls="flush-collapseThre">
                                            How should we start?
                                        </button>
                                        </h2>
                                        <div id="flush-collapseThre" class="accordion-collapse collapse" aria-labelledby="flush-headingThre" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">we invite you to contact us for more information about our services. or send an email to support@sparklextechnologies.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="block6 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-4'>Team Members<span>Our company is backed by an incredible team.</span></h1>
                        <div className="profile">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className="row g-4">
                                            <div class="col-lg-3 px-4">
                                                <div className="card">
                                                    <div className="prof-img px-4">
                                                        <img src={anusha1} class="card-img-top" alt="..." />
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Anoosha S</h5>
                                                        <p class="card-text"><small class="text-muted">Head of Recruiting</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 px-4">
                                                <div className="card">
                                                    <div className="prof-img px-4">
                                                        <img src={Sindhura1} class="card-img-top" alt="..." />
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Sindhura Pathakota</h5>
                                                        <p class="card-text"><small class="text-muted">HR Manager</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 px-4">
                                                <div className="card">
                                                    <div className="prof-img px-4">
                                                            <img src={Ashu1} class="card-img-top" alt="..." />
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Ashwitha Reddy</h5>
                                                        <p class="card-text"><small class="text-muted">Data Engineer</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 px-4">
                                                <div className="card">
                                                    <div className="prof-img px-4">
                                                            <img src={Bava1} class="card-img-top" alt="..." />
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Jayendra Mallavarapu</h5>
                                                        <p class="card-text"><small class="text-muted">Solution Architect</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="carousel-item">
                                        <div className="row g-4">
                                            <div class="col-lg-3 px-4">
                                                <div className="card">
                                                    <div className="prof-img px-4">
                                                            <img src={chari1} class="card-img-top" alt="..." />
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Mallikarjuna Chari Padira</h5>
                                                        <p class="card-text"><small class="text-muted">Board of Directors</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 px-4">
                                                <div className="card">
                                                    <div className="prof-img px-4">
                                                            <img src={Ravi1} class="card-img-top" alt="..." />
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Ravindra Samala</h5>
                                                        <p class="card-text"><small class="text-muted">Senior Developer</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 px-4">
                                                <div className="card">
                                                    <div className="prof-img px-4">
                                                            <img src={Jai1} class="card-img-top" alt="..." />
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Jaya Kiran Reddy Konkala</h5>
                                                        <p class="card-text"><small class="text-muted">Board of Directors</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 px-4">
                                                <div className="card">
                                                    <div className="prof-img px-4">
                                                            <img src={kalyan1} class="card-img-top" alt="..." />
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Sai Kalyan V</h5>
                                                        <p class="card-text"><small class="text-muted">Data Engineer</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="carousel-item">
                                        <div className="row g-4">
                                            <div class="col-lg-3 px-4">
                                                <div className="card">
                                                    <div className="prof-img px-4">
                                                            <img src={Poojith1} class="card-img-top" alt="..." />
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Poojith Potluti</h5>
                                                        <p class="card-text">
                                                            <small class="text-muted">Devops Engineer</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <i class="fa-solid fa-arrow-right"></i>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <i class="fa-solid fa-arrow-left"></i>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="Darkbg p-3">
                    <div className="container p-0">
                    <hr className="m-0" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
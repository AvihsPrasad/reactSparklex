import Banner from '../../components/banner.jsx'
import webLogo from '../../assets/Images/trainings/webdevelopment.svg'
import webDash from '../../assets/Images/trainings/webdevelopment2.svg'

function WebDev(props) {

    return(
        <>
            <div className="design-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Web Design & Development'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-5'>Learn How To Design a Website</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className='mb-4'>The process of building a website with attractive graphics and good functions is known as web design. The content, appealing style, appropriate layout, and accessibility of the website on all platforms are all key considerations in the website design process. The importance of creating Responsive Websites that are optimized for Desktops, Tablets, and Mobiles cannot be estimated.</p>
                                <p>We've included the Bootstrap Framework to help you create responsive websites. Take our training program and upgrade your skills to the industrial standards. We will teach you all of the current technology as well as new updates in our web design course. This training certification will highlight your resume while attending the interviews and may have a great chance to get high salary packages.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'lerightft'}}>
                                <img src={webDash} alt="" style={{width: '100%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>A Brief Description Of Our Web Design Course</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'left'}}>
                                <img src={webLogo} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>Experienced web designers generate and update our web design course curriculum to keep up with current web technology standards. We cover all aspects of layout design, coding, and testing in our website curriculum. Our goal is to turn you into a professional web designer.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Learn to Design a website even if you have ZERO design skills!</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>This course will teach you the fundamentals of design, the logic behind it, the psychology behind it, and how to apply it to web design! You will learn about color theory, composition, grid theory, and more. This is the complete website design course because it's not just about designing for the web, it's about designing for people's careers!</p>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                
                            <div class="event-calendar">
                                    <div class="heading-title">
                                        <h2> upcoming events </h2>
                                        <div class="icon-box">
                                        <i class="fas fa-calendar-alt"></i>
                                        </div>
                                    </div>
                                    <div class="events-body">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <div class="event-left-content">
                                                        <div class="title-event">
                                                            <h3> sample event</h3>
                                                            <div class="event-date"> Feb 5, 2018</div>
                                                            <div class="event-location"> Alberta</div>
                                                        </div>
                                                    </div>
                                                    <div class="event-icon"> 
                                                        <div class="month">jan </div> 
                                                        <div class="date">01 </div> 
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                
                <div className="block5 lightbg headings listss"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-5'>Web Designing's Career Advantages</h1>
                        <ol data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                            <li style={{'--accent-color': '#36b9ea'}}>The web standards and technology required to construct web pages using HTML5 and CSS are covered in the course Web Design.</li>
                            <li style={{'--accent-color': '#3ecbb1'}}>This course is suitable for any Front-end Developer, HTML Developer, UI Architect, or HTML Developer. Web design tutorials to learn about HTML and CSS basics, as well as sophisticated graphics features and concepts like Web APIs, responsive websites, and more.</li>
                            <li style={{'--accent-color': '#fcc003'}}>The following are some of the additional advantages of understanding this Web Design concept: it explains the current HTML 5 version and CSS features based on web design strategies and web development processes.</li>
                            <li style={{'--accent-color': '#fb337b'}}>The benefits of taking this Web Design course include: providing knowledge of basic ideas and essential expertise in designing web pages for websites.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebDev
import Banner from '../../components/banner.jsx'
import digitalLogo from '../../assets/Images/trainings/digital.png'
import digitalDash from '../../assets/Images/trainings/digitaldashboard.png'

function Digital(props) {

    return(
        <>
            <div className="web-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Digital Marketing'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-5'>Digital Marketing Training</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className='mb-4'>With the growth of the internet, Digital Marketing has become a necessity, with most businesses and individuals attempting to leverage employment in the industry. Sparklex Technologies Digital Marketing Training course provides real-time and focused guidance from industry-experienced digital marketing experts. We believe in the practical training approach with real-time projects and assignments in Digital Marketing courses, hence we provide training with live projects. We also provide a low-cost option.</p>
                                <p>By a team of specialists, we are one of the best Best Digital Marketing Training providers. Digital marketing has been demonstrated to be more successful and efficient than traditional marketing. In some form or another, everyone nowadays has access to a digital system. As a result, any marketing that uses a smart device has a greater chance of reaching the desired audience at the right time and in the right place than traditional forms of advertising that have been in use for many decades.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'right'}}>
                                <img src={digitalLogo} alt="" style={{width: '70%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Digital Marketing Certification Training By Industrial Experts At Best Price</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'left'}}>
                                <img src={digitalDash} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>By a team of specialists, we are one of the best Best Digital Marketing Training providers. Digital marketing has been demonstrated to be more successful and efficient than traditional marketing. In some form or another everyone nowadays has access to a digital system. As a result, any marketing that uses a smart device has a greater chance of reaching the desired audience at the right time and in the right place than traditional forms of advertising that have been in use for many decades.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Improve Your Profile with Digital Marketing Training</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className="mb-4">Our digital marketing training curriculum has been organized in a systematic manner to ensure that each topic is understood completely. Our expert-designed course modules will assist anyone, whether a professional, an entrepreneur or a new job seeker, in gaining subject-specific information.</p>
                                <p>The Digital Marketing Modules our team will teach you how to use our SEO, social media, pay-per-click, conversion optimization, digital analytics, content, mobile, and email marketing, and more to become a digital market expert. Enroll in a Digital Marketing Course and learn the latest tools while working on real-world projects.</p>
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
                <div className="Darkbg p-0">
                    <div className="container p-0">
                    <hr className="m-0" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Digital
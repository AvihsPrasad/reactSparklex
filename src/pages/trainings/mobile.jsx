import Banner from '../../components/banner.jsx'
import mobileLogo from '../../assets/Images/trainings/mobiledevelopment.svg' 
import mobileDash from '../../assets/Images/trainings/mobiletesting.svg' 

function Mobile(props) {

    return(
        <>
            <div className="infra-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Mobile Development Training'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-5'>Course on Mobile Development</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className='mb-4'>The term "mobile development" refers to the creation of apps and other types of software for mobile devices, such as tablets, smartwatches & more. Because there are significant differences between mobile and desktop UX, mobile development aims to optimize functionality and user experience on mobile devices.</p>
                                <p>Keep up with the latest developments in mobile development, including Swift, Kotlin, and JavaScript. Whether you're making apps for iOS, Android, or Windows, our courses will teach you how to write clean code. Sparklex Technologies is here with the best faculty members and the best curriculum to mold you proficiently with the current innovations in the mobile application sector.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'left'}}>
                                <img src={mobileLogo} alt="" style={{width: '90%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Upgrade Your Mobile Development Abilities</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'right'}}>
                                <img src={mobileDash} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>The mobile app development sector is one of the fastest-growing segments in the new economy, with more than 75% of the world's population having access to a mobile device. Our cutting-edge mobile development training courses can help you keep up with this fast-paced market.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Mobile App Development Training Certification @Sparklex Technologies</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className="mb-4">Smartphones and other internet-connected devices have taken over the world, allowing consumers to access the internet on the move! As a result, the number of opportunities to create mobile-friendly websites and applications has increased in sync with this shift. As a result, we've started offering a Mobile App Development Certification Program for anyone who wishes to take advantage of this opportunity and learn how to use the platform with limitless possibilities.</p>
                                <p>The most recent addition to the technological revolution is the mobile application; mobile applications are expanded web pages that are designed to perform a specific and defined action. We are thrilled to announce the launch of a comprehensive Mobile Development course, with the goal of preparing professionals to take on the future of mobile technology.</p>
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

export default Mobile
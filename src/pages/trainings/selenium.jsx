import Banner from '../../components/banner.jsx'

import seleniumLogo from '../../assets/Images/trainings/selenium.png'
import seleniumDash from '../../assets/Images/trainings/seleniumdashboard.jpg'

function Selenium(props) {

    return(
        <>
            <div className="web-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Selenium Training'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-5'>Selenium Certification Training Program</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className='mb-4'>Want to become an expert in testing? Then immediately join the Selenium Training Course which is provided by Sparklex Technologies. Our certification training will help you to become a master in automation testing tools which will lead you to become a certified A4Q Tester. Our training program will cover the Grid, Alerts, Modal Dialog box, Handling IFrames, IDE, WebDriver.</p>
                                <p>At the same time, we'll go over how to use plugins like Robot Class, Cucumber, and Gherkin to help control the automation environment. This automation testing training program will be led by industry experts who will teach you how to work on real-world industry examples. If you require any additional information, please contact us as soon as possible.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'right'}}>
                                <img src={seleniumLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Demand for Selenium Testing</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'left'}}>
                                <img src={seleniumDash} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className="mb-4">The primary goal of this Selenium Training is to teach developers and manual testers how to computerize web applications with a strong framework and integrate them into an organization's DevOps processes. So, enroll in the Selenium Training program right away to gain hands-on experience with automation frameworks like the Hybrid Framework, Keyword Driven Framework, and Data-Driven Framework.</p>
                                <p>This course was created by the industry professionals to assist candidates, students, and employees in obtaining the best jobs in Top MNCs with high salary packages. So take advantage of this opportunity to improve your skills and increase your chances of landing high-paying jobs. SparklexTechnologies.com offers this Selenium Training program at a reasonable price.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Become an Excellent Selenium Tester</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>Some people believe that learning Selenium is difficult. But this is not the case. It's just that to learn the selenium, you'll need a great trainer and the best business strategy curriculum. To learn about automation testing with Selenium, four things must be considered. Java, Selenium Webdriver, TestNG, and a few Frameworks are among them. If you have a solid curriculum, you can easily obtain Selenium framework certification, which will boost your profile in interviews. Sparklex Technologies will assist you in professionally obtaining Selenium certification. Contact us at our phone number for more information on our Selenium training program.</p>
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

export default Selenium
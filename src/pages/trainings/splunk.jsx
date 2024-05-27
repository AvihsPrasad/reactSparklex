import Banner from '../../components/banner.jsx'
import splunkLogo from '../../assets/Images/trainings/splunk.png'
import splunkDash from '../../assets/Images/trainings/splunkdashboard.png'

function Splunk(props) {

    return(
        <>
            <div className="web-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Splunk Training'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-5'>Importance of Splunk Training Course</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className='mb-4'>Avail Splunk Certification Training from industrial experts at SparklexTechnologies.com. This course includes, Using fields, Scheduling reports, Alerts, Visualizations, Statistical processing, Comparing Values, Result Modifications. This Splunk Training will help you to explore a great number of IT career opportunities. It doesn’t require any coding because it is a software-based platform that has a web-style interface.</p>
                                <p>Splunk Certifications are IT industry standards for validating and demonstrating proficiency with Splunk's universal machine data platform. This helps you attain your career growth with a high salary package. Splunk is thus extremely beneficial to your IT career, and you can learn it in a variety of ways. If you want to know more details about our Splunk training program speak with one of our experts today!</p>
                            </div>
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'right'}}>
                                <img className='mobile-width' src={splunkLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>What is Splunk Training?</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'left'}}>
                                <img src={splunkDash} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className="mb-4">This eLearning course introduces students to machine data and how Splunk can be used to investigate and respond to incidents in their organizations using operational intelligence. This Splunk Training covers concepts needed by both Splunk Power Users and Splunk Administrators. When the training comes to an end you can completely understand the roles and responsibilities of Splunk training and how to put it to action.</p>
                                <p>The Splunk Online Training teaches you how to work with Configuration files and settings, how to use Searching and Reporting commands, how to use various Knowledge objects, and how to create Dashboards for visualization using real-world Use-Cases. Our training curriculums cover all basic concepts to real-time project case studies and analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Highlight Your Profile With Splunk Training</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className="mb-4">Splunk is a popular analytics tool for server monitoring, data analytics, and data visualization. Splunk collects, indexes, and correlates real-time data in a searchable repository, from which it generates graphs, reports, alerts, dashboards, and visualizations. This training certifies you and allows you to apply for the highest-paying Splunk Admin/Power User positions.</p>
                                <p>This Splunk training also positions Splunk as the ideal strategic platform for businesses looking to solve data analytics problems of any size. Business Analysts and Data Analysts need to learn this Splunk development in order to create Apps and Dashboards. As well as members of the IT Operations, Monitoring, and Support team need to have this training to highlight your profile.</p>
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

export default Splunk
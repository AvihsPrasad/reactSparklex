import Banner from '../../components/banner.jsx'
import awsLogo from '../../assets/Images/trainings/aws.png'
import awsDash from '../../assets/Images/trainings/awsdashboard.jpg'

function AWS(props) {

    return(
        <>
            <div className="web-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='AWS & Devops'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-5'>AWS & DEVOPS TRAINING</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className='mb-4'>At Sparklex Technologies, we are providing high-quality Aws and DevOps training by industrial experts. This training by experts in the industry will help you to develop your skills in both Aws and DevOps. This training will help you to upgrade your career. Along with this, getting certification for these Aws and DevOps Training will highlight your profile while you're attending the interview.</p>
                                <p>Our training courses include SDLC Automation, Monitoring and Logging, Incident and Event Response, Configuration Management and Infrastructure, Policies and Standards Automation and Fault Tolerance, and Disaster Recovery. The profiles who are having basic programming language knowledge are beneficial for this Aws and DevOps Training. We provide the professional certification for this Aws and DevOps Training.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'right'}}>
                                <img src={awsLogo} alt="" style={{width: '100%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Highlight Your Profile With this Aws and DevOps Training</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'left'}}>
                                <img src={awsDash} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className="mb-4">The demand for the Aws and Devops programmer has been increasing day by day. More than 80 percent of IT companies are looking to adopt this DevOps by 2020. According to Business Insider, the average salary of this AWS and DevOps Engineer is US$130,000 a year. So the candidates who have certification in this Aws and DevOps training have max priority in the selection of recruitment.</p>
                                <p>In this certification course, you will also become an expert in Aws and DevOps tools such as Aws Code Build, Aws CodeCommit, Aws CodeDeploy, Aws CodePipeline, etc. So hurry and take part in our Aws and DevOps Certification Training Program. This is conducted by industrial experts to upgrade your skills and will also highlight your profile in an interview.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Aws and DevOps Training @Sparklex Technologies</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>Our main aim is to help the students, as well as employees. To upgrade themselves and match the industrial needs by securing high salary packages. Aws and DevOps are also one of the certification training programs in it. At a reasonable price, you can avail this Aws and DevOps Training from Sparklex Technologies. So, if you want to upgrade yourselves through Aws and DevOps Training then immediately contact us to book your slot.</p>
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

export default AWS
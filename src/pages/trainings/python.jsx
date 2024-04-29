import Banner from '../../components/banner.jsx'

import pythonLogo from '../../assets/Images/trainings/pythonlogo.png'
import pythonDash from '../../assets/Images/trainings/pythondashboard.svg'

function Python(props) {

    return(
        <>
            <div className="web-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Python Development'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-5'>Python Developer Training</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className='mb-4'>Python, the world's most popular programming language, has recently surpassed C++ as the most popular programming language. If you want to work in disciplines like Artificial Intelligence, Machine Learning, or Data Science, knowing Python will be extremely beneficial to you as a developer.</p>
                                <p>Global Knowledge offers some courses that help Python developers increase their abilities by combining in-depth theoretical knowledge with excellent practical skills. You may master difficult ideas, develop simple to advanced scripts, and create modules and packages with the support of skilled specialists.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'right'}}>
                                <img src={pythonLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>The programming language with the highest demand</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'left'}}>
                                <img src={pythonDash} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className="mb-4">Python is a programming language that might also be used in a variety of ways. It's also one of the most basic languages to learn. That isn't to say that following any of the online courses will help you achieve experience. You'll still need to get your hands on the practical notions. Sparklex Technologies can provide you with the best Python training. Our Python training center provides guaranteed hands-on knowledge, placement assistance, and much more.</p>
                                <p className="mb-4">Sparklex Technologies is a company that specializes in providing innovative solutions Python training is a well-known training center for IT beginners and students. The Training Institute has created several prominent IT professionals who are proficient in Python. The teaching and training team consists of Python language experts from various employment categories. This enables students to learn practically about every key field that uses Python's computer programming language.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Python's Trainer Profile</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className="mb-4">
                                Our Curriculum is explained in basic language and easy-to-understand ways by our professors, allowing students to learn more efficiently. We provide learners complete freedom to research the subject. Based on real-life examples, we teach you concepts. Our instructors assist candidates in completing assignments and even prepare them for interview questions and responses. Candidates can study in one-on-one coaching sessions and ask any questions they have at any time.
                                </p>
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

export default Python
import Banner from '../../components/banner.jsx'
import javaLogo from '../../assets/Images/trainings/java.svg'
import javaDash from '../../assets/Images/trainings/javadash.svg'

function Java(props) {

    return(
        <>
            <div className="web-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Java Development'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-5'>Java Development</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className='mb-4'>Java is a valuable skill set for any developer because it is one of the most popular and well-acknowledged programming languages. Our beginning to advanced-level Java training courses will teach you how to construct modular programs that are portable, robust, and secure. We'll offer a course to help you develop skills and work toward a Java certification, whether you're using Java 6 or Java 8 and want to improve code performance or master web basics.</p>
                                <p>Within the IT industry, Java certification programs are widely regarded and recommended. Java is the world's most popular and dynamic programming language. With so many uses, becoming Java certified can be a great way to show off your professional expertise and commitment to keep up with the current programming trends. Check out the schedule below to sign up for some of the most well-known Java certification courses available right now.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'right'}} data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <img src={javaLogo} alt="" style={{width: '70%'}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Ultimate Java Masterclass: Become a Java Programmer</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'left'}} data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <img src={javaDash} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>
                                This course is intended to teach you about Java Programming in a professional way. It will give you a detailed look at what Java is and how it works. You will learn all of its core components and how to use them. You will learn everything you will need to know to become an effective Java programmer.
                                The Complete Java MasterClass is a Successful Java Masterclass, helping Java developers to learn step by step. The Complete Java Course is a well-rounded Java Course, including Java Fundamentals, Java Essentials, Java Advanced & more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Become an Excellent Programmer</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className="mb-4">This Java course helps you get hands-on Java programming skills faster, by building real applications like Android applications, desktop applications, and server applications from scratch. It takes months to get a solid foundation in Java programming, but once you have it, you're set for life. As with any other language, you can specialize in Java and go from there.</p>
                                <p>Enroll in the latest launched Java Training course. Let's learn a Successful Java Training Strategy Together, Step by Step! We created professional NEW Java Training Tutorials to help you succeed if you are just starting. You need no previous experience In the complete New Java Training, you will get step by step the right settings of Java software. We don't want you just to learn Java but, we want you to become an excellent programmer.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div class="event-calendar" data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
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

export default Java
import Banner from '../../components/banner.jsx'
import fullLogo from '../../assets/Images/trainings/fullstack.png'
import fullDash from '../../assets/Images/trainings/fullstack.svg'

function FullStack(props) {

    return(
        <>
            <div className="design-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Full Stack Development'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <h1 className='mb-5'>Full Stack Development Course (MEAN, MERN)</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className='mb-4'>The Complete MEAN MERN Stack Course welcomes you. We'll use Node.js, Express, React, and other technologies to create an in-depth Social Network website in these classes. We'll start with a blank text editor and work our way up to a fully functional website.</p>
                                <p>This course also makes use of the most up-to-date React Hooks and Redux, which is a lot of fun. Your code will be considerably more readable and simple. By the end of this course, you'll have a better understanding of how these various technologies interact with one another. We'll begin by looking at all of the individual building blocks, with the goal of combining them all into one fantastic application by the end of the course.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'right'}}>
                                <img src={fullLogo} alt="" style={{width: '70%'}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 lightbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Learn About Product Development From Start To Finish</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" style={{'text-align': 'left'}}>
                                <img src={fullDash} alt="" style={{width: '100%'}} />
                            </div>
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p className="mb-4">Our Full Stack Developer course will teach you how to build full-stack web apps utilizing the front-end and back-end by using languages like JavaScript, and technologies like MEAN MERN, ExpressJS, Angular, and Node.js, React as You'll go through each module in-depth as part of this Full Stack course, and you'll get hands-on experience by working on real-world projects.</p>
                                <p>The Full Stack Web Programming Bootcamp is a hands-on development curriculum that is intensive and engaging. It takes you from the fundamentals of the internet to mastering crucial web development from the ground up. The curriculum structure is designed to assist applicants in learning to code in JavaScript and gaining real-world experience developing web applications. Candidates acquire UI/UX design skills alongside product development, with industry experts educating them on optimal design techniques. The program has been developed to appeal to persons with both technical and non-technical backgrounds.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3 Darkbg headings"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                    <h1 className='mb-5'>Why Should You Take a Full Stack Development Training Course?</h1>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>Your worth as a developer in the tech world increases dramatically with Full Stack Development training. Recruiters see you as an indispensable asset because of your ability to manage the entire web development process in any firm. There is only one language you need to master to work on these stacks: JAVASCRIPT. You will be able to manage front-end development, back-end development, and anything related to database aspects after completing this class. With precise talents, the development process can be accelerated.</p>
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

export default FullStack
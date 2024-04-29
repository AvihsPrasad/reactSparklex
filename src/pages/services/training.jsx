// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import Banner from '../../components/banner.jsx'
import training from '../../assets/Images/servives/training.svg'

function Training(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="training-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='IT Training & Placement'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>What we do ?</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12">
                                <p>Sparklex Technologies is a IT training and placement programs are designed to provide individuals with the necessary skills and knowledge to succeed in the field of Information Technology (IT) and help them secure job placements within the industry. These programs are typically offered by educational institutions, training centers, and sometimes even by IT companies themselves. The goal is to bridge the gap between the skills demanded by the IT industry and the skills possessed by job seekers.</p>
                                <p>When considering an IT training and placement program, it's important to research and choose a reputable provider that aligns with your career goals. Look for reviews, success stories from previous participants, and inquire about the program's curriculum, instructors, placement rates, and industry partnerships. It's also a good idea to assess your own commitment to learning and improving your skills to make the most of the training and placement opportunities.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img src={training} alt="" style={{width: '100%'}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block3 lightbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Why Choose Us?</h1>
                        <ol>
                            <li style={{'--accent-color': '#36b9ea'}}>Training Curriculum</li>
                            <li style={{'--accent-color': '#3ecbb1'}}>Hands-on Learning</li>
                            <li style={{'--accent-color': '#fcc003'}}>Certifications</li>
                            <li style={{'--accent-color': '#fb337b'}}>Placement Assistance</li>
                            <li style={{'--accent-color': '#9c54e5'}}>Internships and Apprenticeships</li>
                            <li style={{'--accent-color': '#E9C2C5'}}>Job Fairs and Networking Events</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Training
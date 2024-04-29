// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import Banner from '../../components/banner.jsx'
import mobile from '../../assets/Images/servives/mobile.svg'

function MobileApp(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="mobile-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Mobile App Development'></Banner>
                    </div>
                </div>
                
                <div className="block2 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>What we do ?</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12" data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                                <p>Sparklex Technologies is a mobile app development company in Canada that empowers businesses, brands, and startups with impactful solutions. Learn more about our mobile app development services today.</p>
                                <p className="mb-4">Our team includes experts from diverse backgrounds who are passionate about creating solutions that will help your business grow. Let us be your Partner in your next Mobile app. No matter what you want us to develop, we will always be your partner, acting with complete transparency and honesty at every step of the way. No matter what you want us to develop, we will always be your partner, acting with complete transparency and honesty at every step of the way.</p>
                                <p className="mb-4">Our experienced team is made up of designers, programmers, and marketing strategists backed by some of the most reputable resources in the industry. Together, we'll create a unique solution that fits your needs perfectly. We offer competitive pricing so you don't break the bank on your next app project. We work hard to bring you an affordable price that allows you to invest more money into marketing or developing your product.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img src={mobile} alt="" style={{width: '70%'}} />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="block5 lightbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Why Choose Us?</h1>
                        <ol data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-duration="600">
                        <li style={{'--accent-color': '#36b9ea'}}> From Ideation to Completion, we will take care of everything</li>
                            <li style={{'--accent-color': '#3ecbb1'}}>Native Apps, a Hybrid App or an App from Scratch. we develop any app</li>
                            <li style={{'--accent-color': '#fcc003'}}>Device compatible mobile apps for any business need</li>
                            <li style={{'--accent-color': '#fb337b'}}>Cost-effective mobile app solutions</li>
                            <li style={{'--accent-color': '#9c54e5'}}>A smart team with experience and expertise</li>
                            <li style={{'--accent-color': '#E9C2C5'}}>Amazing UI Options for smoother user experience</li>
                            <li style={{'--accent-color': '#473E66'}}>Faster loading, secured app development</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileApp
// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";


import Banner from '../../components/banner.jsx'
import cloud from '../../assets/Images/servives/cloud.svg'

function Cloud(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="cloud-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Cloud Service'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>What we do ?</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12">
                                <p className='mb-4'>Sparklex Technologies is a leading cloud service company, providing affordable and reliable solutions to all your business needs. Choose from our wide array of cloud services, including web hosting, CRM, and more.</p>
                                <p className='mb-4'>Unbeatable features including Reliable and scalable service with 99% uptime, fully managed cloud infrastructure so you don't have to worry about server maintenance, Customizable according to your needs - with modular pricing.</p>
                                <p>Sparklex Technologies is the best Canadian cloud service company, so you're never left without a solution. Whether you're looking for cloud services or providing your own servers, we have a solution that's perfect for you. Unlike other companies, we'll never charge you for services that you don't even want or need. And we guarantee that our rates will be competitive to everyone else in the market.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12 r-img">
                                <img src={cloud} alt="" style={{width: '50%'}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block3 lightbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Features of Cloud Services</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12">
                            <ol>
                                <li style={{'--accent-color': '#36b9ea'}}>Relevance and context</li>
                                <li style={{'--accent-color': '#3ecbb1'}}>Data Security</li>
                                <li style={{'--accent-color': '#fcc003'}}>Content length</li>
                                <li style={{'--accent-color': '#fb337b'}}>Quality of comments</li>
                                <li style={{'--accent-color': '#9c54e5'}}>Page loading speed</li>
                            </ol>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                            <ol>
                                <li style={{'--accent-color': '#9c54e5'}}>Content Marketing for Digital Growth</li>
                                <li style={{'--accent-color': '#E9C2C5'}}>Scalability</li>
                                <li style={{'--accent-color': '#fb337b'}}>Unlimited Storage Capacity</li>
                                <li style={{'--accent-color': '#fcc003'}}>Mobility</li>
                                <li style={{'--accent-color': '#3ecbb1'}}>Automatic Software Updates and Integration</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cloud
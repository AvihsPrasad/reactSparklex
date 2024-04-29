// import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import Banner from '../../components/banner.jsx'
import brand from '../../assets/Images/servives/brand.svg'

function Brand(props) {

    return(
        <>
            {/* About page consists of about us and Team Members */}
            <div className="brand-page">
                <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
                    <div className="container">
                        <Banner serviceName='Branding'></Banner>
                    </div>
                </div>
                <div className="block2 Darkbg headings">
                    <div className="container">
                        <h1 className='mb-5'>What we do ?</h1>
                        <div className="row m-0">
                            <div className="col-lg-6 col-sm-12">
                                <p className='mb-4'>No matter the industry, Sparklex Technologies is the go-to branding agency for entrepreneurs looking to launch a successful business. From the initial branding consultation to the final presentation of your company's branding strategy, we keep you up to date on the progress of your business online growth and branding reach.</p>
                                <p className='mb-4'>We specialize in designing and producing a wide variety of marketing materials to help you grow your business and reach new customers thanks to our expertise in brand strategy, identity design, print production and project management. Our goal is to make sure your message reaches the right audience so that you have the best chance of success.</p>
                                <p>We offer Integrated workflows to give you everything you need in one place. Sparklex Technologies has an integrated workflow that allows us to provide the whole package - from signage and stationery through to website design and everything in between. This means that all your marketing needs are taken care of with one source - reducing time spent doing research on multiple providers and saving money on unnecessary costs.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <img src={brand} alt="" style={{width: '100%'}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block3 lightbg headings listss">
                    <div className="container">
                        <h1 className='mb-5'>Our Branding Strategy</h1>
                        <ol>
                            <li style={{'--accent-color': '#36b9ea'}}>Listen to your Business</li>
                            <li style={{'--accent-color': '#3ecbb1'}}>Requirements Gathering</li>
                            <li style={{'--accent-color': '#fcc003'}}>Logo Creation</li>
                            <li style={{'--accent-color': '#fb337b'}}>Develop Website or an APP</li>
                            <li style={{'--accent-color': '#9c54e5'}}>Content Marketing for Digital Growth</li>
                            <li style={{'--accent-color': '#E9C2C5'}}>Other Promotions</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand
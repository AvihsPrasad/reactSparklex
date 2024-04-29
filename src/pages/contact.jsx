import React from 'react'

function Contact() {
  return (
    <>
        <div className="block1 lightbg"  data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
            <div className="container">
                <svg viewBox="0 0 1320 300">
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        Contact US
                    </text>
                </svg>	
            </div>
        </div>        
        <div className="block2 Darkbg headings" data-aos="zoom-in-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="1000">
            <div className="container px-0">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                        <h1 className=' mb-5'>Contact Us<span>Get in touch</span></h1>
                        <p className='contact-text'>
                            Let's Connect: we are here to help, and we'd love to hear from you! whether you 
                            have a question, a comment, just want to chat, you can out to us through contact
                            form on this page or by phone, email or social media.  
                        </p>
                        <div className="contact-info">
                            <div className="ph mb-4"><i class="fa-solid fa-phone"></i><span className='ps-4'>+1 (647)-877-2318</span></div>
                            <div className="email"><i class="fa-solid fa-envelope"></i><span className='ps-4'>info@sparklextechnologies.com</span></div>
                            <div className="mt-4 location">
                                <div className='mb-4 loc'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span className='ps-4'>Suite:700, 6733 Mississauga Rd, Mississauga, ON L5N 6J5</span>
                                    <a href="https://maps.google.com/maps?ll=43.602807,-79.740601&z=16&t=m&hl=en&gl=CA&mapclient=embed&q=6733%20Mississauga%20Rd%207th%20floor%20Mississauga%2C%20ON%20L5N%206J5" target="_blank">
                                        <i class="fa-solid fa-paper-plane"></i>
                                    </a>
                                </div>
                                <div className='mb-4 loc'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span className='ps-4'>6815 8th Street , 2nd Floor, Suite 290 , Calgary , Alberta, T5N 3W6</span>
                                    <a href="https://maps.google.com/maps?ll=51.114031,-114.045349&z=16&t=m&hl=en&gl=CA&mapclient=embed&q=6815%208%20St%20NE%20Calgary%2C%20AB%20T2E%207H7" target="_blank"><i class="fa-solid fa-paper-plane"></i></a>
                                </div>
                                <div className='mb-4 loc'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span className='ps-4'>#9, Ground floor, Sanjeevappa Layout, Idgah Road, Varthur, Bangalore-560087</span>
                                    <a href="https://maps.google.com/maps?ll=12.941961,77.740866&z=16&t=m&hl=en&gl=CA&mapclient=embed&cid=10051693919694333922" target="_blank"><i class="fa-solid fa-paper-plane"></i></a>
                                </div>
                            </div>
                            <div className="row m-0 social-media mb-4">
                                <h5 className='ps-0 mb-3'>Social Media</h5>
                                <div className="col-lg-12 ps-0">
                                    <a href='https://www.instagram.com/sparklextechnologies/' class="btn btn-outline-primary">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href='https://www.facebook.com/SparklexTechnologiesCanada' class="btn btn-outline-primary">
                                        <i class="fa-brands fa-facebook"></i>
                                    </a>
                                    <a href='https://www.linkedin.com/company/sparklex-technologies-canada/' class="btn btn-outline-primary">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href='https://twitter.com/SparklexTech' class="btn btn-outline-primary">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                        <div class='mobile-phone'>
                            <div class='brove'><span class='speaker'></span></div>
                            <div class='screen'>
                                <div className='phone-title'>
                                    <h3 className='phone-nav'>Contact us</h3>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput2" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput3" class="form-label">Mobile</label>
                                    <input type="phone" class="form-control" id="exampleFormControlInput3" placeholder="9999999999"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="d-grid mt-4 mb-0">
                                    <button type="submit" class="btn btn-lg btn-primary mb-3 send-btn">
                                        <i class="fa-solid fa-rocket pe-3"></i>
                                        Send Message
                                    </button>
                                </div>
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
                
    </>
  )
}

export default Contact
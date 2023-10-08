export default function Contact(){
    return(
        <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section">
            <div className="container">
                <div className="row g-custom-x">
                    <div className="col-lg-8 mb-sm-30">

                        <h3>Do you have any question?</h3>

                        <form name="contactForm" id="contact_form" className="form-border" method="post" action="">
                            <div className="row">
                                <div className="col-md-4 mb10">
                                    <div className="field-set">
                                        <input type="text" name="name" id="name" className="form-control"
                                               placeholder="Your Name"/>
                                    </div>
                                </div>
                                <div className="col-md-4 mb10">
                                    <div className="field-set">
                                        <input type="text" name="email" id="email" className="form-control"
                                               placeholder="Your Email"/>
                                    </div>
                                </div>
                                <div className="col-md-4 mb10">
                                    <div className="field-set">
                                        <input type="text" name="phone" id="phone" className="form-control"
                                               placeholder="Your Phone"/>
                                    </div>
                                </div>
                            </div>

                            <div className="field-set mb20">
                                <textarea name="message" id="message" className="form-control" placeholder="Your Message"
                                          ></textarea>
                            </div>
                            <div className="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>
                            <div id='submit' className="mt20">
                                <input type='submit' id='send_message' value='Send Message' className="btn-main"/>
                            </div>

                            <div id="success_message" className='success'>
                                Your message has been sent successfully. Refresh this page if you want to send more
                                messages.
                            </div>
                            <div id="error_message" className='error'>
                                Sorry there was an error sending your form.
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="de-box mb30">
                            <h4 style={{marginBottom: "20px"}}>VIE Office</h4>
                            <address className="s1">
                                <span style={{marginBottom: "25px"}}><i className="id-color fa fa-map-marker fa-lg"></i>No. 8A Ton That Thuyet, My Dinh, Nam Tu Liem, Hanoi, Vietnam</span>
                                <span style={{marginBottom: "25px"}}><i className="id-color fa fa-phone fa-lg"></i>Contact info: +1 333 9296</span>
                                <span style={{marginBottom: "25px"}}><i className="id-color fa fa-envelope-o fa-lg"></i><a
                                        href="#">contact@example.com</a></span>
                            </address>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>

    
    )
}
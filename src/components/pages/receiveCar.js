import BreadCrumb from "../layouts/breadcrumb";

export default function ReceiveCar(){
    return(
    <div className="no-bottom no-top" id="content">
        <div id="status-message"></div>
        <div id="top"></div>

        <BreadCrumb/>

        <section aria-label="section">
            <div className="container">
                <div className="row g-custom-x">
                    <div className="col-lg-12 mb-sm-30">

                        <h3>The process of receiving the car</h3>

                        <form name="contactForm" enctype="multipart/form-data" id="contact_form" className="form-border" method="post" action="">
                            <div className="row">
                                <div className="col-md-6 mb10">
                                    <div className="file-upload">
                                        <button className="file-upload-btn" type="button" onclick="">Add Image</button>

                                        <div className="image-upload-wrap" id="image-upload-wrap-1">
                                            <input name="thumbnail_1" className="file-upload-input" id="file-upload-input-1" type='file' onchange="readURL1(this);" accept="image/*" />
                                            <div className="drag-text">
                                                <h3>Drag and drop a file or select add Image</h3>
                                            </div>
                                        </div>
                                        <div className="file-upload-content" id="file-upload-content-1">
                                            <img className="file-upload-image" id="file-upload-image-1" src="#" alt="your image" />
                                            <div className="image-title-wrap">
                                                <button type="button" onclick="removeUpload1()" className="remove-image">Remove <span className="image-title" id="image-title-1">Uploaded Image</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb10">
                                    <div className="file-upload">
                                        <button className="file-upload-btn" type="button" onclick="">Add Image</button>

                                        <div className="image-upload-wrap" id="image-upload-wrap-2">
                                            <input name="thumbnail_2" className="file-upload-input" id="file-upload-input-2" type='file' onchange="readURL2(this);" accept="image/*" />
                                            <div className="drag-text">
                                                <h3>Drag and drop a file or select add Image</h3>
                                            </div>
                                        </div>
                                        <div className="file-upload-content" id="file-upload-content-2">
                                            <img className="file-upload-image" id="file-upload-image-2" src="#" alt="your image" />
                                            <div className="image-title-wrap">
                                                <button type="button" onclick="" className="remove-image">Remove <span className="image-title" id="image-title-2">Uploaded Image</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="field-set mb20">
                                <textarea name="note" id="message" className="form-control" placeholder="Your Message"
                                          required></textarea>
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
                </div>
            </div>
        </section>
    </div>
    )
}
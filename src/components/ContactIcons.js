import React from 'react'

const ContactIcons = () => {
    return (
        <div className="container contact3 mr-5 col-sm-12 contactIcons">
        <div className="wraper contactIcons">
            <div className="display-flex">
            <div>
                <img className="address" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt="....." />

            </div>
            <div>
                <h6 className="contactTitle">Address</h6>
                <p style={{color:"#27273f"}}>Tel aviv <br />Sudan</p>
            </div>
            </div>
        
            <div className="display-flex">

            <div>
                <a href="tel:0537315943">
                <img className="address" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt="....." />
                </a>
            </div>
            <div>
                <h6 className="contactTitle"> phone</h6>
                <p style={{color:"#27273f"}}>0537315943 <br />0552405027</p>
            </div>
            </div>
            <div className="display-flex">

            <div>
                <img className="address" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="....." />

            </div>
            <div>
                <h6 className="contactTitle">Email</h6>
                <p style={{color:"#27273f"}}>goanarbol811@gmail.com <br />goanarbol811@gmail.com</p>
            </div>
            </div>
            
        </div>
            
            </div>
    )
}

export default ContactIcons

import React from 'react'
import emailjs from 'emailjs-com';
import ContactIcons from './ContactIcons';

const Contact = () => {



  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_29ymbsk', 'template_cxd2sqi', e.target,'user_fK8VafB6YT6akPU8QWWt1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    return (
        <div>
        <div className=" container contact3">
            <div className="row">
                <div className="col-lg-6 col-md-12 mt-3">
                    <img src="./images2/gog1.jpeg" alt="Auther"  className="conatctImage"/>
                </div>
                <div className="col-lg-6 col-md-12">
                    <h2 className=" col-md-12">Quick Contact</h2>
                    <form onSubmit={sendEmail}>
                        <div className=" form-control-lg mt-3">
                            <input className="form-control" type="text" placeholder="name" name="name" />
                        </div>

                        <div className="form-control-lg">
                            <input className="form-control" type="email" placeholder="email"  name="email"  />
                        </div>

                        <div className=" form-control-lg">
                            <input className="form-control" type="text" placeholder="phone"  name="subject" />
                        </div>

                        <div className="form-control-lg">
                            <textarea className="form-control" rows="3" placeholder="message"  name="message" ></textarea>
                        </div>
                        <div className="form-control-lg">
                            <button type="submit" className=" btn btn-danger mt-3 text-wiht border-0 px-3 py-2"><span> SUBMIT</span></button>
                        </div>
                    </form>
                </div>   
            </div>
        </div >
 <ContactIcons/>
        </div>
    )
}

export default Contact

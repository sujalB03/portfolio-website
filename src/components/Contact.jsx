import React from "react";

const Contact = () => {
  return (
    <section
      className="contact"
      id="contact"
      data-aos="fade-right"
      data-aos-duration="4000"
    >
      <h1 className="heading fadeInUp">
        <span>G</span>et <span> I</span>n <span> T</span>ouch
      </h1>
      <div className="flex-container">
        <div className="container info-container">
          <div style={{ paddingTop: "15px" }}>
            <div className="box">
              <div className="info">
                <i className="fas fa-phone"></i>
                <h3>Call Now</h3>
                <p>+91 - 9971243785</p>
              </div>
            </div>

            <div className="box">
              <div className="info">
                <i className="fas fa-envelope"></i>
                <h3>Send Me an Email</h3>
                <p>sujalbhatnagar16@gmail.com</p>
              </div>
            </div>

            <div className="box">
              <div className="info">
                <i className="fas fa-location-dot"></i>
                <h3>Location</h3>
                <p>Delhi - 110091, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden-div"></div>

        <div className="form-container">
          <h2 className="contact-subhead">
            <span>Leave Me a Message</span>
          </h2>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              id="access-key"
              value="2a00812c-d9fc-4801-901d-1efbca1caac5"
            />
            <input
              type="text"
              id="name"
              name="Name"
              placeholder="Enter Your Name"
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter your name here.")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              required
            />

            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Enter Your Email"
              minLength="7"
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter a valid email.")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              required
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Your Phone Number"
              minLength="10"
              maxLength="10"
              onInvalid={(e) =>
                e.target.setCustomValidity("It should be 10 digits long.")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              required
            />

            <textarea
              id="msg"
              name="Message"
              placeholder="Write Your Message"
              style={{ height: "160px" }}
              onInvalid={(e) =>
                e.target.setCustomValidity("Please write something to us.")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              required
            ></textarea>

            <input className="btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

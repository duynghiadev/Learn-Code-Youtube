import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs.sendForm("service_jz9tf5c", "template_yq1v8j9", form.current, "B9D1FhvAE3Pi2pmog").then(
      (result) => {
        console.log(result.text);
        setSubmitting(false);
        setSuccess(true);
      },
      (error) => {
        console.log(error.text);
        setSubmitting(false);
      }
    );
    e.target.reset();
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            I'm always interested in new projects and opportunities. Don't hesitate to give me a call or send an email,
            I'll get back to you as soon as I can!. 👋
          </p>
        </div>

        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="name" className="contact__form-input" placeholder="Your full name" required />
            </div>
            <div className="contact__form-div">
              <input type="email" name="email" className="contact__form-input" placeholder="Your email" required />
            </div>
          </div>
          <div className="contact__form-div">
            <input type="text" name="subject" className="contact__form-input" placeholder="Your subject" required />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              type="text"
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              required
            />
          </div>

          <button type="submit" className="btn" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
          {success && <p>Thank you for your message! I'll get back to you soon.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;

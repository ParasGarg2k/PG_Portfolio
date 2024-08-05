import React, { useRef, useState } from "react";
// import avatar from '../assets/my-bg-profile.png'
import avatar from "../assets/pic.png";
import "./sidebar.css";

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  const contacts = useRef(null);
  function showContact() {
    setToggle(!toggle);
    const showBtn = document.querySelector(".show-btn2");
    if (toggle) {
      showBtn.classList.add("show-btn2-bg");
      contacts.current.classList.remove("slideUp");
      contacts.current.classList.add("slideDown");
    } else {
      showBtn.classList.remove("show-btn2-bg");
      contacts.current.classList.remove("slideDown");
      contacts.current.classList.add("slideUp");
    }
  }
  return (
    <div className="sidebar" ref={contacts}>
      <div className="my-info info">
        <button className="show-btn1" onClick={showContact}>
          Show Contacts
        </button>
        <button className="show-btn2" onClick={showContact}>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
        <div className="avatar-box">
          <img src={avatar} className="i" alt="" />
        </div>
        <div className="intro">
          <h1 className="name">Paras Garg</h1>
          <p className="passion">Web Developer</p>
        </div>
      </div>

      <div className="my-info toggle more-info">
        <div className="separator"></div>

        <ul className="contacts-list">
          <div className="info-wrapper">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:parasgarg2k@gmail.com" className="info-link">
                  parasgarg2k@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
                {/* <ion-icon name="logo-linkedin"></ion-icon> */}
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+919815364574" className="info-link">
                  +91 9815364574
                </a>
              </div>
            </li>
          </div>

          <div className="info-wrapper">
            

            <li className="contact-item">
            <div className="icon-box">
            <ion-icon name="logo-github"></ion-icon>
              </div>
              <div className="contact-info">
              <p className="contact-title">Github</p>

                <a href="https://github.com/ParasGarg2k" className="info-link">
                  ParasGarg2k
                </a>
              </div>
            
          </li>

          <li className="contact-item">
            <div className="icon-box">
            <ion-icon name="logo-linkedin"></ion-icon>
              </div>
              <div className="contact-info">
              <p className="contact-title">Linkedin</p>

                <a href="https://www.linkedin.com/in/paras-garg-2k" className="info-link">
                  Paras Garg
                </a>
              </div>
            
          </li>

            
          </div>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.snapchat.com/add/pgarg_2k?share_id=tjGHkETD9oo&locale=en-IN
"
              className="social-link"
            >
              <ion-icon name="logo-snapchat"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://x.com/parasgarg2k?t=tFaD-R_f_CQT4ggLCEoE9Q&s=09 " className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.instagram.com/pgarg_2k?igsh=aXMxcWo0b2duaDNj
"
              className="social-link"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

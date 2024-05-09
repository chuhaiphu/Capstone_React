import React from 'react'

export default function Footer() {
  return (
    <div>
  <footer className="footer-section mt-5">
    <div className="newslater-section padding-bottom">
      <div className="container">
        <div className="newslater-container bg_img" data-background="./img/newslater-bg01.jpg" style={{backgroundImage: 'url("./img/newslater-bg01.jpg")'}}>
          <div className="newslater-wrapper">
            <h5 className="cate">subscribe to Boleto </h5>
            <h3 className="title">to get exclusive benifits</h3>
            <form className="newslater-form">
              <input type="text" placeholder="Your Email Address" />
              <button type="submit">subscribe</button>
            </form>
            <p>We respect your privacy, so we never share your info</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="footer-top d-flex">
        <div className="logo">
          <a href="index-1.html">
            <img src="./images/logo/logo.png " alt="footer" />
          </a>
        </div>
        <ul className="social-icons d-flex">
          <li>
            <a href="#0">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-google" />
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-area d-flex">
          <div className="left">
            <p>Copyright © 2020.All Rights Reserved By <a href="#0">Boleto </a></p>
          </div>
          <ul className="links d-flex">
            <li>
              <a href="#0">About</a>
            </li>
            <li>
              <a href="#0">Terms Of Use</a>
            </li>
            <li>
              <a href="#0">Privacy Policy</a>
            </li>
            <li>
              <a href="#0">FAQ</a>
            </li>
            <li>
              <a href="#0">Feedback</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

  )
}

import { useState } from "react";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logoDark.png";

function Footer() {
      const [theamMode, settheamMode] = useState("dark");
      const localtheamMode = localStorage.getItem("theamMode");
      if (localtheamMode) {
        if (localtheamMode == "light" && theamMode !== "light") {
          settheamMode("light");
        } else if (localtheamMode == "dark" && theamMode !== "dark") {
          settheamMode("dark");
        }
      }
  return (
        <footer className="text-light py-5 borderTop">
          <div className="container">
            <div className="row gy-4">
              {/* Logo + description */}
              <div className="col-lg-4 col-md-6">
                <div className="mb-3">
                  <img
                    src={theamMode == "light" ? logoDark : logo}
                    alt="Payfinity"
                    className="footer-logo mb-2"
                  />
                </div>
                <p className="text16 text400 text-gray">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <div className="d-flex gap-2 mt-3">
                  {[
                    "facebook",
                    "instagram",
                    "twitter",
                    "linkedin",
                    "whatsapp",
                    "youtube",
                  ].map((platform, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-light"
                      aria-label={platform}
                    >
                      <i className={`bi bi-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Menu */}
              <div className="col-lg-2 col-md-6">
                <h5 className="text24 text500 text-white mb-3">Menu</h5>
                <ul className="list-unstyled text16 text400 text-gray">
                  <li className="pb-2">Home</li>
                  <li className="pb-2">About</li>
                  <li className="pb-2">Blog</li>
                  <li className="pb-2">Blog post</li>
                  <li className="pb-2">Integrations</li>
                  <li className="pb-2">Integrations Single</li>
                  <li className="pb-2">Pricing</li>
                  <li className="pb-2">Pricing Single</li>
                  <li className="pb-2">Contact</li>
                </ul>
              </div>

              {/* Utility Pages */}
              <div className="col-lg-2 col-md-6">
                <h5 className="text24 text500 text-white mb-3">
                  Utility Pages
                </h5>
                <ul className="list-unstyled text16 text400 text-gray">
                  <li className="pb-2">Start Here</li>
                  <li className="pb-2">Styleguide</li>
                  <li className="pb-2">Password Protected</li>
                  <li className="pb-2">404 Not Found</li>
                  <li className="pb-2">Licenses</li>
                  <li className="pb-2">Changelog</li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="col-lg-4 col-md-6">
                <h5 className="text24 text500 text-white mb-3">
                  Subscribe to our newsletter
                </h5>
                <p className="list-unstyled text16 text400 text-gray">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control background-blue text-white text16 text400 p-3"
                    style={{ border: "none" }}
                    placeholder="Enter your email"
                  />
                </div>
                <a href="#" className="btn text-white border1 text18 px-5">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </footer>
  );
}

export default Footer;

import { useState } from "react";
import logo from "../assets/images/logo.png";

function Header() {
  const [theamMode, settheamMode] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const localtheamMode = localStorage.getItem("theamMode");
  if (localtheamMode) {
    if (localtheamMode == "light" && theamMode !== "light") {
      settheamMode("light");
    } else if (localtheamMode == "dark" && theamMode !== "dark") {
      settheamMode("dark");
    }
  }
  return (
    <>
      {/* Desktop Header (visible lg and up) */}
      <header className="p-3 sticky-top d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <img src={logo} alt="Logo" />
          <nav className="d-flex text-white text18 text500">
            <div className="mx-3">Home</div>
            <div className="mx-3">About</div>
            <div className="mx-3">Pricing</div>
            <div className="mx-3">Dashboard</div>
          </nav>
          <button className="btn text-white background-gradient text18 px-5">
            Get started
          </button>
        </div>
      </header>

      {/* Mobile Header (visible below lg) */}
      <header className="p-3 sticky-top d-lg-none ">
        <div className="container d-flex justify-content-between align-items-center">
          <img src={logo} alt="Logo" />
          <button
            className="btn text-white background-gradient px-3 py-2"
            style={{ borderRadius: 8 }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#ffffff"/>
<path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" fill="#ffffff"/>
<path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" fill="#ffffff"/>
</svg>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <button
            className="btn btn-link text-white position-absolute"
            style={{ top: 24, right: 24, fontSize: 32 }}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="d-flex flex-column align-items-center gap-4">
            <div className="text-white text25 text500" onClick={() => setMobileMenuOpen(false)}>Home</div>
            <div className="text-white text25 text500" onClick={() => setMobileMenuOpen(false)}>About</div>
            <div className="text-white text25 text500" onClick={() => setMobileMenuOpen(false)}>Pricing</div>
            <div className="text-white text25 text500" onClick={() => setMobileMenuOpen(false)}>Dashboard</div>
          </nav>
          <button className="btn text-white background-gradient text20 px-5 mt-5" onClick={() => setMobileMenuOpen(false)}>
            Get started
          </button>
        </div>
      )}
    </>
  );
}

export default Header;

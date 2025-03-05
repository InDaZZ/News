import { Link } from "react-router";
import poweredbyLogo from "../images/NewsApi.svg";
import "./Footer.css";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= documentHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer className={`footer ${isVisible ? "footer-visible" : ""}`}>
      <nav className="footer__navigation">
        <Link to="#LogIn" className="footer__navigation-item">
          Log In
        </Link>
        <Link to="#Aboutus" className="footer__navigation-item">
          About Us
        </Link>
        <Link to="#Publishers" className="footer__navigation-item">
          Publishers
        </Link>
        <Link to="#Sitemap" className="footer__navigation-item">
          Sitemap
        </Link>
      </nav>
      <div className="footer__poweredby">
        <h4 className="footer__poweredby-title">Powered by</h4>
        <img
          src={poweredbyLogo}
          alt=""
          className="footer__poweredby-logo"
        ></img>
      </div>
      <p className="footer__info">© 2023 Besider. Inspired by Insider</p>
    </footer>
  );
};
export default Footer;

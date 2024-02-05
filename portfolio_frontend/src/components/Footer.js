import "../css/FooterStyle.css";
import {
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaHome,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Plot No.94 Azadnagar, Sarkhej.</p>
              <p>Ahemedabad.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9875025081
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              sachinchavda321@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About My Self</h4>
          <p>
            This is me Sachin Chavda. Student at LJ University. I enjoy
            discussing new projects and design challenges.
          </p>
          <div className="social">
          <Link to={"http://github.com/sachinchavda17"} target="_blank">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link to={"https://wa.me/qr/DLJCZRIZG6NPN1"} target="_blank">
              <FaWhatsapp
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link to={"https://twitter.com/sachinchavda177?t=ZGvlMAKVwr-1xIjXARIL0w&s=08"} target="_blank">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link to={"https://www.linkedin.com/in/sachin-chavda-177649266"} target="_blank">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

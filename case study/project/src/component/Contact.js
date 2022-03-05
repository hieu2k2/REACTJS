import { Link } from "react-router-dom";
import "../sass/contact.scss";
import "../sass/base.scss";
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row contact__container">
          <div className="contact__item col c-4 m-12">
            <i className="fa-solid fa-envelope"></i>
            <span>hieulrong2k2@gmail.com</span>
          </div>
          <div className="contact__item col c-4 m-12">
            <i className="fa-solid fa-phone"></i>
            <span>(+84) 378353196</span>
          </div>
          <div className="contact__item col c-4 m-12">
            <span>Connect us:</span>
            <Link to="/">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link to="/">
              <i className="fa-solid fa-message"></i>
            </Link>
            <Link to="/">
              <i className="fa-brands fa-instagram-square"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;

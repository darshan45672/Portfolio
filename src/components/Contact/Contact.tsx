import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"

export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Looking for a skilled backend developer to bring your project to life?</p>
        <p>Contact me today for a free consultation on building robust, scalable backend solutions.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:drshnbhandary@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:drshnbhandary@gmail.com">drshnbhandary@gmail.com</a>
        </div>
        <div>
          <a href="tel:+91 90190 03490"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+91 90190 03490">+91 90190 03490</a>
        </div>
      </div>
    </Container>
  )
}
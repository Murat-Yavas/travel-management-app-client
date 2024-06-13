import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className={`${styles.footer} grid gap-4 grid-cols-3 grid-rows-2 main-padding bg-slate-200 `}
    >
      <div className={`${styles["footer-section"]}`}>
        <div className={`${styles["section-heading"]}`}>Support</div>
        <div>
          <div className={`${styles["footer-element"]}`}>FAQ</div>
          <div className={`${styles["footer-element"]}`}>Contact Us</div>
          <div className={`${styles["footer-element"]}`}>User Manual</div>
          <div className={`${styles["footer-element"]}`}>Help Center</div>
        </div>
      </div>

      <div className={`${styles["footer-section"]}`}>
        <div className={`${styles["section-heading"]}`}>Partners</div>
        <div>
          <div className={`${styles["footer-element"]}`}>
            Travel agents & advisors
          </div>
          <div className={`${styles["footer-element"]}`}>
            Affiliates & creators
          </div>
          <div className={`${styles["footer-element"]}`}>DMOs & marketers</div>
          <div className={`${styles["footer-element"]}`}>
            OTAs, airlines & GDSs
          </div>
        </div>
      </div>

      <div className={`${styles["footer-section"]}`}>
        <div className={`${styles["section-heading"]}`}>Operators</div>
        <div>
          <div className={`${styles["footer-element"]}`}>
            Grow a successful business
          </div>
          <div className={`${styles["footer-element"]}`}>Payment solutions</div>
          <div className={`${styles["footer-element"]}`}>
            Increase visibility
          </div>
          <div className={`${styles["footer-element"]}`}>
            Maximize direct bookings
          </div>
        </div>
      </div>

      <div className={`${styles["footer-section"]}`}>
        <div className={`${styles["section-heading"]}`}>Travelers</div>
        <div>
          <div className={`${styles["footer-element"]}`}>
            Days to Come Magazine
          </div>
          <div className={`${styles["footer-element"]}`}>Win an Adventure</div>
          <div className={`${styles["footer-element"]}`}>
            Why should I use TrApple?
          </div>
          <div className={`${styles["footer-element"]}`}>
            After your booking
          </div>
          <div className={`${styles["footer-element"]}`}>
            Cancellation policy
          </div>
        </div>
      </div>

      <div className={`${styles["footer-section"]}`}>
        <div className={`${styles["section-heading"]}`}>Follow Us</div>
        <div>
          <div className={`${styles["footer-icon"]} text-2xl`}>
            <FaFacebook />
          </div>
          <div className={`${styles["footer-icon"]} text-2xl`}>
            <FaInstagram />
          </div>
          <div className={`${styles["footer-icon"]} text-2xl`}>
            <BsTwitterX />
          </div>
          <div className={`${styles["footer-icon"]} text-2xl`}>
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

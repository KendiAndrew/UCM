import {
  faTelegram,
  faInstagram,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/components/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="#">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="#">Зв'язок з нами</a>
            </li>
            <li>
              <a href="#">Наша діяльність</a>
            </li>
            <li>
              <a href="#">Про нас</a>
            </li>
            <li>
              <a href="#">Наші проєкти</a>
            </li>
            <li>
              <a href="#">Інше</a>
            </li>
          </ul>
        </div>

        <div className="row">
          HSDev Copyright © 2024 HSDev - All rights reserved || Designed By:
          dennsk
        </div>
      </div>
    </footer>
  );
}

import { faTelegram, faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconsMenu() {
  return (
    <div className='icons pc_btn'>
      <ul className='icons__list'>
        <li className='telegram'>
          <a href='https://t.me/grifon_agency_bot'>
            <FontAwesomeIcon icon={faTelegram} size='2x' />
          </a>
        </li>
        <li className='instagram'>
          <a href='https://www.instagram.com/grifon.agency/'>
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
        </li>
        <li className='whatsapp'>
          <a href='https://vibr.cc/380677595191'>
            <FontAwesomeIcon icon={faWhatsapp} size='2x' />
          </a>
        </li>
        <li className='tiktok'>
          <a href='#'>
            <FontAwesomeIcon icon={faTiktok} size='2x' />
          </a>
        </li>
      </ul>
    </div>
  );
}

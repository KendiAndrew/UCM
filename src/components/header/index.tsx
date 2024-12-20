import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Logo from './logo';
import IconsMenu from './icons-menu';

export default function Header() {
  const [isActiveSubList1, setIsActiveSubList1] = useState<boolean>(false);
  const [isActiveSubList2, setIsActiveSubList2] = useState<boolean>(false);
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);
  return (
    <header className='header'>
      <div className='header__container'>
        <Logo />
        <div className='header__menu menu'>
          <div
            className={isBurgerActive ? 'menu__burger-menu' : 'menu__burger-menu active'}
            onClick={() => setIsBurgerActive(!isBurgerActive)}
          >
            <span></span>
          </div>
          <nav className={isBurgerActive ? 'menu__body' : 'menu__body active'}>
            <ul className='menu__list'>
              <li>
                <a
                  data-goto='.page__section_1'
                  href='index.html#page__section_1'
                  className='lng-menu1 menu__link lng-menu1'
                >
                  Головна
                </a>
              </li>
              <li>
                <a href='about.html' className='menu__link lng-menu2'>
                  Про нас
                </a>
              </li>
              <li
                onMouseOver={() => setIsActiveSubList1(true)}
                onMouseLeave={() => setIsActiveSubList1(false)}
              >
                <a
                  data-goto='.page__section_4'
                  href='index.html#page__section_4'
                  className='menu__link lng-menu3'
                >
                  Наші проєкти &nbsp;
                  <span className='menu__arrow'>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </a>
                <ul className={isActiveSubList1 ? 'menu__sub-list _active' : 'menu__sub-list'}>
                  <li>
                    <a href='mist.html' className='menu__sub-link lng-menu4'>
                      Міст
                    </a>
                  </li>
                  <li>
                    <a href='ucmdobrobat.html' className='menu__sub-link lng-menu5'>
                      Добровольчий батальйон УЦМ
                    </a>
                  </li>
                  <li>
                    <a href='inklus.html' className='menu__sub-link lng-menu5'>
                      Інклюзія від УЦМ
                    </a>
                  </li>
                  <li>
                    <a href='tsinujitta.html' className='menu__sub-link lng-menu5'>
                      Цінуй життя
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  data-goto='.page__section_6'
                  href='activities.html'
                  className='menu__link lng-menu10'
                >
                  Діяльність
                </a>
              </li>
              <li>
                <a className='menu__link lng-menu11' href='contact.html' key='usefulinformation'>
                  Контакти &nbsp;<span className='menu__arrow'></span>
                </a>
              </li>
              <li
                onMouseOver={() => setIsActiveSubList2(true)}
                onMouseLeave={() => setIsActiveSubList2(false)}
              >
                <a
                  data-goto='.page__section_4'
                  href='index.html#page__section_4'
                  className='menu__link lng-menu3'
                >
                  Інше &nbsp;
                  <span className='menu__arrow'>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </a>
                <ul className={isActiveSubList2 ? 'menu__sub-list _active' : 'menu__sub-list'}>
                  <li>
                    <a href='https://t.me/ukrainetse_matir/39' className='menu__sub-link lng-menu4'>
                      Працевлаштування,гуманітарна та психологічна допомога від УЦМ
                    </a>
                  </li>
                  <li>
                    <a href='https://t.me/ukrainetse_matir/49' className='menu__sub-link lng-menu5'>
                      Стати донором крові разом з УЦМ🩸
                    </a>
                  </li>
                  <li>
                    <a href='https://t.me/ukrainetse_matir/48' className='menu__sub-link lng-menu5'>
                      Товари з логотипом УЦМ
                    </a>
                  </li>
                  <li>
                    <a href='https://t.me/ukrainetse_matir/26' className='menu__sub-link lng-menu5'>
                      УЦМ Інформаційна
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <select className='change-lang'>
                  <option value='ua'>&#127482;&#127462;</option>
                  <option value='en'>&#127482;&#127480;</option>
                </select>
              </li>
              <IconsMenu />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

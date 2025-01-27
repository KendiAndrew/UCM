import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logo from "./logo";
import IconsMenu from "./icons-menu";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [isActiveSubList1, setIsActiveSubList1] = useState<boolean>(false);
  const [isActiveSubList2, setIsActiveSubList2] = useState<boolean>(false);
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(true);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Logo />
          <div className="header__menu menu">
            <div
              className={
                isBurgerActive
                  ? "menu__burger-menu"
                  : "menu__burger-menu active"
              }
              onClick={() => setIsBurgerActive(!isBurgerActive)}
            >
              <span></span>
            </div>
            <nav
              onClick={() => setIsBurgerActive(true)}
              className={isBurgerActive ? "menu__body" : "menu__body active"}
            >
              <ul className="menu__list">
                <li>
                  <HashLink
                    smooth
                    to="/#section_1"
                    className="lng-menu1 menu__link lng-menu1"
                  >
                    Головна
                  </HashLink>
                </li>
                <li>
                  <Link to="about" className="menu__link lng-menu2">
                    Про нас
                  </Link>
                </li>
                <li
                  onMouseOver={() => setIsActiveSubList1(true)}
                  onMouseLeave={() => setIsActiveSubList1(false)}
                  className="menu__with__sublist"
                >
                  <HashLink
                    smooth
                    to="/#section_5"
                    className="menu__link lng-menu3"
                  >
                    Наші проєкти &nbsp;
                  </HashLink>
                  <span
                    className="menu__arrow"
                    onClick={(e) => {
                      e.stopPropagation();
                      () => setIsActiveSubList1(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                  <ul
                    className={
                      isActiveSubList1
                        ? "menu__sub-list _active"
                        : "menu__sub-list"
                    }
                  >
                    <li>
                      <Link to="mist" className="menu__sub-link lng-menu4">
                        Міст
                      </Link>
                    </li>
                    <li>
                      <Link to="dobrobat" className="menu__sub-link lng-menu5">
                        Добровольчий батальйон УЦМ
                      </Link>
                    </li>
                    <li>
                      <Link to="inkluziya" className="menu__sub-link lng-menu5">
                        Інклюзія від УЦМ
                      </Link>
                    </li>
                    <li>
                      <Link to="tsinuy" className="menu__sub-link lng-menu5">
                        Цінуй життя
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="activities" className="menu__link lng-menu10">
                    Діяльність
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu__link lng-menu11"
                    to="contact"
                    key="usefulinformation"
                  >
                    Контакти &nbsp;<span className="menu__arrow"></span>
                  </Link>
                </li>
                <li
                  onMouseOver={() => setIsActiveSubList2(true)}
                  onMouseLeave={() => setIsActiveSubList2(false)}
                >
                  <p className="menu__link lng-menu3">Інше &nbsp;</p>
                  <span
                    className="menu__arrow"
                    onClick={(e) => {
                      e.stopPropagation();
                      () => setIsActiveSubList1(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                  <ul
                    className={
                      isActiveSubList2
                        ? "menu__sub-list _active"
                        : "menu__sub-list"
                    }
                  >
                    <li>
                      <a
                        href="https://t.me/ukrainetse_matir/39"
                        className="menu__sub-link lng-menu4"
                      >
                        Працевлаштування, гуманітарна та психологічна допомога
                        від УЦМ
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/ukrainetse_matir/49"
                        className="menu__sub-link lng-menu5"
                      >
                        Стати донором крові разом з УЦМ🩸
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/ukrainetse_matir/48"
                        className="menu__sub-link lng-menu5"
                      >
                        Товари з логотипом УЦМ
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/ukrainetse_matir/26"
                        className="menu__sub-link lng-menu5"
                      >
                        УЦМ Інформаційна
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <select className="change-lang">
                    <option value="ua">&#127482;&#127462;</option>
                    <option value="en">&#127482;&#127480;</option>
                  </select>
                </li>
                <IconsMenu />
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

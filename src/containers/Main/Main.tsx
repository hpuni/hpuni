import { useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import mock from "../../assets/mock_video.png";
import texture from "../../assets/bg-texture.png";
import extreme from "../../assets/extreme.png";
import lang from "../../assets/lang.svg";
import IconButton from "../../components/ButtonWithIcon/Button";
import fb from "../../assets/rounded-fb.svg";
import twitter from "../../assets/twitter.svg";
import Button from "../../components/Button/Button";
import burger from "../../assets/burger.svg";
import cross from "../../assets/cross.svg";
import s from "./Main.module.css";

const Main = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("main");
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenLang, setOpenLang] = useState(false);
  const [chosenLang, setLang] = useState("ru");

  const handleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenLangSwitcher = () => {
    setOpenLang(!isOpenLang);
  };

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.links}>
          <img src={extreme} alt="extreme" className={s.extreme} />
          <a
            className={cn(active === "main" && s.linkActive, s.link)}
            href="#"
            onClick={() => {
              setActive("main");
            }}
          >
            {t("main")}
          </a>
          <a
            className={cn(active === "check" && s.linkActive, s.link)}
            href="#check"
            onClick={() => {
              setActive("check");
            }}
          >
            Проверка
          </a>
          <a
            className={cn(active === "repression" && s.linkActive, s.link)}
            href="#repressions"
            onClick={() => {
              setActive("repression");
            }}
          >
            Репрессии
          </a>
          <a
            className={cn(active === "petition" && s.linkActive, s.link)}
            href="#petition"
            onClick={() => {
              setActive("petition");
            }}
          >
            Петиция
          </a>
        </div>
        <div className={s.stat}>
          <div className={s.statBlock}>
            <p className={s.number}>28</p>в тюрьмах
          </div>
          <div className={s.statBlock}>
            <p className={s.number}>274</p>уволено и<br /> отчислено
          </div>
          <div className={s.statBlock}>
            <p className={s.number}>459</p>подписали
            <br /> петицию
          </div>
          <button className={s.lang} onClick={handleOpenLangSwitcher}>
            {chosenLang.slice(0, 2)} <img src={lang} alt="lang" />
          </button>
          {isOpenLang && (
            <div
              className={s.langBlock}
              onClick={() => {
                changeLanguage(chosenLang === "ru" ? "en" : "ru");
              }}
            >
              {chosenLang === "ru" ? "en" : "ru"}
            </div>
          )}
          <img
            src={burger}
            alt="burger"
            className={s.burger}
            onClick={handleMenu}
          />
        </div>
      </div>
      <div className={s.inner}>
        <div className={s.mobInfo}>
          <div className={s.verticalLine} />
          <div className={s.statBlockInner}>
            <div className={s.statBlockMob}>
              <p className={s.number}>28</p>в тюрьмах
            </div>
            <div className={s.statBlockMob}>
              <p className={s.number}>274</p>уволено и отчислено
            </div>
            <div className={s.statBlockMob}>
              <p className={s.number}>459</p>подписали петицию
            </div>
          </div>
        </div>
        <div className={s.titleMob}>EXTREME STUDENT EXCHANGE</div>
        <div className={s.top}>
          <div className={s.video}>
            <img src={mock} className={s.video} />
            <p className={s.title}>
              EXTREME STUDENT <br /> EXCHANGE
            </p>
          </div>
          <p className={s.edition}>
            2021 <p className={s.belarus}>Belarus Edition</p>
          </p>
        </div>
        <p className={s.cooperate}>
          Ваш университет <br /> сотрудничает с беларускими?
        </p>
        <p className={s.text}>
          Требуй организовать экстримальный студенческий обмен в Беларусь.
          <br /> Или подпиши петицию...
        </p>
        <div className={s.buttons}>
          <div className={s.buttonSubs}>
            <Button text="Подписать петицию" />
          </div>
          <div className={s.iconButtons}>
            <IconButton
              text="рассказать"
              icon={fb}
              isSmall
              href="https://www.facebook.com/sharer/sharer.php?u=example.org"
            />
            <IconButton text="рассказать" icon={twitter} isSmall href="http://twitter.com/share"/>
          </div>
        </div>
      </div>
      <img src={texture} alt="texture" className={s.texture} />
      {isOpenMenu && (
        <div className={s.menu}>
          <div className={s.menuTop}>
            <img src={extreme} alt="extreme" className={s.extremeMenu} />
            <img
              src={cross}
              alt="cross"
              className={s.cross}
              onClick={handleMenu}
            />
          </div>
          <div className={s.linksMob}>
            <a
              className={cn(active === "main" && s.linkActiveMob, s.linkMob)}
              href="#"
              onClick={() => {
                setActive("main");
                handleCloseMenu();
              }}
            >
              Главная
            </a>
            <a
              className={cn(active === "check" && s.linkActiveMob, s.linkMob)}
              href="#check"
              onClick={() => {
                setActive("check");
                handleCloseMenu();
              }}
            >
              Проверка
            </a>
            <a
              className={cn(
                active === "repression" && s.linkActiveMob,
                s.linkMob
              )}
              href="#repressions"
              onClick={() => {
                setActive("repression");
                handleCloseMenu();
              }}
            >
              Репрессии
            </a>
            <a
              className={cn(
                active === "petition" && s.linkActiveMob,
                s.linkMob
              )}
              href="#petition"
              onClick={() => {
                setActive("petition");
                handleCloseMenu();
              }}
            >
              Петиция
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;

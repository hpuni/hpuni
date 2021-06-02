import { useState, useEffect } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
//@ts-ignore
import Tabletop from "tabletop";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import ReactPlayer from "react-player";

import texture from "../../assets/bg-texture.png";
import extreme from "../../assets/extreme.png";
import lang from "../../assets/lang.svg";
import IconButton from "../../components/ButtonWithIcon/Button";
import fb from "../../assets/rounded-fb.svg";
import twitter from "../../assets/twitter.svg";
import burger from "../../assets/burger.svg";
import cross from "../../assets/cross.svg";
import s from "./Main.module.css";

const Main = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("main");
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenLang, setOpenLang] = useState(false);
  const [chosenLang, setLang] = useState("ru");
  const [petitionNumber, setPetitionNumber] = useState([]);
  const [jailNumber, setJailNumber] = useState([]);
  const [firedNumber, setFiredNumber] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/15i1851seq4CTqEaWLNYscJhTmKePZbiWip8bi4EEQtA/edit?usp=sharing",
      simpleSheet: true,
    }).then((data: any) => {
      const newData: any = Object.values(data[0]);
      setPetitionNumber(newData[2]);
      setJailNumber(newData[0]);
      setFiredNumber(newData[1]);
    });
  }, []);

  useEffect(() => {
    if (i18n.language) {
      setLang(i18n.language);
    }
  }, [i18n.language]);

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
    setOpenLang(false);
  };

  function createTitle() {
    return { __html: t("cooperate") };
  }

  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.links}>
          <img src={extreme} alt="extreme" className={s.extreme} />
          <a
            className={cn(active === "main" && s.linkActive, s.link)}
            href="/"
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
            {t("check")}
          </a>
          <a
            className={cn(active === "repression" && s.linkActive, s.link)}
            href="#repressions"
            onClick={() => {
              setActive("repression");
            }}
          >
            {t("repressions")}
          </a>
          <a
            className={cn(active === "petition" && s.linkActive, s.link)}
            href="#petition"
            onClick={() => {
              setActive("petition");
            }}
          >
            {t("petition")}
          </a>
        </div>
        <div className={s.stat}>
          <div className={s.statBlock}>
            <p className={s.number}>{jailNumber}</p>
            {t("jail")}
          </div>
          <div className={s.statBlock}>
            <p className={s.number}>{firedNumber}</p>
            {t("expelled")}
          </div>
          <div className={s.statBlock}>
            <p className={s.number}>{petitionNumber}</p>
            {t("signed")}
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>

          <button className={s.lang} onClick={handleOpenLangSwitcher}>
            {chosenLang.slice(0, 2)} <img src={lang} alt="lang" />
          </button>
          {isOpenLang && (
            <button
            className={s.langBlock}
            onClick={() => {
              changeLanguage(chosenLang === "ru" ? "en" : "ru");
            }}
            >
              {chosenLang === "ru" ? "en" : "ru"}
            </button>
          )}
          </div>
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
              <p className={s.number}>28</p>
              {t("jail")}
            </div>
            <div className={s.statBlockMob}>
              <p className={s.number}>274</p>
              {t("expelled")}
            </div>
            <div className={s.statBlockMob}>
              <p className={s.number}>{petitionNumber}</p>
              {t("signed")}
            </div>
          </div>
        </div>
        <div className={s.titleMob}>EXTREME STUDENT EXCHANGE BELARUS</div>
        <div className={s.top}>
          <div className={s.videoBlock}>
            <p className={s.title}>
              EXTREME STUDENT <br /> EXCHANGE BELARUS
            </p>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=cKMccw5eoII&ab_channel=%D0%A7%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5%D0%9B%D1%8E%D0%B4%D0%B8"
              className={s.video}
            />
          </div>
          <p className={s.edition}>
            2021{" "}
            <p className={s.belarus}>
              Belarus
              <br /> Edition
            </p>
          </p>
        </div>
        <p className={s.cooperate} dangerouslySetInnerHTML={createTitle()} />
        <p className={s.text}>
          {t("invite")}
          <br />
          {t("signPetition")}
        </p>
        <div className={s.buttons}>
          <a
            href={
              chosenLang === "ru"
                ? "http://chng.it/6zdcNSPXDx"
                : "http://chng.it/Ys9hLmRZvz"
            }
            target="_blank"
            rel="noopener noreferrer"
            className={s.button}
          >
            {t("sign")}
          </a>
          <div className={s.iconButtons}>
            <FacebookShareButton url={"https://extremeexchange.me/"}>
              <IconButton
                text={t("tell")}
                icon={fb}
                isSmall
                href="https://www.facebook.com/sharer/sharer.php?u=example.org"
              />
            </FacebookShareButton>
            <TwitterShareButton url={"https://extremeexchange.me/"}>
              <IconButton
                text={t("tell")}
                icon={twitter}
                isSmall
                href="http://twitter.com/share"
              />
            </TwitterShareButton>
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
              href="/"
              onClick={() => {
                setActive("main");
                handleCloseMenu();
              }}
            >
              {t("main")}
            </a>
            <a
              className={cn(active === "check" && s.linkActiveMob, s.linkMob)}
              href="#check"
              onClick={() => {
                setActive("check");
                handleCloseMenu();
              }}
            >
              {t("check")}
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
              {t("repressions")}
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
              {t("petition")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;

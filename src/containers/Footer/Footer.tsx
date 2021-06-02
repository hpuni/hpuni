import React from "react";
import logo from "../../assets/logo.svg";
import hpeng from "../../assets/hpeng.svg"
import Tg from "../../assets/Telegram";
import Inst from "../../assets/Inst";
import Fb from "../../assets/Fb";
import Vk from "../../assets/Vk";
import Yt from "../../assets/Yt";
import Ok from "../../assets/Ok";
import Viber from "../../assets/Viber";
import { useTranslation } from "react-i18next";

import s from "./Footer.module.css";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const [isEntered, setEntered] = React.useState("");
  const handleSetEntered = (value: string) => {
    setEntered(value);
  };
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.line}>
          <img src={i18n.language === "en" ? hpeng : logo} alt="logo" className={s.logo} />
          <div className={s.icons}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/honestpeople_by"
            >
              <Tg active={isEntered} handleSetEntered={handleSetEntered} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/honestpeople.by/"
            >
              <Inst active={isEntered} handleSetEntered={handleSetEntered} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/honestpeople.by"
            >
              <Fb active={isEntered} handleSetEntered={handleSetEntered} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vk.com/honestpeople_by"
            >
              <Vk active={isEntered} handleSetEntered={handleSetEntered} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UC9jDUUEy2kdeFIo_AzbP4uQ"
            >
              <Yt active={isEntered} handleSetEntered={handleSetEntered} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ok.ru/honestpeople"
            >
              <Ok active={isEntered} handleSetEntered={handleSetEntered} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://invite.viber.com/?g2=AQAMihtU9CpYkUugb4s%2BH2DQraCk4Q%2BUst1wXPON1wIHaKnXQsrj9cvYuZUzbUET&lang=ru"
            >
              <Viber active={isEntered} handleSetEntered={handleSetEntered} />
            </a>
          </div>
        </div>
      </div>
      <div className={s.dark}>
        <div className={s.text}>
          <p style={{ display: "flex" }}>
            {t("build")} {"   "} |
          </p>
          <a
            href="https://honest-people.by"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://honest-people.by
          </a>
        </div>
      </div>
      {/* <div className={s.bottom} /> */}
    </div>
  );
};

export default Footer;

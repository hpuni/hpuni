import React from "react";
import logo from "../../assets/logo.svg";
import Tg from "../../assets/Telegram";
import Inst from "../../assets/Inst";
import Fb from "../../assets/Fb";
import Vk from "../../assets/Vk";
import Yt from "../../assets/Yt";
import Ok from "../../assets/Ok";
import Viber from "../../assets/Viber";

import s from "./Footer.module.css";

const Footer = () => {
  const [isEntered, setEntered] = React.useState("");
  const handleSetEntered = (value: string) => {
    setEntered(value);
  };
  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.line}>
          <img src={logo} alt="logo" className={s.logo} />
          <div className={s.icons}>
            <Tg active={isEntered} handleSetEntered={handleSetEntered} />
            <Inst active={isEntered} handleSetEntered={handleSetEntered} />
            <Fb active={isEntered} handleSetEntered={handleSetEntered} />
            <Vk active={isEntered} handleSetEntered={handleSetEntered} />
            <Yt active={isEntered} handleSetEntered={handleSetEntered} />
            <Ok active={isEntered} handleSetEntered={handleSetEntered} />
            <Viber active={isEntered} handleSetEntered={handleSetEntered} />
          </div>
        </div>
      </div>
      <div className={s.dark}>
        <div className={s.text}>
          <p style={{display: "flex"}}>

          Строим гражданское общество вместе <p> | </p>
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
      <div className={s.bottom} />
    </div>
  );
};

export default Footer;

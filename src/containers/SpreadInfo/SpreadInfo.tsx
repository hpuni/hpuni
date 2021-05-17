import React from "react";

import IconButton from "../../components/ButtonWithIcon/Button";
import fb from "../../assets/rounded-fb.svg";
import twitter from "../../assets/twitter.svg";

import s from "./SpreadInfo.module.css";

const SpreadInfo = () => {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.info}>
          <div className={s.block}>
            <p className={s.title}>
              ваш университет <span style={{ color: "#D00A00" }}>есть</span> в
              списке,
            </p>
            <p className={s.text}>
              предложите ему организовать экстремальный студенческий обмен:
              расскажите про программу в социальных сетях и отметьте свой
              университет в публикации.
            </p>
          </div>
          <div className={s.block}>
            <p className={s.title}>
              вашего университета <span style={{ color: "#6DF547" }}>нет</span>{" "}
              в списке,{" "}
            </p>
            <p className={s.text}>
              помогите распространить программу в социальных сетях, чтобы люди
              узнали о масштабе репрессий в отношении беларуских студентов.
            </p>
          </div>
        </div>
        <div className={s.bottom}>
          <IconButton
            text="рассказать"
            icon={fb}
            isSmall
            href="https://www.facebook.com/sharer/sharer.php?u=example.org"
          />
          <IconButton
            text="рассказать"
            icon={twitter}
            isSmall
            href="http://twitter.com/share"
          />
        </div>
      </div>
    </div>
  );
};

export default SpreadInfo;

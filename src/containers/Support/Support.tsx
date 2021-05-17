import React from "react";

import Button from "../../components/Button/Button";

import s from "./Support.module.css";

const Support = () => {
  return (
    <div className={s.container} id="petition">
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.line} />
          <p className={s.petition}>петиция</p>
        </div>
        <p className={s.title}>Поддержите студентов Беларуси</p>
        <p className={s.text}>
          Подпишите петицию в университеты США и ЕС с требованием публично
          осудить давление <br /> на студентов и преподавателей и заморозить финансовую
          помощь администрации<br /> беларуских вузов.
        </p>
        <div className={s.bottom}>
          <Button text="Подписать петицию" />
          <div className={s.number}>
            ИКС
            <p className={s.signed}>
              человек подписали <br /> петицию
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

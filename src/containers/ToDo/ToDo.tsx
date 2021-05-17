import React from "react";

import Button from "../../components/Button/Button";
import s from "./ToDo.module.css";

const ToDo = () => {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <p className={s.title}>Что ещё можно сделать?</p>
        <p className={s.text}>
          Если ты студент или преподаватель из Беларусии выступаешь против
          репрессий — найди чат-бот
          <a href="tg://resolve?domain=univer_by_bot" className={s.link}>УНИВЕР</a>{" "}
          (@univer_by_bot) в телеграм и присоединяйся к движению.
        </p>
        <Button text="присоедениться" />
      </div>
    </div>
  );
};

export default ToDo;

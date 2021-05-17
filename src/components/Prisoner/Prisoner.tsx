import React from "react";

import s from "./Prisoner.module.css";

type Props = {
  img: any;
  time: string;
  name: string;
  university: string;
  text: string;
};

const Prisoner: React.FC<Props> = ({
  img,
  time,
  name,
  university,
  text,
}) => {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.image} style={{ backgroundImage: `url(${img})` }} />
        <button className={s.sentence}>{time} </button>
        <p className={s.name}>{name} </p>
        <p className={s.university}>
          {university}
        </p>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  );
};

export default Prisoner;

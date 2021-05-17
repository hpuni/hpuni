import React from "react";

import s from "./Statistics.module.css";
import Button from "../../components/Button/Button";
import IconButton from "../../components/ButtonWithIcon/Button";
import fb from "../../assets/rounded-fb.svg";
import twitter from "../../assets/twitter.svg";

type Props = {
  political: number;
  expelled: number;
  fired: number;
  repressed: number;
};

const Statistics: React.FC<Props> = ({
  political,
  expelled,
  fired,
  repressed,
}) => {
  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.line}>
            <p className={s.number}>{political}</p>
            <p className={s.text}>политические заключённые</p>
          </div>
          <div className={s.line}>
            <p className={s.number}>{expelled}</p>
            <p className={s.text}>
              студентов отчислены из-за гражданской позиции
            </p>
          </div>
          <div className={s.line}>
            <p className={s.number}>{fired}</p>
            <p className={s.text}>
              преподавателей уволены за поддержку студентов
            </p>
          </div>
          <div className={s.line}>
            <p className={s.number}>{repressed}</p>
            <p className={s.text}>
              студентов пострадали за свою гражданскую позицию
            </p>
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.bottomBlock}>
            <Button text="Подписать петицию" />
          </div>
          <div className={s.iconButtons}>
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
    </div>
  );
};

export default Statistics;

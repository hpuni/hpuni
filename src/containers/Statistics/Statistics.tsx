import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.line}>
            <p className={s.number}>{political}</p>
            <p className={s.text}>{t("political")}</p>
          </div>
          <div className={s.line}>
            <p className={s.number}>{expelled}</p>
            <p className={s.text}>
              {t("studExpelled")}
            </p>
          </div>
          <div className={s.line}>
            <p className={s.number}>{fired}</p>
            <p className={s.text}>
              {t('teachers')}
            </p>
          </div>
          <div className={s.line}>
            <p className={s.number}>{repressed}</p>
            <p className={s.text}>
              {t('applied')}
            </p>
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.bottomBlock}>
            <Button text={t("sign")} />
          </div>
          <div className={s.iconButtons}>
            <IconButton
              text={t("tell")}
              icon={fb}
              isSmall
              href="https://www.facebook.com/sharer/sharer.php?u=example.org"
            />
            <IconButton
              text={t("tell")}
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

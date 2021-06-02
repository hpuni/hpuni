import React from "react";
import { useTranslation } from "react-i18next";
import { FacebookShareButton, TwitterShareButton } from "react-share";

import s from "./Statistics.module.css";
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
  const { t, i18n } = useTranslation();

  return (
    <div className={s.container} id="stats">
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.line}>
            <p className={s.number}>{political}</p>
            <p className={s.text}>{t("political")}</p>
          </div>
          <div className={s.line}>
            <p className={s.number}>{expelled}</p>
            <p className={s.text}>{t("studExpelled")}</p>
          </div>
          <div className={s.line}>
            <p className={s.number}>{fired}</p>
            <p className={s.text}>{t("teachers")}</p>
          </div>
          <div className={s.line}>
            <p className={s.number}>{repressed}</p>
            <p className={s.text}>{t("applied")}</p>
          </div>
        </div>
        <div className={s.bottom}>
          <a
            href={
              i18n.language === "ru"
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
    </div>
  );
};

export default Statistics;

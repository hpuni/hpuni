import React from "react";
import { useTranslation } from "react-i18next";
import { FacebookShareButton, TwitterShareButton } from "react-share";

import IconButton from "../../components/ButtonWithIcon/Button";
import fb from "../../assets/rounded-fb.svg";
import twitter from "../../assets/twitter.svg";

import s from "./SpreadInfo.module.css";

const SpreadInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.info}>
          <div className={s.block}>
            <p className={s.title}>
              {t("ifYour")} <span style={{ color: "#D00A00" }}>{t("is")}</span>{" "}
              {t("onTheList")}
            </p>
            <p className={s.text}>{t("suggest")}</p>
          </div>
          <div className={s.block}>
            <p className={s.title}>
              {t("yourUni")}{" "}
              <span style={{ color: "#6DF547" }}>{t("isNot")}</span>{" "}
              {t("onTheList")}{" "}
            </p>
            <p className={s.text}>{t("help")}</p>
          </div>
        </div>
        <div className={s.bottom}>
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
  );
};

export default SpreadInfo;

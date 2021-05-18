import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/Button";

import s from "./Support.module.css";

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container} id="petition">
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.line} />
          <p className={s.petition}>{t("petition")}</p>
        </div>
        <p className={s.title}>{t("support")}</p>
        <p className={s.text}>{t("signPet")}</p>
        <div className={s.bottom}>
          <Button text={t("sign")} />
          <div className={s.number}>
            ИКС
            <p className={s.signed}>{t("alreadySigned")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

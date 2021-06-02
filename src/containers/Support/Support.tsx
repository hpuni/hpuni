import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//@ts-ignore
import Tabletop from "tabletop";

import s from "./Support.module.css";

const Support = () => {
  const { t, i18n } = useTranslation();
  const [petitionNumber, setPetitionNumber] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/15i1851seq4CTqEaWLNYscJhTmKePZbiWip8bi4EEQtA/edit?usp=sharing",
      simpleSheet: true,
    }).then((data: any) => {
      const newData: any = Object.values(data[0]);
      setPetitionNumber(newData[2]);
    });
  }, []);

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
          <div className={s.number}>
            {petitionNumber}
            <p className={s.signed}>{t("alreadySigned")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

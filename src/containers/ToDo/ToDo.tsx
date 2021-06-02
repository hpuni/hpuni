import { useTranslation } from "react-i18next";

import s from "./ToDo.module.css";

const ToDo = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.inner}>
        <p className={s.title}>{t("else")}</p>
        <p className={s.text}>
          {t("bot")}
          <a href="tg://resolve?domain=univer_by_bot" className={s.link}>
            {t("univer")}
          </a>{" "}
          (@univer_by_bot) {t("join")}
        </p>
        <a href="tg://resolve?domain=univer_by_bot" className={s.button}>
          {t("joinButton")}
        </a>
      </div>
    </div>
  );
};

export default ToDo;

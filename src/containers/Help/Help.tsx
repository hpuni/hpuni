import { useTranslation } from "react-i18next";
import texture from "../../assets/bg-texture.png";
import Button from "../../components/ButtonWithIcon/Button";
import paypal from "../../assets/paypal.svg";
import fb from "../../assets/rounded-fb.svg";

import s from "./Help.module.css";

const Help = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <img src={texture} alt="texture" className={s.textureMob} />

      <div className={s.inner}>
        <div className={s.left}>
          <p className={s.title}>{t("helpPeople")}</p>
          <p className={s.text}>{t("organize")}</p>
          <div className={s.buttons}>
            <a
              href="https://www.facebook.com/donate/951222055622045/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                icon={fb}
                text="FB donations"
                href="https://www.facebook.com/donate/951222055622045/"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.paypal.com/pools/c/8rK0U52xF7"
              style={{ textDecoration: "none" }}
            >
              <Button
                icon={paypal}
                text="Paypal donations"
                href="https://www.paypal.com/pools/c/8rK0U52xF7"
              />
            </a>
          </div>
        </div>
        <img src={texture} alt="texture" className={s.texture} />
      </div>
    </div>
  );
};

export default Help;

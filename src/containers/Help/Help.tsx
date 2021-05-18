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
          <p className={s.title}>
            {t("helpPeople")}
          </p>
          <p className={s.text}>
           {t("organize")}
          </p>
          <div className={s.buttons}>
            <Button
              icon={fb}
              text="FB donations"
              href="https://www.facebook.com/sharer/sharer.php?u=example.org"
            />
            <Button
              icon={paypal}
              text="Paypal donations"
              href="http://twitter.com/share"
            />
          </div>
        </div>
        <img src={texture} alt="texture" className={s.texture} />
      </div>
    </div>
  );
};

export default Help;

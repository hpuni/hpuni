import texture from "../../assets/bg-texture.png";
import Button from "../../components/ButtonWithIcon/Button";
import paypal from "../../assets/paypal.svg";
import fb from "../../assets/rounded-fb.svg";

import s from "./Help.module.css";

const Help = () => {
  return (
    <div className={s.container}>
      <img src={texture} alt="texture" className={s.textureMob} />

      <div className={s.inner}>
        <div className={s.left}>
          <p className={s.title}>
            Помогите сообществу <br />
            Честные люди
          </p>
          <p className={s.text}>
            Активисты организуют помощь пострадавшим студентам и преподавателям.
            Организация существует за счёт пожертвований.
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

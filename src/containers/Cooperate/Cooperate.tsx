import Slider from "react-slick";
import { useTranslation } from "react-i18next";

import s from "./Cooperate.module.css";
import omon from "../../assets/omon.png";
import bchb from "../../assets/bchb.jpeg";
import flower from "../../assets/flower.jpeg";
import photo2 from "../../assets/photo2.jpeg";
import women from "../../assets/women.jpeg";
import students1 from '../../assets/students1.jpeg'
import students2 from "../../assets/students2.jpeg";
import "./carousel.css";

const Cooperate = () => {
   const { t } = useTranslation();
var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={s.container}>
        <div className={s.inner}>
          <Slider {...settings}
          >
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${bchb})` }}
              />
              <p className={s.name}>
               {t("photo5")} <br /> {t("photo")} — {t("belpan")}
              </p>
            </div>
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${omon})` }}
              />
              <p className={s.name}>
               {t("photo2")} <br /> {t("photo")} — {t("tass")}.
              </p>
            </div>
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${photo2})` }}
              />
              <p className={s.name}>
                {t("photo1")}<br /> {t("photo")} — gettyimages
              </p>
            </div>
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${women})` }}
              />
              <p className={s.name}>
               {t("photo3")} <br /> {t("photo")} — EPA
              </p>
            </div>
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${flower})` }}
              />
              <p className={s.name}>
               {t("photo4")}  <br />{t("photo")} — {t("regnum")}.
              </p>
            </div>
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${students1})` }}
              />
              <p className={s.name}>
                {t("photo6")}
              </p>
            </div>
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${students2})` }}
              />
              <p className={s.name}>
                {t("photo7")}
              </p>
            </div>
          </Slider>
        </div>
        {/* </div> */}
      </div>
    );
  
}

export default Cooperate;

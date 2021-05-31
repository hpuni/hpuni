import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div className={s.container}>
        <div className={s.inner}>
          <Carousel
            responsive={responsive}
            showDots={false}
            autoPlay={true}
            transitionDuration={5000}
            infinite
            arrows={false}
            containerClass="carousel-container-with-scrollbar"
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
          </Carousel>
        </div>
        {/* </div> */}
      </div>
    );
  
}

export default Cooperate;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import s from "./Cooperate.module.css";
import omon from "../../assets/omon.png";
import bchb from "../../assets/bchb.jpeg";
import flower from "../../assets/flower.jpeg";
import photo2 from "../../assets/photo2.jpeg";
import women from "../../assets/women.jpeg";
import "./carousel.css";
import React from "react";

class Cooperate extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const CustomSlider = ({ carouselState }: any) => {
      let value = 0;
      let carouselItemWidth = 0;
      //@ts-ignore
      if (this.Carousel) {
        //@ts-ignore

        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            //@ts-ignore

            (this.Carousel.state.totalItems -
              //@ts-ignore

              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;

      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={(e) => {
              //@ts-ignore

              if (this.Carousel.isAnimationAllowed) {
                //@ts-ignore

                this.Carousel.isAnimationAllowed = false;
              }
              //@ts-ignore

              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                //@ts-ignore

                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                //@ts-ignore

                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              //@ts-ignore

              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide,
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };

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
          {/* <div className={s.articles}> */}
          <Carousel
            responsive={responsive}
            showDots={false}
            autoPlay={true}
            customButtonGroup={<CustomSlider />}
            transitionDuration={5000}
            infinite
            arrows={false}
            containerClass="carousel-container-with-scrollbar"
            additionalTransfrom={-this.state.additionalTransfrom}
            beforeChange={(nextSlide) => {
              if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
                this.setState({ additionalTransfrom: 150 });
              }
              if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
                this.setState({ additionalTransfrom: 0 });
              }
            }}
          >
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${bchb})` }}
              />
              <p className={s.name}>
                Сотрудники силовых структур Беларуси во время задержания
                участника студенческой акции протеста в Минске, 1 сентября 2020
                года. Фото - БелPAN
              </p>
            </div>
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${omon})` }}
              />
              <p className={s.name}>
                Многие задержания проходят жестко, протестующих могут повалить
                на землю, удалить или разбить технику. Фото - ТАСС.
              </p>
            </div>
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${photo2})` }}
              />
              <p className={s.name}>
                Сотрудники правоохранительных органов задерживают участника
                студенческого митинга у Белорусского государственного
                лингвистического университета. Фото - gettyimages
              </p>
            </div>
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${women})` }}
              />
              <p className={s.name}>
                Белорусские протестующие выстроились в живую цепь, сопротивляясь
                попыткам силовиков провести задержания. Фото - EPA
              </p>
            </div>
            <div className={s.article}>
              <div
                className={s.imageContainer}
                style={{ backgroundImage: `url(${flower})` }}
              />
              <p className={s.name}>
                Студенты на акции протеста. Надпись на плакате: "Свободы
                политическим заключенным". Фото - ИА REGNUM.
              </p>
            </div>
          </Carousel>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Cooperate;

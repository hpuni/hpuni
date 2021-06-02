import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { useTranslation } from "react-i18next";

import useWindowSize from "../../helpers/windowSize";
import icon from "../../assets/filter-icon.svg";

import s from "./Check.module.css";

type Data = {
  countries: any;
  cities: any;
  partners: any;
  belUnis: any;
};

const Check: React.FC<Data> = ({ countries, cities, partners, belUnis }) => {
  const { t, i18n } = useTranslation();

  const [countriesData, setCountriesData] = useState<any>([]);
  const [citiesData, setCitiesData] = useState<any>([]);
  const [partnersData, setPartnersData] = useState<any>([]);
  const [belUnisData, setBelUnisData] = useState<any>([]);

  const [chosenCountry, setChosenCountry] = useState<any>({});
  const [chosenCity, setChosenCity] = useState<any>({});

  const countriesOptions = countriesData?.map((item: any) => {
    return {
      value: item.id,
      label: i18n.language === "ru" ? item.name_ru : item.name_en,
    };
  });

  useEffect(() => {
    if (countries) {
      setCountriesData(Object.values(countries));
    }
    if (cities) {
      setCitiesData(Object.values(cities));
    }
    if (partners) {
      setPartnersData(Object.values(partners));
    }
    if (belUnis) {
      setBelUnisData(Object.values(belUnis));
    }
  }, [countries, cities, partners, belUnis]);

  const width = useWindowSize();
  const isMobile = width <= 640;

  const customStyles = {
    container: (provided: any, state: any) => ({
      ...provided,
      width: isMobile ? "86.667vw" : "40.556vw",
      background: "#151515",
      color: "#ffffff",
      marginBottom: isMobile ? "4.267vw" : "1.111vw",
      border: "1px solid #A5A5A5;",
    }),
    control: () => ({
      backgroundColor: "#151515",
      color: "#ffffff",
      display: "flex",
      padding: "1.25vw",
      cursor: "pointer",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "#212121",
      border: "1px solid #5B5B5B",
    }),
    option: () => ({
      backgroundColor: "#212121",
      padding: 18,
      borderBottom: "1px solid #313131",
      cursor: "pointer",
      fontFamily: "Normalidad",

      "&:hover": {
        backgroundColor: "#363636",
      },
    }),
    singleValue: () => ({
      color: "#ffffff !important",
    }),
    placeholder: () => ({
      color: "#ffffff !important",
      fontFamily: "Normalidad",
    }),
  };
  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={icon} alt="icon" className={s.icon} />
      </components.DropdownIndicator>
    );
  };

  function chooseCountry(value: any) {
    setChosenCountry(value);
    setChosenCity({});
  }
  function chooseCity(value: any) {
    setChosenCity(value);
  }

  const chosenCountryCities =
    chosenCountry &&
    countriesData?.filter((item: any) => chosenCountry.value === item.id)[0]
      ?.city_ids;

  const chosenCityObj =
    chosenCity &&
    citiesData?.filter((item: any) => {
      return chosenCity.value === item.id;
    });

  const partnersList =
    chosenCityObj &&
    partnersData?.filter((item: any) => {
      return chosenCityObj[0]?.partner_ids?.includes(item.id);
    });

  const availableCities = citiesData.filter((item: any) =>
    chosenCountryCities?.includes(item.id)
  );

  const citiesOptions = availableCities?.map((item: any) => {
    return { value: item.id, label: item.name };
  });

  console.warn(chosenCityObj);
  console.warn(partnersData, "dara")

  return (
    <div className={s.container} id="check">
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.line} />
          <p className={s.petition}>{t("uniCheck")}</p>
        </div>
        <p className={s.title}>{t("isCoop")}</p>
        <p className={s.text}>{t("list")}</p>
        <div className={s.choose}>
          <Select
            options={countriesOptions}
            styles={customStyles}
            components={{ DropdownIndicator }}
            onChange={chooseCountry}
            className="Select"
            placeholder={t("country")}
          />
          <Select
            options={citiesOptions}
            styles={customStyles}
            components={{ DropdownIndicator }}
            onChange={chooseCity}
            className="Select"
            placeholder={t("city")}
            value={chosenCity.value ? chosenCity : t("city")}
          />
          <div className={s.blocks}>
            {partnersList.map((item: any) => {
              return (
                <div className={s.block}>
                  <p className={s.name}>{item.name}</p>
                  <div className={s.universities}>
                    {belUnisData
                      ?.filter((i: any) => {
                        return item.belarusian_university_ids?.includes(i.id);
                      })
                      ?.map((a: any) => {
                        return (
                          <a className={s.university} href="#repressions">
                            {a.name_abr_ru}
                          </a>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;

import React, { useState, useEffect } from "react";
import cn from "classnames";

import vyasna from "../../assets/vyasna.png";
import Prisoner from "../../components/Prisoner/Prisoner";
import cross from "../../assets/cross.svg";
import useWindowSize from "../../helpers/windowSize";

import s from "./History.module.css";

type Props = {
  stories: any;
};

const History: React.FC<Props> = ({ stories }) => {
  const [data, setData] = useState<any>([]);
  const [selectedStudent, setSelectedStudent] = useState<string>();
  useEffect(() => {
    if (stories) {
      setData(Object.values(stories));
    }
  }, [stories]);

  const selectedStudentData: any = data?.filter((item: any) => {
    return item.id === selectedStudent;
  });

  const width = useWindowSize();
  const isMobile = width <= 640;

  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.top}>
          <p className={s.title}>Политические истории</p>
          <img src={vyasna} alt="vyasna" className={s.vyasna} />
        </div>
        <p className={s.text}>
          Знакомьтесь с беларускими студентами.{" "}
          <strong>25 из них находятся в тюрьме </strong> <br />
          из-за своих политических взглядов.
        </p>
        <img src={vyasna} alt="vyasna" className={s.vyasnaMob} />

        <div className={s.info}>
          <div className={s.prisoner}>
            <Prisoner
              img={
                selectedStudentData[0]
                  ? selectedStudentData[0].photo_url
                  : data[0]?.photo_url
              }
              time={
                selectedStudentData[0]
                  ? selectedStudentData[0].sanction_ru
                  : data[0]?.sanction_ru
              }
              name={
                selectedStudentData[0]
                  ? selectedStudentData[0].name_ru
                  : data[0]?.name_ru
              }
              university={
                selectedStudentData[0]
                  ? selectedStudentData[0].university_ru
                  : data[0]?.university_ru
              }
              text={
                selectedStudentData[0]
                  ? selectedStudentData[0].story_ru
                  : data[0]?.story_ru
              }
            />
          </div>
          <div className={s.list}>
            {data?.map((item: any) => {
              return (
                <div
                  className={cn(
                    item.id === selectedStudent && s.itemActive,
                    s.item
                  )}
                  style={{ backgroundImage: `url(${item.photo_url})` }}
                  onClick={() => setSelectedStudent(item.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
      {selectedStudent && isMobile && (
        <div className={s.prisonerMob}>
          <img src={cross} alt="cross" className={s.cross} onClick={() => setSelectedStudent(undefined)}/>
          <img
            src={selectedStudentData[0]?.photo_url}
            alt="img"
            className={s.photo}
          />
          <button className={s.sentence}>
            {selectedStudentData[0]?.sanction_ru}{" "}
          </button>
          <p className={s.name}>{selectedStudentData[0]?.name_ru} </p>
          <p className={s.university}>
            {selectedStudentData[0]?.university_ru}
          </p>
          <p className={s.text}>{selectedStudentData[0]?.story_ru}</p>
        </div>
      )}
    </div>
  );
};

export default History;

import React, { useEffect, useState } from "react";
import Statistics from "../Statistics/Statistics";
import cn from "classnames";

import s from "./Repressions.module.css";

type Data = {
  universities: any;
};

const Repressions: React.FC<Data> = ({ universities }) => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("all");
  const [allPoliticalPrisoners, setAllPoliticalPrisoners] = useState(0);
  const [allExpelled, setAllExpelled] = useState(0);
  const [isClicked, setClicked] = useState(false);

  const [allFired, setAllFired] = useState(0);

  const [allRepressed, setAllRepressed] = useState(0);

  useEffect(() => {
    if (universities) {
      setData(Object.values(universities));
    }
  }, [universities]);

  useEffect(() => {
    if (data) {
      setAllPoliticalPrisoners(
        data
          .map((item: any) => item.political_prisoners_num)
          .reduce((prev, next) => prev + next, 0)
      );
      setAllExpelled(
        data
          .map((item: any) => item.expelled_students_num)
          .reduce((prev, next) => prev + next, 0)
      );
      setAllFired(
        data
          .map((item: any) => item.fired_professors_num)
          .reduce((prev, next) => prev + next, 0)
      );
      setAllRepressed(
        data
          .map((item: any) => item.repressed_students_num)
          .reduce((prev, next) => prev + next, 0)
      );
    }
  }, [data]);

  const chosenUniversity: any = data?.filter((item: any) => {
    return item.id === active;
  });

  return (
    <>
      <div className={s.container} id="repressions">
        <div className={s.inner}>
          <div className={s.top}>
            <div className={s.line} />
            <p className={s.petition}>Репрессии</p>
          </div>
          <p className={s.title}>ЧТО ЖДЁТ ВАС НА ПРОГРАММЕ?</p>
          <p className={s.text}>
            В Беларуси у университетов нет автономии. Администрация не защищает{" "}
            <br />
            студентов, а выполняет приказы диктатора{" "}
            <button
              className={cn(isClicked && s.lookaActive, s.looka)}
              onClick={() => setClicked(!isClicked)}
            >
              {" "}
              А. Лукашенко
            </button>
            :{" "}
            {isClicked && (
              <div className={s.block}>
                В 2020 году в Беларуси были сфальсифицированы выборы. После
                начавшихся массовых мирных протестов, власти развернули террор
                против граждан. Тысячи людей были посажены в тюрьмы, избиты и
                искалечены. С того времени в Беларуси жёстко преследуется любое
                инакомыслие. Людей арестовывают за одежду национальных цветов,
                чтение книг на беларуском языке и пение народных песен.
              </div>
            )}
            ректоры и деканы <br /> отчисляют студентов, увольняют
            преподавателей, вызывают на протестующих <br /> ОМОН, пишут
            заявления в милицию.
          </p>
          <div className={s.bottom}>
            <p className={s.data}> Данные о репрессиях по всей Беларуси</p>
            <div className={s.buttons}>
              <button
                className={cn(active === "all" && s.buttonActive, s.button)}
                onClick={() => setActive("all")}
              >
                ВСЕ
              </button>
              {data.map((item: any) => {
                return (
                  <button
                    className={cn(
                      active === item.id && s.buttonActive,
                      s.button
                    )}
                    key={item?.id}
                    onClick={() => setActive(item.id)}
                  >
                    {item.name_abr_ru}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Statistics
        political={
          chosenUniversity[0]
            ? chosenUniversity[0]?.political_prisoners_num
            : allPoliticalPrisoners
        }
        expelled={
          chosenUniversity[0]
            ? chosenUniversity[0]?.expelled_students_num
            : allExpelled
        }
        fired={
          chosenUniversity[0]
            ? chosenUniversity[0]?.fired_professors_num
            : allFired
        }
        repressed={
          chosenUniversity[0]
            ? chosenUniversity[0]?.repressed_students_num
            : allRepressed
        }
      />
    </>
  );
};

export default Repressions;

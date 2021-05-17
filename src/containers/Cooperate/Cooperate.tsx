import React from 'react'

import s from './Cooperate.module.css'
import omon from '../../assets/omon.png'

const Cooperate = () => {
    return (
      <div className={s.container}>
        <div className={s.inner}>
          <div className={s.articles}>
            <a className={s.article} href="/">
              <img src={omon} alt="omon" className={s.omon}/>
              <p className={s.name}>
                Разгон мирных акций солидарности и захват подростков
                сотрудниками ОМОНА
              </p>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Cooperate
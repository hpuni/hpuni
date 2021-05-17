import React from "react";
import cn from 'classnames'

import s from "./Button.module.css";

type Props = {
  icon: any;
  text: string;
  isSmall?: boolean;
  href: string
};

const Button: React.FC<Props> = ({ icon, text, isSmall, href }) => {
  return (
    <a href={href} target="_blank" className={s.container}>
      <div className={cn(s.white, isSmall && s.whiteSmall)}>
        <img src={icon} alt="icon" className={s.icon}/>
      </div>
      <div className={cn(s.text, isSmall && s.textSmall)}>{text}</div>
    </a>
  );
};

export default Button;

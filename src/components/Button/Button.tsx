import React from "react";

import s from "./Button.module.css";

type Props = {
  text: string;
};

const Button: React.FC<Props> = ({ text }) => {
  return <button className={s.button}>{text}</button>;
};

export default Button;

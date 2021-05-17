type Props = {
  active: string;
  handleSetEntered: (value: string) => void
};

const TelegramIcon = ({ active, handleSetEntered }: Props) => {
  return (
    <svg
      width={23}
      height={20}
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => handleSetEntered("tg")}
      onMouseLeave={() => handleSetEntered("")}
      style={{ cursor: "pointer" }}
    >
      <path
        d="M21.326.076L.482 8.193C-.19 8.46-.15 9.428.545 9.632l5.297 1.563 1.976 6.273a.906.906 0 001.516.36l2.742-2.798 5.375 3.946a1.117 1.117 0 001.758-.672l3.554-17.016c.18-.828-.64-1.523-1.437-1.21zm-2.61 3.774l-9.68 8.562a.54.54 0 00-.171.328l-.375 3.313c-.016.11-.164.125-.195.015l-1.532-4.945a.516.516 0 01.227-.594l11.43-7.093c.257-.149.53.21.296.414z"
        fill={active === "tg" ? "#6DF547" : "#E2E2E2"}
      />
    </svg>
  );
};

export default TelegramIcon;

type Props = {
  active: string;
  handleSetEntered: (value: string) => void 
};

const YtIcon = ({ active, handleSetEntered }: Props) => {
  return (
    <svg
      width={25}
      height={19}
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => handleSetEntered("yt")}
      onMouseLeave={() => handleSetEntered("")}
      style={{ cursor: "pointer" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.816 1.343c.72.778.954 2.544.954 2.544s.24 2.072.24 4.145v1.943c0 2.073-.24 4.145-.24 4.145s-.235 1.765-.954 2.541c-.824.92-1.736 1.015-2.252 1.069a7.123 7.123 0 00-.154.017c-3.36.257-8.405.266-8.405.266s-6.243-.06-8.164-.257a5.113 5.113 0 00-.325-.049c-.609-.078-1.563-.2-2.322-1.046-.72-.776-.954-2.542-.954-2.542S0 12.048 0 9.974V8.032c0-2.073.24-4.145.24-4.145s.235-1.766.954-2.544C2.021.421 2.937.33 3.451.276c.054-.005.104-.01.149-.016C6.96 0 11.999 0 11.999 0h.011s5.04 0 8.4.26c.045.006.095.011.149.016.514.053 1.43.145 2.257 1.067zm-6.304 7.663L9.007 13.51V4.503l7.505 4.503z"
        fill={active === "yt" ? "#6DF547" : "#E2E2E2"}
      />
    </svg>
  );
};

export default YtIcon;

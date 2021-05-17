type Props = {
  active: String;
  handleSetEntered: (value: string) => void;
};

const FbIcon = ({ active, handleSetEntered }: Props) => {
  return (
    <svg
      width={12}
      height={22}
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => handleSetEntered("fb")}
      onMouseLeave={() => handleSetEntered("")}
      style={{ cursor: "pointer" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.016 3.653c.671-.024 1.343-.008 2.015-.008h.274V.153c-.36-.04-.735-.086-1.11-.102a30.396 30.396 0 00-2.07-.047C7.07.028 6.078.285 5.211.903c-1 .718-1.547 1.726-1.75 2.914-.086.492-.11 1-.125 1.5-.016.78 0 1.562 0 2.351v.297H0v3.899h3.32v9.796h4.055v-9.789h3.313c.171-1.296.335-2.578.507-3.914h-.742c-.945.008-3.101 0-3.101 0s.007-1.93.03-2.773c.032-1.149.72-1.5 1.634-1.531z"
        fill={active === "fb" ? "#6DF547" : "#E2E2E2"}
      />
    </svg>
  );
};

export default FbIcon;

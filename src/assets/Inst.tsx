type Props = {
  active: string;
  handleSetEntered: (value: string) => void;
};

const InstIcon = ({ active, handleSetEntered }: Props) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => handleSetEntered("inst")}
      onMouseLeave={() => handleSetEntered("")}
      style={{ cursor: "pointer" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.192 5.128a1.32 1.32 0 11-2.64 0 1.32 1.32 0 012.64 0zM11 14.667a3.667 3.667 0 110-7.334 3.667 3.667 0 010 7.334zm0-9.316a5.649 5.649 0 100 11.298A5.649 5.649 0 0011 5.35zm0-3.369c2.937 0 3.285.011 4.445.064 1.072.05 1.655.228 2.042.379.514.2.88.438 1.265.823.385.385.624.751.823 1.265.15.387.33.97.379 2.042.053 1.16.064 1.508.064 4.445 0 2.938-.011 3.285-.064 4.445-.049 1.073-.228 1.655-.379 2.043-.2.513-.438.88-.823 1.265a3.405 3.405 0 01-1.265.823c-.387.15-.97.33-2.042.378-1.16.053-1.508.064-4.445.064-2.937 0-3.285-.01-4.445-.064-1.073-.049-1.655-.228-2.043-.378-.513-.2-.88-.438-1.264-.823a3.408 3.408 0 01-.823-1.265c-.15-.388-.33-.97-.38-2.043-.052-1.16-.063-1.508-.063-4.445 0-2.937.01-3.285.064-4.445.049-1.072.228-1.655.379-2.042.2-.514.438-.88.823-1.265a3.406 3.406 0 011.264-.823c.388-.15.97-.33 2.043-.379 1.16-.053 1.508-.064 4.445-.064zM11 0C8.013 0 7.638.013 6.465.066c-1.171.054-1.97.24-2.67.512a5.39 5.39 0 00-1.949 1.268A5.39 5.39 0 00.577 3.795c-.271.7-.457 1.499-.51 2.67C.012 7.638 0 8.013 0 11s.013 3.362.066 4.535c.054 1.171.24 1.97.512 2.67a5.39 5.39 0 001.268 1.949 5.392 5.392 0 001.949 1.268c.7.272 1.499.458 2.67.512C7.638 21.987 8.013 22 11 22s3.362-.013 4.535-.066c1.171-.054 1.97-.24 2.67-.512a5.391 5.391 0 001.949-1.268 5.391 5.391 0 001.268-1.949c.272-.7.458-1.499.512-2.67.053-1.173.066-1.548.066-4.535s-.013-3.362-.066-4.535c-.054-1.171-.24-1.97-.512-2.67a5.392 5.392 0 00-1.268-1.949A5.392 5.392 0 0018.205.577c-.7-.271-1.499-.457-2.67-.51C14.362.012 13.987 0 11 0z"
        fill={active === "inst" ? "#6DF547" : "#E2E2E2"}
      />
    </svg>
  );
};

export default InstIcon;

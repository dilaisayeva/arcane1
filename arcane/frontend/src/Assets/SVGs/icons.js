export const Arrow = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 10H18.75"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.25L18.75 10L10 18.75"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowChevron = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 11 * size : 11}
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.42856 1.375L9.99999 9.625L18.5714 1.375"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Bag = (size, color) => {
  return (
    <svg
      width={size ? 18 * size : 18}
      height={size ? 20 * size : 20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.6 0.909058L0.900002 4.54542V17.2727C0.900002 17.7549 1.08964 18.2174 1.42721 18.5583C1.76477 18.8993 2.22261 19.0909 2.7 19.0909H15.3C15.7774 19.0909 16.2352 18.8993 16.5728 18.5583C16.9104 18.2174 17.1 17.7549 17.1 17.2727V4.54542L14.4 0.909058H3.6Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.900002 4.54541H17.1"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6 8.18176C12.6 9.14619 12.2207 10.0711 11.5456 10.7531C10.8705 11.435 9.95478 11.8181 9 11.8181C8.04522 11.8181 7.12955 11.435 6.45442 10.7531C5.77929 10.0711 5.4 9.14619 5.4 8.18176"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Calendar = (size, color) => {
  return (
    <svg
      width={size ? 18 * size : 18}
      height={size ? 20 * size : 20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3 2.72729H2.69999C1.70588 2.72729 0.899994 3.54132 0.899994 4.54548V17.2727C0.899994 18.2769 1.70588 19.0909 2.69999 19.0909H15.3C16.2941 19.0909 17.1 18.2769 17.1 17.2727V4.54548C17.1 3.54132 16.2941 2.72729 15.3 2.72729Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6 0.909058V4.54542"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.39999 0.909058V4.54542"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.899994 8.18176H17.1"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Camera = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 17 * size : 17}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1667 14.45C19.1667 14.9008 18.9911 15.3332 18.6785 15.6521C18.3659 15.9709 17.942 16.15 17.5 16.15H2.49999C2.05797 16.15 1.63404 15.9709 1.32148 15.6521C1.00892 15.3332 0.833328 14.9008 0.833328 14.45V5.09998C0.833328 4.64911 1.00892 4.21671 1.32148 3.89789C1.63404 3.57908 2.05797 3.39998 2.49999 3.39998H5.83333L7.49999 0.849976H12.5L14.1667 3.39998H17.5C17.942 3.39998 18.3659 3.57908 18.6785 3.89789C18.9911 4.21671 19.1667 4.64911 19.1667 5.09998V14.45Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.75C11.841 12.75 13.3333 11.2277 13.3333 9.34995C13.3333 7.47218 11.841 5.94995 10 5.94995C8.15906 5.94995 6.66667 7.47218 6.66667 9.34995C6.66667 11.2277 8.15906 12.75 10 12.75Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Card = (size, color) => {
  return (
    <svg
      width={size ? 22 * size : 22}
      height={size ? 16 * size : 16}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.25 0.820557H4.75C3.02411 0.820557 1.625 2.19814 1.625 3.89748V12.1026C1.625 13.8019 3.02411 15.1795 4.75 15.1795H17.25C18.9759 15.1795 20.375 13.8019 20.375 12.1026V3.89748C20.375 2.19814 18.9759 0.820557 17.25 0.820557Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.625 5.94873H20.375"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.79169 11.0769H5.8021"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.95831 11.0769H12.0416"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Cart = (size, color) => {
  return (
    <svg
      width={size ? 21 * size : 21}
      height={size ? 20 * size : 20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.72266 18.7514C8.17909 18.7514 8.5491 18.376 8.5491 17.9128C8.5491 17.4497 8.17909 17.0742 7.72266 17.0742C7.26622 17.0742 6.89621 17.4497 6.89621 17.9128C6.89621 18.376 7.26622 18.7514 7.72266 18.7514Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8136 18.7514C17.27 18.7514 17.6401 18.376 17.6401 17.9128C17.6401 17.4497 17.27 17.0742 16.8136 17.0742C16.3572 17.0742 15.9872 17.4497 15.9872 17.9128C15.9872 18.376 16.3572 18.7514 16.8136 18.7514Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.11113 1.14087H4.41691L6.63179 12.3697C6.70736 12.7558 6.91436 13.1026 7.21654 13.3495C7.51872 13.5963 7.89683 13.7274 8.28468 13.7199H16.3177C16.7056 13.7274 17.0837 13.5963 17.3859 13.3495C17.6881 13.1026 17.8951 12.7558 17.9706 12.3697L19.2929 5.33387H5.24336"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Check = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 14 * size : 14}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8889 1.0769L6.66667 12.9231L1.11111 7.53844"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Clock = (size, color) => {
  return (
    <svg
      width={size ? 22 * size : 22}
      height={size ? 22 * size : 22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 20.375C16.1777 20.375 20.375 16.1777 20.375 11C20.375 5.82233 16.1777 1.625 11 1.625C5.82233 1.625 1.625 5.82233 1.625 11C1.625 16.1777 5.82233 20.375 11 20.375Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 5.79163V11L14.125 14.125"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Close = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5714 1.42859L1.42859 18.5714"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.42859 1.42859L18.5714 18.5714"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Copyright = (size, color) => {
  return (
    <svg
      width={size ? 22 * size : 22}
      height={size ? 22 * size : 22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 20.375C16.1777 20.375 20.375 16.1777 20.375 11C20.375 5.82233 16.1777 1.625 11 1.625C5.82233 1.625 1.625 5.82233 1.625 11C1.625 16.1777 5.82233 20.375 11 20.375Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6042 7.87504C13.078 7.34466 12.429 6.99908 11.7352 6.87976C11.0414 6.76045 10.3322 6.87247 9.69266 7.20239C9.05317 7.5323 8.51055 8.0661 8.12993 8.73972C7.74932 9.41334 7.54686 10.1982 7.54686 11C7.54686 11.8019 7.74932 12.5867 8.12993 13.2604C8.51055 13.934 9.05317 14.4678 9.69266 14.7977C10.3322 15.1276 11.0414 15.2396 11.7352 15.1203C12.429 15.001 13.078 14.6554 13.6042 14.125"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DeleteSVG = (size, color) => {
  return (
    <svg
      width={size ? 18 * size : 18}
      height={size ? 20 * size : 20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.899994 4.54541H2.69999H17.1"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.4 4.54542V2.72724C5.4 2.24503 5.58964 1.78257 5.92721 1.44159C6.26477 1.10062 6.72261 0.909058 7.2 0.909058H10.8C11.2774 0.909058 11.7352 1.10062 12.0728 1.44159C12.4104 1.78257 12.6 2.24503 12.6 2.72724V4.54542M15.3 4.54542V17.2727C15.3 17.7549 15.1104 18.2174 14.7728 18.5583C14.4352 18.8993 13.9774 19.0909 13.5 19.0909H4.5C4.02261 19.0909 3.56477 18.8993 3.2272 18.5583C2.88964 18.2174 2.7 17.7549 2.7 17.2727V4.54542H15.3Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 9.09094V14.5455"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8 9.09094V14.5455"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Disabled = (size, color) => {
  return (
    <svg
      width={size ? 17 * size : 17}
      height={size ? 22 * size : 22}
      viewBox="0 0 17 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.09525 5.79167C9.21297 5.79167 10.1191 4.85893 10.1191 3.70833C10.1191 2.55774 9.21297 1.625 8.09525 1.625C6.97753 1.625 6.07144 2.55774 6.07144 3.70833C6.07144 4.85893 6.97753 5.79167 8.09525 5.79167Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.09525 5.79163V14.125H12.1429L16.1905 19.3333"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.09525 9.95837H13.1548"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.04762 10.4791C3.32259 10.7882 2.67733 11.2667 2.16287 11.8767C1.64841 12.4867 1.27885 13.2116 1.08339 13.9939C0.887939 14.7763 0.871955 15.5948 1.0367 16.3846C1.20145 17.1744 1.54242 17.914 2.03265 18.5448C2.52288 19.1756 3.14893 19.6803 3.86131 20.0192C4.57369 20.358 5.35288 20.5216 6.13726 20.4971C6.92165 20.4725 7.68973 20.2605 8.3808 19.8777C9.07187 19.4949 9.66696 18.9519 10.1191 18.2916"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Discount = (size, color) => {
  return (
    <svg
      width={size ? 22 * size : 22}
      height={size ? 22 * size : 22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.875 14.125L14.125 7.875"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.39583 8.91667C8.68348 8.91667 8.91667 8.68348 8.91667 8.39583C8.91667 8.10818 8.68348 7.875 8.39583 7.875C8.10818 7.875 7.875 8.10818 7.875 8.39583C7.875 8.68348 8.10818 8.91667 8.39583 8.91667Z"
        fill="black"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6042 14.125C13.8919 14.125 14.125 13.8919 14.125 13.6042C14.125 13.3166 13.8919 13.0834 13.6042 13.0834C13.3166 13.0834 13.0834 13.3166 13.0834 13.6042C13.0834 13.8919 13.3166 14.125 13.6042 14.125Z"
        fill="black"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.70836 5.99999C3.70836 5.3922 3.9498 4.80931 4.37957 4.37954C4.80934 3.94977 5.39223 3.70833 6.00002 3.70833H7.04169C7.64679 3.70798 8.2272 3.46833 8.65627 3.04166L9.38544 2.31249C9.5984 2.09833 9.85161 1.92837 10.1305 1.8124C10.4094 1.69642 10.7084 1.63672 11.0104 1.63672C11.3125 1.63672 11.6115 1.69642 11.8904 1.8124C12.1693 1.92837 12.4225 2.09833 12.6354 2.31249L13.3646 3.04166C13.7937 3.46833 14.3741 3.70798 14.9792 3.70833H16.0209C16.6286 3.70833 17.2115 3.94977 17.6413 4.37954C18.0711 4.80931 18.3125 5.3922 18.3125 5.99999V7.04166C18.3129 7.64676 18.5525 8.22717 18.9792 8.65624L19.7084 9.38541C19.9225 9.59837 20.0925 9.85158 20.2085 10.1305C20.3244 10.4093 20.3841 10.7084 20.3841 11.0104C20.3841 11.3124 20.3244 11.6115 20.2085 11.8904C20.0925 12.1692 19.9225 12.4224 19.7084 12.6354L18.9792 13.3646C18.5525 13.7936 18.3129 14.3741 18.3125 14.9792V16.0208C18.3125 16.6286 18.0711 17.2115 17.6413 17.6413C17.2115 18.071 16.6286 18.3125 16.0209 18.3125H14.9792C14.3741 18.3128 13.7937 18.5525 13.3646 18.9792L12.6354 19.7083C12.4225 19.9225 12.1693 20.0924 11.8904 20.2084C11.6115 20.3244 11.3125 20.3841 11.0104 20.3841C10.7084 20.3841 10.4094 20.3244 10.1305 20.2084C9.85161 20.0924 9.5984 19.9225 9.38544 19.7083L8.65627 18.9792C8.2272 18.5525 7.64679 18.3128 7.04169 18.3125H6.00002C5.39223 18.3125 4.80934 18.071 4.37957 17.6413C3.9498 17.2115 3.70836 16.6286 3.70836 16.0208V14.9792C3.70801 14.3741 3.46836 13.7936 3.04169 13.3646L2.31252 12.6354C2.09836 12.4224 1.9284 12.1692 1.81243 11.8904C1.69645 11.6115 1.63675 11.3124 1.63675 11.0104C1.63675 10.7084 1.69645 10.4093 1.81243 10.1305C1.9284 9.85158 2.09836 9.59837 2.31252 9.38541L3.04169 8.65624C3.46836 8.22717 3.70801 7.64676 3.70836 7.04166V5.99999"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Edit = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 19 * size : 19}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18H19"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 1.49998C14.8978 1.10216 15.4374 0.878662 16 0.878662C16.2786 0.878662 16.5544 0.933532 16.8118 1.04014C17.0692 1.14674 17.303 1.303 17.5 1.49998C17.697 1.69697 17.8532 1.93082 17.9598 2.18819C18.0665 2.44556 18.1213 2.72141 18.1213 2.99998C18.1213 3.27856 18.0665 3.55441 17.9598 3.81178C17.8532 4.06915 17.697 4.303 17.5 4.49998L5 17L1 18L2 14L14.5 1.49998Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Email = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 16 * size : 16}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.7273 0.888916H17.2728C18.2728 0.888916 19.0909 1.68892 19.0909 2.66669V13.3334C19.0909 14.3111 18.2728 15.1111 17.2728 15.1111H2.7273C1.7273 15.1111 0.909119 14.3111 0.909119 13.3334V2.66669C0.909119 1.68892 1.7273 0.888916 2.7273 0.888916Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0909 2.66663L10 8.88885L0.909119 2.66663"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Eye1 = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 15 * size : 15}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.833328 7.50004C0.833328 7.50004 4.16666 0.833374 9.99999 0.833374C15.8333 0.833374 19.1667 7.50004 19.1667 7.50004C19.1667 7.50004 15.8333 14.1667 9.99999 14.1667C4.16666 14.1667 0.833328 7.50004 0.833328 7.50004Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EyeOff = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25001 3.53327C8.82362 3.39901 9.4109 3.33189 10 3.33327C15.8333 3.33327 19.1667 9.99994 19.1667 9.99994C18.6608 10.9463 18.0576 11.8372 17.3667 12.6583M11.7667 11.7666C11.5378 12.0122 11.2618 12.2092 10.9551 12.3459C10.6485 12.4825 10.3174 12.556 9.98175 12.5619C9.64608 12.5678 9.31264 12.5061 9.00135 12.3803C8.69006 12.2546 8.40728 12.0675 8.16988 11.8301C7.93249 11.5927 7.74534 11.3099 7.6196 10.9986C7.49386 10.6873 7.43211 10.3539 7.43804 10.0182C7.44396 9.68252 7.51743 9.35148 7.65407 9.04481C7.79071 8.73815 7.98772 8.46215 8.23334 8.23327M14.95 14.9499C13.5255 16.0358 11.7909 16.6373 10 16.6666C4.16668 16.6666 0.833344 9.99994 0.833344 9.99994C1.86992 8.06819 3.30762 6.38045 5.05001 5.04994L14.95 14.9499Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.833344 0.833374L19.1667 19.1667"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Facebook = (size, color) => {
  return (
    <svg
      width={size ? 12 * size : 12}
      height={size ? 20 * size : 20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0769 0.909058H8.30769C7.08362 0.909058 5.90968 1.38795 5.04412 2.24039C4.17857 3.09283 3.69231 4.24898 3.69231 5.45451V8.18178H0.923077V11.8181H3.69231V19.0909H7.38462V11.8181H10.1538L11.0769 8.18178H7.38462V5.45451C7.38462 5.21341 7.48187 4.98218 7.65498 4.81169C7.82809 4.6412 8.06288 4.54542 8.30769 4.54542H11.0769V0.909058Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Filter = (size, color) => {
  return (
    <svg
      width={size ? 21 * size : 21}
      height={size ? 20 * size : 20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.67036 1.02563H18.409C18.5944 1.09067 18.7625 1.19728 18.9004 1.33731C19.0382 1.47734 19.1422 1.64707 19.2044 1.83349C19.2665 2.01992 19.2851 2.21809 19.2589 2.41284C19.2326 2.60758 19.1621 2.79373 19.0528 2.95701L12.6148 10.0387V19.0518L7.4645 15.1891V10.0387L1.02657 2.95701C0.917241 2.79373 0.846739 2.60758 0.820462 2.41284C0.794186 2.21809 0.812832 2.01992 0.874973 1.83349C0.937115 1.64707 1.0411 1.47734 1.17897 1.33731C1.31684 1.19728 1.48493 1.09067 1.67036 1.02563Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Folder = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 16 * size : 16}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.87037 0.800049H6.94444L9.99999 3.68005H17.1296C17.6699 3.68005 18.188 3.88233 18.57 4.2424C18.952 4.60247 19.1667 5.09083 19.1667 5.60005V13.28C19.1667 13.7893 18.952 14.2776 18.57 14.6377C18.188 14.9978 17.6699 15.2 17.1296 15.2H2.87037C2.33011 15.2 1.81198 14.9978 1.42996 14.6377C1.04794 14.2776 0.833328 13.7893 0.833328 13.28V2.72005C0.833328 2.21083 1.04794 1.72247 1.42996 1.3624C1.81198 1.00233 2.33011 0.800049 2.87037 0.800049"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Gallery = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.477 5.6322H13.489"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7184 1.14941H4.51151C2.65469 1.14941 1.14944 2.65466 1.14944 4.51148V15.7184C1.14944 17.5752 2.65469 19.0804 4.51151 19.0804H15.7184C17.5752 19.0804 19.0805 17.5752 19.0805 15.7184V4.51148C19.0805 2.65466 17.5752 1.14941 15.7184 1.14941Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.14944 13.477L5.6322 8.99425C6.1433 8.50244 6.72307 8.24353 7.31324 8.24353C7.9034 8.24353 8.48317 8.50244 8.99427 8.99425L14.5977 14.5977"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3563 12.3563L13.477 11.2356C13.9881 10.7438 14.5679 10.4849 15.158 10.4849C15.7482 10.4849 16.328 10.7438 16.8391 11.2356L19.0804 13.477"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Globe = (size, color) => {
  return (
    <svg
      width={size ? 22 * size : 22}
      height={size ? 22 * size : 22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 20.375C16.1777 20.375 20.375 16.1777 20.375 11C20.375 5.82233 16.1777 1.625 11 1.625C5.82233 1.625 1.625 5.82233 1.625 11C1.625 16.1777 5.82233 20.375 11 20.375Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 7.875H19.75"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 14.125H19.75"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4791 1.625C8.72429 4.4371 7.79395 7.68528 7.79395 11C7.79395 14.3147 8.72429 17.5629 10.4791 20.375"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5208 1.625C13.2757 4.4371 14.206 7.68528 14.206 11C14.206 14.3147 13.2757 17.5629 11.5208 20.375"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Grid = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1H1V8H8V1Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 1H12V8H19V1Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12H12V19H19V12Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H1V19H8V12Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Heart = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 17 * size : 17}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.397 2.20114C16.972 1.77232 16.4675 1.43215 15.9122 1.20006C15.3568 0.967967 14.7616 0.848511 14.1605 0.848511C13.5594 0.848511 12.9642 0.967967 12.4089 1.20006C11.8535 1.43215 11.349 1.77232 10.924 2.20114L10.0421 3.09069L9.16022 2.20114C8.30185 1.33535 7.13766 0.84896 5.92375 0.84896C4.70984 0.84896 3.54565 1.33535 2.68729 2.20114C1.82893 3.06693 1.3467 4.24119 1.3467 5.4656C1.3467 6.69001 1.82893 7.86427 2.68729 8.73006L3.5692 9.6196L10.0421 16.1485L16.5151 9.6196L17.397 8.73006C17.8221 8.30143 18.1594 7.79252 18.3895 7.2324C18.6196 6.67227 18.738 6.0719 18.738 5.4656C18.738 4.85929 18.6196 4.25893 18.3895 3.6988C18.1594 3.13868 17.8221 2.62976 17.397 2.20114V2.20114Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Help = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1754 18.5965C14.8262 18.5965 18.5964 14.8263 18.5964 10.1754C18.5964 5.52463 14.8262 1.75439 10.1754 1.75439C5.52457 1.75439 1.75433 5.52463 1.75433 10.1754C1.75433 14.8263 5.52457 18.5965 10.1754 18.5965Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.72485 7.64916C7.92284 7.08636 8.31361 6.61178 8.82797 6.30948C9.34233 6.00719 9.94708 5.89669 10.5351 5.99755C11.1231 6.09841 11.6565 6.40413 12.0407 6.86055C12.4249 7.31698 12.6352 7.89465 12.6343 8.49127C12.6343 10.1755 10.108 11.0176 10.108 11.0176"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1754 14.386H10.1838"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const History = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.97342 6.13623V10.0868L11.9538 12.0622"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.11111 9.09919C1.33301 6.9264 2.34913 4.91115 3.9656 3.43792C5.58208 1.96469 7.68575 1.13661 9.87527 1.11166C12.0648 1.08672 14.1869 1.86666 15.8367 3.30268C17.4865 4.7387 18.5485 6.73028 18.8201 8.89744C19.0916 11.0646 18.5538 13.2556 17.3092 15.0525C16.0646 16.8494 14.2002 18.1264 12.0719 18.6398C9.94363 19.1532 7.70032 18.8671 5.77001 17.836C3.8397 16.805 2.3575 15.1012 1.60622 13.0498M1.11111 17.9881V13.0498H6.06212"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Home = (size, color) => {
  return (
    <svg
      width={size ? 18 * size : 18}
      height={size ? 20 * size : 20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.40625 7.49996L9 1.66663L16.5938 7.49996V16.6666C16.5938 17.1087 16.416 17.5326 16.0995 17.8451C15.783 18.1577 15.3538 18.3333 14.9062 18.3333H3.09375C2.6462 18.3333 2.21697 18.1577 1.90051 17.8451C1.58404 17.5326 1.40625 17.1087 1.40625 16.6666V7.49996Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.54546 18.3333V12C6.54546 10.8954 7.44089 10 8.54546 10H9.45455C10.5591 10 11.4545 10.8954 11.4545 12V18.3333"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Info = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1754 18.5965C14.8263 18.5965 18.5965 14.8263 18.5965 10.1754C18.5965 5.52463 14.8263 1.75439 10.1754 1.75439C5.52463 1.75439 1.75439 5.52463 1.75439 10.1754C1.75439 14.8263 5.52463 18.5965 10.1754 18.5965Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1754 13.5438V10.1754"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1754 6.80701H10.1838"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Instagram = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5455 0.909058H5.45455C2.94416 0.909058 0.909091 2.94413 0.909091 5.45451V14.5454C0.909091 17.0558 2.94416 19.0909 5.45455 19.0909H14.5455C17.0558 19.0909 19.0909 17.0558 19.0909 14.5454V5.45451C19.0909 2.94413 17.0558 0.909058 14.5455 0.909058Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6364 9.42731C13.7486 10.1839 13.6193 10.9566 13.2671 11.6355C12.9148 12.3144 12.3574 12.865 11.6742 13.2088C10.991 13.5527 10.2168 13.6724 9.46163 13.5509C8.70649 13.4294 8.00888 13.0728 7.46805 12.532C6.92721 11.9912 6.57068 11.2936 6.44916 10.5384C6.32765 9.78327 6.44734 9.00904 6.79122 8.32584C7.13509 7.64264 7.68564 7.08526 8.36454 6.73299C9.04345 6.38072 9.81615 6.25149 10.5727 6.36368C11.3445 6.47812 12.059 6.83774 12.6106 7.38941C13.1623 7.94109 13.5219 8.65557 13.6364 9.42731Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5H15.01"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Language = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.769226 3.40665H10M7.36263 0.769287V3.40665C7.36263 6.20454 6.66797 8.88783 5.43147 10.8662C4.19497 12.8446 2.51791 13.9561 0.769226 13.9561M2.08791 8.68138C2.08572 10.042 3.00375 11.3505 4.6502 12.3335C6.29665 13.3164 8.54413 13.8978 10.9231 13.9561"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.68134 19.2308L13.9561 7.36267L19.2308 19.2308M18.044 16.5934H9.86815"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Location = (size, color) => {
  return (
    <svg
      width={size ? 17 * size : 17}
      height={size ? 20 * size : 20}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.15 8.33337C16.15 14.1667 8.50001 19.1667 8.50001 19.1667C8.50001 19.1667 0.850006 14.1667 0.850006 8.33337C0.850006 6.34425 1.65599 4.4366 3.09064 3.03007C4.52529 1.62355 6.4711 0.833374 8.50001 0.833374C10.5289 0.833374 12.4747 1.62355 13.9094 3.03007C15.344 4.4366 16.15 6.34425 16.15 8.33337Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10.8334C9.90832 10.8334 11.05 9.71409 11.05 8.33337C11.05 6.95266 9.90832 5.83337 8.5 5.83337C7.09167 5.83337 5.95 6.95266 5.95 8.33337C5.95 9.71409 7.09167 10.8334 8.5 10.8334Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LocationCurrent = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 12.7272C11.5063 12.7272 12.7273 11.5062 12.7273 9.99998C12.7273 8.49375 11.5063 7.27271 10 7.27271C8.49381 7.27271 7.27277 8.49375 7.27277 9.99998C7.27277 11.5062 8.49381 12.7272 10 12.7272Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17.2728C14.0166 17.2728 17.2728 14.0166 17.2728 10C17.2728 5.98341 14.0166 2.72729 10 2.72729C5.98341 2.72729 2.72729 5.98341 2.72729 10C2.72729 14.0166 5.98341 17.2728 10 17.2728Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 0.909058V2.72724"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17.2727V19.0909"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2727 10H19.0909"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.909119 10H2.7273"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Lock = (size, color) => {
  return (
    <svg
      width={size ? 18 * size : 18}
      height={size ? 20 * size : 20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3 9.09094H2.69999C1.70588 9.09094 0.899994 9.90497 0.899994 10.9091V17.2728C0.899994 18.2769 1.70588 19.0909 2.69999 19.0909H15.3C16.2941 19.0909 17.1 18.2769 17.1 17.2728V10.9091C17.1 9.90497 16.2941 9.09094 15.3 9.09094Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.49997 9.09088V5.45451C4.49997 4.24898 4.97408 3.09283 5.81799 2.24039C6.6619 1.38795 7.8065 0.909058 8.99997 0.909058C10.1934 0.909058 11.338 1.38795 12.1819 2.24039C13.0259 3.09283 13.5 4.24898 13.5 5.45451V9.09088"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LogOut = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H7"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 15L19 10L14 5"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10H7"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Manat = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 15 * size : 15}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6651 1.10078V0H9.28951V1.11333C4.1143 1.5953 0 7.05335 0 13.726C0 14.1559 0.0168196 14.5805 0.0504589 14.9998H1.86276C1.84576 14.6931 1.83457 14.384 1.83457 14.0714C1.83457 8.01891 5.07535 3.05133 9.21023 2.51977L8.86726 12.9551H10.8729L10.6982 2.52199C14.8244 3.06581 18.056 8.02792 18.056 14.0716C18.056 14.3842 18.0449 14.6933 18.0278 15H19.9498C19.983 14.5811 19.9997 14.1565 20 13.7262C19.9998 7.01955 15.8779 1.53427 10.6651 1.10078Z"
        fill={color ? color : "#000"}
      />
    </svg>
  );
};

export const Menu = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 14 * size : 14}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2308 13H0.769241"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2308 1H0.769226"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2308 7H0.769226"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Message = (size, color) => {
  return (
    <svg
      width={size ? 22 * size : 22}
      height={size ? 18 * size : 18}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.625 17L2.97917 13.1C1.8088 11.4382 1.38541 9.47037 1.78773 7.56226C2.19005 5.65415 3.39069 3.93563 5.16642 2.72623C6.94216 1.51683 9.17214 0.898855 11.4418 0.987197C13.7114 1.07554 15.8662 1.86419 17.5055 3.20652C19.1448 4.54884 20.1572 6.3535 20.3542 8.28494C20.5513 10.2164 19.9197 12.1432 18.5769 13.7071C17.2342 15.271 15.2715 16.3656 13.054 16.7873C10.8364 17.2091 8.51479 16.9293 6.52083 16L1.625 17"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 9V9.01"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.83332 9V9.01"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1667 9V9.01"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Money = (size, color) => {
  return (
    <svg
      width={size ? 22 * size : 22}
      height={size ? 16 * size : 16}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 11.1819C12.7259 11.1819 14.125 9.75732 14.125 8.00006C14.125 6.24279 12.7259 4.81824 11 4.81824C9.27411 4.81824 7.875 6.24279 7.875 8.00006C7.875 9.75732 9.27411 11.1819 11 11.1819Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2917 1.63635H3.70833C2.55774 1.63635 1.625 2.58605 1.625 3.75756V12.2424C1.625 13.4139 2.55774 14.3636 3.70833 14.3636H18.2917C19.4423 14.3636 20.375 13.4139 20.375 12.2424V3.75756C20.375 2.58605 19.4423 1.63635 18.2917 1.63635Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 8H17.2604"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 8H4.76042"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Navigation = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.952393 9.52382L19.0476 0.952393L10.4762 19.0476L8.57144 11.4286L0.952393 9.52382Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Notification = (size, color) => {
  return (
    <svg
      width={size ? 17 * size : 17}
      height={size ? 20 * size : 20}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3571 6.66663C13.3571 5.34054 12.8454 4.06877 11.9345 3.13109C11.0236 2.19341 9.78819 1.66663 8.49999 1.66663C7.2118 1.66663 5.97637 2.19341 5.06548 3.13109C4.15458 4.06877 3.64285 5.34054 3.64285 6.66663C3.64285 12.5 1.21428 14.1666 1.21428 14.1666H15.7857C15.7857 14.1666 13.3571 12.5 13.3571 6.66663Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.90048 17.5C9.75816 17.7526 9.55388 17.9622 9.3081 18.1079C9.06231 18.2537 8.78365 18.3304 8.50001 18.3304C8.21637 18.3304 7.93771 18.2537 7.69192 18.1079C7.44614 17.9622 7.24186 17.7526 7.09953 17.5"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Phone = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8883 14.4212V17.0974C18.8894 17.3459 18.8384 17.5918 18.7386 17.8195C18.6389 18.0471 18.4926 18.2514 18.3092 18.4194C18.1257 18.5874 17.9092 18.7152 17.6734 18.7948C17.4375 18.8744 17.1877 18.904 16.9397 18.8816C14.1892 18.5833 11.5471 17.6453 9.2257 16.1429C7.06597 14.7732 5.2349 12.9458 3.86253 10.7904C2.35188 8.46307 1.41177 5.81338 1.11837 3.05593C1.09603 2.80924 1.12541 2.5606 1.20463 2.32586C1.28385 2.09112 1.41117 1.87542 1.5785 1.69248C1.74583 1.50954 1.94949 1.36337 2.17652 1.26329C2.40354 1.16321 2.64897 1.1114 2.89715 1.11117H5.57874C6.01254 1.10691 6.43309 1.26022 6.762 1.54253C7.09091 1.82483 7.30575 2.21687 7.36646 2.64557C7.47965 3.50203 7.68955 4.34297 7.99217 5.15234C8.11243 5.47164 8.13846 5.81866 8.06717 6.15227C7.99588 6.48588 7.83026 6.7921 7.58993 7.03465L6.45473 8.16761C7.72719 10.401 9.58007 12.2502 11.8179 13.5202L12.9531 12.3872C13.1961 12.1473 13.503 11.9821 13.8372 11.9109C14.1715 11.8398 14.5192 11.8657 14.8391 11.9858C15.6501 12.2878 16.4927 12.4973 17.3509 12.6102C17.7851 12.6714 18.1817 12.8896 18.4651 13.2235C18.7486 13.5574 18.8992 13.9837 18.8883 14.4212Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Plus = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19.0909C15.0208 19.0909 19.0909 15.0207 19.0909 9.99997C19.0909 4.9792 15.0208 0.909058 10 0.909058C4.97923 0.909058 0.909088 4.9792 0.909088 9.99997C0.909088 15.0207 4.97923 19.0909 10 19.0909Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6.36365V13.6364"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.36365 10H13.6364"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Plus2 = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.25V18.75"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 10H18.75"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Road = (size, color) => {
  return (
    <svg
      width={size ? 18 * size : 18}
      height={size ? 22 * size : 22}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 20.375C4.10457 20.375 5 19.4423 5 18.2917C5 17.1411 4.10457 16.2084 3 16.2084C1.89543 16.2084 1 17.1411 1 18.2917C1 19.4423 1.89543 20.375 3 20.375Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5.79167C16.1046 5.79167 17 4.85893 17 3.70833C17 2.55774 16.1046 1.625 15 1.625C13.8954 1.625 13 2.55774 13 3.70833C13 4.85893 13.8954 5.79167 15 5.79167Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 18.2917H13.5C14.4283 18.2917 15.3185 17.9076 15.9749 17.2239C16.6313 16.5401 17 15.6128 17 14.6459C17 13.6789 16.6313 12.7516 15.9749 12.0679C15.3185 11.3842 14.4283 11 13.5 11H5.5C4.57174 11 3.6815 10.6159 3.02513 9.9322C2.36875 9.24847 2 8.32114 2 7.35421C2 6.38727 2.36875 5.45994 3.02513 4.77621C3.6815 4.09249 4.57174 3.70837 5.5 3.70837H9"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Run = (size, color) => {
  return (
    <svg
      width={size ? 17 * size : 17}
      height={size ? 22 * size : 22}
      viewBox="0 0 17 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2564 3.70833C10.8229 3.70833 11.2821 3.24196 11.2821 2.66667C11.2821 2.09137 10.8229 1.625 10.2564 1.625C9.68997 1.625 9.23077 2.09137 9.23077 2.66667C9.23077 3.24196 9.68997 3.70833 10.2564 3.70833Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.02563 16.2083L5.5 17L6.92307 15.6875"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3077 20.375L11.5 16.5L8.20514 13.0834L9.23078 6.83337"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.10257 11L4.5 8.50004L9.23077 6.83337L12.5 9.50004L15.3846 11"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Search = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 19L14.65 14.65"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Selector = (size, color) => {
  return (
    <svg
      width={size ? 13 * size : 13}
      height={size ? 20 * size : 20}
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.01959 6.30035L6.37253 1.02563L11.7255 6.30035"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7255 13.4432L6.37253 18.718L1.01959 13.4432"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Settings = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1666 12.5C16.0557 12.7514 16.0226 13.0302 16.0716 13.3005C16.1207 13.5709 16.2495 13.8203 16.4416 14.0167L16.4916 14.0667C16.6466 14.2215 16.7695 14.4053 16.8534 14.6076C16.9373 14.81 16.9805 15.0268 16.9805 15.2459C16.9805 15.4649 16.9373 15.6818 16.8534 15.8841C16.7695 16.0864 16.6466 16.2702 16.4916 16.425C16.3369 16.58 16.153 16.7029 15.9507 16.7868C15.7484 16.8707 15.5315 16.9139 15.3125 16.9139C15.0935 16.9139 14.8766 16.8707 14.6742 16.7868C14.4719 16.7029 14.2881 16.58 14.1333 16.425L14.0833 16.375C13.8869 16.1829 13.6375 16.0541 13.3671 16.005C13.0968 15.956 12.818 15.9891 12.5666 16.1C12.3202 16.2057 12.11 16.3811 11.9619 16.6047C11.8138 16.8282 11.7344 17.0902 11.7333 17.3584V17.5C11.7333 17.9421 11.5577 18.366 11.2452 18.6785C10.9326 18.9911 10.5087 19.1667 10.0666 19.1667C9.62462 19.1667 9.2007 18.9911 8.88813 18.6785C8.57557 18.366 8.39998 17.9421 8.39998 17.5V17.425C8.39353 17.1492 8.30424 16.8817 8.14374 16.6573C7.98323 16.4329 7.75893 16.2619 7.49998 16.1667C7.24863 16.0558 6.96982 16.0227 6.69949 16.0717C6.42916 16.1207 6.17971 16.2496 5.98331 16.4417L5.93331 16.4917C5.77852 16.6467 5.59471 16.7696 5.39238 16.8535C5.19005 16.9373 4.97317 16.9805 4.75415 16.9805C4.53512 16.9805 4.31824 16.9373 4.11591 16.8535C3.91358 16.7696 3.72977 16.6467 3.57498 16.4917C3.42002 16.3369 3.29709 16.1531 3.21321 15.9508C3.12934 15.7484 3.08617 15.5316 3.08617 15.3125C3.08617 15.0935 3.12934 14.8766 3.21321 14.6743C3.29709 14.472 3.42002 14.2882 3.57498 14.1334L3.62498 14.0834C3.81709 13.887 3.94597 13.6375 3.99498 13.3672C4.044 13.0969 4.01091 12.8181 3.89998 12.5667C3.79434 12.3202 3.61894 12.11 3.39537 11.962C3.17179 11.8139 2.9098 11.7344 2.64165 11.7334H2.49998C2.05795 11.7334 1.63403 11.5578 1.32147 11.2452C1.00891 10.9327 0.833313 10.5087 0.833313 10.0667C0.833313 9.62468 1.00891 9.20076 1.32147 8.8882C1.63403 8.57563 2.05795 8.40004 2.49998 8.40004H2.57498C2.85081 8.39359 3.11832 8.30431 3.34273 8.1438C3.56714 7.98329 3.73808 7.75899 3.83331 7.50004C3.94424 7.24869 3.97733 6.96988 3.92832 6.69955C3.8793 6.42922 3.75043 6.17977 3.55831 5.98337L3.50831 5.93337C3.35335 5.77858 3.23042 5.59477 3.14655 5.39244C3.06267 5.19011 3.0195 4.97323 3.0195 4.75421C3.0195 4.53518 3.06267 4.3183 3.14655 4.11597C3.23042 3.91364 3.35335 3.72983 3.50831 3.57504C3.6631 3.42008 3.84692 3.29715 4.04925 3.21327C4.25158 3.1294 4.46845 3.08623 4.68748 3.08623C4.90651 3.08623 5.12338 3.1294 5.32571 3.21327C5.52804 3.29715 5.71186 3.42008 5.86665 3.57504L5.91665 3.62504C6.11305 3.81715 6.36249 3.94603 6.63282 3.99504C6.90315 4.04406 7.18197 4.01097 7.43331 3.90004H7.49998C7.74645 3.7944 7.95666 3.619 8.10472 3.39543C8.25279 3.17185 8.33224 2.90986 8.33331 2.64171V2.50004C8.33331 2.05801 8.50891 1.63409 8.82147 1.32153C9.13403 1.00897 9.55795 0.833374 9.99998 0.833374C10.442 0.833374 10.8659 1.00897 11.1785 1.32153C11.4911 1.63409 11.6666 2.05801 11.6666 2.50004V2.57504C11.6677 2.8432 11.7472 3.10519 11.8952 3.32876C12.0433 3.55234 12.2535 3.72774 12.5 3.83337C12.7513 3.9443 13.0301 3.97739 13.3005 3.92838C13.5708 3.87936 13.8202 3.75049 14.0166 3.55837L14.0666 3.50837C14.2214 3.35341 14.4052 3.23048 14.6076 3.14661C14.8099 3.06273 15.0268 3.01956 15.2458 3.01956C15.4648 3.01956 15.6817 3.06273 15.884 3.14661C16.0864 3.23048 16.2702 3.35341 16.425 3.50837C16.5799 3.66316 16.7029 3.84698 16.7867 4.04931C16.8706 4.25164 16.9138 4.46851 16.9138 4.68754C16.9138 4.90657 16.8706 5.12344 16.7867 5.32577C16.7029 5.5281 16.5799 5.71192 16.425 5.86671L16.375 5.91671C16.1829 6.11311 16.054 6.36255 16.005 6.63288C15.956 6.90321 15.989 7.18203 16.1 7.43337V7.50004C16.2056 7.74651 16.381 7.95672 16.6046 8.10478C16.8282 8.25285 17.0902 8.3323 17.3583 8.33337H17.5C17.942 8.33337 18.3659 8.50897 18.6785 8.82153C18.991 9.13409 19.1666 9.55801 19.1666 10C19.1666 10.4421 18.991 10.866 18.6785 11.1786C18.3659 11.4911 17.942 11.6667 17.5 11.6667H17.425C17.1568 11.6678 16.8948 11.7472 16.6713 11.8953C16.4477 12.0434 16.2723 12.2536 16.1666 12.5V12.5Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Share = (size, color) => {
  return (
    <svg
      width={size ? 18 * size : 18}
      height={size ? 20 * size : 20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4 6.3636C15.8912 6.3636 17.1 5.14256 17.1 3.63633C17.1 2.1301 15.8912 0.909058 14.4 0.909058C12.9088 0.909058 11.7 2.1301 11.7 3.63633C11.7 5.14256 12.9088 6.3636 14.4 6.3636Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.6 12.7272C5.09117 12.7272 6.3 11.5062 6.3 9.99998C6.3 8.49375 5.09117 7.27271 3.6 7.27271C2.10883 7.27271 0.900002 8.49375 0.900002 9.99998C0.900002 11.5062 2.10883 12.7272 3.6 12.7272Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4 19.0909C15.8912 19.0909 17.1 17.8699 17.1 16.3636C17.1 14.8574 15.8912 13.6364 14.4 13.6364C12.9088 13.6364 11.7 14.8574 11.7 16.3636C11.7 17.8699 12.9088 19.0909 14.4 19.0909Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.93102 11.3727L12.078 14.9909"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.069 5.00916L5.93102 8.62734"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Slider = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.36115 10.1111C4.60379 10.1111 5.61115 9.10372 5.61115 7.86108C5.61115 6.61844 4.60379 5.61108 3.36115 5.61108C2.1185 5.61108 1.11115 6.61844 1.11115 7.86108C1.11115 9.10372 2.1185 10.1111 3.36115 10.1111Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.36108 1.11108V5.61108"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.36108 10.1111V19.1111"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1111 16.8611C11.3538 16.8611 12.3611 15.8537 12.3611 14.6111C12.3611 13.3684 11.3538 12.3611 10.1111 12.3611C8.8685 12.3611 7.86115 13.3684 7.86115 14.6111C7.86115 15.8537 8.8685 16.8611 10.1111 16.8611Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1111 1.11108V12.3611"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1111 16.8611V19.1111"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8611 6.73608C18.1038 6.73608 19.1111 5.72872 19.1111 4.48608C19.1111 3.24344 18.1038 2.23608 16.8611 2.23608C15.6185 2.23608 14.6111 3.24344 14.6111 4.48608C14.6111 5.72872 15.6185 6.73608 16.8611 6.73608Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8611 1.11108V2.23608"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8611 6.73608V19.1111"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Star = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.84126 1.29248L12.4898 6.93466L18.4127 7.84498L14.127 12.2343L15.1384 18.4353L9.84126 15.5061L4.54412 18.4353L5.55555 12.2343L1.26984 7.84498L7.19269 6.93466L9.84126 1.29248Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const StarFilled = (size, color, fill) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill={fill ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.84126 1.29248L12.4898 6.93466L18.4127 7.84498L14.127 12.2343L15.1384 18.4353L9.84126 15.5061L4.54412 18.4353L5.55555 12.2343L1.26984 7.84498L7.19269 6.93466L9.84126 1.29248Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Task = (size, color) => {
  return (
    <svg
      width={size ? 18 * size : 18}
      height={size ? 18 * size : 18}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66665 3.99998H9.33331C10.6666 3.99998 10.6666 3.33331 10.6666 2.66665C10.6666 1.33331 9.99998 1.33331 9.33331 1.33331H6.66665C5.99998 1.33331 5.33331 1.33331 5.33331 2.66665C5.33331 3.99998 5.99998 3.99998 6.66665 3.99998Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 2.67999C12.8867 2.79999 14 3.61999 14 6.66666V10.6667C14 13.3333 13.3333 14.6667 10 14.6667H6C2.66667 14.6667 2 13.3333 2 10.6667V6.66666C2 3.62666 3.11333 2.79999 5.33333 2.67999"
        stroke={color ? color : "#000"}
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Thunder = (size, color) => {
  return (
    <svg
      width={size ? 16 * size : 16}
      height={size ? 20 * size : 20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.8791 2.15686V8.25708H14.1538L7.12086 17.8431V11.7429H1.84613L8.8791 2.15686Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Twitter = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 17 * size : 17}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1667 0.849978C18.3687 1.42413 17.4851 1.86327 16.55 2.15048C16.0481 1.56186 15.3811 1.14467 14.6392 0.955315C13.8973 0.765964 13.1162 0.813594 12.4017 1.09176C11.6872 1.36993 11.0737 1.86522 10.6442 2.51064C10.2146 3.15606 9.98975 3.92046 10 4.70048V5.55048C8.53553 5.58921 7.0844 5.25792 5.77584 4.58611C4.46729 3.9143 3.34193 2.92282 2.5 1.69998C2.5 1.69998 -0.833331 9.34998 6.66667 12.75C4.95044 13.9382 2.90597 14.5341 0.833336 14.45C8.33334 18.7 17.5 14.45 17.5 4.67498C17.4992 4.43821 17.4769 4.20203 17.4333 3.96948C18.2838 3.11395 18.884 2.03378 19.1667 0.849978V0.849978Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const User = (size, color) => {
  return (
    <svg
      width={size ? 18 * size : 18}
      height={size ? 20 * size : 20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Wallet = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 20 * size : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7406 5.74069V2.40737C15.7406 2.11269 15.6236 1.83007 15.4152 1.6217C15.2068 1.41333 14.9242 1.29626 14.6295 1.29626H3.51848C2.92911 1.29626 2.36388 1.53039 1.94714 1.94714C1.53039 2.36388 1.29626 2.92911 1.29626 3.51848M1.29626 3.51848C1.29626 4.10784 1.53039 4.67307 1.94714 5.08982C2.36388 5.50656 2.92911 5.74069 3.51848 5.74069H16.8517C17.1464 5.74069 17.429 5.85775 17.6374 6.06612C17.8458 6.27449 17.9629 6.55711 17.9629 6.85179V10.1851M1.29626 3.51848V16.8517C1.29626 17.4411 1.53039 18.0063 1.94714 18.4231C2.36388 18.8398 2.92911 19.074 3.51848 19.074H16.8517C17.1464 19.074 17.429 18.9569 17.6374 18.7485C17.8458 18.5401 17.9629 18.2575 17.9629 17.9628V14.6295"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.074 10.1852V14.6296H14.6296C14.0403 14.6296 13.475 14.3955 13.0583 13.9787C12.6415 13.562 12.4074 12.9968 12.4074 12.4074C12.4074 11.818 12.6415 11.2528 13.0583 10.8361C13.475 10.4193 14.0403 10.1852 14.6296 10.1852H19.074Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Work = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 18 * size : 18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.4123 9.42854C10.8333 11.1428 13.3333 9.42854 13.3333 9.42854M3.24564 4.53528C2.27671 4.53528 1.49125 5.32536 1.49125 6.29998V15.1235C1.49125 16.0981 2.27671 16.8882 3.24564 16.8882H17.2807C18.2496 16.8882 19.0351 16.0981 19.0351 15.1235V6.29998C19.0351 5.32536 18.2496 4.53528 17.2807 4.53528H10.2632H3.24564Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.772 4.2857V2.77057C13.772 2.30254 13.5871 1.85368 13.2581 1.52273C12.9291 1.19178 12.4829 1.00586 12.0176 1.00586H8.5088C8.0435 1.00586 7.59727 1.19178 7.26826 1.52273C6.93925 1.85368 6.75441 2.30254 6.75441 2.77057V4.2857"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Youtube = (size, color) => {
  return (
    <svg
      width={size ? 20 * size : 20}
      height={size ? 15 * size : 15}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7834 2.85004C18.6844 2.45455 18.4828 2.09218 18.1989 1.79955C17.915 1.50691 17.559 1.29436 17.1667 1.18337C15.7334 0.833374 10 0.833374 10 0.833374C10 0.833374 4.26669 0.833374 2.83335 1.21671C2.44106 1.32769 2.085 1.54024 1.80114 1.83288C1.51728 2.12552 1.31568 2.48788 1.21669 2.88337C0.954367 4.338 0.826051 5.81363 0.833354 7.29171C0.824004 8.78091 0.952328 10.2678 1.21669 11.7334C1.32582 12.1166 1.53194 12.4652 1.81514 12.7454C2.09834 13.0257 2.44904 13.2282 2.83335 13.3334C4.26669 13.7167 10 13.7167 10 13.7167C10 13.7167 15.7334 13.7167 17.1667 13.3334C17.559 13.2224 17.915 13.0098 18.1989 12.7172C18.4828 12.4246 18.6844 12.0622 18.7834 11.6667C19.0437 10.223 19.172 8.75865 19.1667 7.29171C19.176 5.8025 19.0477 4.31562 18.7834 2.85004V2.85004Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.125 10.0167L12.9167 7.29165L8.125 4.56665V10.0167Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Video = (size, color) => {
  return (
    <svg
      width="25"
      height="24"
      width={size ? 25 * size : 25}
      height={size ? 24 * size : 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.3334 15V9C22.3334 4 20.3334 2 15.3334 2H9.33337C4.33337 2 2.33337 4 2.33337 9V15C2.33337 20 4.33337 22 9.33337 22H15.3334C20.3334 22 22.3334 20 22.3334 15Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.85339 7.10999H21.8134"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.85339 2.10999V6.96999"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8134 2.10999V6.51999"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0834 14.45V13.25C10.0834 11.71 11.1734 11.08 12.5034 11.85L13.5434 12.45L14.5834 13.05C15.9134 13.82 15.9134 15.08 14.5834 15.85L13.5434 16.45L12.5034 17.05C11.1734 17.82 10.0834 17.19 10.0834 15.65V14.45V14.45Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Chart = (size, color) => {
  return (
    <svg
      width={size ? 24 * size : 24}
      height={size ? 24 * size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 22H22"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Gallery2 = (size, color) => {
  return (
    <svg
      width={size ? 25 * size : 25}
      height={size ? 24 * size : 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.66663 22H15.6666C20.6666 22 22.6666 20 22.6666 15V9C22.6666 4 20.6666 2 15.6666 2H9.66663C4.66663 2 2.66663 4 2.66663 9V15C2.66663 20 4.66663 22 9.66663 22Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66663 10C10.7712 10 11.6666 9.10457 11.6666 8C11.6666 6.89543 10.7712 6 9.66663 6C8.56206 6 7.66663 6.89543 7.66663 8C7.66663 9.10457 8.56206 10 9.66663 10Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33667 18.9501L8.26667 15.6401C9.05667 15.1101 10.1967 15.1701 10.9067 15.7801L11.2367 16.0701C12.0167 16.7401 13.2767 16.7401 14.0567 16.0701L18.2167 12.5001C18.9967 11.8301 20.2567 11.8301 21.0367 12.5001L22.6667 13.9001"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Text = (size, color) => {
  return (
    <svg
      width={size ? 24 * size : 24}
      height={size ? 24 * size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.67004 7.17003V5.35003C2.67004 4.20003 3.60004 3.28003 4.74004 3.28003H19.26C20.41 3.28003 21.33 4.21003 21.33 5.35003V7.17003"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.72V4.10999"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.06006 20.72H15.9401"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Receipt = (size, color) => {
  return (
    <svg
      width={size ? 24 * size : 24}
      height={size ? 24 * size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7H16"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11H15"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.21 14.77L14.6701 18.31C14.5301 18.45 14.4 18.71 14.37 18.9L14.18 20.25C14.11 20.74 14.45 21.0801 14.94 21.0101L16.29 20.82C16.48 20.79 16.75 20.66 16.88 20.52L20.4201 16.9801C21.0301 16.3701 21.3201 15.6601 20.4201 14.7601C19.5301 13.8701 18.82 14.16 18.21 14.77Z"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.7001 15.28C18.0001 16.36 18.8401 17.2 19.9201 17.5"
        stroke={color ? color : "#000"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BookSaved = (size, color) => {
  return (
    <svg
      width={size ? 24 * size : 24}
      height={size ? 24 * size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3941 21.4338L11.3941 21.4337L11.3892 21.4311C9.46733 20.3828 6.12966 19.2831 4.00648 19.0045C4.0059 19.0044 4.00532 19.0043 4.00474 19.0043L3.71807 18.9647L3.71808 18.9647L3.7104 18.9637C2.65462 18.8348 1.75977 17.8207 1.75977 16.74V4.65999C1.75977 4.00526 2.01445 3.42115 2.47675 2.9994C2.94257 2.57445 3.54384 2.37046 4.18504 2.42802L4.18878 2.42833C6.29907 2.60178 9.54263 3.67626 11.3556 4.80453L11.3616 4.8083L11.3678 4.81189L11.6078 4.95191L11.6344 4.96745L11.6628 4.97961C11.7756 5.02796 11.8992 5.04399 11.9919 5.04615C12.0436 5.04735 12.1046 5.04476 12.1685 5.03332C12.2242 5.02338 12.316 5.00097 12.4083 4.94184L12.5648 4.84393L12.5653 4.84364C13.2024 4.44426 14.013 4.04731 14.9135 3.68499C14.9865 3.65702 15.0747 3.66422 15.1524 3.71603C15.2205 3.76143 15.2598 3.83379 15.2598 3.92V6.59999V7.53111L16.0359 7.01679L16.866 6.4668L16.866 6.46683L16.8709 6.46347C16.9513 6.40885 17.0583 6.40885 17.1386 6.46347L17.1386 6.4635L17.1436 6.4668L17.9736 7.01679L18.7498 7.53111V6.59999V2.78004C18.7498 2.66439 18.8348 2.55733 18.9529 2.5313C19.2232 2.48489 19.4869 2.44871 19.7194 2.43001H19.7195H19.7198H19.72H19.7202H19.7205H19.7207H19.721H19.7212H19.7214H19.7217H19.7219H19.7222H19.7224H19.7227H19.7229H19.7232H19.7234H19.7236H19.7239H19.7241H19.7244H19.7246H19.7249H19.7251H19.7254H19.7256H19.7259H19.7262H19.7264H19.7267H19.7269H19.7272H19.7274H19.7277H19.728H19.7282H19.7285H19.7287H19.729H19.7293H19.7295H19.7298H19.73H19.7303H19.7306H19.7308H19.7311H19.7314H19.7316H19.7319H19.7322H19.7324H19.7327H19.733H19.7332H19.7335H19.7338H19.7341H19.7343H19.7346H19.7349H19.7351H19.7354H19.7357H19.736H19.7362H19.7365H19.7368H19.7371H19.7373H19.7376H19.7379H19.7382H19.7384H19.7387H19.739H19.7393H19.7396H19.7398H19.7401H19.7404H19.7407H19.741H19.7413H19.7415H19.7418H19.7421H19.7424H19.7427H19.7429H19.7432H19.7435H19.7438H19.7441H19.7444H19.7447H19.7449H19.7452H19.7455H19.7458H19.7461H19.7464H19.7467H19.747H19.7472H19.7475H19.7478H19.7481H19.7484H19.7487H19.749H19.7493H19.7495H19.7498H19.7501H19.7504H19.7507H19.751H19.7513H19.7516H19.7519H19.7522H19.7525H19.7527H19.753H19.7533H19.7536H19.7539H19.7542H19.7545H19.7548H19.7551H19.7554H19.7557H19.756H19.7563H19.7565H19.7568H19.7571H19.7574H19.7577H19.758H19.7583H19.7586H19.7589H19.7592H19.7595H19.7598H19.7601H19.7604H19.7606H19.7609H19.7612H19.7615H19.7618H19.7621H19.7624H19.7627H19.763H19.7633H19.7636H19.7639H19.7642H19.7645H19.7647H19.765H19.7653H19.7656H19.7659H19.7662H19.7665H19.7668H19.7671H19.7674H19.7677H19.7679H19.7682H19.7685H19.7688H19.7691H19.7694H19.7697H19.77H19.7703H19.7706H19.7708H19.7711H19.7714H19.7717H19.772H19.7723H19.7726H19.7729H19.7732H19.7734H19.7737H19.774H19.7743H19.7746H19.7749H19.7752H19.7754H19.7757H19.776H19.7763H19.7766H19.7769H19.7771H19.7774H19.7777H19.778H19.7783H19.7786H19.7788H19.7791H19.7794H19.7797H19.78H19.7802H19.7805H19.7808H19.7811H19.7814H19.7816H19.7819H19.7822H19.7825H19.7827H19.783H19.7833H19.7836H19.7838H19.7841H19.7844H19.7847H19.7849H19.7852H19.7855H19.7858H19.786H19.7863H19.7866H19.7868H19.7871H19.7874H19.7876H19.7879H19.7882H19.7884H19.7887H19.789H19.7892H19.7895H19.7898H19.79H19.7903H19.7905H19.7908H19.7911H19.7913H19.7916H19.7918H19.7921H19.7924H19.7926H19.7929H19.7931H19.7934H19.7936H19.7939H19.7941H19.7944H19.7946H19.7949H19.7951H19.7954H19.7956H19.7959H19.7961H19.7964H19.7966H19.7969H19.7971H19.7974H19.7976H19.7978H19.7981H19.7983H19.7986H19.7988H19.799H19.7993H19.7995H19.7998H19.8H19.8002H19.8005H19.8007H19.8009H19.8012H19.8014H19.8016H19.8018H19.8021H19.8023H19.8025H19.8028H19.803H19.8032H19.8034H19.8036H19.8039H19.8041H19.8043H19.8045H19.8047H19.805H19.8052H19.8054H19.8056H19.8058H19.806H19.8062H19.8065H19.8067H19.8069H19.8071H19.8073H19.8075H19.8077H19.8079H19.8081H19.8083H19.8085H19.8087H19.8089H19.8091H19.8093H19.8095H19.8097H19.8099H19.8101H19.8103H19.8105H19.8106H19.8108H19.811H19.8112H19.8114H19.8116H19.8118H19.8119H19.8121H19.8123H19.8125H19.8127H19.8128H19.813H19.8132H19.8134H19.8135H19.8137H19.8139H19.814H19.8142H19.8144H19.8145H19.8147H19.8149H19.815H19.8152H19.8153H19.8155H19.8157H19.8158H19.816H19.8161H19.8163H19.8164H19.8166H19.8167H19.8169H19.817H19.8172H19.8173H19.8174H19.8176H19.8177H19.8179H19.818H19.8181H19.8183H19.8184H19.8185H19.8187H19.8188H19.8189H19.819H19.8192H19.8193H19.8194H19.8195H19.8196H19.8198H19.8403L19.8607 2.42833C20.4521 2.37972 21.0634 2.58285 21.5195 3.00643L21.5195 3.00644L21.5228 3.00941C21.9851 3.43116 22.2397 4.01527 22.2397 4.67V16.74C22.2397 17.8286 21.3471 18.8343 20.2796 18.9637L19.9496 19.0036L19.9496 19.0036L19.9448 19.0043C17.8219 19.2825 14.4621 20.3925 12.5782 21.4323L12.5645 21.4398L12.5513 21.4482C12.4325 21.5238 12.233 21.58 11.9998 21.58C11.7737 21.58 11.5599 21.5266 11.3941 21.4338ZM2.80264 3.36075L2.80263 3.36075L2.80124 3.36203C2.44026 3.69413 2.24976 4.1615 2.24976 4.65999V16.74C2.24976 17.1773 2.43636 17.5807 2.70037 17.8812C2.96398 18.1813 3.33713 18.4158 3.76028 18.4752L3.76363 18.4756L4.06361 18.5156L4.06368 18.5156C6.25269 18.8075 9.64336 19.9181 11.5888 20.9881L11.6074 20.9983L11.6267 21.0069C11.7317 21.0536 11.841 21.0761 11.9299 21.085C11.9965 21.0917 12.1432 21.1012 12.2854 21.0443L12.3143 21.0327L12.3414 21.0177C14.296 19.9384 17.6936 18.8187 19.8918 18.5262L20.2282 18.4866L20.2307 18.4863C20.6606 18.4335 21.0367 18.1954 21.3 17.894C21.5639 17.592 21.7498 17.1864 21.7498 16.75V4.68001C21.7498 4.17521 21.5552 3.72454 21.206 3.38932L21.2061 3.38924L21.1983 3.38205C20.8388 3.05135 20.3569 2.90742 19.8869 2.93001H19.8867H19.8865H19.8862H19.886H19.8857H19.8855H19.8852H19.885H19.8847H19.8844H19.8842H19.8839H19.8837H19.8834H19.8831H19.8829H19.8826H19.8824H19.8821H19.8818H19.8815H19.8813H19.881H19.8807H19.8805H19.8802H19.8799H19.8797H19.8794H19.8791H19.8788H19.8785H19.8783H19.878H19.8777H19.8774H19.8772H19.8769H19.8766H19.8763H19.876H19.8757H19.8754H19.8752H19.8749H19.8746H19.8743H19.874H19.8737H19.8734H19.8731H19.8728H19.8725H19.8722H19.872H19.8717H19.8714H19.8711H19.8708H19.8705H19.8702H19.8699H19.8696H19.8693H19.869H19.8687H19.8684H19.8681H19.8678H19.8675H19.8671H19.8668H19.8665H19.8662H19.8659H19.8656H19.8653H19.865H19.8647H19.8644H19.8641H19.8637H19.8634H19.8631H19.8628H19.8625H19.8622H19.8619H19.8615H19.8612H19.8609H19.8606H19.8603H19.86H19.8596H19.8593H19.859H19.8587H19.8584H19.858H19.8577H19.8574H19.8571H19.8568H19.8564H19.8561H19.8558H19.8555H19.8551H19.8548H19.8545H19.8542H19.8538H19.8535H19.8532H19.8528H19.8525H19.8522H19.8519H19.8515H19.8512H19.8509H19.8505H19.8502H19.8499H19.8496H19.8492H19.8489H19.8486H19.8482H19.8479H19.8476H19.8472H19.8469H19.8466H19.8462H19.8459H19.8456H19.8452H19.8449H19.8446H19.8442H19.8439H19.8436H19.8432H19.8429H19.8426H19.8422H19.8419H19.8415H19.8412H19.8409H19.8405H19.8402H19.8399H19.8395H19.8392H19.8389H19.8385H19.8382H19.8378H19.8375H19.8372H19.8368H19.8365H19.8362H19.8358H19.8355H19.8351H19.8348H19.8345H19.8341H19.8338H19.8335H19.8331H19.8328H19.8324H19.8321H19.8318H19.8314H19.8311H19.8307H19.8304H19.8301H19.8297H19.8294H19.8291H19.8287H19.8284H19.828H19.8277H19.8274H19.827H19.8267H19.8264H19.826H19.8257H19.8253H19.825H19.8247H19.8243H19.824H19.8237H19.8233H19.823H19.8227H19.8223H19.822H19.8217H19.8213H19.821H19.8207H19.8203H19.82H19.8196H19.8193H19.819H19.8186H19.8183H19.818H19.8176H19.8173H19.817H19.8167H19.8163H19.816H19.8157H19.8153H19.815H19.8147H19.8143H19.814H19.8137H19.8134H19.813H19.8127H19.8124H19.812H19.8117H19.8114H19.8111H19.8107H19.8104H19.8101H19.8098H19.8094H19.8091H19.8088H19.8085H19.8081H19.8078H19.8075H19.8072H19.8069H19.8065H19.8062H19.8059H19.8056H19.8053H19.8049H19.8046H19.8043H19.804H19.8037H19.8034H19.803H19.8027H19.8024H19.8021H19.8018H19.8015H19.8012H19.8009H19.8005H19.8002H19.7999H19.7996H19.7993H19.799H19.7987H19.7984H19.7981H19.7978H19.7975H19.7972H19.7969H19.7966H19.7963H19.796H19.7957H19.7954H19.7951H19.7948H19.7945H19.7942H19.7939H19.7936H19.7933H19.793H19.7927H19.7924H19.7921H19.7918H19.7915H19.7912H19.7909H19.7907H19.7904H19.7901H19.7898H19.7895H19.7892H19.7889H19.7887H19.7884H19.7881H19.7878H19.7875H19.7872H19.787H19.7867H19.7864H19.7861H19.7859H19.7856H19.7853H19.785H19.7848H19.7845H19.7842H19.784H19.7837H19.7834H19.7832H19.7829H19.7826H19.7824H19.7821H19.7818H19.7816H19.7813H19.7811H19.7808H19.7805H19.7803H19.78H19.7798H19.7795H19.7793H19.779H19.7788H19.7785H19.7783H19.778H19.7778H19.7775H19.7773H19.7771H19.7768H19.7766H19.7763H19.7761H19.7759H19.7756H19.7754H19.7752H19.7749H19.7747H19.7745H19.7742H19.774H19.7738H19.7735H19.7733H19.7731H19.7729H19.7727H19.7724H19.7722H19.772H19.7718H19.7716H19.7713H19.7711H19.7709H19.7707H19.7705H19.7703H19.7701H19.7699H19.7697H19.7695H19.7693H19.7691H19.7689H19.7687H19.7685H19.7683H19.7681H19.7679H19.7677H19.7675H19.7673H19.7671H19.7669H19.7668H19.7666H19.7664H19.7662H19.766H19.7659H19.7657H19.7655H19.7653H19.7652H19.765H19.7648H19.7646H19.7645H19.7643H19.7641H19.764H19.7638H19.7637H19.7635H19.7633H19.7632H19.763H19.7629H19.7627H19.7626H19.7624H19.7623H19.7621H19.762H19.7618H19.7617H19.7616H19.7614H19.7613H19.7612H19.761H19.7609H19.7608H19.7606H19.7605H19.7604H19.7602H19.7601H19.76H19.7599H19.7598H19.2598V3.43001V8.00001C19.2598 8.09499 19.2122 8.17313 19.1291 8.21638C19.032 8.26686 18.942 8.25597 18.8753 8.20956L18.8754 8.20946L18.8665 8.20358L17.2865 7.15359L17.0098 6.96969L16.733 7.15359L15.1553 8.20209C15.0732 8.25499 14.9777 8.26015 14.8941 8.21829C14.8079 8.16989 14.7598 8.08425 14.7598 8.00001V5.07002V4.26939L14.0403 4.62074C13.5996 4.83598 13.1981 5.05204 12.8462 5.25905L12.8461 5.25889L12.8347 5.26601L12.6768 5.3647C12.6765 5.36489 12.6762 5.36509 12.6759 5.36528C12.284 5.60696 11.7091 5.60271 11.3443 5.37571C11.3442 5.37566 11.3441 5.37561 11.3441 5.37555L11.1055 5.22646C11.1053 5.22638 11.1052 5.2263 11.1051 5.22621C10.2145 4.6677 8.98172 4.13277 7.73369 3.71803C6.48559 3.30326 5.18416 2.99603 4.15042 2.91165L4.13012 2.90999H4.10974H4.10945H4.10916H4.10886H4.10857H4.10828H4.10799H4.1077H4.1074H4.10711H4.10682H4.10653H4.10624H4.10595H4.10566H4.10537H4.10508H4.10479H4.1045H4.10422H4.10393H4.10364H4.10335H4.10306H4.10277H4.10249H4.1022H4.10191H4.10163H4.10134H4.10105H4.10077H4.10048H4.1002H4.09991H4.09962H4.09934H4.09905H4.09877H4.09848H4.0982H4.09792H4.09763H4.09735H4.09707H4.09678H4.0965H4.09622H4.09593H4.09565H4.09537H4.09509H4.09481H4.09452H4.09424H4.09396H4.09368H4.0934H4.09312H4.09284H4.09256H4.09228H4.092H4.09172H4.09144H4.09116H4.09088H4.0906H4.09032H4.09005H4.08977H4.08949H4.08921H4.08894H4.08866H4.08838H4.0881H4.08783H4.08755H4.08727H4.087H4.08672H4.08645H4.08617H4.08589H4.08562H4.08534H4.08507H4.08479H4.08452H4.08425H4.08397H4.0837H4.08342H4.08315H4.08288H4.0826H4.08233H4.08206H4.08179H4.08151H4.08124H4.08097H4.0807H4.08043H4.08015H4.07988H4.07961H4.07934H4.07907H4.0788H4.07853H4.07826H4.07799H4.07772H4.07745H4.07718H4.07691H4.07664H4.07637H4.0761H4.07583H4.07557H4.0753H4.07503H4.07476H4.07449H4.07423H4.07396H4.07369H4.07342H4.07316H4.07289H4.07262H4.07236H4.07209H4.07183H4.07156H4.07129H4.07103H4.07076H4.0705H4.07023H4.06997H4.0697H4.06944H4.06917H4.06891H4.06865H4.06838H4.06812H4.06785H4.06759H4.06733H4.06707H4.0668H4.06654H4.06628H4.06601H4.06575H4.06549H4.06523H4.06497H4.0647H4.06444H4.06418H4.06392H4.06366H4.0634H4.06314H4.06288H4.06262H4.06236H4.0621H4.06184H4.06158H4.06132H4.06106H4.0608H4.06054H4.06028H4.06002H4.05976H4.0595H4.05924H4.05899H4.05873H4.05847H4.05821H4.05795H4.0577H4.05744H4.05718H4.05692H4.05667H4.05641H4.05615H4.0559H4.05564H4.05538H4.05513H4.05487H4.05462H4.05436H4.0541H4.05385H4.05359H4.05334H4.05308H4.05283H4.05257H4.05232H4.05206H4.05181H4.05155H4.0513H4.05105H4.05079H4.05054H4.05029H4.05003H4.04978H4.04953H4.04927H4.04902H4.04877H4.04851H4.04826H4.04801H4.04776H4.0475H4.04725H4.047H4.04675H4.0465H4.04624H4.04599H4.04574H4.04549H4.04524H4.04499H4.04474H4.04449H4.04424H4.04399H4.04374H4.04348H4.04323H4.04298H4.04273H4.04248H4.04224H4.04199H4.04174H4.04149H4.04124H4.04099H4.04074H4.04049H4.04024H4.03999H4.03975H4.0395H4.03925H4.039H4.03875H4.0385H4.03826H4.03801H4.03776H4.03751H4.03727H4.03702H4.03677H4.03652H4.03628H4.03603H4.03578H4.03554H4.03529H4.03504H4.0348H4.03455H4.03431H4.03406H4.03381H4.03357H4.03332H4.03308H4.03283H4.03258H4.03234H4.03209H4.03185H4.0316H4.03136H4.03111H4.03087H4.03062H4.03038H4.03014H4.02989H4.02965H4.0294H4.02916H4.02891H4.02867H4.02843H4.02818H4.02794H4.0277H4.02745H4.02721H4.02697H4.02672H4.02648H4.02624H4.02599H4.02575H4.02551H4.02527H4.02502H4.02478H4.02454H4.0243H4.02405H4.02381H4.02357H4.02333H4.02308H4.02284H4.0226H4.02236H4.02212H4.02188H4.02164H4.02139H4.02115H4.02091H4.02067H4.02043H4.02019H4.01995H4.01971H4.01947H4.01923H4.01898H4.01874H4.0185H4.01826H4.01802H4.01778H4.01754H4.0173H4.01706H4.01682H4.01658H4.01634H4.0161H4.01586H4.01562H4.01538H4.01515H4.01491H4.01467H4.01443H4.01419H4.01395H4.01371H4.01347H4.01323H4.01299H4.01275H4.01252H4.01228H4.01204H4.0118H4.01156H4.01132H4.01108H4.01085H4.01061H4.01037H4.01013H4.00989H4.00966H4.00942H4.00918H4.00894H4.0087H4.00847H4.00823H4.00799H4.00775H4.00752H4.00728H4.00704H4.0068H4.00657H4.00633H4.00609H4.00585H4.00562H4.00538H4.00514H4.00491H4.00467H4.00443H4.0042H4.00396H4.00372H4.00349H4.00325H4.00301H4.00278H4.00254H4.0023H4.00207H4.00183H4.00159H4.00136H4.00112H4.00088H4.00065H4.00041H4.00018H3.99994H3.9997H3.99947H3.99923H3.999H3.99876H3.99852H3.99829H3.99805H3.99782H3.99758H3.99735H3.99711H3.99688H3.99664H3.9964H3.99617H3.99593H3.9957H3.99546H3.99523H3.99499H3.99476H3.99452H3.99429H3.99405H3.99382H3.99358H3.99334H3.99311H3.99287H3.99264H3.9924H3.99217H3.99193H3.9917H3.99146H3.99123H3.99099H3.99076H3.99053H3.99029H3.99006H3.98982H3.98959H3.98935H3.98912H3.98888H3.98865H3.98841H3.98818H3.98794H3.98771H3.98747H3.98724H3.987H3.98677H3.98654H3.9863H3.98607H3.98583H3.9856H3.98536H3.98513H3.98489H3.98466H3.98442H3.98419H3.98396H3.98372H3.98349H3.98325H3.98302H3.98278H3.98255H3.98231H3.98208H3.98185H3.98161H3.98138H3.98114H3.98091H3.98067H3.98044H3.98021H3.97997H3.97974C3.53956 2.90999 3.12809 3.0636 2.80264 3.36075Z"
        fill={color ? color : "#000"}
        stroke={color ? color : "#000"}
      />
      <path
        d="M12 20.74C11.8661 20.74 11.75 20.6238 11.75 20.49V5.48999C11.75 5.35613 11.8661 5.23999 12 5.23999C12.1339 5.23999 12.25 5.35613 12.25 5.48999V20.49C12.25 20.6295 12.1382 20.74 12 20.74Z"
        fill={color ? color : "#000"}
        stroke={color ? color : "#000"}
      />
      <path
        d="M18.8646 8.20889L18.8647 8.20881L18.8568 8.20355L17.2767 7.15356L17 6.96966L16.7233 7.15356L15.1455 8.20207C15.0634 8.25496 14.968 8.26012 14.8844 8.21826C14.7981 8.16983 14.75 8.08415 14.75 7.99999V3.91997C14.75 3.8228 14.8084 3.72807 14.9124 3.68152C16.2616 3.14439 17.7324 2.72685 18.9578 2.53388L18.9578 2.53402L18.9694 2.5319C19.0257 2.52167 19.0999 2.53649 19.1721 2.59598C19.2161 2.63221 19.25 2.69503 19.25 2.78002V7.99999C19.25 8.09496 19.2025 8.1731 19.1193 8.21635L19.1193 8.21627L19.1105 8.22101C19.0737 8.2411 19.036 8.24999 19 8.24999C18.946 8.24999 18.9065 8.23785 18.8646 8.20889ZM17.1354 6.46107L17.1353 6.46116L17.1438 6.46678L17.9738 7.01677L18.75 7.53108V6.59996V3.68999V3.06499L18.1402 3.20219C17.3169 3.38743 16.4252 3.65408 15.5751 3.9716L15.25 4.093V4.43999V6.59996V7.53108L16.0262 7.01677L16.8562 6.46678L16.8563 6.46686L16.8646 6.46107C16.9038 6.43398 16.9525 6.41997 17 6.41997C17.0475 6.41997 17.0962 6.43398 17.1354 6.46107Z"
        fill={color ? color : "#000"}
        stroke={color ? color : "#000"}
      />
    </svg>
  );
};

export const G1 = (size, color) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="20" cy="20.0001" rx="20" ry="19.9999" fill="#63E196" />
      <path
        d="M20 16.5748L19.1083 18.1248C18.9083 18.4665 19.075 18.7498 19.4667 18.7498H20.525C20.925 18.7498 21.0833 19.0332 20.8833 19.3748L20 20.9248"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9167 25.0332V24.0665C15 22.9082 13.425 20.6498 13.425 18.2498C13.425 14.1248 17.2167 10.8915 21.5 11.8248C23.3833 12.2415 25.0333 13.4915 25.8917 15.2165C27.6333 18.7165 25.8 22.4332 23.1083 24.0582V25.0248C23.1083 25.2665 23.2 25.8248 22.3083 25.8248H17.7167C16.8 25.8332 16.9167 25.4748 16.9167 25.0332Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0833 28.3333C18.9917 27.7916 21.0083 27.7916 22.9167 28.3333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const G2 = (size, color) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="20" cy="19.9999" rx="20" ry="20.0001" fill="#FF8251" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.2194 25C17.9894 25 17.7694 24.905 17.6119 24.7375L13.5594 20.4217C13.2436 20.0867 13.2611 19.5592 13.5961 19.2442C13.9319 18.9292 14.4594 18.9458 14.7736 19.2808L18.2111 22.94L25.2177 15.2717C25.5294 14.9308 26.0561 14.9083 26.3961 15.2183C26.7352 15.5283 26.7586 16.0558 26.4486 16.395L18.8344 24.7283C18.6786 24.9 18.4569 24.9983 18.2252 25H18.2194Z"
        fill="white"
      />
    </svg>
  );
};

export const G3 = (size, color) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="20" cy="20.0001" rx="20" ry="20.0001" fill="#20BECE" />
      <path
        d="M25 15.9666C24.95 15.9583 24.8917 15.9583 24.8417 15.9666C23.6917 15.925 22.775 14.9833 22.775 13.8166C22.775 12.625 23.7333 11.6666 24.925 11.6666C26.1167 11.6666 27.075 12.6333 27.075 13.8166C27.0667 14.9833 26.15 15.925 25 15.9666Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1417 22.0333C25.2833 22.225 26.5417 22.025 27.425 21.4333C28.6 20.65 28.6 19.3666 27.425 18.5833C26.5333 17.9916 25.2583 17.7916 24.1167 17.9916"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.975 15.9666C15.025 15.9583 15.0833 15.9583 15.1333 15.9666C16.2833 15.925 17.2 14.9833 17.2 13.8166C17.2 12.625 16.2417 11.6666 15.05 11.6666C13.8583 11.6666 12.9 12.6333 12.9 13.8166C12.9083 14.9833 13.825 15.925 14.975 15.9666Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8333 22.0333C14.6917 22.225 13.4333 22.025 12.55 21.4333C11.375 20.65 11.375 19.3666 12.55 18.5833C13.4417 17.9916 14.7167 17.7916 15.8583 17.9916"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 22.1917C19.95 22.1834 19.8917 22.1834 19.8417 22.1917C18.6917 22.1501 17.775 21.2084 17.775 20.0417C17.775 18.8501 18.7333 17.8917 19.925 17.8917C21.1167 17.8917 22.075 18.8584 22.075 20.0417C22.0667 21.2084 21.15 22.1584 20 22.1917Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.575 24.8167C16.4 25.6 16.4 26.8833 17.575 27.6667C18.9083 28.5583 21.0917 28.5583 22.425 27.6667C23.6 26.8833 23.6 25.6 22.425 24.8167C21.1 23.9333 18.9083 23.9333 17.575 24.8167Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const G4 = (size, color) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="20" cy="20.0001" rx="20" ry="20.0001" fill="#FFC356" />
      <path
        d="M20 16.575L19.1083 18.125C18.9083 18.4667 19.075 18.75 19.4667 18.75H20.525C20.925 18.75 21.0833 19.0333 20.8833 19.375L20 20.925"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9167 25.0335V24.0668C15 22.9085 13.425 20.6501 13.425 18.2501C13.425 14.125 17.2167 10.8916 21.5 11.8249C23.3833 12.2416 25.0333 13.4916 25.8917 15.2167C27.6333 18.7167 25.8 22.4335 23.1083 24.0585V25.0252C23.1083 25.2669 23.2 25.8252 22.3083 25.8252H17.7167C16.8 25.8335 16.9167 25.4752 16.9167 25.0335Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0833 28.3335C18.9917 27.7918 21.0083 27.7918 22.9167 28.3335"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Rectangle = (size, color) => {
  return (
    <svg
      width="1216"
      height="334"
      viewBox="0 0 1216 334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1216 310C1216 323.255 1205.25 334 1192 334L24 334C10.7451 334 9.39372e-07 323.255 2.09815e-06 310L2.70222e-05 24.9017C2.82113e-05 11.2999 11.2923 0.416582 24.8848 0.918048L1192.88 44.0087C1205.79 44.4846 1216 55.0818 1216 67.9923L1216 310Z"
        fill="#FBF5F1"
      />
    </svg>
  );
};

import React from 'react';

interface GridProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

const Grid: React.FC<GridProps> = ({
  width,
  height,
  color = 'var(--hsd-ui-color-gray-500)'
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.25 3.5C4.38235 3.5 3.5 4.38235 3.5 7.25C3.5 10.1176 4.38235 11 7.25 11C10.1176 11 11 10.1176 11 7.25C11 4.38235 10.1176 3.5 7.25 3.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.25 14C4.38235 14 3.5 14.8824 3.5 17.75C3.5 20.6176 4.38235 21.5 7.25 21.5C10.1176 21.5 11 20.6176 11 17.75C11 14.8824 10.1176 14 7.25 14Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.75 14C14.8824 14 14 14.8824 14 17.75C14 20.6176 14.8824 21.5 17.75 21.5C20.6176 21.5 21.5 20.6176 21.5 17.75C21.5 14.8824 20.6176 14 17.75 14Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.75 3.5C14.8824 3.5 14 4.38235 14 7.25C14 10.1176 14.8824 11 17.75 11C20.6176 11 21.5 10.1176 21.5 7.25C21.5 4.38235 20.6176 3.5 17.75 3.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Grid;

// const Grid: React.FC<GridProps> = ({
//   width,
//   height,
//   color = 'var(--hsd-ui-color-gray-500)'
// }) => {
//   return (
//     <svg
//       width={width}
//       height={height}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M14.9999 3.33334H4.99992C4.07944 3.33334 3.33325 4.07954 3.33325 5.00001V15C3.33325 15.9205 4.07944 16.6667 4.99992 16.6667H14.9999C15.9204 16.6667 16.6666 15.9205 16.6666 15V5.00001C16.6666 4.07954 15.9204 3.33334 14.9999 3.33334Z"
//         stroke="currentColor"
//         strokeWidth="1.2"
//         strokeLinecap="round"
//         style={{ stroke: color }}
//       />
//       <path
//         d="M3.33325 7.5H16.6666"
//         stroke="currentColor"
//         strokeWidth="1.2"
//         strokeLinecap="round"
//         style={{ stroke: color }}
//       />
//       <path
//         d="M7.5 8.33334V16.6667"
//         stroke="currentColor"
//         strokeWidth="1.2"
//         strokeLinecap="round"
//         style={{ stroke: color }}
//       />
//     </svg>
//   );
// };

import React, { CSSProperties } from 'react';

interface InboxProps extends React.HTMLAttributes<SVGElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
  rest?: CSSProperties;
}

const Inbox: React.FC<InboxProps> = ({
  width,
  height,
  color = 'var(--hsd-ui-color-gray-500)',
  ...rest
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M3 12H7.26393C8.02148 12 8.714 12.428 9.05279 13.1056L9.44721 13.8944C9.786 14.572 10.4785 15 11.2361 15H12.9296C13.5983 15 14.2228 14.6658 14.5937 14.1094L15.4063 12.8906C15.7772 12.3342 16.4017 12 17.0704 12H21M3 12V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V12M3 12L5.51334 5.29775C5.80607 4.51715 6.55231 4 7.386 4H16.614C17.4477 4 18.1939 4.51715 18.4867 5.29775L21 12"
          style={{ stroke: color }}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Inbox;

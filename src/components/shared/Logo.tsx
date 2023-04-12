import { NavLink } from 'react-router-dom';

const Logo = ({
  className = 'transition-all duration-300 dark:bg-gray-600 bg-gray-200 rounded-full p-1',
}) => {
  return (
    <NavLink to="/" className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className={className}
      >
        <path
          fill="#1f2937"
          d="M9.628 14.764v-5.45a6.738 6.738 0 0 1 3.256 3.957m2.456 20.034c.262-2.197-.933-7.494-5.712-9.45c-.358 2.36.841 6.816 5.712 9.45Z"
        />
        <path
          fill="#1f2937"
          d="M24 11.267c11.651 0 18.081 6 18.081 6v8.303C42.081 35.547 27 40.22 24 43.5c-3-3.28-18.081-7.953-18.081-17.93v-8.303s6.43-6 18.081-6Z"
        />
        <path
          fill="#1f2937"
          d="M38.372 14.764v-5.45a6.738 6.738 0 0 0-3.256 3.957"
        />
        <path
          fill="#1f2937"
          d="M31.655 12.184c.748-2.293 3.02-7.684 10.426-7.684v12.767C29.465 25.36 27.35 33.872 27.35 41.148a24.394 24.394 0 0 0-6.698 0c0-7.276-2.116-15.787-14.732-23.88V4.5c7.407 0 9.678 5.391 10.426 7.684"
        />
        <path
          fill="#1f2937"
          d="M32.66 33.305c-.262-2.197.933-7.494 5.712-9.45c.358 2.36-.841 6.816-5.712 9.45Z"
        />
      </svg>
    </NavLink>
  );
};

export default Logo;

const Linkedin = ({ size = 30, color = 'currentColor' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 512 512"
      width={size}
      height={size}
    >
      <g>
        <path
          fill="#2867b2"
          d="M512 64c0-35.323-28.677-64-64-64H64C28.677 0 0 28.677 0 64v384c0 35.323 28.677 64 64 64h384c35.323 0 64-28.677 64-64V64z"
        ></path>
        <g fill="#fff">
          <path d="M61.053 178.667H146.813V436.629H61.053z"></path>
          <path
            fillRule="nonzero"
            d="M104.512 54.28C75.171 54.28 56 73.57 56 98.853c0 24.752 18.588 44.574 47.377 44.574h.554c29.903 0 48.516-19.822 48.516-44.574-.555-25.283-18.611-44.573-47.935-44.573z"
          ></path>
          <path
            fillRule="nonzero"
            d="M357.278 172.601c-45.49 0-65.866 25.017-77.276 42.589v-36.523h-85.738c1.137 24.197 0 257.961 0 257.961h85.737V292.564c0-7.711.554-15.42 2.827-20.931 6.188-15.4 20.305-31.352 43.993-31.352 31.012 0 43.436 23.664 43.436 58.327v138.02h85.741v-147.93c0-79.237-42.305-116.097-98.72-116.097z"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Linkedin

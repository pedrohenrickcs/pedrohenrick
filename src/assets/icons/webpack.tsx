const Webpack = ({ size = 50, color = 'currentColor' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="#fff"
        d="M8 4.217l2.25 1.35 3.268-1.635L8 .712v3.505zM7 .713L1.482 3.932 4.75 5.566 7 4.216V.714zM1 4.809v5.422l3.5-1.556V6.56L1 4.809zM1.523 11.092L7 14.287v-3.504l-2.034-1.22-3.443 1.53zM8 14.287l5.477-3.195-3.443-1.53L8 10.783v3.504zM14 10.23V4.81l-3.5 1.75v2.116l3.5 1.556zM8 9.617l1.5-.9V7.059l-1.5.75v1.808zM7 7.809v1.808l-1.5-.9V7.059l1.5.75zM5.811 6.096l1.689.845 1.689-.845L7.5 5.083 5.811 6.096z"
      ></path>
    </svg>
  )
}

export default Webpack

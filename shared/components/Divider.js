import { Box } from "@chakra-ui/react";
const Divider = ({ color, height, width }) => (
  <Box
    transform="scale(.75) rotate(180deg)"
    width={width}
    height={height}
    stroke={color}
  >
    <svg
      width="401"
      height="31"
      viewBox="0 0 401 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M51.0608 30L26.0304 1L1 30" stroke={color} />
      <path d="M50.9465 30L75.9769 1L101.007 30" stroke={color} />
      <path d="M150.839 30L125.809 1L100.779 30" stroke={color} />
      <path d="M200.672 30L175.641 1L150.611 30" stroke={color} />
      <path d="M250.504 30L225.473 1L200.443 30" stroke={color} />
      <path d="M300.336 30L275.305 1L250.275 30" stroke={color} />
      <path d="M350.168 30L325.137 1L300.107 30" stroke={color} />
      <path d="M400 30L374.97 1L349.939 30" stroke={color} />
    </svg>
  </Box>
);

export default Divider;

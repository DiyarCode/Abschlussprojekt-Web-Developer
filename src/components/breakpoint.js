const size = {
  m: "755px",
  sm: "650px",
  lg: "1200px",
};
const device = {
  m: `(max-width: ${size.m})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};

export default { size, device };

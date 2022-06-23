const size = {
  s: "460px",
  m: "755px",
  sm: "650px",
  lg: "1200px",
};
const device = {
  m: `(max-width: ${size.m})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
  s: `(max-width: ${size.s})`,
};

export default { size, device };

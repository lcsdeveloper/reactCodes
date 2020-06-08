export function sumValues(values) {
  return values.reduce((total, val) => total + val, 0);
}

export default function oddOnly(values) {
  return sumValues(values.filter((item, index) => index % 2 === 0));
}
export default function heatMapColorForValue(value, dynamic, opacity) {
  if (value > 1) value = 1;
  const h = (1.0 - value) * 240;
  return `hsla(${h}, 100%, 50%, ${dynamic ? value : opacity})`;
}

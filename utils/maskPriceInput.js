export default function (string) {
  let value = string;

  value = +value.trim().replaceAll(/\D/g, '');
  value = value.toLocaleString().replaceAll(',', ' ');

  return value;
}

export default function (string) {
  let value = string;

  value = +value.trim().replaceAll(/\D/g, '');
  value = value.toLocaleString().replaceAll(',', ' ');

  if (+value === 0) {
    value = '';
  }

  return value;
}

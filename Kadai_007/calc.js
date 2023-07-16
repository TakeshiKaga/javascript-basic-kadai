let num = 9;

switch (num) {
  case num % 3 === 0:
    console.log('3の倍数です');
    break;
  case num % 5 === 0:
    comsole.log('5の倍数です');
    break;
  case num % 3 === 0 && num % 5 === 0:
    console.log('3と5の倍数です');
    break;
  default:
    console.log(num);
}

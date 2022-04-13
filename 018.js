const num = prompt('점수를 입력해주세요').split(' ');

let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(num[i], 10);
}

console.log(Math.floor(sum / 3));

// 祝日の一覧
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日",
  "みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// for文で配列のデータを出力する
console.log('*** for文での出力 ***')
for (let i = 0; i < holidays.length; i++) {
   console.log(holidays[i]);
}

// while文で配列のデータを出力する
console.log('*** while文での出力 ***')
let j = 0;
while (j < holidays.length) {
  console.log(holidays[j]);
  j = j + 1;
}


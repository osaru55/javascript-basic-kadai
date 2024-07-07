// 変数の定義
let num = 90;

// 値の確認
console.log('num = ' , num);

// numの判定
if (num % 3 === 0 && num % 5 === 0){
  console.log('3と5の倍数です');
}
else if(num % 3 === 0){
  console.log('3の倍数です');
}
else if(num % 5 === 0){
  console.log('5の倍数です');
}
else{
   console.log(num);
}
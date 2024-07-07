// 本日の日付を取得して表示する

// 本日日時を取得する
let today = new Date();

// 西暦年、月（1を加算）、日を取り出す
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();


// 西暦年月日の形式で表示する
console.log( year + '年'+ month + '月' + day + '日');
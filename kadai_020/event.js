
// btnというidを持つHTML要素を取得し、定数に代入する
const  btn = document.getElementById('btn')

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされてときにイベント処理を実行する
btn.addEventListener('click',() =>{
  //　テキストを変更する
  text.textContent = 'ボタンをクリックしました';

});

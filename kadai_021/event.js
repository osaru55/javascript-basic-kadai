
// btnというidを持つHTML要素を取得し、定数に代入する
const  btn = document.getElementById('btn')

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされた2秒後にイベント処理を実行する
btn.addEventListener('click',() =>{
  setTimeout(() => {
  //　テキストを変更する
  text.textContent = 'ボタンをクリックしました';
  },2000)
});  


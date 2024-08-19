// ボタン要素の定数に代入
const button = document.getElementById('btn');

// テキスト要素に定数に代入
const text = document.getElementById('text');

// ボタンをクリックしたらテキストを変える
button.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました'
});
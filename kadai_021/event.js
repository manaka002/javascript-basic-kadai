// ボタン要素の定数に代入
const button = document.getElementById('btn');

// テキスト要素に定数に代入
const text = document.getElementById('text');

button.addEventListener('click', () => 
{
  // 2秒後にテキストを変更する処理
  setTimeout(() => 
    {
      text.textContent = 'ボタンをクリックしました';
    }, 2000); 
});
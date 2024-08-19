// 日付
const now = new Date(2023,7,22);

// 年
const year = now.getFullYear();

// 月（0から始まるので、1を足して調整）
const month = now.getMonth() + 1;

// 日
const day = now.getDate();


// 出力
console.log(`年: ${year}`);
console.log(`月: ${month}`);
console.log(`日: ${day}`);
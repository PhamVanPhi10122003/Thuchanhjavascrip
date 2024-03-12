const arr = [];

function Nhap(callback) {
  while (true) {
    let input = prompt("Nhập một số bất kỳ. Nhấn Cancel hoặc để trống để kết thúc:");
    if (input === null || input === "") {
      break; 
    }
    let number = Number(input);
    arr.push(number);
  }
  if (typeof callback === 'function') {
    console.log("Mảng các số chẵn tìm được: ", callback(arr));
  }
}

function timSoChan(arr) {
  return arr.filter(number => number % 2 === 0);
}

Nhap(timSoChan);
const isOdd = (num) => { return num % 2 == 1}

console.log(isOdd(3)) ;

var sachs = [
    {
        tacgia: 'Harper Lee' , 
        tieuDe: 'To Kill a Mockingbird' ,
        namXuatBan : 2020,
        trangthai: true,
    },
    {
        tacgia: 'Ray Bradbury',
        tieuDe: 'Fahrenheit 451',
        namXuatBan: 2020,
        trangthai: false,
    }
]
//console.log(sachs[0]['tacgia']);

//Viết hàm nhập vào đầu vào là 1 máng số,xuất ra 1 số lớn nht và 1 số bé nhất theo
//thú tự nhu vậy.
//Vi dụ input: [2,3,4,5] => output : 5,2

function bai1(){
    var mang1 = [2,3,5,4];
    let min = mang1[0], max = mang1[0];
    for( let i = 0 ; i < mang1.length ; i++)
    {
        if(min > mang1[i]){
            min = mang1[i];
        }
        if(max<mang1[i])
        {
            max = mang1[i];
        }
        
    }
    return console.log(max,min);
    }
    bai1(); 
/*
2. Viết hàm nhập vào 1 câu,
9 và tim từ dài nht trong câu đó rồi xuất ra.
10 V1 dụ: CO Thuy đẹp gái => xuất ra Thuy.
*/


//JS-Core: Function parameters
function plusAll() {
var res = 0;
for (var i in arguments) {
 res += arguments [i];
}
return res;
}
document.writeln(plusAll(1) + "<br/>");

document.writeln (plusAll (2,3,5) + "<br/>");
 
function func1( a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
func1(1,2,3);



// let firstNum = prompt("첫번째 숫자");
// let secondNum = prompt("두번째 숫자");
// let dustkswk = prompt("어떤걸 하고싶냐냥", "더하기 뺴기 곱하기 나누기 제곱");

// function rPtksrl(firstNum, secondNum, dustkswk) {
//     firstNum = Number(firstNum);
//     secondNum = Number(secondNum);
//     if (dustkswk == "더하기"){
//         document.write(firstNum + secondNum);
//     }
//     else if (dustkswk == "빼기"){
//         document.write(firstNum - secondNum);
//     }
//     else if (dustkswk == "곱하기"){
//         document.write(firstNum * secondNum);
//     }
//     else if (dustkswk == "나누기"){
//         document.write(firstNum / secondNum);
//     }
//     else if (dustkswk == "제곱"){
//         document.write(firstNum ** secondNum);
//     }
// }
// rPtksrl(firstNum, secondNum, dustkswk);

const rPtksrl = {
    pl:function(a , b){
    console.log(a + b)
    },
    min:function(a , b){
    console.log(a - b)
    },
    multi:function(a , b){
    console.log(a * b)
    },
    div:function(a , b){
    console.log(a / b)
    },
    pow:function(a , b){
    console.log(a ** b)
    }
}
rPtksrl.pl(34, 35);
rPtksrl.min(29, 5);
rPtksrl.multi(7, 1);
rPtksrl.div(69, 10);
rPtksrl.pow(0, 0);

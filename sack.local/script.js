'use strict';

//console.log('RECM');

/*let a;// меняется
var b;
const test = 123; // постоянная
let c = 123; число
let s = '123'; строка*/
//console.log(test);

//let a=2;
// b=2;

/*let a='2';
let b='2';
console.log(+a + +b); выведет 2, а не строки 
+ перед строкой преобразовывает ее в число
console.log(a ** 2 * 1); ** - возведение в степень, имеет приоритет перед умножением
*/

/*let obj = {x: 1, y: 2, z: 3};
    if(obj.z ==3 && 'z' in obj)
    {
        console.log("ok");
    }
    else{
        console.log("no")
    }*/

/*let Name = prompt('Как вас зовут?');
let age = prompt('Сколько вам лет?');
let obj = [];
    if( age >= 18)
        {
            obj.push({'призывник': Name});
        
        }
        else{
           obj.push({'не призывник': Name});
            
        }
console.log(obj);*/

/*let lang =  'ru';
switch (lang){ //используем когда есть одна переменная и одно значение 
    case 'ru':
        console.log('рус');
	break;
    case 'en':
        console.log('англ');
	break;
    case 'de':
        console.log('нем');
	break;
    default:
        console.log('язык не поддерживается');
    break;
}*/


//  let переменная = условие ? значение1 : значение2; - тернарный оператор
//    let adult = age >= 18 ? true: false;

//let num = -1;
//let res= num >= 0 ? '1': '2';
//console.log(res);
        
 
/*let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log(a>b);*/



/*let obj = [1,2,3];
//console.log(obj.length);
//console.log (typeof (obj[0]));
if (obj.length == 3) {
	let summ = obj[0] + obj[1] + obj[2] ;
    console.log(summ);
}
else{
    console.log("массив содержит больше трех элементов");
}*/

/*// объявление строки
const string = "Hello World!";

// поиск символа по индексу 1
let index1 = string.charAt(1); //= string[0]*/

//1 задание
/*let month=5;
if(month==12||month==1||month==2)
{
    console.log("Зима");
}
else if(month==3||month==4||month==5)
{
    console.log("Весна");
}
else if(month==6||month==7||month==8)
{
    console.log("Лето");
}
else if (month==9||month==10||month==11)
{
    console.log("Осень");
}
else{
    console.log("Ошибка");
}*/

//2 задание
/*let str='abcde';

if (str.charAt(0)=='a') {
    console.log("Да");
    
} else {
    console.log("Нет");
}*/

//3 задание
/*let num=12345;
let str = String(num);
let one=str.substring(0,1);
let first=Number(one);

if(first ==1||first==2||first==3)
{
    console.log("Да");
}
else{
    console.log("Нет");
}*/

//4 задание
//Дано трехзначное число. Найдите сумму цифр этого числа.
/*let num=123;
let str = String(num);
let result=Number(str[0])+Number(str[1])+Number(str[2]);
console.log(result);*/


//5 задание
//Дано число из 6-ти цифр. 
//Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.
/*let num=123124;
let str = String(num);
let one=Number(str[0])+Number(str[1])+Number(str[2]);
let two=Number(str[3])+Number(str[4])+Number(str[5]);
if (one==two) {
    console.log("Да");
} else {
    console.log("Нет");
}*/

/*for (let i = 1; i <= 100; i++) {
    if(i%2==0)
    {
        console.log(i);
    }
    else {
        
    }

   let num=i%2==0?i:'';
   console.log(num);
}*/
/*for (let i = 1; i <= 100; i+=2) {
         console.log(i);
 }*/


/*let str='<table border="1">';
for (let i = 1; i <= 10; i++) {

    str+='<tr>';
    for (let j = 1; j <= 10; j++) {
        
        str+=`<td>${i+j}</td>`;
        
    }
    str+='</tr>';
    
}
str+='</table>';
document.body.innerHTML=str;
*/

/*let num=1;
let str='<table border="1">';
for (let i = 1; i <= 10; i++) {

    str+='<tr>';
    for (let j = 1; j <= 10; j++) {
        
        str+=`<td>${num++}</td>`;
        
        
    }
    str+='</tr>';
    
}
str+='</table>';
document.body.innerHTML=str;*/

/*let arr=[1,2,3,4,5,6];
let num=1;
for (let i = 0; i < arr.length; i++) {
    //num+=i;
    array[i]*=2;
}
console.log(num);*/


/*let arr=[1,2,3,4,5,6];
let sum=0;
for (let elem of arr) {
    sum+=elem;
}
console.log(sum);*/

//let arr={str1:1,str2:2,str3:3,str4:4,str5:5};
//let sum=0;
/*for (let elem in arr) {
   // console.log(elem);//ключи
    //console.log(arr[elem]);
}*/


/*for (let elem in arr) {
    let num=arr[elem];
    arr[elem]=elem;
      console.log(arr[elem]);
    elem=num;
 console.log(elem);
 arr.key=arr[elem];
 arr.value=elem;

   
}
console.log(arr);*/ //довести до ума

/*for (let elem in arr) {
    arr[arr[elem]]=elem;    
    delete (arr[elem]);
    
}
console.log(arr);*///решение


/*let chet=0;
let sum=0;
for(let i=1;i<1000;i++)
{
    sum+=i;
    chet++;
    if(sum>100)
    {
        break;
    }
}
console.log(chet);
console.log(sum);*/
//Math.floor(Math.random()*10);

/*let arr=[];
let arr2=[];
for (let i = 0; i < 100; i++) {
    arr[i]=i+1;
    //console.log(arr[i]);
    for (let j = 0; j < 100; j++) {
        if(arr[i]%2==0){
            arr2[j]=arr[i];
            console.log(arr2[j]);
        }
    }
}*/ //не совсем верно


/*let arr=[];
let arr2=[];
for (let i = 0; i <= 100; i++) {
    arr.push(i);
}
for(let el of arr){
    if(el%2==0){
        arr2.push(el);
    }
}
console.log(arr2);*/ // более правильное решение


//let num=prompt('Введите число');
//let flag=false;
/*if(num%1==0&&num%num==0){
    flag=true;
}
else {
    flag=false;
}

if(flag==true){
    alert('Число простое'); 
}
else{
    alert('Число не простое');
}*/ //немного не то

/*for (let i = 2; i < num; i++) {
    if(num%i==0){
        flag=true;
    }
}
if(flag==false){
    alert('Число простое'); 
}
else{
    alert('Число не простое');
}*/


/*let min= parseInt(prompt('Введите минимальное число',1));
let max= parseInt(prompt('Введите максимальное число',10));
let flag=false;
function Random(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
let rand=Random(min,max);
console.log(rand);
for (let i = 2; i < rand; i++) {
    if(rand%i==0){
        flag=true;
    }
}
if(flag==false){
    alert('Число простое'); 
}
else{
    alert('Число не простое');
}*/


/*function name2() { // возжно вызвать в любой момент
    alert('Привет');
}
name2();//вызываем функцию

name2();
name2();
name2();//вызываем функцию несколько раз*/

/*let func=function(){ // можно вызвать только после объявления
    alert('Привет2');
}
func();*/


/*for(let i=1;i<=50;i++)
    {
        if (i%3==0) {
            console.log(i);
        } else {
            
        }
    }*/
    /*for (let i = 9; i >0; i--) {
        for (let n = 0; n <i; n++) {
          document.write(i); 
        }
        document.write('<br>')
      }*/


/*function Sqrting(num1,num2){
     let sqrt1=Math.sqrt(num1);
    // console.log(sqrt1);
     let sqrt2=Math.sqrt(num2);
     //console.log(sqrt2);
     let sum=sqrt1+sqrt2;
     return console.log(sum);
}
Sqrting(3,4);*/ //ужас ужас

/*function getsqrt(num){
    return Math.sqrt(num);
}
console.log(getsqrt(3)+getsqrt(4));*/


//Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, 
//пока результат не станет меньше 10. Пусть функция возвращает количество итераций, 
//которое потребовалось для достижения результата.
/*function del(num){
    let count=0;
    while(num>=10){
        num/=2;
        count++;
    }
    return count;
}
let result=del(100);
console.log(result);*/


//Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
/*let arr=[1,2,3,4,5,6,7,8,9,10,11,11];
function check_array(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            return true;
        }
    }
    return false;
}
//console.log(check_array(arr));
function check(arr){

    if (check_array(arr)==true) {
        console.log('Есть');
        
    } else {
        console.log('Нет');
}
}
check(arr);*/


/*let obj={
    summ: function(arr){
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        return sum;
    },
    square: function(arr){
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i]*arr[i];
        }
        return sum;
    },
    cube: function(arr){
        
            let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i]*arr[i]*arr[i];
        }
        return sum;
       
    }
}
let arr=[1,2,3,4,5];
//console.log(obj.summ(arr));
//console.log(obj.square(arr));
//console.log(obj.cube(arr));
function test(summ, square, cube, arr){
    return summ(arr)+square(arr)+cube(arr);
}
console.log(test(obj.summ,obj.square,obj.cube,arr));*/


//253 статья js
/*function each(arr,callback){
    let result=[];
    for(let elem of arr){
        result.push(callback(elem));
    }
    return result;
}
console.log(each([1,2,3,4,5], function (num){ return num*2;})); // 1 задание


console.log(each(['square','cube','summ'], //2 задание
    function (str){
     return str.split('').reverse().join('') ;
    }));


console.log(each(['square','cube','summ'],//3 задание
    function (str){
         return str[0].toUpperCase() +str.slice(1);
        }
));*/

/*function filter(arr, callback){
    let res=[];
    for(let elem of arr){
        if(callback(elem)===true)
        {
            res.push(elem);
        }
    }
    return res;
}
let result = filter([1,2,3,0,-1,4,5],elem => elem>0);
console.log(result);*/


/*let arr = [1,2,3,4,5];
function func(arr){
    console.log(arr.shift());
    if(arr.length!=0){
        func(arr);
    }
}
func(arr);*/


//1 задание
/*let arr = [4,9,16];
let res=arr.map(function(elem){return Math.sqrt(elem);});
console.log(res);


//2 задание
let arr1=['square','cube','summ'];
let res1=arr1.map(function (elem){ return elem +"!"});
console.log(res1);


//3 задание
let arr2=['square','cube','summ'];
let res2=arr2.map(function (elem){ return elem.split('').reverse().join('');});
console.log(res2);


//4 задание
let arr3=['123','456','789'];
let new_arr=arr3.map(function (str){return str.split('').map(Number)});
console.log(new_arr);


//5 задание
let arr4=[1,2,3,4,5,6];
let res4=arr4.map(function (elem,index){ return elem * (index+1); });
console.log(res4);*/

//найти сумму квадратов элементов массива с помощью forEach метода
/*let arr5=[1,2,3,4,5,6];
let sum=0;
arr5.forEach(elem=>sum+= elem*elem);
console.log(sum);*/


/*let arr=[1,2,3,4,5,6,7,8];
let res=arr.filter((number,index)=>number*(index+1)<30);
console.log(res);*/


/*let randomized=function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cont=false;
let chet=0;

function play(){
    let random_num=randomized(0,99); 
    while(!cont){
        let user_num=parseInt(prompt('Введите число от 0 до 99, -1 для выхода',55));
        
        if(user_num==-1){
            return;
        }
        else{
        }
            if(user_num<0||user_num>99){
                alert('Введите число от 0 до 99');
                continue;
            } 
            else{
            }
            chet++;
            if(user_num<random_num){
                alert('Загадонное число больше');
            }
            else if(user_num>random_num){
                alert('Загаданное число меньше');
            }
            else{
                alert('Вы угадали! Это было число '+random_num+', вы угадали за '+chet+' попыток');
                
                if(confirm('Хотите сыграть еще раз?'))
                {
                    chet=0;
                    play();
                }
                else{
                alert('Спасибо за игру!');
                chet=0;
                return;
                }
                cont=true;
            }
        
    }
}
play(); */ //угадайка


//кр
//1 Задание
//Дан массив дат ['01.09.2023','02.10.2023','03.11.2023'] С помощью метода map необходимо преобразовать каждый элемент массива дат в их форматы в виде строки. 
//Т.е. ['01 сентября 2023', '02 октября 2023', '03 ноября 2023']
/*let date = ['01.09.2023','02.10.2023','03.11.2023'];
let months=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
let formdate= date.map(date=>{
    let [day,month,year]= date.split('.'); //
    return `${day} ${months[parseInt(month)-1]} ${year}`;
});
//console.log(date);
console.log(formdate);*/
//2 Задание 
//Дан массив чисел [6,2,7,4,8,3,9,1] С помощью метода reduce необходимо преобразовать массив чисел в строку, представляя числа как цифры. 
//Т.е. получить строку '62748391'
/*let arr=[6,2,7,4,8,3,9,1];
let res=arr.reduce((accum,elem)=>{
    return accum+elem.toString();
});
console.log(res);*/

//3 Задание 
//Дан массив чисел [16,27,75,45,80,32,90,14] Напишите функцию, которая принимает массив чисел и с помощью метода foreach возвращает сумму всех чисел, 
//которые делятся на 5 без остатка.
/*let number=[16,27,75,45,80,32,90,14];
function Summ_arr(numb){
    let sum=0;
    numb.forEach(element => {
        if(element%5===0){
            sum+=element;
        }
    });
    return sum;
}
console.log(Summ_arr(number));*/

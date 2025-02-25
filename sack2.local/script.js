'use strict';
//Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент на положение прокрутки 100px по вертикали и 50px по горизонтали.
//let elem=document.getElementById('elem');
//let button=document.getElementById('btn');
/*button.addEventListener('click', () => {
    elem.scrollTop=100;
    elem.scrollLeft=50;
});*/

//Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент на 50px вниз от текущего положения прокрутки.
/*button.addEventListener('click', () => {
    elem.scrollTop+=50;
});*/
//Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент в самый верх.
/*let button2=document.getElementById('btn2');

button2.textContent="Вверх";
button2.addEventListener('click', () => {
elem.scrollTop=0;
});*/
//Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент в самый низ.
/*button.addEventListener('click', () => {
    elem.scrollTop = elem.scrollHeight - elem.clientHeight;
});*/

//Дан элемент и кнопка. По нажатию на кнопку проверьте, прокручен ли элемент до конца по вертикали.
/*button.addEventListener('click',()=>{
    if(!(elem.scrollTop + elem.clientHeight >= elem.scrollHeight)){
        elem.scrollTop = elem.scrollHeight - elem.clientHeight;
    }else{

    }
});*/

//Дан элемент и кнопка. По нажатию на кнопку распахните элемент на всю высоту.
/*let button2=document.getElementById('btn2');
button2.addEventListener('click',()=>{
    elem.style.height = elem.scrollHeight + 'px';
});*/


// задавалово

/*let body = document.querySelector('body');
let currentIndex = 0;
let waitTimer = null;
let ad = document.getElementById('ad');
let boolForAD = false;

// ФУнкции

function getOffset(elem) {
    let rect = elem.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX
    };
}

function centerJumpingBlock(target) {
    let jumpingBlock = document.getElementById('jumpingBlock');
    
    if (target) {
        let targetOffset = getOffset(target);

        let jumpingBlockWidth = jumpingBlock.offsetWidth;

        let jumpingBlockHeight = jumpingBlock.offsetHeight;

        let left = targetOffset.left + (target.offsetWidth/2) - (jumpingBlockWidth/2);
        
        let top = targetOffset.top + (target.offsetHeight/2) - (jumpingBlockHeight/2);
    
        jumpingBlock.style.left = `${left}px`;
        
        jumpingBlock.style.top = `${top}px`;
    }
}
function checkScroll() {
    let targets = document.querySelectorAll('.targetBlock');

    if(currentIndex < targets.length){
        let targetOffset = getOffset(targets[currentIndex]);

        if (targetOffset.top <= window.scrollY + window.innerHeight && targetOffset.top + targets[currentIndex].offsetHeight > window.scrollY) {
            centerJumpingBlock(targets[currentIndex]);
            currentIndex++;
        }

    }

    if (currentIndex > 0) {
        let prevTarget = targets[currentIndex - 1];
        let prevTargetOffset = getOffset(prevTarget);

        if (prevTargetOffset.top - prevTarget.offsetHeight > window.scrollY) {
            currentIndex--;
            centerJumpingBlock(targets[currentIndex]);
        }
    }
    // Получаем позиции окна
    var windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
    let currentActivesBlocks = 0;
    targets.forEach(target => {
        var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        }
        if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom && targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) {
            console.log('Вы видите элемент :)');
            currentActivesBlocks++;
          }
    });
    if (currentActivesBlocks > 1) {
        boolForAD = true;
    }
    else{
        boolForAD = false;
    }

}

function updateJumpingBlockPosition() {
    let targets = document.querySelectorAll('.targetBlock');
    centerJumpingBlock(targets[currentIndex]);
}

function resetInactivityTimer(){
    checkScroll;
    ad.style.display = 'none';
    ad.style.width = `0%`;
    clearTimeout(waitTimer);

    if (!boolForAD) {
        waitTimer = setTimeout(()=>{
            //код на 2 сек бездействия
            ad.style.display = 'flex';
            ad.style.width = `20%`;
    
        },2000);
    }
}
// скрипт

window.onload = updateJumpingBlockPosition;
window.onresize = updateJumpingBlockPosition;
window.onscroll = checkScroll;


window.addEventListener('mousemove', resetInactivityTimer);
window.addEventListener('scroll', resetInactivityTimer);
window.addEventListener('click', resetInactivityTimer);
window.addEventListener('keydown', resetInactivityTimer);

resetInactivityTimer();*/


//Получите представленные данные в формате JSON в виде 
//объекта с ключами surname, name, patronymic.
/*let td=document.querySelectorAll('td');
let arr=[];
for (let i=0; i<td.length; i+=3){
    let arr_result={
        surname:td[i].textContent,
        name:td[i+1].textContent,
        patronymic:td[i+2].textContent
    };
    arr.push(arr_result);
}

let json=JSON.stringify(arr);
console.log(json);  */


//Добавьте в эту строку еще одного работника.
/*let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;*/

/*let arr  = JSON.parse(json);
arr.push(		{"name": "user4",
    "age": 28,
    "salary": 4000});

let res = JSON.stringify(arr);
console.log(res);*/
/*let input=document.querySelectorAll("input");
let button=document.getElementById("submit");
button.addEventListener('click',()=>{
    let newUser={
        name:input[0].value,
        age:parseInt(input[1].value),
        salary:parseInt(input[2].value)
    };
    let arr  = JSON.parse(json);
    arr.push(newUser);
    let res = JSON.stringify(arr);
    console.log(res);
    input[0].value='name';
    input[1].value='age';
    input[2].value='salary';
});*/

//По заходу пользователя на сайт запишите в локальное хранилище 
//текущий момент времени. Затем по повторному заходу выведите, 
//сколько прошло времени с предыдущего захода пользователя на сайт.
/*let time = localStorage.getItem('time');

if (time===null) {
	let now = Date.now();
	localStorage.setItem('time', now);
}
else{
    let now = Date.now();
    let diff = now - time;
    console.log(`Время с последнего захода: ${diff/1000} секунд`);
    localStorage.setItem('time', now);
}*/


//По заходу пользователя на сайт спросите у него дату рождения. 
//При следующем заходе пользователя на сайт, 
//если у него в этот день будет День Рождения - поздравьте его с этим праздником.

/*function askBD() {
    let birthday=prompt("Введите вашу дату рождени (в формате ГГГГ-ММ-ДД) :");
    if(birthday){
        localStorage.setItem('birthday', birthday);
    }
}
function checkBD() {
    let birthday = localStorage.getItem('birthday');
    if(birthday){
        let today= new Date();
        let bDay = new Date(birthday);
        if(today.getMonth()===bDay.getMonth()&&today.getDate()===bDay.getDate()){
            alert("С днем рождения!");
        }
        else{
            console.log("Сегодня не день рождения!");
        }
    }
    else{
        askBD();
    }
}
askBD();
checkBD();*/

/*let button=document.getElementById('checkBD');
button.addEventListener('click',()=>{
    let BDinput=document.getElementById('bd_input').value;
    if(BDinput){
        localStorage.setItem('birthday', BDinput);
    }
    let birthday = localStorage.getItem('birthday');
    let today= new Date();
    let bDay = new Date(birthday);
    let message_div=document.getElementById('message');
    message_div.style.display='block';
    if(today.getMonth()===bDay.getMonth()&&today.getDate()===bDay.getDate()){
        message_div.innerHTML="С днем рождения!";
    }
    else{
        let nextBD=new Date(today.getFullYear(),
    bDay.getMonth(),
    bDay.getDate());
        if(nextBD<today){
            nextBD.setFullYear(today.getFullYear()+1);
        }
    let timeDiff=nextBD-today;
    let daysDiff = Math.ceil(timeDiff/(1000*3600*24));
    message_div.innerHTML=`До дня рождения осталось ${daysDiff} дней`;
    }

});*/


//Пользователь заходит на сайт, затем обновляет страницу, 
//затем еще раз обновляет и так далее. Сделайте счетчик обновления страницы. 
//Каждый раз при обновлении выводите значение счетчика на экран.
/*let count= sessionStorage.getItem('count');
if (!count){
count = 0;
}
count++;
sessionStorage.setItem('count',count);
document.getElementById('count_div').innerText=`Количество обновлений: ${count}`;*/


let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    let input=document.querySelector('input');
    let res= /[а-яА-Я]/.test(input.value);
    if(res){
        console.log('ok');
    }
    else{
        console.log('ПАМАГИТЕ');
    }
});

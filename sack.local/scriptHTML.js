'use strict';
/*let p=document.querySelector('p');
p.addEventListener('mouseover', () => {p.style.color="red", p.style.fontSize="2em"});
p.addEventListener('mouseout', () =>{p.style.color="black", p.style.fontSize="1em"});*/

/*console.log(p.innerHTML);//получим все теги и текст если они есть внутри тега
console.log(p.innerText);//выводит только текст
console.log(p.textContent);//выводит текст с учетом форматирования*/

//Дан абзац и кнопка. 
//По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.
//let p=document.querySelector('p');
//let btn=document.querySelector('button');
 
/*btn.addEventListener('click', () => {
    p.textContent="КУУУСЬ",
    p.style.fontWeight="bold" //в телефоне фотка как сделать замену обратно на второй клик

});*/


/*let textOriginal=p.textContent;
let textZamena='КУУУУСЬ';
btn.addEventListener('click', () => {
    if(p.textContent==textOriginal){
        p.textContent=textZamena;
        p.style.fontWeight="bold";
    }
    else{
        p.textContent=textOriginal;
        p.style.fontWeight="normal";
    }
});*/


//Дан инпут. По получению фокуса запишите в него число 1, 
//а по потери фокуса - число 2.
/*let input=document.querySelector('input');

input.addEventListener('focus', () => {
        input.value=1;
});

input.addEventListener('blur', () => {
    input.value=2;
});*/


//Даны 3 инпута, в которых записаны какие-то числа. 
//По потери фокуса в любом из инпутов возведите 
//стоящее в нем число в квадрат.
/*let input = document.querySelectorAll('input');
function func(){

        this.value=Math.pow( this.value,2);
}
input.forEach(input=>{input.addEventListener('blur',func)});*/
//console.log(input);


//Дана кнопка, значением которой служит число 1. 
//Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз 
//увеличивалось на единицу. 
//После того, как значение кнопки достигнет 10 - 
//отвяжите обработчик события, чтобы кнопка больше 
//не реагировала на нажатие.
/*let btn=document.querySelector('button');
let count=1;

btn.addEventListener('click',func);
function func() {
    count++;
     btn.textContent=count;
    
    if(count>=10){
        btn.removeEventListener('click',func); 
    }
}*/


//let input=document.querySelector('input[type="text"]');//input[type="text"]
//let chekbox=document.getElementById('checkbox');
/*input.addEventListener('click', function func() {
    if(this.getAttribute('value')=='input'){
        this.setAttribute('value', 'Button');
        this.type='button';
        this.style.width="200px"
    }
    else{
        this.setAttribute('value', 'input');
        this.type='text';
        
    }
});*/


/*let inputs1=document.querySelectorAll('input[type="text"]');
inputs1.forEach((input,index) => {
    input.addEventListener('blur', ()=>{
        if(input.value!==''){
            if(index<inputs1.length-1){
                inputs1[index+1].removeAttribute('hidden');
            }
        } else{
            if(index>0){
                inputs1[index].setAttribute('hidden','');
            }
        }
        
});
input.addEventListener('input', ()=>{
            if(input.value===''){
                if(index>0){
                    inputs1[index].setAttribute('hidden','');
                }
            }
        
});
}); //РАЗОБРАТЬ!!!!!!!

let p=document.querySelectorAll('p');
p.forEach((elem) => {
    elem.addEventListener('click', function ()  {
        elem.classList.toggle('fontSize');
    });
});

let inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach((input, index) => {
input.addEventListener('input', ()=>{
    if(input.value!==''&& index<inputs.length-1){
        inputs[index+1].classList.remove('hidden');
    }
    else if (input.value===''&& index<inputs.length-1){
        inputs[index+1].classList.add('hidden');
        inputs[index+1].value='';
    }
});
});



let tabs= document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.tab_content_inner');
tabs[0].classList.add('active');
tabContents[0].classList.add('active');
tabs.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        let tabId = tab.getAttribute('data-tab');
        let tabContent = document.getElementById(tabId);

        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        tabContents.forEach((tc) => tc.classList.remove('active'));
        tabContent.classList.add('active');
    });
});

let pEdit=document.getElementById('p-edit');
let btnEdit=document.querySelectorAll('button');
btnEdit.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        let action = btn.getAttribute('data-action');
        pEdit.className='';
        pEdit.classList.add(action);
    });
});*/

/*let elem=document.getElementById('elem1');
let point=document.getElementById('point');
let clickblock=document.getElementById('clickblock');
document.addEventListener('mousemove',function(event){
    elem.innerHTML=event.clientX+':'+event.clientY;
});
point.addEventListener('click',function(event){
    if(event.clientX==100&&event.clientY==100){
        clickblock.classList.toggle('rounded');
    }
});

point.addEventListener('click', func);
point.addEventListener('dblclick', func);

function func(event) {
	if(event.type=='click'){
        clickblock.style.border="2px solid green";
    }
    else{
        clickblock.style.border="2px solid red";
}
}

let ul=document.getElementById('elem');

ul.addEventListener('click', function(event){
    if(event.target.tagName=='LI'){
        event.target.textContent+=' !';
    }
    else if(event.target.tagName=='UL'){
        console.log('КУСЬ!');
    }
});

//Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. 
//Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

let p=document.querySelector('p');
let input=document.querySelector('input');

input.addEventListener('keydown', function(event){
    if(event.key=='Enter'){

        p.textContent=input.value;
        input.value='';
    }
});*/


/*let counter=document.getElementById('time');
let btn=document.getElementById('btn');
let count=0;
let mem=null;

btn.addEventListener('click', ()=>{
    if(btn.textContent==='Start'){
        mem=setInterval(()=>{
            count++;
            counter.textContent=count;
        },1000);
        btn.textContent='Pause';
    }
    else if(btn.textContent==='Pause'){
        clearInterval(mem);
        btn.textContent='Start';
    }
});*/


/*let timer;
let count=0;
function startGame(){
    let min=parseInt(document.getElementById('min').value);
    let max=parseInt(document.getElementById('max').value);
    let rows=Math.floor(Math.random()*(max-min +1))+min;
    let cols=Math.floor(Math.random()*(max-min+1))+min;
    document.getElementById('form').style.display='none';
    let grid=document.getElementById('grid');
    grid.innerHTML='';
    for(let i=0; i<rows; i++){
        let row=document.createElement('tr');
        for(let j=0; j<cols; j++){
            let cell=document.createElement('td');
            let img=document.createElement('img');
            img.src='img/fox.jpg';
            img.style.display='none';
            cell.onclick=function(){toggleCell(img);};
            cell.appendChild(img);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    document.getElementById('game').style.display='block';
    startTimer();
}
function toggleCell(img){
 img.style.display=img.style.display==='none'?'block':'none';
 count+=img.style.display==='block'?1:-1;
    let totalCells=document.getElementById('grid').rows.length*
    document.getElementById('grid').rows[0].cells.length;
    if(count===totalCells){
        clearInterval(timer);
        setTimeout(()=>{
        
        document.getElementById('reset').style.display='flex';
        document.getElementById('timer2').textContent=`Время: ${second} секунд`;
        document.getElementById('game').style.display='none';
        },1000)
    }
}
function startTimer(){
    let second=0;
    timer=setInterval(function(){
        second++;
        document.getElementById('time').textContent=second;
    },1000);
}
function resetGame(){
    count=0;
    document.getElementById('game').style.display='none';
    document.getElementById('reset').style.display='none';
    document.getElementById('form').style.display='flex';
    document.getElementById('grid').innerHTML='';
    document.getElementById('time').textContent='0';
}*/ //игра с таблицей


/*let button = document.querySelector('button');
let one_input=document.createElement('input');
let two_input=document.createElement('input');
let sum_input=document.createElement('input');

button.addEventListener('click', function(){
    document.body.appendChild(one_input);
    one_input.addEventListener('blur',()=>{
        document.body.appendChild(two_input);
        two_input.addEventListener('blur',()=>{
            document.body.appendChild(sum_input);
            sum_input.addEventListener('blur',()=>{
                let sum=Number(one_input.value)+Number(two_input.value);
                if(Number(sum_input.value == sum)){
                    setTimeout(()=>{
                        window.location.href='correct.html';
                    },2000);
                }
                else{
                    setTimeout(()=>{
                        window.location.href='incorrect.html';
                    },2000);
                }
            });
        });
    });
});*/


/*let button=document.getElementById('gallery_btn');

button.addEventListener('click', function func(){
    if(document.querySelector('.gallery')){
        return;
    }
    setTimeout(()=>{
    let title=document.createElement('h1');
    title.textContent='Галерея';
    document.body.appendChild(title);
    let div=document.createElement('div');
    div.className='gallery';
    for(let i=1; i<=4; i++){
        let img=document.createElement('img');
        img.src=`img/img${i}.jpg`;
        let zag=document.createElement('h3');
        zag.textContent=`Картинка ${i}`;
        div.appendChild(zag);
        div.appendChild(img);
    }
    let p=document.createElement('p');
    p.textContent='Лисииичики';
    document.body.appendChild(div);
    document.body.appendChild(p);
    },1000);
});*/


/*let btn_create=document.getElementById('create');
btn_create.addEventListener('click',()=>{
    let min=parseInt(document.getElementById('min').value);
    let max=parseInt(document.getElementById('max').value);
    let list_cont=document.getElementById('list_cont');
    list_cont.innerHTML='';
    let rand_count=Math.floor(Math.random()*(max-min+1))+min;
    for(let i=0;i<rand_count;i++){
        let item_li=document.createElement('li');
        let item_text=document.createElement('span');
        item_text.textContent=`Элемент ${i+1}`;
        let link=document.createElement('a');
        link.href='#';
        link.textContent='Редактировать';
        let input=document.createElement('input');
        input.type='text';
        input.value=item_text.textContent;
        input.className='edit';
        input.style.display='none';
        link.onclick=function(){
            item_text.style.display='none';
            link.style.display='none';
            input.style.display='block';
            input.focus();
            input.blur()
        };
        
        
    }
});*/ //доделать!!!



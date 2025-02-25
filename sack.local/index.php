<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    
</head>
<body>
    
    <div>
    <a href="https://www.php.net/">Помощник PHP</a>
        <br>
        <br>
        <a href="https://code.mu/ru/php/book/prime/">Code.mu</a>
    </div>
    <style>
        a{
            text-decoration: none;
            color: rgb(229, 95, 0);
            font-size: 50px;
        }
        div{
            margin: 50px  ;
        }
        a:hover{
            text-decoration: underline;
            color: aliceblue;
            background-color: rgb(229, 95, 0);
        }
    </style>
</body>
</html>


<?php

use function PHPSTORM_META\type;

error_reporting(E_ALL);

/*$str='string';
echo $str;
$num1=2;
$num2=3;
$result=$num2+$num1;

echo " " . $result;//. = +(C#)*/
/*$a = 10;
$b=5;
$result=$a-$b;
$c=$result;
$d = 7;
$result1=$c+$d;
echo " " . $result1;//"." конкатинация(складывает строки)
function func($argyment) {
    echo $argyment;
}
func('куст');*/

/*$str='<table border="1" cellspacing="10px" cellpadding="10px">';
$str .='<tr>
<th>Заголовок 1</th>
<th>Заголовок 2</th>
<th>Заголовок 3</th>
</tr>';
$str .='<tr>
<td>Кусь</td>
<td>Кусь</td>
<td>Кусь</td>
</tr>';
$str .='</table>';
echo $str;*/

/*$str='12345';
echo $str[0]+$str[1]+$str[2]+$str[3]+$str[4];
$arr=array(1,1,'n','n');
$arr1=[1,1,'n','n'];//38 и 39 строка - одно и тоже  
var_dump($arr);
print_r($arr1);//без типа данных
$arr1[]=3;//добавление значений в массив;
echo count ($arr1);//длина массива*/

/*$num1=1;
$num2=3;
if ($num1<=1 && $num2>=3)
{
    echo '+++';
}
else
{
    echo '---';
}*/
//isset  //проверяет существует ли переменная и значение
//$test=null;
//echo isset($test) . '<br>';
//empty //проверяет только значение на пустоту

/*if(isset($test))
{
echo 'isset yes <br>';
}

if(empty($test))
{
echo 'empty yes <br>';
}*/

/*
$age = 123;
if($age <10||$age >99)
{
if(((string)$age)[0]+((string)$age)[1]+((string)$age)[2]>9)
{
    echo 'число двузначное и более';
}
else
{
    echo 'число однозначное';
}
}

else
{
    echo 'no';
}*/

/*$num=5;
$result = $num > 0 ? '$num > 0' : '$num < 0';
echo $result;*/

/*$num = 3;
switch ($num) {
    case 1:
        echo 'Зима';
        break;
    case 2:
        echo 'Весна';
        break;
    case 3:
        echo 'Лето';
        break;
    case 4:
        echo 'Осень';
        break;
    default:
        echo 'Меняй';
        break;
}//shift+alt+f = автоформатирование  !очень полезная штука для нас :)*/

/*$age = 123456;
$sum1=(((string)$age)[0]+((string)$age)[1]+((string)$age)[2]);
$sum2=(((string)$age)[3]+((string)$age)[4]+((string)$age)[5]);
if($sum1==$sum2)
{
    echo 'равны';
}
else
{
    echo 'не равны';
}*/

/*$arr = [10, 20, 30, 50, 235, 3000];
foreach($arr as $s)
{
$firstnum=substr((string)$s,0,1);
if($firstnum=='1'||$firstnum=='2'||$firstnum=='5')
{
    echo $s . "<br>";
}
} */

/*$num = 11;
while($num<=33)
{
    echo $num . " ";
    $num++;
}*/

/*for($i =1; $i<=99; $i++)
{
    if($i%2!=0)
    {
        echo $i . " "; //С помощью цикла for выведите на экран нечетные числа в промежутке от 1 до 99.
    }

}*/

/*for($i =1; $i<=99; $i+=2) // второй вариант решения
{
  echo $i . " ";
}*/

//Найдите сумму нечетных чисел от 1 до 99
/*$result = 0;
for($i =1; $i<=99; $i+=2)
{
    $result+=$i;
}
echo $result. " ";*/


//Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
/*$sum=0;
$count=0;
for ($i = 0; $i <=100; $i++)
{
    $sum+=$i;
    $count++;
    if ($sum>100)
    {
        echo $count ;
        break;
    }
}*/


//Дано число $num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. 
//Какое число получится? Посчитайте количество итераций, необходимых для этого.
/*$num = 10;
$count=0;
while ($num<=1000)
{
    $num=$num*3;
    $count++;

}
echo $count;*/

/*function func() {
    echo "?";
};
 func();
 echo func();


 $func1= function() {
    echo "!";
};
$func1();
echo $func1();*/
 //два разных метода, но суть одна и та же


/* $number1 = 2;
 function func($num) {
    echo $num*$num;
};
func($number1);
func(4);*/


/*$number1 = 2;
 function func($num=3) {
    echo $num*$num;
}
func($number1);
echo "<br>";
func();*/


/*function func($num=0) {
    return $num*$num;
}
function func2($num=0) {
    return $num*$num*$num;
}
 $num1=func(2);
 $num2=func2(2);
 $num3=func(2) + func2(2);*/


//Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. 
//Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
/*$count=0;
function func2($num=40) {
    while(true){
        $num/=2;
    $count++;
    if($res<10)
    {
        return false;
    }

}
}
echo $count;//в тел фотка*/


//Задание 1
//Напишите программу, которая выводит на экран таблицу умножения числа 5.
/*$num=5;
for($i=0;$i<=10;$i++)
{
    $res=$num*$i;
    echo $num . "x" . $i . "=" . $res ."<br>";
}
echo "<br>";*/

//Задание 2
//Дана переменная, содержащая строку '128-51'. Найдите разницу между этими числами, определите, является ли разница четным или нечетным числом.
/*$str='128-51'; // 128 51 
$firstnum= substr(0,3);
$twonum= substr(4,2);
$res = (int)$firstnum-(int)$twonum;
if ($res%2==0)
{
echo "четное число";
}
else
{
echo "нечетное число";
}
echo "<br>";*/

//Задание 3
//Дан массив числами, например,: [10, 20, 30, 50, 235, 3000]. Создайте новый массив и поместите туда числа из первого массива только те, которые начинаются на цифру 1, 2 или 5.
/*$arr = [10, 20, 30, 50, 235, 3000];
$arr1= [];
foreach($arr as $s)
{
$firstnum=substr((string)$s,0,1);
if($firstnum=='1'||$firstnum=='2'||$firstnum=='5')
{
 $arr1=$s;
 echo $arr1 . " ";
}
}*/

//require_once('config/link.php');
/*echo "<ol>";
while($row = mysqli_fetch_array($query))
{
    if($row['salary_workers']>400)
    {
        echo "<li> {$row['name_workers']} </li>";
    }

}
echo "</ol>";*/
 /*
echo "<ol>";
while($row = mysqli_fetch_array($query))
{
 
     echo "<li> {$row['name_workers']} </li>";

}
echo "</ol>";*/
/*$userName=$_GET['num1'];

$res=$conn->query("SELECT * FROM workers WHERE name_workers = '$userName'");
while($raw = $res->fetch_assoc())
{
    echo $raw['name_workers'];
    break;
}*/

/*$arr = ['y'=> 2024,'m'=> 9,'d'=> 5];

foreach($arr as $elem)
{
if($arr['m']== 9){
    echo $elem . " " ;
}
else{
    echo "Месяц не Сентябрь";
}
}*/

/*$age = 123;
if($age <10||$age >99)
{

    $one= substr($age,0,1);
    $two= substr($age,1,1);
    $three= substr($age,2,1);
    $summ= $one+$two+$three;
    //$summ =((string)$age)[0]+((string)$age)[1]+((string)$age)[2]
    if($summ>9)
    {
        echo 'число двузначное и более';
    }
    else
    {
        echo 'число однозначное';
    }
}
else
{
    echo 'error';
}*/

/*$age=88;
if($age<10||$age>99){
    echo"error";
}
else{
    $one= (int)substr($age,0,1);//нини
    $two=(int) substr($age,1,1);
    
    $summ= $one+$two;
    echo $summ." ";
    if($summ<=9){
        echo"СУММА ЦИФР ОДНОЗНАЧНА";
    }
    else{
        echo "СУММА ЦИФР ДВУЗНАЧНА";

    }
}*/


/*$arr=[1,2,3];
if(count($arr)==3)
{
    //$summ=$arr[0]+$arr[1]+$arr[2];//array_sum
    //echo $summ;

    echo array_sum($arr);
}
else{
    echo"ПАМАГИТЕ((((((";
}*/

/*$num=5;
$ter=$num%2==0?'да':'ПАМАГИТЕ(((((((((((';
echo $ter;
echo"<br>";
echo"<br>";*/



/*for (let elem in arr) {
    arr[arr[elem]]=elem;    
    delete (arr[elem]);
    
}
console.log(arr);*/


/*$arr = ['user1' => 30, 'user2' => 32, 'user3' => 33];
foreach($arr as $key=>$value){
    echo "{$key} - возраст {$value} лет"."<br>";
    
    
}
$flip=array_flip($arr);
print_r($flip);*/


/*$arr=["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];   
$day=1;
foreach($arr as $key => $value) {
    
    if($key==$day-1){
        echo"<i>{$value}</i>"."<br>";
         
    }
    else{
        echo  $value ."<br>";
    }

}*/


/*$sum=0;
$count=0;
for ($i = 0; $i <=110; $i++)
{
    $sum+=$i;
    $count++;
    if ($sum>100)
    {   echo"Сумма: {$sum}"."<br>";
        echo "Количество целых чисел: {$count}" . "<br>"; 
        
        break;
    }
}

while($sum<100)
{
    $sum+=$sum;
    $sum++;
    $count++;
}
echo "<br>"."WHILE:";
echo "<br>"."Сумма: {$sum}"."<br>";
echo "Количество целых чисел: {$count}" . "<br>"; */


/*$num = 10;
$count=0;
while ($num<=1000)
{
    $num=$num*3;
    $count++;

}
echo "<br>"."Сумма: {$num}"."<br>";
echo "Количество необходимых итераций: {$count}" . "<br>";  */


//С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную $str. Выведите значение этой переменной на экран.
/*$str='-';
for($i=1;$i<=9;$i++){
    $str=$str.$i."-";
}
echo$str;*/


//С помощью двух вложенных циклов выведите на экран следующую строку:
//11 12 13 21 22 23 31 32 33
/*$str="";
for($i=1;$i<=3;$i++){
    for($j= 1;$j<= 3;$j++){
        $str=  $i . $j." ";
        echo$str ;
    }
}*/


//С помощью цикла for выведите на экран первую половину элементов этого массива.
/*$arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
for($i=0;$i<round(count($arr))/2;$i++){
echo"$arr[$i] ";
}*/

//echo date('l', mktime(0, 0, 0, 1, 15, 07));


//1 задание
//Вывести на экран все числа от 1 до 100, которые симметричны.
/*echo"1 Задание"."<br>";
for($i=1;$i<=100;$i++){
    $str=(string)$i;
    if(strlen($str)<=1 || $str[0]==$str[1]){ //$str%11==0
        echo $str."<br>";
    }
    else{}
}
echo"<br>";*/


//2 задание
//Дана переменная, содержащая некоторую строку. 
//Проверьте, что эта строка начинается на символ 'a' 
//или символ 'b'.
/*echo"2 Задание"."<br>";
$str1="abcdef";

    if(str_starts_with($str1,'a')||str_starts_with($str1,'b')){
        echo "начинается на указынный символ"."<br>";
    }
    else{
        echo "начинается на другой символ"."<br>";
    }
echo"<br>";*/


//3 задание
//Найдите количество элементов в следующем ассоциативном
//массиве:
//$obj = [x: 1, y: 2, z: 3];
/*echo"3 Задание"."<br>";
$obj = ['x'=>1, 'y'=> 2, 'z'=> 3];
$count_arr=count($obj);
echo "Количество элементов в массиве: ".$count_arr;*/


//Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
/*function func($num){
    $arr=[];
    for($i= 1;$i<=$num;$i++){
        if($num%$i==0){
            $arr[]=$i;
        }      
}
return print_r($arr);
}
func(6);
echo "<br>";*/


//Сделайте функцию, которая параметром будет принимать два числа и возвращать массив их общих делителей.
/*function func2($num,$num1){
    $arr=[];
    $min=min($num,$num1);
    for($i=1;$i<=$min;$i++)
    {
        if($num%$i== 0&&$num1%$i==0){
            $arr[]=$i;
    }
}
return print_r($arr);
}
func2(12,18);
echo "<br>";*/


//Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
/*function func3($num){
    return array_sum(str_split($num));
}
echo func3(255);
echo "<br>";*/


//Сделайте функцию, которая вернет текущий день недели словом.
/*function func4( $mounth,$day,$year){
    return  date('l', mktime(0,0,0,$mounth,$day,$year));
}
echo func4(10,3,24);
echo "<br>";*/


//Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
/*function func5( $mounth,$day,$year){
    return  date('l', mktime(0,0,0,$mounth,$day,$year));
}
echo func5(12,25,23);
echo "<br>";*/


//Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
/*function func6($sec){
    return floor($sec/86400);
}
echo func6(172800);
echo "<br>";*/


//Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
/*function func7( $year ){
    if(date('L',mktime(0,0,0,1,1,$year))== 1){
        return "Год високосный";
}
else{
    return "Год НЕ високосный";
}
}
echo func7(24);
echo "<br>";*/


//Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
//$flag=false;
/*function func8($num){
for($i=2; $i<=$num; $i++){
   if($num%$i==0){
       $flag=true;
   }
} 
if($flag==true){
       return "Число НЕ простое";
   }
   else{
       return "Число простое";
   }
}
echo func8(5);*/


//1 задание
//Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.
/*$str = 'ahb acb aeb aeeb adcb axeb';
echo preg_replace( "#a.b#", "кусь", $str );

echo"<br>";

//2 задание
//Напишите регулярку, которая найдет строки 'aeeb', 'adcb', 'axeb' по шаблону: буква 'a', два любых символа, буква 'b'.
$str = 'ahb acb aeb aeeb adcb axeb';
echo preg_replace( "#a..b#", "кусь", $str );

echo"<br>";*/

//$str = 'aa aba abba abbba abca abea';
//1 задание
//Напишите регулярку, которая найдет строки по шаблону: буква 'a', буква 'b' один или более раз, буква 'a'.
/*echo preg_replace('#ab+a#', 'кусь', $str);
echo"<br>";*/

//2 задание
//Напишите регулярку, которая найдет строки по шаблону: буква 'a', буква 'b' ноль или более раз, буква 'a'.
/*echo preg_replace('#ab*a#', 'кусь', $str);
echo"<br>";*/

//3 задание
//Напишите регулярку, которая найдет строки по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.
/*echo preg_replace('#ab?a#', 'кусь', $str);
echo"<br>";*/

//4 задание
//Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.
/*echo preg_replace('#ab*a#', 'кусь', $str);
echo"<br>";*/

//Являются спецсимволами: $ ^ . * + ? \ / {} [] () |


//1 задание
//Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.
/*$str = 'a.a aba aea';
echo preg_replace("#a\.a#", 'кусь', $str);
echo"<br>";*/

//2 задание
//Напишите регулярку, которая найдет строку '2+3', не захватив остальные.
/*$str = '2+3 223 2223';
echo preg_replace("#2\+3#", 'кусь', $str);
echo"<br>";*/

//3 задание
//Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).
/*$str = '23 2+3 2++3 2+++3 345 567';
echo preg_replace("#2\++3#", 'кусь', $str);
echo"<br>";*/

//4 задание
//Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.
/*$str = '23 2+3 2++3 2+++3 445 677';
echo preg_replace("#2\+*3#", 'кусь', $str);
echo"<br>";*/

//5 задание
//Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.
/*$str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
echo preg_replace("#\*q+\+#", 'кусь', $str);
echo"<br>";*/

//6 задание
//Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.
/*$str = '[abc] {abc} abc (abc) [abc]';
echo preg_replace("#\[...\]#", '!', $str);
echo"<br>";*/

//1 задание
//Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более четырех раз (включительно).
/*$str = 'aa aba abba abbba abbbba abbbbba';
echo preg_replace ("#ab{4,}a#", '!', $str);*/

//1 задание
//Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. 
//Между буквами a может быть любой символ (кроме 'a').
/*$str = 'aba accca azzza wwwwa';
echo preg_replace("#a.+?a#" ,'!', $str);
echo"<br>";*/

//Команда \d означает цифру от 0 до 9. 
//Команда \w обозначает цифру, латинскую букву или знак подчеркивания. 
//Команда \s обозначает пробел или пробельный символ: пробел, перевод строки, табуляцию. 
//Можно инвертировать значение команды, написав большую букву: например, если \d - цифра, то \D - не цифра.

//1 задание
//Напишите регулярку, которая заменит все пробелы на '!'.
/*$str = 'ave a#a a2a a$a a4a a5a a-a aca';
echo preg_replace("#\s#" ,'!', $str);
echo "<br>";*/

//1 задание
//Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a',
// а между ними - маленькие латинские буквы и цифры, не затронув остальных.
/*$str = 'aAXa aeffa aGha aza ax23a a3sSa';
echo preg_replace("#a[a-z0-9]+a#" ,'!', $str);
echo "<br>";*/

//Напишите регулярку, которая найдет строки по шаблону: не цифра и не буква от 'a' до 'g' от 3 до 7 раз.
/*$str=" $$$$$$$ ........ 3333zzzz @@11ff$$ aaabbbbb 1xrz3";
echo preg_replace('#[^0-9^a-g]{3,7}#','!',$str);
echo "<br>";*/
//echo preg_replace('#[^\da-g]{3,7}#','!',$str); способ зверева


/*$arr=['Иванов Иван Иванович','Айнуров Айнур Алишевич Оглы'];
$arr=preg_replace('#(\w+)\s(\w)\w*\s(\w)\w*#','$1 $2. $3.',$arr); ///фигня какая то
print_r($arr);*/


//10.10.24!!!!!!!!
//Напишите регулярку, которая найдет строки по шаблону: шляпка или собака, а затем две латинских буквы.
/*$str = '^xx axx ^zz bkk @ss';
echo preg_replace('#[\^@]..#', '!', $str);
echo '<br>';

//Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка и не собака, а затем две латинских буквы.???
$str = '^xx axx ^zz bkk @ss';
echo preg_replace('#[!^@]..#', '!', $str);
echo '<br>';

//Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка, а затем две латинских буквы.
$str = '^xx axx ^zz @bkk';
echo preg_replace('#[!^]..#', '!', $str);
echo '<br>';

//Найдите все строки по следующему шаблону: буква 'x', большая или маленькая буква или дефис, буква 'z'.
$str = 'xaz xBz xcz x-z x@z';
echo preg_replace('#x[A-Za-z-]z#', '!', $str);
echo '<br>';

//Найдите все строки по следующему шаблону: буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'.
$str = 'xaz x$z x-z xcz x+z x%z x*z';
echo preg_replace('#x[$\-\+]z#', '!', $str);
echo '<br>';

//Напишите регулярку, которая найдет первую подстроку из букв.
$str = 'abc def xyz';
echo preg_replace('#^\S+\s#', '!', $str);
echo '<br>';

// Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', 
// а между ними - или буква 'e' два раза или буква 'x' любое количество раз.
$str = 'aeeea aeea aea axa axa axxa axxxa';

echo preg_replace('#a(e{2}|x*)a#', '!', $str);
echo '<br>';

//Определите, заканчивается ли переданная строка расширением jpg или jpeg.

$str = 'image.jpg image.jpeg image.jpg';
echo preg_match('#\.(jpg|jpeg)$#', $str, $matches);
echo '<br>';

//Преобразуйте эту дату в '2025.12.31'.
$str = '31.12.2025';
echo preg_replace('#([\d]+)\.([\d]+).([\d]+)#', '$3.$2.$1', $str);
echo '<br>';
//Найдите все подстроки, в которых есть два одинаковых слова подряд.
$str = 'aaa aaa bbb bbb ccc ddd';

echo preg_replace('#(\w+)\s+\1#', '!', $str);
echo '<br>';


//Найдите все подстроки со временем, в которых час совпадает с секундами.
$str = '12:59:59 12:59:12 09:45:09';

//echo preg_replace('#(\d{2}):(\d{2}):(\d{2})#', '$1:$2:$3', $str);

echo preg_match('#(\d{2}):(\d{2}):(\d{2})#', $str, $matches);

echo '<br>';
echo preg_replace('#(?<hour>\d{2}):\d{2}:\k<hour/#', '!', $str);//Допилить*/


//Задание 1
//Округлите число 5.12345678 до четырех знаков после запятой
/*$num=5.12345678;
echo round($num,4)."<br>";


//Задание 2
//Преобразуйте первую букву каждого слова в элементах массива ['everyone enjoy', 'the session'] в заглавную
$arr=['everyone enjoy', 'the session'];
for($i=0;$i<count($arr);$i++)
{
    $arr[$i]=ucfirst($arr[$i]);
}
var_dump($arr);
echo"<br>";


//Задание 3
//Замените подстроку длиной 2 символа в каждом элементе массива 
//['apple', 'banana', 'cherry'], начиная с 2-го символа, на 'XX'.
$arr1=['apple', 'banana', 'cherry'];
for($i=0;$i<count($arr1);$i++)
{
    $arr1[$i]=substr_replace($arr1[$i], 'XX', 1, 2);
}
var_dump($arr1);*/


// $str = '31.12.2025';
// echo preg_replace('#([0-9]+)\.([0-9]+)\.([0-9]+)#','$3.$2.$1',$str);


// $str = 'aaa aaa bbb bbb ccc ddd';
// echo preg_replace('#([a-z]+\s)\1+#','!',$str);
?>

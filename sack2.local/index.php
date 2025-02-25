<?php
include_once(__DIR__ . '/config/link.php');

$query="SELECT `student`.`fio_student`, `pol`.`name_pol`, `organizacia`.`name_organiz`, `organizacia`.`adress_organiz`
FROM `organizacia`, `pol`
    LEFT JOIN `student` ON `student`.`pol_student` = `pol`.`id_pol`";

$stmt=$link->prepare($query);
$stmt->execute();//выполняем
$result= $stmt->get_result();//получаем 

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1" cellspacing="10px" cellpadding="5px">
        <tr>
            <th>ФИО студента</th>
            <th>Пол</th>
            <th>Организация</th>
            <th>Адрес</th>
        </tr>
       
       
            <?php
            while($row=$result->fetch_assoc()){?> <tr>
            <td><?php echo $row['fio_student'];?></td>
            <td><?php echo $row['name_pol'];?></td>
            <td><?php echo $row['name_organiz'];?></td>
            <td><?php echo $row['adress_organiz'];?></td>  </tr>
            <?php } ?>
            <?php
           
            $stmt->close();
            $link->close();
            ?>
    </table>
</body>
</html>
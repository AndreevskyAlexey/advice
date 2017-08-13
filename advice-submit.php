<?php
mysql_connect("localhost", "root", "");
mysql_select_db("advicefilm");
mysql_set_charset("utf8");

if(!$connection || !$db) {
    mysql_error();
}

mysql_query("INSERT INTO films (name, iq) VALUES ('{$_POST['name']}','{$_POST['checkiq']}')");
mysql_close(); //закрываем соединениее работы с базой данных

?>
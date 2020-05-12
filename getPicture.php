<?php

// phpinfo();
$params = $_REQUEST['name'];

if (empty($params)) {
  $response = array('code'  => -1,'message' => '参数为空','data'  => '',); 
  echo json_encode($response); 
  exit();
}
$params = strtolower($params);
$serve = 'mysql:host=cdb-qq35tjif.gz.tencentcdb.com:10124;dbname=monet;charset=utf8';
$username = 'root';
$password = 'fuiii967###';
// phpinfo()
try{ // PDO连接数据库若错误则会抛出一个PDOException异常
  $PDO = new PDO($serve,$username,$password);
  $url = 'select * from monet where picname like '."'%".$params."%'";

	$result = $PDO->query($url);
  $data = $result->fetchAll(PDO::FETCH_ASSOC); // PDO::FETCH_ASSOC表示将对应结果集中的每一行作为一个由列名索引的数组返回
  $response = array('code'  => 200,'message' => '请求成功','data'  => $data,); 
	echo json_encode($response); 
  exit();
} catch (PDOException $error){
  $response = array('code'  => -1,'message' => $error->getMessage(),'data'  => '',); 
  echo json_encode($response); 
  exit();
}

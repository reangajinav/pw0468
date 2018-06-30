<?php

$movies = array(
  array(
    "Vendor" => "Samsung",
    "type" => "A6",
    "price" => "$406"
  ),
  array(
    "Vendor" => "Xiaomi",
    "type" => "Mi8",
    "price" => "$980"
  ),
  array(
    "Vendor" => "LG",
    "type" => "V40",
    "price" => "$1032"
  )
  );
$json['sum'] = count($movies);
$json['info'] = 'Phone Market data';
$json['data'] = $movies;
echo json_encode($json);

?>


<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.spacexdata.com/v3/capsules',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);


curl_close($curl);
//print_r($response);
$result = json_decode($response,true);


//print_r($result[0][capsule_serial]);
foreach($result as $key){
    foreach($key as $key1->$value)
    {
 echo $value;
    }


}



/*foreach($result as $row)
{
foreach($row as $key)
{
 
     echo $key;
 
   
}}*/




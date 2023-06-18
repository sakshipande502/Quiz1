<?php

   $connection = mysqli_connect('localhost','root','','book_bd');

   if(isset($_POST['send'])){
      $name = $_POST['name'];
      $email = $_POST['email'];
      $phone = $_POST['phone'];
      $address = $_POST['address'];
      $country = $_POST['country'];
      $state = $_POST['state'];
      $district = $_POST['district'];
      $pin_code = $_POST['pin_code'];

      $request = " insert into book_form(name, email, phone, address, country, state, district, pin_code) values('$name','$email','$phone','$address','$country','$state','$district','$pin_code') ";
      mysqli_query($connection, $request);

      header('location:book.php'); 

   }else{
      echo 'something went wrong please try again!';
   }

?>
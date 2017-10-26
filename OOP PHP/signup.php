<?php

include("user.php");
 
       if($_POST) {
            $user = new user ();
            $user ->set_name($_REQUEST['name']);
            $user ->set_last($_REQUEST['lastname']);
            $user ->set_user($_REQUEST['username']);

            $sql = "INSERT INTO user(`username`, `name`, `lastname`) VALUES ('".$user ->get_user()."','".$user ->get_name()."', '".$user ->get_last()."')";

            $connection = mysqli_connect('localhost', 'root', '', 'test');
            mysqli_query($connection, $sql);
            mysqli_close($connection);
            header('Location: /pages/?status=success');
      } else {
        header('Location: /pages/?status=error');
      }




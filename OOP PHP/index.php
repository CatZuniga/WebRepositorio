<?php
  $message = "";
  if(!empty($_REQUEST['status'])) {
    switch($_REQUEST['status']) {
      case 'success':
        $message = 'User was added succesfully';
      break;
      case 'error':
        $message = 'There was a problem inserting the user';
      break;
    }
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

  <title>Document</title>
</head>
<body>
<div class="container">
    <div class="msg">
      <?php echo $message; ?>
    </div>
    <form action="/pages/signup.php" method="POST" class="form-inline" role="form">
      <div class="form-group">
        <label class="sr-only" for="">Username</label>
        <input type="text" class="form-control" id="" name="username" placeholder="Your username">
      </div>
      <div class="form-group">
        <label class="sr-only" for="">Name</label>
        <input type="text" class="form-control" id="" name="name" placeholder="Your Name">
      </div>
      <div class="form-group">
        <label class="sr-only" for="">LastName</label>
        <input type="text" class="form-control" id="" name="lastname" placeholder="Your LastName">
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>

</body>
</html>


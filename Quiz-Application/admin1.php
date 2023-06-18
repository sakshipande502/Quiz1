<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin</title>
</head>
<body>
    <h1>Admin login</h1>
    <p>
     <h1>user</h1>
     <input type="text" name="user" >
     <br>
</p>
<p> 
    <h1>password</h1>
     <input type="pass" name="pass">
     <br>
</p>
    <a href="login/mitha_mitha.php">View All Record</a>

</body>
</html>-->
<?php session_start(); ?>
<?php include('login/dbcon.php'); ?>
<html>
<head>
<link rel="stylesheet" type="text/css" href="login/style.css">
</head>
<body>
<!--	<style>
		background-image:
		url('img/download.jpg');
		</style> -->
<div class="form-wrapper">
  
  <form action="#" method="post">
    <h3>Login here</h3>
	
    <div class="form-item">
		<input type="text" name="user" required="required" placeholder="Username" autofocus required></input>
    </div>
    
    <div class="form-item">
		<input type="password" name="pass" required="required" placeholder="Password" required></input>
    </div>
    
    <div class="button-panel">
		<input type="submit" class="button" title="Log In" name="login" value="Login"></input>
        <!-- <a href="login/mitha_mitha.php">View All Record</a> -->

		
    </div>
  </form>
  <?php
	if (isset($_POST['login']))
		{
			$username = mysqli_real_escape_string($con, $_POST['user']);
			$password = mysqli_real_escape_string($con, $_POST['pass']);
			
			$query 		= mysqli_query($con, "SELECT * FROM users WHERE  password='$password' and username='$username'");
			$row		= mysqli_fetch_array($query);
			$num_row 	= mysqli_num_rows($query);
			
			if ($num_row > 0) 
				{			
					$_SESSION['user_id']=$row['user_id'];
					header('location:login/mitha_mitha.php');
					
				}
			else
				{
					echo 'Invalid Username and Password Combination';
				}
		}
  ?>
  <div class="reminder">
    <p>Not a member? <a href="#">Sign up now</a></p>
    <p><a href="#">Forgot password?</a></p>
  </div>
  
</div>

</body>
</html>
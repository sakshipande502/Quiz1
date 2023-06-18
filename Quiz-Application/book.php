<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Registration</title>

   <!-- swiper css link  -->
   <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

   <!-- custom css file link  -->
   <link rel="stylesheet" href="css/style.css">

</head>
<body>
   
<!-- header section starts  -->

<section class="header">

   <a href="home.php" class="logo">quiz.</a>

   <nav class="navbar">
      <a href="home.php">Home</a>
      <a href="about.php">About</a>
      <a href="book.php">Register</a>
      <a href="package.php">Practice</a>
      <a href="admin1.php">Admin Login</a>

   </nav>

   <div id="menu-btn" class="fas fa-bars"></div>

</section>

<!-- header section ends -->

<div class="heading" style="background:url(images/header-bg-3.png) no-repeat">
   <h1>Register now</h1>
</div>

<!-- booking section starts  -->

<section class="booking">

   <h1 class="heading-title">Register your Quiz!</h1>

   <form action="book_form.php" method="post" class="book-form">

      <div class="flex" >
         <div class="inputBox" >
            <span>name :</span>
            <input type="text" placeholder="enter your name" name="name" >
         </div>
         <div class="inputBox">
            <span>email :</span>
            <input type="email" placeholder="enter your email" name="email">
         </div>
         <div class="inputBox">
            <span>phone :</span>
            <input type="text" maxlength="10" placeholder="enter your number" name="phone">
         </div>
         <div class="inputBox">
            <span>address :</span>
            <input type="text" placeholder="enter your address" name="address">
         </div>
         <div class="inputBox">
            <span>country :</span>
            <input type="text" placeholder="enter your country" name="country">
         </div>
         <div class="inputBox">
            <span>state :</span>
            <input type="text" placeholder="enter your state" name="state">
         </div>
         <div class="inputBox">
            <span>district :</span>
            <input type="text" placeholder="enter your district" name="district">
         </div>
         <div class="inputBox" style="margin = 200px;">
            <span>pin_code :</span>
            <input type="number" placeholder="enter your pin-code" name="pin_code">
         </div>
         
         
      </div>

      <label style="font-size:15px" >Enter Captcha:</label>
      <div class="form-row">
        <div class="form-group col-md-6">
          <input type="text" class="form-control" readonly id="capt" style = "border-radius:5px">
        </div>
        <br>
        <div class="form-group col-md-6">
          <input type="text" class="form-control" id="textinput">
        </div>
      </div> 
</div>
</div>

      <h2>Captcha not visible? <img src="images/refresh.png" width = 25px alt="refresh img" onclick="cap()"> </h2>

      <div class="form-group">
         <button onclick="validcap()" class="btn" name="send" class="btn btn-lg button-success button-block">Submit</button> 
         <a href="package.php" class="btn">Practice now</a>
      </div>

      <!-- <input onclick="validcap()"   value="submit" class="btn" name="send"> -->
        
      <!-- <a href="login/mitha_mitha.php">View All Record</a> -->
   </form>

</section>

<!-- booking section ends -->

















<!-- footer section starts  -->

<section class="footer">

   <div class="box-container">

      <div class="box">
         <h3>quick links</h3>
         <a href="home.php"> <i class="fas fa-angle-right"></i> home</a>
         <a href="about.php"> <i class="fas fa-angle-right"></i> about</a>
         <a href="book.php"> <i class="fas fa-angle-right"></i> register</a>
         <a href="package.php"> <i class="fas fa-angle-right"></i> practice</a>
      </div>

      <div class="box">
         <h3>extra links</h3>
         <a href="#"> <i class="fas fa-angle-right"></i> ask questions</a>
         <a href="#"> <i class="fas fa-angle-right"></i> about us</a>
         <a href="#"> <i class="fas fa-angle-right"></i> privacy policy</a>
         <a href="#"> <i class="fas fa-angle-right"></i> terms of use</a>
      </div>

      <div class="box">
         <h3>contact info</h3>
         <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
         <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
         <a href="#"> <i class="fas fa-envelope"></i> quizlearn@gmail.com </a>
         <a href="#"> <i class="fas fa-map"></i> Nanded, india - 431606 </a>
      </div>

      <div class="box">
         <h3>follow us</h3>
         <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
         <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
         <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
         <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
      </div>

   </div>
  <!--
   <div class="credit"> created by <span>mr. web designer</span> | all rights reserved! </div>
-->
</section>

<!-- footer section ends -->


<script type="text/javascript">
  function cap(){
    var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
                 ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
                 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!','@','#','$','%','^','&','*','+'];
                 var a = alpha[Math.floor(Math.random()*71)];
                 var b = alpha[Math.floor(Math.random()*71)];
                 var c = alpha[Math.floor(Math.random()*71)];
                 var d = alpha[Math.floor(Math.random()*71)];
                 var e = alpha[Math.floor(Math.random()*71)];
                 var f = alpha[Math.floor(Math.random()*71)];

                 var final = a+b+c+d+e+f;
                 document.getElementById("capt").value=final;
               }
               function validcap(){
                var stg1 = document.getElementById('capt').value;
                var stg2 = document.getElementById('textinput').value;
                if(stg1==stg2){
                  alert("Form is validated Succesfully");
                  return true;
                }else{
                  alert("Please enter a valid captcha");
                  history.back();
                }
               }
</script>
</body>





<!-- swiper js link  -->
<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

<!-- custom js file link  -->
<script src="js/script.js"></script>

</body>
</html>
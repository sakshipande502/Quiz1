<div class="table-responsive">


<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">

<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>email</th>

<th>phone</th>

<th>address</th>

<th>country</th>

<th>state</th>

<th>district</th>

<th>pin_code</th>

</tr>

</thead>


<?php

$servername = "localhost";

$username = "root";

$password = "";

$dbname = "book_bd";

// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = 'SELECT * from book_form';

if (mysqli_query($conn, $sql)) {

echo "";

} else {

echo "Error: " . $sql . "<br>" . mysqli_error($conn);

}

$count=1;

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {

// output data of each row

while($row = mysqli_fetch_assoc($result)) { ?>

<tbody>

<tr>

<th>

<?php echo $row['id']; ?>

</th>

<th>

<?php echo $row['name']; ?>

</th>

<th>

<?php echo $row['email']; ?>

</th>

<th>

<?php echo $row['phone']; ?>

</th>

<th>

<?php echo $row['address']; ?>

</th>

<th>

<?php echo $row['country']; ?>

</th>

<th>

<?php echo $row['state']; ?>

</th>

<th>

<?php echo $row['district']; ?>

</th>

<th>

<?php echo $row['pin_code']; ?>

</th>

</tr>

</tbody>

<?php

$count++;

}

} else {

echo '0 results';

}

?>

</table>
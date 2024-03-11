<?php
require_once('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_fn = $_POST['user_fn'];
    $user_ln = $_POST['user_ln'];
    $birthdate = $_POST['birthdate'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];
    $region = $_POST['region'];
    $province = $_POST['province'];
    $municipality = $_POST['municipality'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $verification_token = bin2hex(random_bytes(32)); // Generate a random verification token

    // Insert into the users table
    $userSql = "INSERT INTO users (username, email, password, user_type, verification_token) 
                VALUES ('$user_fn', '$email', '$password', 'homebuyer', '$verification_token')";
    
    if ($conn->query($userSql) === FALSE) {
        echo json_encode(['success' => false, 'message' => 'Registration failed']);
        exit;
    }

    $userId = $conn->insert_id;

    // Insert into the homebuyers table
    $homebuyerSql = "INSERT INTO homebuyers (user_id, fn, ln, birthdate, gender, address, region, province, municipality) 
                     VALUES ('$userId', '$user_fn', '$user_ln', '$birthdate', '$gender', '$address', '$region', '$province', '$municipality')";
                     
    if ($conn->query($homebuyerSql) === FALSE) {
        // Rollback user insertion if homebuyer insertion fails
        $conn->query("DELETE FROM users WHERE id = '$userId'");
        echo json_encode(['success' => false, 'message' => 'Registration failed']);
        exit;
    }

    // Send verification email to the user
    $verification_link = "http://your-website.com/verify.php?token=$verification_token&user_id=$userId";
    $subject = "Verify Your Email";
    $message = "Click on the following link to verify your email: $verification_link";
    mail($email, $subject, $message);

    echo json_encode(['success' => true, 'message' => 'Registration successful. Check your email for verification instructions.']);
}

$conn->close();
?>

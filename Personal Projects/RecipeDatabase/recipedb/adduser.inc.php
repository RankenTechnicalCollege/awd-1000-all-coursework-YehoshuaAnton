<?php
require("connection.inc.php");

$username = htmlspecialchars($_POST['username']);
$firstName = htmlspecialchars($_POST['first']);
$lastName = htmlspecialchars($_POST['last']);
$email = htmlspecialchars($_POST['email']);
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Validate and clean up user input
if (validateEmail($email) === 1) {
    $query = "INSERT INTO users (username, first_name, last_name, email, password, admin) VALUES (?, ?, ?, ?, ?, FALSE)";
    $statement = $connection->prepare($query);
    $statement->bind_param("sssss", $username, $firstName, $lastName, $email, $password);
    $result = $statement->execute();
    $connection->close();

    // Create session
    session_regenerate_id();
    $_SESSION['login'] = TRUE;
    $_SESSION['name'] = $firstName . " " . $lastName;
} else {
    echo "Please check your information and try again";
}

function validateUsername($connection, $username)
{
    // Check if the username is already in the database
    if ($statement = $connection->prepare("SELECT userid FROM users WHERE username = ?")) {
        $statement->bind_param("s", $username);
        $statement->execute();
        $statement->store_result();
        if ($statement->num_rows === 0) {
            $statement->bind_result($username);
            $statement->fetch();
            // Check for a valid username
            return preg_match("/^([[:alnum:]]|_|\.|-{3,})$/", $username);
        }
    }
}

function validateEmail($email)
{
    return preg_match("/^([[:alnum:]]|_|\.|-)+@([[:alnum:]]|\.|-)+(\.)([a-z]{2,5})$/", $email);
}

<?php
require("connection.inc.php");

$username = $_POST['username'];

// Evaluate the prepare function to make sure the query is valid
if ($statement = $connection->prepare("SELECT CONCAT(first_name, ' ', last_name) AS name, userid, password FROM users WHERE username = ?")) {
    $statement->bind_param("s", $username);
    $statement->execute();
    $statement->store_result();

    // Check that user is in database
    if ($statement->num_rows > 0) {
        $statement->bind_result($name, $userid, $password);
        $statement->fetch();
        // Check that the password is correct
        if (password_verify($_POST['password'], $password)) {
            // Create session
            session_regenerate_id();
            $_SESSION['login'] = TRUE;
            $_SESSION['name'] = $name;
            $_SESSION['id'] = $userid;
        } else {
            echo "Incorrect password";
        }
    } else {
        echo "Incorrect username";
    }

    $statement->close();
}

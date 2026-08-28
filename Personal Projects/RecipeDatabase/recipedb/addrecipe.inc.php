<?php
require("connection.inc.php");

$recipeName = $_POST['name'];
$kitchenOf = $_POST['kitchenof'];
$ingredients = $_POST['ingredients'];
$directions = $_POST['directions'];

$query = "INSERT INTO recipes (recipe_name, kitchen_of, category1, category2, ingredients, directions) VALUES (?, ?, ?, ?, ?, ?)";
$statement = $connection->prepare($query);
$statement->bind_param("ssiiss", $recipeName, $kitchenOf, $_POST['category1'], $_POST['category2'], $ingredients, $directions);
$result = $statement->execute();
$connection->close();

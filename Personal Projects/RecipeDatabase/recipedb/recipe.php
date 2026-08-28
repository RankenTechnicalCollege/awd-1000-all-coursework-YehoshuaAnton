<?php
require("connection.inc.php");

class Recipe
{
    public $name;
    public $kitchenof;
    public $mpf;
    public $category;
    public $ingredients;
    public $directions;

    function __construct($name, $kitchenof, $mpf, $category, $ingredients, $directions)
    {
        $this->name = $name;
        $this->kitchenof = $kitchenof;
        $this->mpf = $mpf;
        $this->category = $category;
        $this->ingredients = $ingredients;
        $this->directions = $directions;
    }

    function __toString()
    {
        $output = "";

        return $output;
    }

    function addRecipe()
    {
        $connection = new mysqli("localhost", "root", "", "recipedb");
        $query = "INSERT INTO recipes VALUES (?, ?, ?, ?, ?, ?)";
        $statement = $connection->prepare($query);
        $statement->bind_param("ssssss", $this->name, $this->kitchenof, $this->mpf, $this->category, $this->ingredients, $this->directions);
        $result = $statement->execute();
        $connection->close();
        return $result;
    }
}

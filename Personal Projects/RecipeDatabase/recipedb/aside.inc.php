<?php require("connection.inc.php"); 
$query = "SELECT ";
?>
<form action="index.php" method="post">
    <label>Filter by:</label>
    <ul class="tree-view">
        <li><span class="caret-down">Milchig | Pareve | Fleishig</span>
            <ul class="active">
                <li><input type="checkbox" name="milchig" id="milchig" checked>Milchig</li>
                <li><input type="checkbox" name="pareve" id="pareve" checked>Pareve</li>
                <li><input type="checkbox" name="fleishig" id="fleishig" checked>Fleishig</li>
            </ul>
        </li>
        <li><span class="caret-down">Categories</span>
            <ul class="active">
                <li><input type="checkbox" name="bread" id="bread" checked>Breads</li>
                <li><input type="checkbox" name="salad" id="salad" checked>Salads</li>
                <li><input type="checkbox" name="soup" id="soup" checked>Soups</li>
                <li><input type="checkbox" name="side" id="side" checked>Sides</li>
                <li><input type="checkbox" name="chicken" id="chicken" checked>Chicken</li>
                <li><input type="checkbox" name="meat" id="meat" checked>Meat</li>
                <li><input type="checkbox" name="fish" id="fish" checked>Fish</li>
                <li><input type="checkbox" name="dessert" id="dessert" checked>Desserts</li>
            </ul>
        </li>
    </ul>
    <input type="button" value="Search">
</form>
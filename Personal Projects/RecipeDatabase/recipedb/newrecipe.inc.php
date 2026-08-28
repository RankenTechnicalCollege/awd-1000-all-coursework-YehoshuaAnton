<?php
if (isset($_SESSION['login'])) {
?>
    <h2>Enter new recipe information</h2>
    <form name="newrecipe" action="index.php" method="post">
        Name: <input type="text" name="name" id="name" value="<?php if (isset($_POST["name"])) echo $_POST["name"]; ?>" required>
        From the kitchen of: <input type="text" name="kitchenof" id="kitchenof" value="<?php if (isset($_POST["kitchenof"])) echo $_POST["kitchenof"]; ?>">
        Category: <select name="category1" id="category1" required>
            <option value="" selected hidden>Please Select</option>
            <option value="1">Milchig</option>
            <option value="2">Pareve</option>
            <option value="3">Fleishig</option>
        </select>
        <select name="category2" id="category2" required>
            <option value="" selected hidden>Please select</option>
            <option value="4">Bread</option>
            <option value="5">Dip</option>
            <option value="6">Salad</option>
            <option value="12">&emsp;Vegetable</option>
            <option value="13">&emsp;Lettuce</option>
            <option value="14">&emsp;Pasta</option>
            <option value="7">Fish</option>
            <option value="8">Soup</option>
            <option value="9">Side</option>
            <option value="15">&emsp;Potatoes</option>
            <option value="16">&emsp;Rice</option>
            <option value="17">&emsp;Kugel</option>
            <option value="18">&emsp;Vegetable</option>
            <option value="10">Main</option>
            <option value="19">&emsp;Chicken</option>
            <option value="20">&emsp;Meat</option>
            <option value="21">&emsp;Dairy</option>
            <option value="11">Dessert</option>
            <option value="22">&emsp;Cake</option>
            <option value="23">&emsp;Cookie</option>
            <option value="24">&emsp;Bar</option>
            <option value="25">&emsp;Frozen</option>
            <option value="26">&emsp;Muffin</option>
        </select>
        Ingredients: <input type="text" name="ingredients" id="ingredients" value="<?php if (isset($_POST["ingredients"])) echo $_POST["ingredients"]; ?>" required>
        Directions: <textarea name="directions" id="directions" cols="30" rows="10"><?php if (isset($_POST["directions"])) echo $_POST["directions"]; ?></textarea>
        <input type="submit" value="Submit recipe">
        <input type="hidden" name="content" value="addrecipe">
    </form>
<?php
} else {
    echo "<h2>Please login to add a recipe</h2>";
}
?>
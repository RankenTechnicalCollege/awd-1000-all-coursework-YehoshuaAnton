<?php
session_start();
require("connection.inc.php");
include("recipe.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Database</title>
    <style>
        <?php include("recipedb.css"); ?>
    </style>
</head>

<body>
    <header>
        <?php include("header.inc.php"); ?>
    </header>
    <aside>
        <?php include("aside.inc.php"); ?>
    </aside>
    <main>
        <?php if (isset($_REQUEST['content'])) {
            include($_REQUEST['content'] . ".inc.php");
        } else {
            include("main.inc.php");
        } ?>
    </main>
    <nav>
        <?php include("nav.inc.php"); ?>
    </nav>
    <footer>
        <?php include("footer.inc.php"); ?>
    </footer>
</body>

<script>
    <?php include("recipedb.js"); ?>
</script>

</html>
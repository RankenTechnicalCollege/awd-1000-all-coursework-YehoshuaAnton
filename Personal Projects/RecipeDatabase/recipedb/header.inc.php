<h1>Recipe Database</h1>
<?php if (!isset($_SESSION['login'])) { ?>
    <a href="index.php?content=login">Login</a>
    <a href="index.php?content=newuser">Sign up</a>
<?php } ?>
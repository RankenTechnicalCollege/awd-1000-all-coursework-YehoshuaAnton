<?php
if (!isset($_SESSION['login'])) {
?>
    <h2>Please log in</h2>
    <form name="login" action="index.php" method="post">
        <label>Username</label>
        <input type="text" name="username" id="username">
        <label>Password</label>
        <input type="password" name="password" id="password">
        <input type="submit" value="Login">
        <input type="hidden" name="content" value="validate">
    </form>
<?php
} else {
    echo "<h2>Welcome to the recipe database</h2>";
}
?>
<script>
    document.login.username.focus();
</script>
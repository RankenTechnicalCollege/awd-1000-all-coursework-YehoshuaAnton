<h2>Enter new user information</h2>
<form name="newuser" action="index.php" method="post">
    First name: <input type="text" name="first" id="first" size="20" value="<?php if (isset($_POST["first"])) echo $_POST["first"]; ?>" required>
    Last name: <input type="text" name="last" id="last" size="20" value="<?php if (isset($_POST["last"])) echo $_POST["flast"]; ?>" required>
    Email: <input type="text" name="email" id="email" value="<?php if (isset($_POST["email"])) echo $_POST["email"]; ?>" required>
    Username: <input type="text" name="username" id="username" size="30" value="<?php if (isset($_POST["username"])) echo $_POST["username"]; ?>" required>
    Password: <input type="password" name="password" id="password" value="<?php if (isset($_POST["password"])) echo $_POST["password"]; ?>" required>
    <input type="submit" value="Add user">
    <input type="hidden" name="content" value="adduser">
</form>
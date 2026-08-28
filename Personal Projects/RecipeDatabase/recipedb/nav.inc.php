<?php
/* $query = "SELECT recipes.recipe_name AS name, category2.category_name AS category2, parent.category_name AS parent
FROM recipes
LEFT OUTER JOIN categories AS category2
ON category2.category_id = recipes.category2
LEFT OUTER JOIN categories AS parent
ON parent.category_id = category2.parent_category
ORDER BY parent.category_id, category2.category_id, name"; */

$query = "SELECT test.recipe_name AS name, category2.category_name AS category2, parent.category_name AS parent
FROM test
LEFT OUTER JOIN categories AS category2
ON category2.category_id = test.category2
LEFT OUTER JOIN categories AS parent
ON parent.category_id = category2.parent_category
ORDER BY parent.category_id, category2.category_id, name";

$result = $connection->query($query);
while ($row = $result->fetch_assoc()) {
    printf("%s<br>", $row["name"]);
}

//$result->free_result();

// $connection->close();

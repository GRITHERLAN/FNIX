<?php
$variable;
if (empty($variable)) {
    $variable = strtolower("Hola soy una frase en minusculas");
    echo "<strong>" . strtoupper($variable) . "</strong>";
} else {
    echo "No esta vacia";
}
?>
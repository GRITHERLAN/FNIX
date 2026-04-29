<?php
/* Debuggear */
$nombre = "Nicolas";
var_dump($nombre);

/* fechas */
echo date('d-m-y');
echo "<br>";
echo time();

/* matematicas */
echo "<br>Raiz cuadrada de 10 : " . sqrt(10);

echo "<br>";
echo "Numero aleatorio entre 10 y 40: " . rand(10, 40);

echo "<br>";
echo "Numero pi: ", pi();

echo "<br>";
echo "Redondear: " . round(7.8);

/* Mas funciones generales */
/* obetener tipo de dato */
echo "<br>" . gettype($nombre);

if (is_string($nombre)) {
    echo "<br> es string";
}

echo "<br>";
if (isset($nombre)) {
    echo "Variable existe";
} else {
    echo "No existe";
}

/* limpiar string */
echo "<br>";
$frase = "    mi contenido   ";
echo var_dump(trim($frase));

/* eliminar variables / indices */
$year = 2025;
unset($year);
echo var_dump($year);

/* comprobar si una varible esta vacia */
$texto = "";

if (empty($texto)) {
    echo "la variable esta vacia";
}

/* contar caracteres de un string */
echo "<br>";
$cadena = "12345";
echo strlen($cadena);

/* encontrar un caracter */
echo "<br>";
$frase = "La vida es bella";
echo strpos($frase, "vida");

/* reemplazar palabras de un string */
echo "<br>";
$frase = str_replace("vida", "moto", $frase);
echo $frase;
/* MAYUSCULAS y minusculas*/
echo "<br>";
echo strtolower($frase);
echo "<br>";
echo strtoupper($frase);
?>
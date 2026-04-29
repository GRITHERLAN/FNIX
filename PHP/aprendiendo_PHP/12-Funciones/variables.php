<?php
$frase = "<br>Ni los genios son tan genios, ni los mediocres tan mediocres";
echo $frase;

function holaMundo()
{
    /* vuelve la variables globales para ser usadas en las funciones */
    global $frase;
    echo $frase;

    $year = "<br>2025";
    echo $year;

    return $year;
}

echo holaMundo();

function BuenosDias()
{

    return "<br>Hola buenos Dias";

}

function BuenasTardes()
{

    return "<br>Hola buenas Tardes";

}

function BuenasNoches()
{

    return "<br>Hola buenas Noches";

}
/* se guarda es la funcion en modo string, debe estar tal cual y
 luego para invocarla se utiliza la variable en la que se almaceno */
$horario = "BuenasNoches";
echo $horario();


?>
<?php



include_once './conexao2.php';



$lista = array();





$sql = "SELECT * FROM clientes";



$resultado = mysqli_query($conexao, $sql);



while($clientes = mysqli_fetch_assoc($resultado)){

   $lista[] = $clientes;

}

echo json_encode($lista);

do{
    n = Number(prompt("Ingrese un numero"))
}while(isNaN(n) || n > 10 || n < 0 )

function fib(n){
    if (n == 0 || n == 1){
    return 1
}else
    return fib(n-1) +fib(n-2);
}
let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML= "El numero de Fibonacci del " +n +" es el "+ fib(n)
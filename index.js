
let nombre = prompt("¡Hola! ingrese porfavor su nombre.");
let saludo = `Hola ${nombre}, aqui puedes calcular el interes que desees sobre un monto X en un tiempo determinado, sencillo.`;
alert (saludo);

function answer (){
    let monto_input= parseInt(document.getElementById("monto").value);

    let intereses_input=parseInt(document.getElementById("interes").value);

    let tiempo_input=parseInt(document.getElementById("tiempo").value);

    let calculoInteresesGenerados = monto_input * intereses_input * tiempo_input/100;

    let montoTotal = calculoInteresesGenerados + monto_input;

    document.getElementById("output_1").
    innerHTML=monto_input;

    document.getElementById("output_2").
    innerHTML=calculoInteresesGenerados;

    document.getElementById("output_3").
    innerHTML=montoTotal;

}
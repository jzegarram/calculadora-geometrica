// Código del cuadrado 
console.group("Cuadrados");

// const LADO_CUADRADO = 5;
// console.log(`Los lados del cuadrado miden: ${LADO_CUADRADO}cm`)

const PERIMETRO_CUADRADO = (lado) => lado * 4;

// console.log(`El perimetro del cuadrado mide: ${PERIMETRO_CUADRADO}cm`)

// const AREA_CUADRADO = (lado) => lado * lado;
function AREA_CUADRADO(lado) {
    return lado * lado;
}
// console.log(`El área del cuadrado mide: ${AREA_CUADRADO}cm^2`)


console.groupEnd();

// Código del triángulo 

console.group("Triángulos");


// console.log(`La altura del triángulo mide: ${ALTURA_TRIANGULO}cm`)

const PERIMETRO_TRIANGULO = (lado1, lado2, base) => lado1 +  lado2 + base;
// console.log(`El perimetro del triángulo mide: ${PERIMETRO_TRIANGULO}cm`)

const AREA_TRIANGULO = (altura,base) => (altura * base) / 2;
// console.log(`El área del triángulo mide: ${AREA_TRIANGULO}cm^2`)

console.groupEnd();

// Código del Cículo 

console.group("Círculo");


// Diámetro
const DIAMETRO_CIRCULO = (radio) => radio * 2;
// console.log(`El diámetro del círculo mide: ${DIAMETRO_CIRCULO}cm`)

// Pi
const PI = Math.PI;
// console.log(`PI es: ${PI}`)

// Circunferencia
const CIRCUNFERENCIA_CIRCULO = (radio) => {
    const diametro = DIAMETRO_CIRCULO(radio) 
    return diametro * PI
};
// console.log(`La circunferencia del círculo mide: ${CIRCUNFERENCIA_CIRCULO}cm`)


// Área 
const AREA_CIRCULO = (radio) => (radio*radio) * PI;
// console.log(`El área del círculo mide: ${AREA_CIRCULO}cm^2`)




console.groupEnd();



// manipular el DOM


function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
    const perimetro = PERIMETRO_CUADRADO(value)
    alert(perimetro)
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
    const area = AREA_CIRCULO(value);
    alert(area);
}
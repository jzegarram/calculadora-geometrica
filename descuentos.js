
function calcPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickButtonCalcPriceDiscount(params) {
    const inputPrice = document.getElementById("inputPrice")
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount")
    const discountValue = inputDiscount.value;
    const resultP = document.getElementById("ResultP");

    if (priceValue < 0 || discountValue < 0) {
        resultP.innerText = "Ingresé un información válida"
    } else {
    const precioConDescuento = calcPrecioConDescuento(priceValue, discountValue);
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento
    }
}
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro){
    let dollar=oneEuroIs.USD*euro;
    return dollar;
}

function fromDollarToYen(dollar){
 let yen=(oneEuroIs.JPY/(1/oneEuroIs.USD))*dollar;
 return yen;
}


function fromYenToPound(yen){
    let pound=(oneEuroIs.GBP*(1/oneEuroIs.JPY))*yen;
    //pound=pound.toFixed(2);
    return pound;
   }
   


console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound};
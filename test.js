test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 1.206 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3)).toBe(460.43999999999994); //1 dollar son 153,48 yens, entonces 3 dollar deberian ser = (3 * 153,48)
})

test("One yen should be 0.03  pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(4)).toBe(0.02501954652071931); //1 yen son 0.006254886630179828 GPM, entonces 3 dollar deberian ser = (3 * 0.01)
})


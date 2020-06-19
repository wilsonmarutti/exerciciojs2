console.log(area(5));
console.log(circunf(5));

function area(raio) {
    var A = Math.PI * Math.pow(raio, 2);
    return A;
}

function circunf(raio) {
    var C = Math.PI * (raio * 2);
    return C;
}
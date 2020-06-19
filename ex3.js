console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

function countBs(string) {
    var res = 0;
    for (let i = 0; i < string.length; i++) {
        var caracter = string[i];
        if (caracter == "B") {
            res++;
        }
    }
    return res;
}

function countChar(string, req) {
    var res = 0;
    for (let i = 0; i < string.length; i++) {
        var caracter = string[i];
        if (caracter == req) {
            res++;
        }
    }
    return res;
}
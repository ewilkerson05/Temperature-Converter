function askname() {
    var name = prompt("Enter your name.")
    return name
} //10

function intro(name) {
    var forc = prompt(`Hello ${name}, would you like to convert from F to C or C to F`)
    return forc
} //10

intro(askname())

function ftoc() {
    var ftemp = prompt("Enter the temperature for F to C.")
    return ftemp
} // 20

ftoc()

function ftoc2(ftemp) {
    var fconvert = ftemp - 32 * 5 / 9
    return fconvert
} // 20

ftoc2()

function ctof() {
    var ctemp = prompt("Enter the temperature for C to F.")
    return ctemp
}

ctof()

function ctof2(ctemp) {
    var cconvert = ctemp * 9 / 5 + 32
    return cconvert
}
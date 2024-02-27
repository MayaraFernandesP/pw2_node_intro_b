const chalk = require("chalk")

function calculadora(n1,n2,op){

    switch(op){

        case'+':

        return(chalk.bgBlue.white(`${n1} ${op} ${n2} = ${(n1+n2)}`))

        case'-':
        
            return(chalk.bgGreen.white(`${n1} ${op} ${n2} = ${(n1-n2)}`))
    
        case'*':
        
            return(chalk.bgMagenta.white(`${n1} ${op} ${n2} = ${(n1*n2)}`))
    
        case'/':
        
            return(chalk.bgYellow.white(`${n1} ${op} ${n2} = ${(n1/n2)}`))
    
        default:
            return(chalk.bgRed.white(`Invalid Operation`))
    }
}

console.log(calculadora(135, 61, "+"))
console.log(calculadora(135, 61, "-"))
console.log(calculadora(15, 15, "*"))
console.log(calculadora(129, 12, "/"))
console.log(calculadora(32, 6, "|"))






/*const chalk = require('chalk')

function calculadora(n1,n2,op){

    if(op === "+")
    {
        return(chalk.bgBlue.white(`${n1} ${op} ${n2} = ${(n1+n2)}`))

    }else

    if(op === "-")
    {
        return(chalk.bgGreen.white(`${n1} ${op} ${n2} = ${(n1-n2)}`))

    }else

    if(op === "*")
    {
        return(chalk.bgMagenta.white(`${n1} ${op} ${n2} = ${(n1*n2)}`))

    }else

    if(op === "/")
    {
        return(chalk.bgYellow.white(`${n1} ${op} ${n2} = ${(n1/n2)}`))

    }else{
        return(chalk.bgRed.white(`Invalid Operation`))
    }
}

console.log(calculadora(135, 61, "+"))
console.log(calculadora(135, 61, "-"))
console.log(calculadora(15, 15, "*"))
console.log(calculadora(129, 12, "/"))
console.log(calculadora(32, 6, "|"))*/
import { suma, multiplica} from "./modulos/controller.js"




let suma1= suma(1,2)

let suma2= suma(4,5)

let multi= multiplica(suma1, suma2)
console.log(multi)


import chalk from 'chalk';

console.log(chalk.green(`El resultado de la multiplicacion es: ${multi}`));
import chalk from "chalk";
import validator from "validator";

console.log(chalk.blue.underline.inverse("Hello World!"));

const res = validator.isEmail("Manisha@gmail.com");
console.log(res ? chalk.green(res) : chalk.red(res));

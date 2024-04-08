#!/usr/bin/env node
import chalk from "chalk"
import inquirer from "inquirer";
import promptSync from 'prompt-sync'
const prompt=promptSync();
console.log(chalk.blue.bold("================== Welcome to the TO DO List App =================="));
let mylist=[];
while(true){
const answer=await inquirer.prompt([
    {
        type:'list',
        name:'query',
        message:(chalk.red.bold("What do you want to do in TO DO Application")),
        choices:['view List','Add items in List','Delete Items','Quit']
    }
])
if(answer.query=='view List'){
    console.log(chalk.blue.bold('============= Here is the List =============='));
    for(let item of mylist){
        console.log(chalk.white.bold(`${mylist.indexOf(item)+1} : ${item}`));
    }
    if(mylist[0]==undefined){
        console.log(chalk.yellow.bold('\n\t No Entries \t\n'));
    }
    console.log(chalk.blue.bold('==========================================================='));
}else if(answer.query=='Add items in List'){
    let input=chalk.yellow.bold(prompt(chalk.red.bold("Enter your TO DO item here: ")));
    mylist.push(input);
    console.log(chalk.blue.bold(`"${input}" : added in the list..`));
}else if(answer.query=='Delete Items'){
    for(let item of mylist){
        console.log(`${mylist.indexOf(item)+1} : ${item}`);
    }
    let deleteindex=Number(prompt(chalk.red.bold("Enter index number of items that you want to delete: ")));
    console.log(`"${mylist[deleteindex]}" : is now removed for the list..`)
    mylist.splice(deleteindex,1);
}else{
    console.log(chalk.blue.bold("================ Thanks for using the App - Good bye ================"))
    break;
}
}
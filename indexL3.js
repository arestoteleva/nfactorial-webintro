// logic operations 
// let bool1  = true;
// let bool2  = false;
// console.log(bool1 && bool2)

// const fries = true;
// const cola = true;
// console.log(fries && cola);
// console.log(fries || cola);
// console.log(fries &&! cola);

// const hamburger;
// console.log(hamburger ?? 'fries');

// const hamburger = 10;
// const fries = 5;
// const cola = 6;

// const salad = 2;

// if(hamburger>=11 && cola > 4 && fries){
//     console.log("let's eat")
// } else if (hamburger==10 && salad > 1){
//     console.log("may be ...")
// }else{
//     console.log('not today')
// }
  
// let years = 20;

// switch(years){
//     case 50:
//         console.log('Happy 50 years!');
//         break;
//     case 49:
//         console.log('Happy 49 years!');
//         break;
//     case 48:
//         console.log('Happy 48 years!');
//         break;
//     default:
//         console.log('Happy H-bay!');  
// }

// LOOPS 
for(let i = 10; i > 0; i--){

}

let result = ''
for (let i = 1; i < 10; i++){
    for (let j = 0; j < i; j++){
        result += '*'
    }
    result += '\n';
}
console.log(result);

const arr = [['Aruzhan', 'Nurseit', 'Dinara', 'Aizeka'], 
['Samat', 'Aidana']
];

for (let i =0; i < arr.length; i++){
for (let j = 0; j < arr[i].length; j++){
    console.log(arr[i][j]);
}
    
}
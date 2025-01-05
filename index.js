function analyserTableau(intArr){

 if (intArr.length === 0){
    return " erreur : array should not be empty"
 }

intArr = intArr.filter(intArr => intArr >= 0 );

intArr.sort(function(a, b){return a - b});

let pair = intArr.filter(num => num % 2 === 0);

if(pair.length > 7){
    pair.splice(2,2);
}else if (pair.length < 3) {
    pair.push(0,0,0);
}

return pair;

}

let hour = [-2,1,5,5,7,8,3,6,5,9];
console.log(analyserTableau(hour)); 


// //  let f = [1,23,52,42,144];
// // f.filter((f)=> f % 2 == 0 )
// // console.log(f.filter((f)=> f % 2 == 1 ));
// function test(x,y){
//     if(x < y){
//         "the number 10 is smaller than 20";
    
//     } else {
//         "the number 10 is bigger than 20"
//     }
// }



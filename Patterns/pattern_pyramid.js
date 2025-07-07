let output = "";
let n = 10;

let pyramid = document.getElementById('pyramid');
let dom_output = "";
// PYRAMID WITH FOR LOOP

for(let i = 0; i < n; i++){
    for(let j=0; j < n-i-1; j++){
        dom_output += "&nbsp;&nbsp;&nbsp;";
        output += "   ";
    }
    for(let k=0; k < i*2 +1; k++){
        dom_output += "&nbsp;*&nbsp;";         
        output += " * ";
    }
     for(let l=0; l < n-i-1; l++){
        dom_output += "&nbsp;&nbsp;&nbsp;";
        output += "   ";
    }
    console.log(output);
    console.log('\n');
    dom_output += "<br>"
    output="";
}

pyramid.innerHTML = dom_output;

// PYRAMID WITH WHILE LOOP

// let i= 0;
// while (i<n){
//     let j =0;
//     while(j<n-i-1){
//         output += "   ";
//         j++;
//     }
//     let k=0;
//     while(k<i*2+1){
//         output += " * ";
//         k++;
//     }
//     let l = 0;
//     while(l<n-i-1){
//         output += "   ";
//         l++;
//     }
//     console.log(output);
//     console.log('\n');
//     output="";
//     i++;

// }

// PYRAMID WITH DO WHILE LOOP

// let i= 0;
// do{
//     let j =0;
//     do{
//         if(j>=n-i-1)
//             break;
//         output += "  ";
//         j++;
//     }while(j<n-i-1);

//     let k=0;
//     do{
//         output += " * ";
//         k++;
//     }while(k<i*2+1);

//     let l = 0;
//     do{
//         if(l>=n-i-1)
//             break;
//         output += "  ";
//         l++;
//     }while(l<n-i-1);

//     console.log(output);
//     console.log('\n');
//     output="";
//     i++;

// }while(i<n);

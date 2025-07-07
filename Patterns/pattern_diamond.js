let dia = "";
let lines = 5;

let diamond = document.getElementById('diamond');
let dom_diamond = "";

// // PYRAMID WITH FOR LOOP

for(let i = 0; i < lines; i++){
    for(let j=0; j < lines-i-1; j++){
        dom_diamond += "&nbsp;&nbsp;&nbsp;";
        dia += "   ";
    }
    for(let k=0; k < i*2 +1; k++){
        dom_diamond += "&nbsp;*&nbsp;";    
        dia += " * ";
    }
     for(let l=0; l < lines-i-1; l++){
        dom_diamond += "&nbsp;&nbsp;&nbsp;";
        dia += "   ";
    }
    console.log(dia);
    console.log('\n');
    dom_diamond += "<br>"
    dia="";
}

lines=lines-1;

for(let i = lines; i > 0; i--){
    for(let j=0; j <= lines-i ; j++){
        dom_diamond += "&nbsp;&nbsp;&nbsp;";
        dia += "   ";
    }
    for(let k=0; k < i*2 - 1; k++){ 
        dom_diamond += "&nbsp;*&nbsp;";      
        dia += " * ";
    }
    for(let k=lines; k <= lines-i ; k++){
        dom_diamond += "&nbsp;&nbsp;&nbsp;";
        dia += "   ";
    }
    console.log(dia);
    console.log('\n');
    dom_diamond += "<br>"
    dia="";
}

diamond.innerHTML = dom_diamond;
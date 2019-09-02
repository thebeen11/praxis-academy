let ukuran = 8;

let papan = "";

for (let y=0; y<ukuran; y++){
    for(let x=0; x<ukuran; x++){
    if ((x + y) % 2 == 0) {
        papan += "   ";
    }else{
        papan += "#"
    }
}
papan += "\n";
}
console.log(papan);
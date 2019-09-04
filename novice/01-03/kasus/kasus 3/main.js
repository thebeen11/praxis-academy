function calculateSupply(age, amountPerDay) {
    var umurMax = 100;
    var total = (amountPerDay*365) * (umurMax - age);
    var pesan = 'kamu membutuhkan ' +total+ ' batang rokok sampai umur ' +umurMax+ ' tahun';
    console.log(pesan);
    
}
calculateSupply(28, 6);
calculateSupply(28, 12);
calculateSupply(28, 32);
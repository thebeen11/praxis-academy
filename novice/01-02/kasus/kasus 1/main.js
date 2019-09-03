let x, y;
let myText = document.querySelector('body');

x = window.prompt('masukkan angka pertama!', '0');
y = window.prompt('masukkan angka kedua!', '0');

if (x == y) {
    myText.textContent = "nilai "+ x +" sama dengan " +y;
  }else if(x < y){
    myText.textContent = "nilai "+ x +" lebih kecil dari "+ y;
  }else if(x > y){
    myText.textContent = "nilai "+ x +" lebih besar dari "+ y;
  }
//membuat gambar onClicik
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc ===  'images/praxislogo.png') {
        myImage.setAttribute('src','images/js.png');
    }else{
        myImage.setAttribute('src','images/praxislogo.png');
    }
}

// heading dengan Input nama
var myButton = document.querySelector('button');                                //deklarasi button
var myHeading = document.querySelector('h1');                                   //deklarasi Heading

function setName() {
    var myName = prompt('Silahkan Masukkan Nama Anda.');
    localStorage.setItem('name', myName);                                               //memasukkan nama dengan variable myName
    myHeading.innerHTML = 'Belajar JS di Praxis-Academy is cool, ' + myName;     //menampilkan heading+nama yang telah diinput
}

    if (!localStorage.getItem('name')) {
        setName();
    }else{
       var storedName = localStorage.getItem('name'); 
       myHeading.innerHTML = 'Belajar JS di Praxis-Academy is cool, ' + storedName; 
    }


myButton.onclick = function() {
    setName();
}
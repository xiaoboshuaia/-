// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/iu-1.jpg'){
        myImage.setAttribute('src','images/iu-2.jpg');
    }else{
        myImage.setAttribute('src','images/iu-1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('输入你的名字U娜');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'IU is beautiful,' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storageName = localStorage.getItem('name');
    myHeading.textContent = 'IU is beautiful,' + storageName;}

myButton.onclick = function(){
    setUserName();
}



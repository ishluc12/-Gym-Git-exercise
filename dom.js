let button=document.getElementById('btn');
let times=document.getElementById('num')

button.addEventListener('click',()=>{
    times.textContent++;
})


let hide=document.getElementById('btn2');
let increase=document.getElementById('btn3')
let text=document.getElementById('text')

hide.addEventListener('click',()=>{
    text.classList.toggle('hidden')
})


increase.addEventListener('click',()=>{
    let currentSize=parseFloat(window.getComputedStyle(text).fontSize);
    text.style.fontSize=(currentSize+2)+'px';
})

let submit=document.getElementById('btn4');
let input1=document.getElementById('input1');
let input2=document.getElementById('input2');

submit.addEventListener('click',()=>{
    alert (`name: ${input1.value} and password: ${input2.value}`);
})

let background=document.getElementById('btn5');
let body=document.querySelector('body');


background.addEventListener('click',()=>{
    body.classList.toggle('bg')
})

let removeLast=document.getElementById('btn6');
let list=document.getElementById('list');

removeLast.addEventListener('click',()=>{
   list.removeChild(list.lastElementChild)
})

let changeAll=document.getElementById('btn7');

function change(){
    let colors='0123456789ABCDEF';
    let hex='#';
    for(let i=0;i<6;i++){
        hex+=colors[Math.floor(Math.random()*16)];
    }
   return hex;
}

btn7.addEventListener('click',()=>{
    document.body.style.backgroundColor=change();
})


let add=document.getElementById('btn8');
let remove=document.getElementById('btn9');
let textChange=document.getElementById('text2');
let originalext=textChange.textContent;

add.addEventListener('click',()=>{
    textChange.textContent='Hello World';
})

remove.addEventListener('click',()=>{
    textChange.textContent=originalext;
})

let longest=document.getElementById('long');
let text3= document.getElementById('long').innerText;
longest.addEventListener('mouseover',()=>{
    let lagTxt = text3.split(' ');
    let longestWord = "";
    for (let i = 0; i < lagTxt.length; i++) {
        if (lagTxt[i].length > longestWord.length) {
            longestWord = lagTxt[i];
        }
    }
    let highlightedText = text3.replace(longestWord, `<span style="color: red;">${longestWord}</span>`);
    longest.innerHTML = highlightedText;
})





let hidden=document.querySelector('h4');
hidden.addEventListener('click', ()=>{
    if(hidden.style.display==='none' || hidden.style.display===''){
        hidden.style.display='block';
    } else {
        hidden.style.display='none';
    }
})
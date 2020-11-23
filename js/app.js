/*Event Targeting*/

/*Set up variables*/
const mainBox = document.querySelector('.main-box');
const redBox = document.querySelector('.red');
const greenBox = document.querySelector('.green');
const blueBox = document.querySelector('.blue');
const yellowBox = document.querySelector('.yellow');
var theParent = document.querySelector('.color-boxes');
const mainBoxText = document.querySelector('.main-box_text');

theParent.addEventListener('click', (event)=>{

    const boxColor = getComputedStyle(event.target).backgroundColor;
    console.log(boxColor);
    const boxText = event.target.innerText;
    console.log(boxText);

    mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
    mainBoxText.innerText = boxText;
});



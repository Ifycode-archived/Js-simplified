
var popUpContent = document.getElementById('popUp-content');
var menuButton = document.getElementById('menu-button');
var courseOutLineInner = document.getElementsByClassName('course-outline-inner')[0];




/*window.onload = function () {
    if (popUpContent.className === 'hideBeforeButtonClick') {
        popUpContent.className = 'showBeforeButtonClick';
    }
}

menuButton.onclick = function () {
    if (popUpContent.className === 'hideBeforeButtonClick') {
        popUpContent.className = 'showBeforeButtonClick';
    }

    else if(popUpContent.className === 'showBeforeButtonClick'){
        popUpContent.className = 'hideBeforeButtonClick';
    }
}*/

var toggleButton = 0;

window.onload = function () {
    var bodyInner = document.getElementsByClassName('body-inner')[0];
    var courseOutLine = document.getElementsByClassName('course-outline')[0];

    bodyInner.style.gridTemplateRows ='1fr 0fr';

    var growMenuTimer = 20;

    var interval = setInterval(growMenu, 50);
    function growMenu() {
        
        var progress = growMenuTimer;

        for (; progress <= 100;) { 
            courseOutLine.style.height  = `${progress}vh`;
            if (progress == 100) {
                clearInterval(interval);
            }
            progress++;
    }

        
    growMenuTimer++;

    }
}

toggleButton = 0;

menuButton.onclick = function () {
    var bodyInner = document.getElementsByClassName('body-inner')[0];
    var courseOutLine = document.getElementsByClassName('course-outline')[0];
    //var testIt = document.getElementsByClassName('testIt')[0];
    //var test = document.getElementsByClassName('test')[0];
   
    toggleButton++;
    //testIt.innerHTML = toggleButton;

   if (toggleButton == 1) {
    //courseOutLineInner.style.background  = 'white';
    bodyInner.style.gridTemplateRows ='0fr 1fr';

    var growMenuTimer = 60;

    var interval = setInterval(growMenu, 50);
    function growMenu() {
        
        var progress = growMenuTimer;
        //testIt.innerHTML = progress;
        

        for (; progress >= 60;) { 
            courseOutLine.style.height  = `${progress}px`;
            //test.innerHTML = progress;
            if (progress == 60) {
                clearInterval(interval);
            }
            progress--;
        }

        
    growMenuTimer--;
    //menuButton.innerHTML = growMenuTimer;

    }

    if (popUpContent.className === 'hideBeforeButtonClick') {
        popUpContent.className = 'showBeforeButtonClick';
    }

   }

   if (toggleButton == 2) {
       toggleButton = 1;
       toggleButton--;
       //courseOutLineInner.style.background  = 'linear-gradient(#146, #168)';
       bodyInner.style.gridTemplateRows ='1fr 0fr';

    var growMenuTimer = 20;

    var interval = setInterval(growMenu, 50);
    function growMenu() {
        
        var progress = growMenuTimer;
        //testIt.innerHTML = progress;
        

        for (; progress <= 100;) { 
            courseOutLine.style.height  = `${progress}vh`;
            //test.innerHTML = progress;
            if (progress == 100) {
                clearInterval(interval);
            }
            progress++;
        }

        
    growMenuTimer++;
    //menuButton.innerHTML = growMenuTimer;

    }

    if (popUpContent.className === 'showBeforeButtonClick') {
        popUpContent.className = 'hideBeforeButtonClick';
    }

   }
   

}

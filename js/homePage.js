
//====================| Find Elements |=================================
var body = document.getElementsByTagName('body')[0];
var mainButton = document.getElementsByClassName('main-button')[0];
var courseName = document.getElementsByClassName('courseName')[0];
var cube = document.getElementById('cubeCover');
var contributorArea = document.getElementById('contributorAreaInner');
var author = document.getElementsByClassName('author')[0];
var footer = document.getElementsByClassName('footer')[0];
var mainContentSide = document.getElementsByClassName('main-content-side')[0];
var cursorPointer = document.getElementsByClassName('cursor-pointer')[0];
var clock = document.getElementsByClassName('analogueClock')[0];
var learn1 = document.getElementsByClassName('learn1')[0];
var learn2 = document.getElementsByClassName('learn2')[0];
var learn3 = document.getElementsByClassName('learn3')[0];
var firstCarousel = document.getElementById('carousel1');
var secondCarousel = document.getElementById('carousel2');
var thirdCarousel = document.getElementById('carousel3');
var animatedCarousel = document.getElementsByClassName('animatedCarousel')[0];
var build = document.getElementsByClassName('build')[0];
var clickBorder = document.getElementsByClassName('click')[0];

//==================| Grow Button |=========================
var progressTimer = 0;

setInterval(showProgress, 1);
function showProgress() {
    
    var progress = progressTimer;
    
    for (; progress <= 95;) {
        mainButton.style.width = `${progress}%`;
        progress += 95;
    }

    progressTimer++;
    
}


//==================| Button Handwriting |======================
var coded = document.createElement("code");
mainButton.appendChild(coded);

var coded2 = document.createElement("code");
courseName.appendChild(coded2);

var buttonContent = 'Loading...';
var courseNameContent = 'Js simplified course';

var setTime = 0;

setInterval(buttonHandWriting, 100);
function buttonHandWriting() {
    
    var progress = setTime;
    var bc = buttonContent.charAt(progress);

    for (; progress <= buttonContent.length;) {
        progress++;
    }
    coded.innerHTML += bc;
    
    //-------------------------//
    setTime++;
    
}




//==================| Scheduling Other Animations |=====================
var animationTimer = 0;

var interval = setInterval(forAnimation, 500);
function forAnimation() { 
    animationTimer += 0.5;

    function checkDeviceWidth(largerDevices) {
        if (largerDevices.matches) {
            cursorPointer.style.opacity = '1';

            if (animationTimer == 1.5) {
                learn1.style.color = 'rgba(255, 255, 255, 0.85)';
            }

            if (animationTimer == 2.5) {
                clock.style.opacity = '0.9';
            }

            if (animationTimer == 3) {
                learn2.style.color = 'rgba(255, 255, 255, 0.85)';
            }

             if (animationTimer == 4.5) {  
                if (cube.className === 'waitingForBorder') {
                    cube.className = 'showCubeAfterBorder';
                }
                learn3.style.color = 'rgba(255, 255, 255, 0.85)';
            }
        
            if (animationTimer == 5.5) {
            
                if (contributorArea.className === 'waitingForCube') {
                    contributorArea.className = 'showContributorAreaAfterCube';
                    author.style.opacity = '0';
        
                    var setTime = 0;
        
                    setInterval(courseHandWriting, 150);
                    function courseHandWriting() {
                        
                        var progress = setTime;
                        var cnc = courseNameContent.charAt(progress);
        
                        for (; progress <= courseNameContent.length;) {
                            progress++;
                        }
                        coded2.innerHTML += cnc;
                        //-------------------------//
                        setTime++;
            
                    }
                }
                mainContentSide.style.gridTemplateRows = "1fr 0fr";
                mainContentSide.style.gridTemplateColumns = "1fr";
                
        
            }
        
        
            if (animationTimer == 8) {
                author.style.opacity = '1';
            }
        

            if (animationTimer == 9.5) {
                footer.style.opacity = '0.5';
                clearInterval(interval);
            }
        }

        else {

            secondCarousel.style.display = 'none';
            thirdCarousel.style.display = 'none';
            cursorPointer.style.opacity = '1';

            if (animationTimer == 2.5) {  
                firstCarousel.style.display = 'none';
                secondCarousel.style.display = 'flex';
                clock.style.opacity = '0';  
            }

            if ( (animationTimer >= 2.5) && (animationTimer < 6) ) {  
                secondCarousel.style.display = 'flex';
                clock.style.opacity = '0.9';   
                learn1.style.order = '1';  
            }

            if (animationTimer == 6) { 
                secondCarousel.style.display = 'none';
                thirdCarousel.style.display = 'flex';
                cube.className == 'waitingForBorder';
                learn2.style.order = '1';
            }

            if ( (animationTimer >= 6.5) && (animationTimer <= 9.5) ) {
                thirdCarousel.style.display = 'flex';
                 if (cube.className === 'waitingForBorder') {
                     cube.className = 'showCubeAfterBorder';
                 }
            }

           if (animationTimer == 7.5) {
            
                if (contributorArea.className === 'waitingForCube') {
                    contributorArea.className = 'showContributorAreaAfterCube';
                    author.style.opacity = '0';
        
                    var setTime = 0;
                    
                        //
                   var courseTimer = setInterval(courseHandWriting, 100);
                    function courseHandWriting() {
                        
                        var progress = setTime;
                        var cnc = courseNameContent.charAt(progress);
        
                        for (; progress <= courseNameContent.length;) {
                            progress++;
                        }
                        coded2.innerHTML += cnc;
                        //-------------------------//
                        setTime++;
            
                    }
                }
                mainContentSide.style.gridTemplateRows = "1fr 0fr";
                mainContentSide.style.gridTemplateColumns = "1fr";
            }

            if (animationTimer == 8.5) {
                author.style.opacity = '1';
        
            }
        
            if (animationTimer == 9.5) {
                footer.style.opacity = '0.5';
                learn3.style.order = '1';
                /*==================================
                clearInterval for get started button
                to work properly in smaller devices
                ===================================*/
                clearInterval(interval);
                
            }

        }

        
    window.onresize = function() {
        if (largerDevices.matches) {
            if (animationTimer < 4) {
                mainContentSide.style.gridTemplateRows = "1fr 0fr";
                mainContentSide.style.gridTemplateColumns = "1fr";
            }
            animatedCarousel.style.display = 'flex';
            firstCarousel.style.display = 'flex';
            secondCarousel.style.display = 'flex';
            thirdCarousel.style.display = 'flex';
            firstCarousel.style.width = '30%';
            secondCarousel.style.width = '30%';
            thirdCarousel.style.width = '30%';
            firstCarousel.style.height = '220px';
            secondCarousel.style.height = '220px';
            thirdCarousel.style.height = '220px';
            
            cursorPointer.style.opacity = '1';
            cursorPointer.style.animation = 'none';
            cursorPointer.className = 'normalCursorPosition';

            clickBorder.style.animation = 'none';
            clickBorder.style.height = '102px';
            clickBorder.style.width = '102px';
            clickBorder.style.boxShadow = '1px 0.2px rgba(255, 255, 255, 0.1)';
            clickBorder.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            
            clock.style.opacity = '1';
            clock.style.animation = 'none';
            clock.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            clock.style.boxShadow = '1px 0.2px rgba(255, 255, 255, 0.1)';
            
            if (cube.className === 'waitingForBorder') {
                cube.className = 'showCubeAfterBorder';
            }

            build.style.animation = 'none';
            build.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            build.style.boxShadow = '1px 0.2px rgba(255, 255, 255, 0.1)';
            
            contributorArea.className = 'showContributorAreaAfterCube';
            courseName.innerHTML = "<code>JS simplified course</code>";
            author.style.transition = 'none';
            author.style.opacity = '1';
            
            learn3.style.order = '1';
            learn2.style.order = '1';
            learn1.style.order = '1';
            learn1.style.color = 'rgba(255, 255, 255, 0.85)';
            learn2.style.color = 'rgba(255, 255, 255, 0.85)';
            learn3.style.color = 'rgba(255, 255, 255, 0.85)';
        
            footer.style.opacity = '0.5';

           
        }

        else {
            if (animationTimer < 7.5) {
                mainContentSide.style.gridTemplateRows = "1fr 0fr";
                mainContentSide.style.gridTemplateColumns = "1fr";
            }
            firstCarousel.style.display = 'none';
            secondCarousel.style.display = 'none';
           
            firstCarousel.style.width = 'unset';
            secondCarousel.style.width = 'unset';
            thirdCarousel.style.width = 'unset';
            
            firstCarousel.style.height = 'unset';
            secondCarousel.style.height = 'unset';
            thirdCarousel.style.height = 'unset';
            
        }
    }

    }

    var largerDevices= window.matchMedia( "(min-width: 790px)" );
    checkDeviceWidth(largerDevices);

    largerDevices.addListener(checkDeviceWidth);

}
    
